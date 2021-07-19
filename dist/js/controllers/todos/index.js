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
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../../models/todo"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find({}, { _id: 0, __v: 0 });
        //const a = await Todo.remove({})
        res.status(200).json(todos);
    }
    catch (error) {
        throw error;
    }
});
exports.getTodos = getTodos;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('addTo');
        const body = req.body;
        const todo = new todo_1.default({
            id: body.id,
            type: body.type,
            serial: body.serial,
            color: body.color
        });
        const newTodo = yield todo.save();
        //const allTodos: ITodo[] = await Todo.find()
        res.status(201).json({
            id: newTodo.id,
            type: newTodo.type,
            serial: newTodo.serial,
            color: newTodo.color
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('update');
        const { params: { id }, body, } = req;
        const updateTodo = yield todo_1.default.findOneAndUpdate({ id: id }, body, { new: true });
        //const allTodos: ITodo[] = await Todo.find()
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
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTodo = yield todo_1.default.findOneAndDelete({ id: req.params.id });
        //const allTodos: ITodo[] = await Todo.find()
        res.status(200).json({});
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTodo = deleteTodo;
