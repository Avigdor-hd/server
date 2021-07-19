"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const phoneSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('Phone', phoneSchema);
