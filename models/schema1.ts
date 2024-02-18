import mongoose from 'mongoose'
// import shortid from 'shortid';
const Schema=mongoose.Schema;
//schema defines the structure of the document, the model surrounds it and provides interface to communicate with the db
const schema1=new Schema({//this object describes the structure of the docs stored in the collection
    name: {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    address:{
        type:String, 
        required:true,
    },
    city:{
        type:String, 
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    imgUrls: {
        type: [String], // Array of Strings (image URLs)
        required: false,
      },
      additionalFees:{
        type:String,
        required:true,
    },
    applicationFee:{
        type:String,
        required:true,
    },
    leaseTerms:{
        type:String,
        required:true,
    },
    parkingDetails:{
        type:String,
        required:true,
    },
    storageDetails:{
        type:String,
        required:true,
    },
    depositFee:{
        type:String,
        required:true,
    },
    bedrooms:{
        type:Number,
        required:true,
    },
    guests:{
        type:Number,
        required:true,
    },
}, );

const Apartment = mongoose.model('Apartment',schema1) //this is a model that has to have the same name as your collection without the pluralization blog=>blogs
//second argument is the schema that you created to base the model of
// module.exports(Blog);
export default Apartment;