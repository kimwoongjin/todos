"use client";

import { useState, useEffect, useCallback } from "react";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
}

const STORAGE_KEY = "todos";

function loadTodos(): Todo[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Todo[]) : [];
  } catch {
    return [];
  }
}

function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setTodos(loadTodos());
    setHydrated(true);
  }, []);

  const persist = useCallback((next: Todo[]) => {
    setTodos(next);
    saveTodos(next);
  }, []);

  const addTodo = useCallback(
    (title: string) => {
      const todo: Todo = {
        id: crypto.randomUUID(),
        title,
        completed: false,
        created_at: new Date().toISOString(),
      };
      persist([todo, ...todos]);
    },
    [todos, persist],
  );

  const toggleTodo = useCallback(
    (id: string) => {
      persist(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    },
    [todos, persist],
  );

  const deleteTodo = useCallback(
    (id: string) => {
      persist(todos.filter((t) => t.id !== id));
    },
    [todos, persist],
  );

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  return { todos, activeTodos, completedTodos, addTodo, toggleTodo, deleteTodo, hydrated };
}
