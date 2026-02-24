"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Todo } from "@/hooks/use-todos"

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="group flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-3 transition-colors hover:bg-accent/50 md:px-4">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="h-5 w-5 rounded-full border-2 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
        aria-label={`Mark "${todo.title}" as ${todo.completed ? "incomplete" : "complete"}`}
      />
      <span
        className={cn(
          "flex-1 text-sm leading-relaxed transition-all",
          todo.completed && "text-muted-foreground line-through"
        )}
      >
        {todo.title}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="h-8 w-8 shrink-0 text-muted-foreground opacity-100 transition-opacity hover:text-destructive md:opacity-0 md:group-hover:opacity-100"
        aria-label={`Delete "${todo.title}"`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
