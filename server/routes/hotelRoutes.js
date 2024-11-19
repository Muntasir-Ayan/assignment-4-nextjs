const express = require('express');
const multer = require('multer');
const {
  getAllHotelIds,
  addHotel,
  getHotelByIdOrSlug ,
  updateHotel,
  getAllHotels,
  uploadImages
} = require('../controllers/hotelController');
const { hotelValidation } = require('../middleware/validation');

const router = express.Router();
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

router.get('/hotels/id', getAllHotelIds);
router.post('/hotel', hotelValidation, addHotel);
router.get('/hotel/:idOrSlug', getHotelByIdOrSlug );
router.put('/hotel/:hotelId', hotelValidation, updateHotel);
router.post('/images/:hotelId', upload.array('images', 10), uploadImages);
router.get('/hotels', getAllHotels);

module.exports = router;
