import express from 'express';
import { setupApartmentRoutes } from './routes/apartmentRoutes';
import cors from 'cors'
export const setupServer = (app: express.Application) => {
  // Serve static files from 'public' directory
  app.use(express.static('public'));

  //open CORS cross origin resource sharing
//   -by default browsers turn off sharing between different origins unless backend has appropriate cors headers
  app.use(cors());


  // Body parser middleware to parse JSON
  app.use(express.json());

  // Set up routes
  setupApartmentRoutes(app);

  // Default route for serving the index.html file
};
