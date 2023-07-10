<template>
    <Header/>

    <main class="px-4 py-4">
      <div class="w-full max-w-[800px] m-auto">
        
        <div class="flex max-md:flex-col items-center justify-center gap-6 mb-6 px-4">
          <label class="relative">
            <input 
              v-model="taskInput"
              type="text" 
              class="h-14 w-full max-w-96 px-4 text-2xl bg-slate-800 border-2 rounded-lg
              border-zinc-100 border-opacity-50 outline-none focus:border-green-500
              transition duration-200 input-task"
            />
            <span class="text-2xl scale-75 text-white text-opacity-80 absolute left-2 -top-4
            transition duration-200 cursor-text bg-slate-800 input-text -tracking-tight">
              Task
            </span>
          </label> 

          <button class="bg-green-500 px-4 py-3 rounded-lg font-bold text-xl 
          hover:bg-opacity-80 transform duration-200"
            @click="addNewTask"
          >
            Adicionar tarefa
          </button>
        </div>

        <slot/>
      </div>
    </main>
</template>

<script setup lang="ts">
  import { useTaskStore } from '~/store/TaskStore';
  import { ref } from 'vue';

  const taskStore = useTaskStore()
  const taskInput = ref('')

  const addNewTask = () => {
    taskStore.addTask(taskInput.value)
    taskInput.value = ''
    
  }  
</script>

<style scoped>
  .input-task:focus ~ .input-text{
    color: #47b980;
  }
</style>