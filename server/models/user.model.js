import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
        index: true
    },

    hashedPassword: {
        type: String,
        required: true
    },

    isAccountVerified: {
        type: Boolean,
        required: true,
        default: false
    },

    verificationOTP: {
        type: String,
        default: ""
    },

    verificationOTPExpiresAt: {
        type: Date,
        default: null
    },

    resetOTP: {
        type: String,
        default: ""
    },

    resetOTPExpiresAt: {
        type: Date,
        default: null
    },

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;
