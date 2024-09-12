import mongoose from 'mongoose';
import { SubTodo } from './sub_todo.model';

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,

  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: SubTodo
    }
  ]//Array of Subtodos

}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);
