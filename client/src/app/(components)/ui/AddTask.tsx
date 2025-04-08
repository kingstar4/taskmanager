import { X } from 'lucide-react';
import React from 'react';
import { FormControl } from '@mui/material';


type AddTaskProps = {
  isOpen: boolean;
  isClosed: ()=>void;
}
const styleClass = 'w-full p-2 border border-gray-300 rounded-md mt-3';

const AddTask = ({isOpen, isClosed}:AddTaskProps) => {

  // if the Boolean "isOpen" is false the modal shouldn't open
  if (!isOpen) return null;

  return (
    <div className="items-center justify-center z-10 fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
      <div className='justify-center flex flex-col h-fit w-[400px] bg-white shadow-md rounded-lg p-5'>
          <div className="justify-between flex flex-row w-full pt-2 pb-2">
              <h1 className="text-2xl font-semibold text-black">Create New Task</h1>
              <button onClick={isClosed} className='flex items-center justify-center bg-blue-400 hover:bg-blue-600 w-7 h-7 transition-all duration-0.3s ease-in rounded-full'><X className='w-5 h-5 text-white'/></button> 
          </div>
          {/* <form className='flex flex-col gap-3 mt-5'>
              <input type="text" placeholder='Title' className={styleClass} required/>
              <textarea name="description" id="" placeholder='Description' className={styleClass} required></textarea>
              <input type="text" placeholder='Status' className={styleClass} required/>
              <span className='flex flex-row gap-3'>
                <input type="text" placeholder='Priority' className={styleClass} required/>
                <input type="text" placeholder='TaskLabel' className={styleClass}/>
              </span>
              <span className='flex flex-row gap-3 justify-between'>
                <span className='flex flex-col w-full'>
                  <label htmlFor="startDate" className='pb-2 font-bold'>Start Date</label>
                  <input type="date" id='startDate' placeholder='Start Date' className={styleClass} required/>
                </span>
                <span className='flex flex-col w-full'>
                  <label htmlFor="endDate" className='pb-2 font-bold'>End Date</label>
                  <input type="date" id='endDate' placeholder='End Date' className={styleClass} required/>
                </span>
              </span>
              <input type="file" placeholder='Upload Image' className={styleClass}/>
              <input type="text" placeholder='Assignee' className={styleClass} required/>
              <input type="text" placeholder='Assigned To' className={styleClass} required/>
              <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white p-2 font-bold rounded-md'>Create Task</button>
          </form> */}
          <FormControl>
              <input type="text" placeholder='Title' className={styleClass} required/>
              <textarea name="description" id="" placeholder='Description' className={styleClass} required></textarea>
              <input type="text" placeholder='Status' className={styleClass} required/>
              <span className='flex flex-row gap-3'>
                <input type="text" placeholder='Priority' className={styleClass} required/>
                <input type="text" placeholder='TaskLabel' className={styleClass}/>
              </span>
              <div className='flex flex-row gap-3 justify-between'>
                <span className='flex flex-col w-full mt-3'>
                  <label htmlFor="startDate" className='pb-2 font-bold'>Start Date</label>
                  <input type="date" id='startDate' placeholder='Start Date' className={styleClass} required/>
                </span>
                <span className='flex flex-col w-full mt-3'>
                  <label htmlFor="endDate" className='pb-2 font-bold'>End Date</label>
                  <input type="date" id='endDate' placeholder='End Date' className={styleClass} required/>
                </span>
              </div>
              <input type="file" placeholder='Upload Image' className={styleClass}/>
              <input type="text" placeholder='Assignee' className={styleClass} required/>
              <input type="text" placeholder='Assigned To' className={styleClass} required/>
              <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white p-2 font-bold rounded-md mt-3'>Create Task</button>
          </FormControl>
      </div>
    </div>
  )
}

export default AddTask