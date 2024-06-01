import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.routes.js'
import authRoute from './routes/auth.routes.js'
import cors from 'cors'


// configuration of environment variables
dotenv.config();


// giving the properties of express to the app
const app = express();

const PORT = 3000;


// cors initialization
app.use(cors(
    {
        origin: '*',
        credentials: true,

    }
));

// to handle the json data , as we cannot get the json data directly from the server
app.use(express.json());


// connecting with the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });




// initialising the routes for user and auth , this means : /api/user/anything(register,login)
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);


// middleware for error 
app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({

        success: false,
        message,
        statusCode

    });
});
