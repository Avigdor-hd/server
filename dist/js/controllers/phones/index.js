"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePhone = exports.updatePhone = exports.addPhone = exports.getPhones = void 0;
const phone_1 = __importDefault(require("../../models/phone"));
const getPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const phones = yield phone_1.default.find({}, { _id: 0, __v: 0 });
        res.status(200).json(phones);
    }
    catch (error) {
        throw error;
    }
});
exports.getPhones = getPhones;
const addPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const phone = new phone_1.default({
            id: body.id,
            type: body.type,
            serial: body.serial,
            color: body.color
        });
        const newPhone = yield phone.save();
        res.status(201).json({
            id: newPhone.id,
            type: newPhone.type,
            serial: newPhone.serial,
            color: newPhone.color
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addPhone = addPhone;
const updatePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatePhone = yield phone_1.default.findOneAndUpdate({ id: id }, body, { new: true });
        res.status(200).json({
            id: body.id,
            type: body.type,
            serial: body.serial,
            color: body.color
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updatePhone = updatePhone;
const deletePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPhone = yield phone_1.default.findOneAndDelete({ id: req.params.id });
        res.status(200).json({});
    }
    catch (error) {
        throw error;
    }
});
exports.deletePhone = deletePhone;
