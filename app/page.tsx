import { TodoList } from "@/components/todo-list";
import { ThemeToggle } from "@/components/theme-toggle";
import { CheckSquare } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="flex items-center justify-between border-b border-border bg-card px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-5 w-5 text-primary" />
          <span className="text-lg font-semibold text-foreground">Todos</span>
        </div>
        <ThemeToggle />
      </header>
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-6 px-4 py-6 md:py-8">
        <TodoList />
      </main>
    </div>
  );
}
