// app.ts
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { setupServer } from './server';
import dotenv from 'dotenv';
dotenv.config();
//TODO Pagination server side 
import  Apartment from './models/schema1'; // Importing the model

const app = express();
const port = 3000;
const dbURI = "mongodb+srv://seifshehata99:test123@cluster0.eowm19o.mongodb.net/dbtest1?retryWrites=true&w=majority";

// Connect to MongoDB
if (!process.env.dbURI){
    console.log("dbURI doesnt exist");
    process.exit(); // this condition is added so that dbURI is not null, and typescript doesnt complain
}

mongoose.connect(process.env.dbURI)
.then(() => {
    setupServer(app);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
// mongoose.connect(dbURI)
// .then((result) => app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// }))
// .catch((err) => console.log(err));

