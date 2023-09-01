import { defineStore } from 'pinia'
import axios from 'axios'

export type TTodo = {
  completed: boolean
  id: number
  title: string
  userId: number
  isHovered: boolean // New property for hover state
}

export const useTodoStore = defineStore('todo', {
  state: (): {
    todos: TTodo[]
    filter: 'all' | 'active' | 'completed'
  } => ({ 
    todos: [],
    filter: 'all',
  }),
    
  actions: {
    async fetchTodoList() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        )

        this.todos = response.data.map((todo: TTodo) => ({ ...todo, isHovered: false }))
      } catch (_) {
        //
      }
    },
    async addTodo(newTodo: TTodo) {
      try {
        this.todos.unshift(newTodo)
      } catch (_) {
        //
      }
    },
    async clearCompletedTodos() {
      try {
        this.todos = this.todos.filter(todo => !todo.completed);
      } catch (_) {
        //
      }
    },
    async deleteTodo(todoId: number) {
      try {
        this.todos = this.todos.filter(todo => todo.id !== todoId)
      } catch (_) {
        //
      }
    },
  },
})
