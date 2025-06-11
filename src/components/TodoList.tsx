import React from "react";
import Todo from "./Todo";
import { Button } from "./ui/button";

//mappa ut array staten som erhåller texten från input
interface TodoListProps {
  todoItems: string[];
  onRemoveTodo: (index: number) => void;
  setTodoItems: React.Dispatch<React.SetStateAction<string[]>>;
  onClearAll: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoItems,
  onRemoveTodo,
  onClearAll,
}) => {
  if (todoItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-[#8A898C]">
        <p className="mb-2 text-lg">No tasks yet</p>
        <p className="text-sm">Add a new task to get started</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex w-full flex-col gap-2">
        {todoItems.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} onRemove={onRemoveTodo} />
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={onClearAll}
          variant="outline"
          className="border-[#333333] bg-transparent text-[#8A898C] hover:bg-[#333333] hover:text-white"
        >
          Clear all ({todoItems.length})
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
