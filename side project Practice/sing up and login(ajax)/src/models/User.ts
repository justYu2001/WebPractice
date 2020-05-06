import mongoose from 'mongoose';

export type UserDocument = mongoose.Document & {
    name: String,
    password: String
};

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

export const User = mongoose.model<UserDocument>('User',userSchema);