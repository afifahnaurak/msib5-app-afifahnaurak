import { defineStore } from 'pinia'
import axios from 'axios'

export type TTodo = {
  completed: boolean
  id: number
  title: string
  userId: number
  isHovered: boolean
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
      } catch (error) {
        console.error(error);
    }
    },
    async addTodo(newTodo: TTodo) {
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          newTodo
        )
        this.todos.unshift(response.data)
      } catch (error) {
        console.error(error);
    }
    },
    async updateTodo(updatedTodo: TTodo) {
      try {
        await axios.put(
          `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
          updatedTodo
        )
      } catch (error) {
        console.error(error);
    }
    },
    async deleteTodo(todoId: number) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        this.todos = this.todos.filter(todo => todo.id !== todoId)
      } catch (error) {
        console.error(error);
    }
    },
    async clearCompletedTodos() {
      try {
        this.todos = this.todos.filter(todo => !todo.completed);
      } catch (error) {
        console.error(error);
    }
    },
  },
})
