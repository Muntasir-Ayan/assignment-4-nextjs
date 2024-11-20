# Hotel Booking Application

This project is a full-stack hotel booking application built with modern web technologies.

## Features

**Frontend**: Built using Next.js, TypeScript, and Jest for unit testing. <br>
    - **Dynamic Response**: Data will show Dynamically In every page.<br>
    - **Region Selection**: User can select region, based on region currency will changed, use can aslo change currency menually.<br>
    - **Sharing Option**: user can share through socail media(not implemented), Just link copy implemented.<br>
    - **Saving Option**: User can save, using save button clicking.<br>
    - **Image View**: User can see more images.<br>
    - **Travelers Count**: User can set travelers numbers and can travel with pets or without pet also.<br>
    - **Room Listings**: Showcase different room types with images, prices, and descriptions.<br>
    - **Amenities Section**: Lists the hotel’s amenities like Kitchen, Dryer, Parking, washer and outdoor  facilities.<br>
    - **Booking Form**: Allows users to submit booking inquiries with their contact details.<br>
    - **Cross-browser Compatibility**: Works well on all major browsers including Chrome, Firefox, Safari, and Edge.<br>
    
**Backend**: Developed using Node.js, Express.js, and Jest for backend testing.<br>
    - **RESTful Endpoints**: CRUD operations for hotel data management.<br>
    - **Image Upload**: Image upload functionality using Multer.<br>
    - **Validation**: Input validation for POST and PUT requests with Express Validator.<br>
    - **Slug Generation**: Automatic slug generation for hotel titles.<br>
    - **Unit Testing**: Comprehensive testing with Jest and Supertest.<br>
    - **Modular Structure**: Clear separation of routes, controllers, and validation logic.<br>
    - **Static File Serving**: Serves uploaded images as static files.<br>

## Technologies Used

### Frontend
- **Framework**: Next.js
- **Language**: TypeScript
- **Testing**: Jest

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: JavaScript
- **Testing**: Jest

---
## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Muntasir-Ayan/assignment-4-nextjs.git
   cd assignment-4-nextjs

2. Navigate to the Frontend:
    ```bash
    cd client
    npm install
    ```
3. Navigate to the the Backend:
    ```bash
    cd server
    npm install
    ```

## Client (Frontend)

make sure you are in client directory
  ```bash
    cd client
 ```
run the development server:
 ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
 ```
 
The frontend will be available at [http://localhost:3000].

 For testing:
  ```bash
  npm test
  #   or
  npm test -- --coverage
```


## Server (Backend)

make sure you are in server directory
 ```bash
    cd server
 ```
run the server:
 ```bash
    nodemon start
 ```
for testing:
 ```bash
  npm test
  #   or
  npm test -- --coverage
 ```

### Folder Structure
- **Client**: <br>
    ├── app         <br>
    │   └── css <br>
    │   └── fonts <br>
    │   └── styles <br>
    │   └── page.tsx <br>
    │   └── layout.tsx <br>
    │   └── globals.css <br>
    │   └── hotel-details <br>
    ├── components     <br>
    │   └── __tests__ <br>
    │   └── other_components.tsx <br>
    ├── public     <br>
    └── package.json <br>

- **Server**: <br>
    ├── controllers          # Controllers for handling API requests <br>
    │   └── hotelController.js <br>
    ├── data                 # Data storage (individual hotel files stored as JSON) <br>
    ├── middleware           # Validation middleware <br>
    │   └── validation.js <br>
    ├── routes               # Routing logic <br>
    │   └── hotelRoutes.js <br>
    ├── uploads              # Directory for uploaded images <br>
    ├── app.js               # Main application file <br>
    ├── app.js               # Main server file <br>
    └── setupExpressApp.js   # Script for setting up the project structure <br>
    └── package.json <br>
### To Navigate Dynamically
    - client server and backend server should be running in different port
- **To Navigate otherpage**:[http://localhost:3000/hotel-details/{slug}/{hotel-id}]
### Server Api Endpoints
  -  GET /hotels: Retrieve all hotel IDs.
  -  POST /hotel: Add a new hotel.
  -  GET /hotel/: Get hotel details by ID.
  -  PUT /hotel/: Update hotel information.
  -  POST /images/: Upload images for a hotel.
  <br>more idea will get on "file.txt"

### Server Validation Rules
- hotel_id: Required, unique for each hotel.
- title: Required.
- guest_count: Must be an integer greater than or equal to 1.
- slug: auto-generated from the title.

### Error Handling
    Each endpoint includes comprehensive error handling, returning appropriate HTTP status codes and error messages:

    400 Bad Request: Invalid or missing data fields.
    404 Not Found: Hotel not found for given ID.
    500 Internal Server Error: Server-side issues.