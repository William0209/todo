import React, { useState } from "react";
import { Check, Trash } from "lucide-react";
import { cn } from "@/lib/utils";

interface TodoProps {
  todo: string;
  index: number;
  onRemove: (index: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, index, onRemove }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group flex items-center gap-3 rounded-md border border-[#333333] bg-[#0A0A0A] p-3 transition-all",
        isCompleted && "border-opacity-50 bg-opacity-50"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => setIsCompleted(!isCompleted)}
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#333333] transition-all hover:border[#FF3B30]",
          isCompleted && "border[#FF3B30] bg[#FF3B30]"
        )}
        aria-label={`Mark todo as ${
          isCompleted ? "incomplete" : "complete"
        }: ${todo}`}
      >
        {isCompleted && <Check size={14} className="text-white" />}
      </button>

      <span
        className={cn(
          "flex-1 text-left font-medium text-white transition-all",
          isCompleted && "text-[#8A898C] line-through"
        )}
      >
        {todo}
      </span>

      <button
        onClick={() => onRemove(index)}
        className={cn(
          "text-[#8A898C] opacity-0 transition-opacity hover:text-[#FF3B30] group-hover:opacity-100",
          isHovered && "opacity-100"
        )}
        aria-label={`Remove todo: ${todo}`}
      >
        <Trash size={16} />
      </button>
    </div>
  );
};

export default Todo;
