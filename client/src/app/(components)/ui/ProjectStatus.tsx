import { useAppSelector,RootState, useAppDispatch } from "@/app/redux";
import { setIsOpen } from "@/state";
import { MoreVertical, Plus } from "lucide-react";
import AddTask from "./AddTask";



const colorObj:Record <string, string>={
    blue:' before:bg-blue-500',
    green:' before:bg-green-500',
    orange:' before:bg-orange-500',
    black:' before:bg-black',
  }
  
  interface StatusProp{
    text: string;
    color: keyof typeof colorObj;
  }
  
  const ProjectStatus = ({text,color}:StatusProp) => {
    const dispatch = useAppDispatch();
    const taskStatuses = useAppSelector((state: RootState) => state.global.tasks) || [];
    const isOpen = useAppSelector((state)=>state.global.isOpen);

    const count = taskStatuses.reduce((acc, task) => (task.status === text ? acc + 1 : acc), 0);
  
  
    return (
      
        <div className={`flex flex-row items-center justify-between shadow-sm bg-gray-100 dark:bg-[#1a1a1a] mb-5 text-white rounded-l-xl ${colorObj[color]} before:rounded-l-lg before:absolute before:w-2 before:h-12 before:content-[''] before:justify-start before:items-start`}>
          {/* Left Side */}
          <div className="flex items-center gap-2 pt-3 pb-3 pl-8">
            {/* <div className="bg-blue-500 rounded-full"></div> */}
            <span className="text-lg text-black dark:text-white font-medium">{text}</span>
            <span className="bg-gray-700 text-white text-sm px-2 py-0.5 rounded-full">
              {count}
            </span>
          </div>
    
          {/* Right Side */}
          <div className="flex items-center gap-2 p-3">
            <MoreVertical className="w-5 h-5 cursor-pointer text-gray-400 hover:text-white" />
            <button onClick={()=>dispatch(setIsOpen(!isOpen)) }className="p-1 bg-gray-700 hover:bg-gray-600 rounded-md">
              <Plus className="w-5 h-5 text-white" />
            </button>

            {isOpen ? null : <AddTask isOpen={isOpen} isClosed={()=>dispatch(setIsOpen(!isOpen))}/> }
            
          </div>
        </div>
    )
  }


  export default ProjectStatus;