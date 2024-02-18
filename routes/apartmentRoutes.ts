import express from 'express';
import ApartmentController from '../controllers/apartmentController';

export const setupApartmentRoutes = (app: express.Application) => {
  // API endpoint for adding apartments
  app.post('/apartments', ApartmentController.addApartment);

  // API endpoint for listing apartments
  app.get('/apartments', ApartmentController.listApartments);

  // API endpoint for getting apartment details
  app.get('/getapartment/:id', ApartmentController.getApartmentDetails);
};
