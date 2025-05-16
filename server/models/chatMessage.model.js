import mongoose from "mongoose";
const mongoose = require('mongoose');


const ChatMessageSchema = new mongoose.Schema({
    chatId: {
        type: String,
        required: true,
        index: true
    },
    sender: {
        type: String,
        enum: ['user', 'bot'],
        required: true
    },
    type: {
        type: String,
        enum: ['text', 'image', 'file'],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: function () {
            return this.type === 'file';
        }
    },
    mimeType: {
        type: String,
        required: function () {
            return this.type === 'file' || this.type === 'image';
        }
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
