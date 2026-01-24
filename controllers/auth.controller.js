import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export const signUp = async(req, res, next) =>{
    //signup function logic implementation
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
        const { name, email, password } = req.body;

        // Check if a user already exists
        const existingUser = await User.findOne({ email });

        if(existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        await session.commitTransaction();
    }catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}
export const signIn= async(req,res, next)=>{
    //signin function logic implementation
}
export const signOut= async(req,res,next)=>{
    //signout function logic implementation
}