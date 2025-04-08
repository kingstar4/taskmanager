import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TaskBoxProps, StatusType, Priority } from '@/utils/types';
import tasks from "@/data/task";
  
// Declearing the types for global state
export interface  initialStaTypes{
    isSidebarCollapsed : boolean;
    isDarkMode: boolean;
    tasks: TaskBoxProps[];
    isOpen:boolean;
}

// Assigning State
const initialState: initialStaTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
  tasks: tasks.map((task) => ({ ...task, status: "To Do" as StatusType, priority: task.priority as Priority })),
  isOpen:false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state, action: PayloadAction<boolean>)=>{
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode:(state, action: PayloadAction<boolean>)=>{
            state.isDarkMode = action.payload;
        },
        moveTask: (state, action: PayloadAction<{ taskId: string; newStatus: StatusType }>) => {
            const task = state.tasks.find((t) => t.id === action.payload.taskId);
            if (task){

              if(task.status!== action.payload.newStatus){
                
                console.log(`Updating task ${task.id} status from ${task.status} to ${action.payload.newStatus}`);
                
                task.status = action.payload.newStatus;
                
              }else {
                console.log(`Task ${task.id} is already in ${task.status}, no update needed`);
              }

          }else{
            console.log("task not found");
          }
        },
        setIsOpen:(state, action: PayloadAction<boolean>)=>{
            state.isOpen=action.payload;
        }
  },
})

export const {setIsSidebarCollapsed, setIsDarkMode, moveTask, setIsOpen} = globalSlice.actions;
export default globalSlice.reducer;