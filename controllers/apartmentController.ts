import { Request, Response } from 'express';
import Apartment from '../models/schema1';
import { FilterQuery } from 'mongoose';
 const addApartment = (req: Request, res: Response) => {
  // Destructure request body
  const { name,
    description,
    address,
    city,
    price,
    imgUrls,
    additionalFees,
    applicationFee,
    leaseTerms,
    parkingDetails,
    storageDetails,
    depositFee,
    bedrooms,
    guests,
   } = req.body;

  // Create a new apartment instance
  const newApartment = new Apartment({
    name,
    description,
    address,
    city,
    price,
    imgUrls,
    additionalFees,
    applicationFee,
    leaseTerms,
    parkingDetails,
    storageDetails,
    depositFee,
    bedrooms,
    guests,
  });

  // Save the new apartment to the database
  newApartment.save()
      .then((result) => {
          // Respond with the saved apartment
          res.status(201).json(result);
      })
      .catch((err) => {
          console.log(err);
          // Respond with an error if save fails
          res.status(500).json({ error: 'Internal Server Error' });
      });};

      export const listApartments = (req: Request, res: Response) => {
        // Parse the page parameter from the request query
        const page = parseInt(req.query.page as string) || 1;
        const pageSize = 10; // Adjust the page size as needed
    
        // Calculate the skip value based on the page and page size
        const skip = (page - 1) * pageSize;
    
        // Find apartments in the database with pagination
        Apartment.find()
            .skip(skip)
            .limit(pageSize)
            .then(async (result) => {
                // Fetch the total count of apartments
                const totalCount = await Apartment.countDocuments();
    
                // Respond with the list of apartments, total count, and current page
                res.json({
                    data: result,
                    totalCount,
                    currentPage: page,
                    totalPages: Math.ceil(totalCount / pageSize),
                });
            })
            .catch((err) => {
                console.log(err);
                // Respond with an error if find fails
                res.status(500).json({ error: 'Internal Server Error' });
            });
    };


   const getApartmentDetails = (req: Request, res: Response) => {
    // Extract apartment ID from request parameters
    const apartmentId = req.params.id;
  
  
    // Find apartment by ID in the database
    Apartment.findById(apartmentId)
      .then((result) => {
        // Respond with the found apartment or 404 if not found
        if (result) {
          res.json(result);
        } else {
          res.status(404).json({ error: 'Apartment not found' });
        }
      })
      .catch((err) => {
        console.log(err);
        // Respond with an error if find fails
        res.status(500).json({ error: 'Internal Server Error' });
      });
  };
const ApartmentController = {
  addApartment,
  getApartmentDetails,
  listApartments
} 
export default ApartmentController