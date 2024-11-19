const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const { validationResult } = require('express-validator');

const hotelDir = './data';
const uploadsDir = './uploads';

// Load individual hotel data
const loadHotelData = (hotelId) => {
  const hotelFilePath = path.join(hotelDir, `${hotelId}.json`);
  if (fs.existsSync(hotelFilePath)) {
    return JSON.parse(fs.readFileSync(hotelFilePath, 'utf-8'));
  }
  return null;
};

// Save individual hotel data
const saveHotelData = (hotel) => {
  const hotelFilePath = path.join(hotelDir, `${hotel.hotel_id}.json`);
  fs.writeFileSync(hotelFilePath, JSON.stringify(hotel, null, 2));
};

// Get all hotel IDs
const getAllHotelIds = (req, res) => {
  const files = fs.readdirSync(hotelDir);
  const hotelIds = files
    .filter(file => file.endsWith('.json'))
    .map(file => file.replace('.json', ''));
  res.status(200).json(hotelIds);
};

// Add a new hotel
const addHotel = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const newHotel = req.body;
  newHotel.slug = slugify(newHotel.title, { lower: true });

  if (fs.existsSync(path.join(hotelDir, `${newHotel.hotel_id}.json`))) {
    return res.status(400).json({ error: 'Hotel ID already exists' });
  }

  saveHotelData(newHotel);
  res.status(201).json(newHotel);
};

// Get a hotel by ID or Slug
const getHotelByIdOrSlug = (req, res) => {
  const param = req.params.idOrSlug;

  // Check if the param matches a hotelId
  const hotel = loadHotelData(param);
  if (hotel) {
    return res.status(200).json(hotel);
  }

  // If not found by hotelId, check all files for a matching slug
  const files = fs.readdirSync(hotelDir);
  for (const file of files) {
    if (file.endsWith('.json')) {
      const hotelData = JSON.parse(fs.readFileSync(path.join(hotelDir, file), 'utf-8'));
      if (hotelData.slug === param) {
        return res.status(200).json(hotelData);
      }
    }
  }

  // If no match is found
  return res.status(404).json({ error: 'Hotel not found' });
};


// Update hotel data
const updateHotel = (req, res) => {
  const hotelId = req.params.hotelId;
  const hotel = loadHotelData(hotelId);
  if (!hotel) return res.status(404).json({ error: 'Hotel not found' });

  const updatedData = { ...hotel, ...req.body };
  updatedData.slug = slugify(updatedData.title, { lower: true });
  saveHotelData(updatedData);
  res.status(200).json(updatedData);
};

// Upload images
const uploadImages = (req, res) => {
  const hotelId = req.params.hotelId;
  const hotel = loadHotelData(hotelId);
  if (!hotel) return res.status(404).json({ error: 'Hotel not found' });

  req.files.forEach((file) => {
    const imageUrl = `http://localhost:3002/uploads/${file.filename}`;
    if (!hotel.images) hotel.images = [];
    hotel.images.push(imageUrl);
  });

  saveHotelData(hotel);
  res.status(200).json(hotel);
};

module.exports = {
  getAllHotelIds,
  addHotel,
  getHotelByIdOrSlug,
  updateHotel,
  uploadImages,
  saveHotelData,     
  loadHotelData      
};
