import mongoose from 'mongoose';

const { Schema } = mongoose;

let userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,

            required: true,
        },
    },
    { timestamps: true }
);
