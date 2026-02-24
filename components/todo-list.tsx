"use client";

import { useTodos } from "@/hooks/use-todos";
import { TodoItem } from "@/components/todo-item";
import { AddTodoForm } from "@/components/add-todo-form";
import { ListChecks } from "lucide-react";

export function TodoList() {
  const { activeTodos, completedTodos, addTodo, toggleTodo, deleteTodo, hydrated } = useTodos();
  const isEmpty = activeTodos.length === 0 && completedTodos.length === 0;

  if (!hydrated) {
    return (
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      {/* Desktop: form at top */}
      <div className="hidden md:block">
        <AddTodoForm onAdd={addTodo} />
      </div>

      {/* Todo items */}
      <div className="flex flex-1 flex-col gap-6 pb-24 md:pb-0">
        {isEmpty ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 py-12 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <ListChecks className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">No todos yet</p>
              <p className="text-sm text-muted-foreground">Add your first todo to get started</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {activeTodos.length > 0 && (
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Active ({activeTodos.length})
                </p>
                {activeTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
                ))}
              </div>
            )}

            {completedTodos.length > 0 && (
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Completed ({completedTodos.length})
                </p>
                {completedTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile: form fixed at bottom */}
      <div className="fixed inset-x-0 bottom-2 border-t border-border bg-background px-4 pb-[env(safe-area-inset-bottom,8px)] pt-3 md:hidden">
        <AddTodoForm onAdd={addTodo} />
      </div>
    </>
  );
}
