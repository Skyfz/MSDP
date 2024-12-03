"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Card, CardBody } from "@nextui-org/card"
import { Checkbox } from "@nextui-org/checkbox"
import { useEffect, useState } from "react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Load tasks on initial render
  useEffect(() => {
    loadTasks()
  }, [])

  // Save tasks whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveTasks()
    }
  }, [todos])

  const loadTasks = async () => {
    try {
      const response = await fetch('/api/tasks')
      const data = await response.json()
      setTodos(data)
    } catch (error) {
      console.error('Failed to load tasks:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const saveTasks = async () => {
    try {
      await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todos),
      })
    } catch (error) {
      console.error('Failed to save tasks:', error)
    }
  }

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false,
        },
      ])
      setNewTodo("")
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading tasks...
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">
        WhatsApp API Development Tasks
      </h1>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Add new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <Button color="primary" onClick={addTodo}>
          Add
        </Button>
      </div>

      <div className="space-y-3">
        {todos.map((todo) => (
          <Card key={todo.id} className="w-full">
            <CardBody className="flex flex-row items-center gap-3">
              <Checkbox
                isSelected={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                className={`flex-grow ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
              <Button
                color="danger"
                size="sm"
                variant="light"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        {todos.length === 0 ? (
          <p>No tasks yet. Add some tasks to get started!</p>
        ) : (
          <p>
            {todos.filter((t) => t.completed).length} of {todos.length} tasks
            completed
          </p>
        )}
      </div>
    </div>
  )
}
