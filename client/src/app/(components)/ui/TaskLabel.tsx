
  interface TaskLabelProp{
    tasklabel: string;
  }
  
  const TaskLabel=({tasklabel}:TaskLabelProp)=>{
    return(
        <span className=' flex flex-row w-auto max-w-80 m-2 ml-0 rounded-full py-1 px-3 bg-blue-200  text-black'>{tasklabel}</span>
    )
  }

export default TaskLabel;