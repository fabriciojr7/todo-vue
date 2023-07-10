<template>
    <div class="flex items-center justify-between gap-4 bg-slate-700 rounded-lg py-4 px-2 cursor-default">
        <div class="flex items-center gap-4">
            <img 
                src="~/assets/icons/check-circle.svg" 
                alt="check"
                class="cursor-pointer"
                v-if="isCompleted"
                @click="taskStore.toggleCompletedById(id)"
            />
            <img 
                src="~/assets/icons/circle.svg" 
                alt="circle"
                class="cursor-pointer"
                v-else
                @click="taskStore.toggleCompletedById(id)"
            />

            <p class="text-green-500">
                {{ task }}
            </p>
        </div>
        <img 
            src="~/assets/icons/trash.svg" 
            alt="Trash"
            class="cursor-pointer"
            @click="taskStore.removeTask(id)"
        />
    </div>
</template>

<script setup lang="ts">
    import { useTaskStore } from '~/store/TaskStore';
    const taskStore = useTaskStore()
    
    interface TaskItemProps {
        id: string
        task: string
        isCompleted: boolean
    }
    
    defineProps<TaskItemProps>()
</script>