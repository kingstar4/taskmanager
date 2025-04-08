"use client";
import React from 'react';
import { useAppSelector,RootState} from "../../redux";
import ImgComponent from '../ui/ImgComponent';


// type Props = {}

const List = () => {
  const taskStatuses = useAppSelector((state: RootState)=> state.global.tasks) || [];
 
  return (
    <div className=" justify-center flex flex-col ">
      <div className="flex">
        <span className='text-black dark:text-white ml-5 text-xl text-start font-semibold p-3'>List</span>
        
      </div>
      
      
        <div className='w-full flex flex-wrap'>
          {taskStatuses.length>0? taskStatuses.map((item, id)=>(
              <div key={id} className="bg-white dark:bg-black text-dark-bg dark:text-white shadow-md m-3 p-5 w-[400px] rounded-lg  h-auto">
                {item.src && (<ImgComponent alt='pic'  src={item.src as string} width={300} height={300} imgClass='rounded-t-lg w-full h- auto' />)}
                <div className="mt-5">
                  <p><span className='font-bold '>Id:</span> {item.id}</p>
                  <p><span className='font-bold'>Description:</span> {item.description}</p>
                  <p><span className='font-bold'>Status:</span> {item.status}</p>
                  <p><span className='font-bold'>Priority:</span> {item.priority}</p>
                  <p><span className='font-bold'>Label1:</span> {item.tasklabel}</p>
                  <p><span className='font-bold'>Label2:</span> {item.tasklabel2}</p>
                  <p><span className='font-bold'>StartDate:</span> {item.startDate}</p>
                  <p><span className='font-bold'>EndDate:</span> {item.endDate}</p>
                </div>
              </div>
              ))
              : 
              <p className='text-center items-center justify-center'> No task Available</p>
              }
        </div>
      </div>
  )
}

export default List;