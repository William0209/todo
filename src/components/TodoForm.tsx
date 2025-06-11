"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TodoFormProps {
  onAddTodo: (todo: string) => void;
}
const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim().length > 0) {
      onAddTodo(newTodo.trim());
    }
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 w-full">
      <div
        className={cn(
          "flex gap-2 rounded-md border border-[#333333] bg-[#0A0A0A] p-1 transition-all",
          isFocused && "border-[#FF3B30]"
        )}
      >
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Add a new task..."
          className="border-none bg-transparent text-white placeholder:text-todo-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          type="submit"
          disabled={!newTodo.trim()}
          className="bg-[#FF3B30] text-white hover:bg-red-600"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
