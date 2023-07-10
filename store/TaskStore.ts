import { defineStore } from "pinia"
import { ref } from 'vue';

interface TaskProps {
    id: string
    task: string
    isCompleted: boolean
}

export const useTaskStore = defineStore('task', () => {
    let taskList = ref<TaskProps[]>([])

    const addTask = (task: string) => {
        taskList.value.push({
            id: Math.floor(Date.now() * Math.random()).toString(36),
            task,
            isCompleted: false
        })
    }

    const removeTask = (taskId: string) => {
        taskList.value = taskList.value.filter((task) => task.id !== taskId)
    }

    const toggleCompletedById = (taskId: string) => {
        const task = taskList.value.find((task) => task.id === taskId)

        if(task){
            task.isCompleted = !task.isCompleted
        }
    }    

    return {taskList, addTask, removeTask, toggleCompletedById}
})

