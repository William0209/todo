"use client";

import React, { useState } from "react";
import { CheckCircle2Icon, Trash } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showClearAllAlert, setShowClearAllAlert] = useState(false);

  const handleAddTodo = (newTodo: string) => {
    setTodoItems([...todoItems, newTodo]);

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  interface RemoveTodoHandler {
    (index: number): void;
  }

  const handleRemoveTodo: RemoveTodoHandler = (index) => {
    setTodoItems(todoItems.filter((_, i) => i !== index));

    setShowDeleteAlert(true);

    setTimeout(() => {
      setShowDeleteAlert(false);
    }, 3000);
  };

  const handleClearAll = () => {
    setTodoItems([]); // Clear all todos

    setShowClearAllAlert(true);

    setTimeout(() => {
      setShowClearAllAlert(false);
    }, 3000);
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center px-4 py-8 sm:max-w-lg md:max-w-xl">
      {/* Add Alert */}
      {showAlert && (
        <Alert className="fixed top-4 right-4 w-auto z-50 animate-in slide-in-from-right duration-300 bg-[#0A0A0A] text-white border-[#333333]">
          <CheckCircle2Icon />
          <AlertTitle>Success! Your Todo has been added</AlertTitle>
        </Alert>
      )}
      {/* Delete Alert */}
      {showDeleteAlert && (
        <Alert className="fixed top-4 right-4 w-auto z-50 animate-in slide-in-from-right duration-300 bg-[#0A0A0A] text-white border-[#FF3B30]">
          <Trash />
          <AlertTitle>Your todo has been deleted</AlertTitle>
        </Alert>
      )}
      {/* Clear All Alert */}
      {showClearAllAlert && (
        <Alert className="fixed top-4 right-4 w-auto z-50 animate-in slide-in-from-right duration-300 bg-[#0A0A0A] text-white border-[#FF3B30]">
          <Trash />
          <AlertTitle>You have deleted all todos</AlertTitle>
        </Alert>
      )}

      <div className="mb-8 flex flex-col items-center">
        <h1 className="mb-2 text-3xl font-bold text-white">Todo List</h1>
        <p className="text-[#8A898C]">Keep track of your tasks</p>
      </div>

      <div className="w-full rounded-lg border border-[#333333] bg-[#121212] p-4 shadow-md sm:p-6">
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todoItems={todoItems}
          onRemoveTodo={handleRemoveTodo}
          setTodoItems={setTodoItems}
          onClearAll={handleClearAll}
        />
      </div>
    </div>
  );
};

export default TodoWrapper;
