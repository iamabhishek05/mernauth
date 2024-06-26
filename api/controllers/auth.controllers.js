
import User from '../models/user.models.js'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import { errorHandler } from '../utils/error.js'


// next is used to call the middleware
export const signup = async (req, res, next) => {

    const { username, email, password } = req.body;

    // using bcryptjs to hash the password 
    const hashedPassword = bcryptjs.hashSync(password, 10)

    // creating the user in the database
    const newUser = new User({ username, email, password: hashedPassword })


    try {
        await newUser.save();

        res.status(201).json({ message: "User saved successfully" })
    }

    catch (err) {
        next(err);
    }

};


export const signin = async (req, res, next) => {

    const { email, password } = req.body;

    try {

        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, "User not found"))

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong credentials"))

        const token = jsonwebtoken.sign(
            { id: validUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        const { password: hashedPassword, ...rest } = validUser._doc;

        res.cookie('access_token', token, { httpOnly: true }).status(200).json(validUser);

    }

    catch (err) {
        next(err);
    }

}
