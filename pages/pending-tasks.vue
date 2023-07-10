<template>
    <div class="flex flex-col gap-2">
        <TaskItem  
            :id="task.id"
            :task="task.task" 
            :isCompleted="task.isCompleted" 
            v-for="task in taskList" :key="task.id"/>                  
    </div>
</template>

<script setup lang="ts">
    import { useTaskStore } from '~/store/TaskStore';
    import { computed } from 'vue';
    const taskStore = useTaskStore()
    
    const taskList = computed(() => taskStore.taskList.filter((task) => !task.isCompleted))
</script>