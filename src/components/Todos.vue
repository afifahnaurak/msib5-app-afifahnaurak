<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useTodoStore, TTodo } from '../store/todo.store'
  
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
  import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  
  const todoStore = useTodoStore()
  
  const newTodoTitle = ref('')
  const filter = ref('all')
  
  onMounted(async () => {
    await todoStore.fetchTodoList()
  })
  
  const addTodo = async () => {
    if (newTodoTitle.value.trim() !== '') {
      const newTodo = {
        completed: false,
        id: Date.now(),
        title: newTodoTitle.value,
        userId: 1,
        isHovered: false,
      }
  
      await todoStore.addTodo(newTodo)
  
      newTodoTitle.value = ''
    }
  }

  const validateAddTodo = async () => {
    if (newTodoTitle.value.trim() === '') {
      alert('Please fill title!');
    } else {
      await addTodo();
    }
  }
  
  const remainingItemCount = computed(() => {
    return todoStore.todos.filter(todo => !todo.completed).length
  })
  
  const filteredTodos = computed(() => {
    if (filter.value === 'active') {
      return todoStore.todos.filter(todo => !todo.completed)
    } else if (filter.value === 'completed') {
      return todoStore.todos.filter(todo => todo.completed)
    } else {
      return todoStore.todos
    }
  })
  
  const deleteTodo = async (todo: TTodo) => {
  await todoStore.deleteTodo(todo.id)
}

  
</script>

<template>
    <div class="w-10/12 text-base mx-auto my-4">
      <h1 class="font-poppins font-thin text-8xl text-center my-7">
        Todos
      </h1>
      <form @submit.prevent="validateAddTodo" class="input-container">
        <div class="relative flex items-center">
            <span class="w-5 h-5 absolute ml-4 mb-1 icon-pencil pointer-events-none">
          <font-awesome-icon :icon="faPencilAlt" />
        </span>
        <input
          v-model="newTodoTitle"
          placeholder="What needs to be done"
          class="font-poppins w-full pl-10 py-5 border rounded text-2xl bg-white text-black"
          @keydown.enter.prevent="validateAddTodo"
        />
        </div>
      </form>
      <div class="flex items-center justify-between py-4 font-poppins">
        <div>
          {{ remainingItemCount }} Item Left
        </div>
        <div>
            <button class="font-poppins rounded-lg mx-1 w-16 h-10 button1" @click="filter = 'all'" :class="{ 'border': filter === 'all' }">All</button>
            <button class="font-poppins rounded-lg mx-1 w-24 h-10 button1" @click="filter = 'active'" :class="{ 'border': filter === 'active' }">Active</button>
            <button class="font-poppins rounded-lg mx-1 w-32 h-10 button1" @click="filter = 'completed'" :class="{ 'border': filter === 'completed' }">Completed</button>
        </div>
        <div>
            <button class="font-poppins rounded-lg mx-2" @click="todoStore.clearCompletedTodos">Clear Completed</button>
        </div>
      </div>
      <div>
        <ul>
            <li
            v-for="todo in filteredTodos"
            :key="todo.id"
            class="box-border bg-zinc-800 w-full py-10 px-6 my-2 border-transparent rounded shadow-lg"
            @mouseenter="todo.isHovered = true"
            @mouseleave="todo.isHovered = false"
            >
            <div class="flex items-center justify-between">
              <label class="flex items-center font-poppins text-2xl">
              <input type="checkbox" v-model="todo.completed" class="form-checkbox h-5 w-5 mr-4" />
              <span :class="{ 'line-through': todo.completed }">{{ todo.title }}</span>
              </label>
              <div class="delete-icon" @click="deleteTodo(todo)" v-if="todo.isHovered">
              <font-awesome-icon :icon="faTrashAlt" />
              </div>
            </div>
            </li>
        </ul>
      </div>
    </div>
</template>
  
<style scoped>
.input-container input {
  background-color: white;
  color: black;
}
  
li {
  background-color: #3B3B3B;
}

::placeholder{
    color: #757575;
}
.button1 {
  background-color: #1A1A1A;
}

.icon-pencil {
  color: #757575;
}
.delete-icon {
  cursor: pointer;
  color: rgb(239, 103, 103);
  transition: color 0.2s ease;
}

.delete-icon:hover {
  color: rgb(159, 24, 24);
}

li:hover .delete-icon {
  display: block;
}
</style>
  