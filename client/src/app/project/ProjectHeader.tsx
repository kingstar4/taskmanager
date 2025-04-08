"use client"

import React from 'react'
import Header from '../(components)/Header';
import TabButton from '../(components)/ui/TabButton';
import { Clock4, Filter, Grid3X3, List, Share2, SquarePlus, Table} from 'lucide-react';
import Button from '../(components)/ui/Button';
// import Display from '../(components)/ui/Display';

type Props = {
    activeTab: string;
    setActiveTab: (tabName: string) => void
};

const ProjectHeader = ({activeTab, setActiveTab}: Props) => {
    // const [isModalNewTakOpen, setIsModalNewTakenOpen] = useState(false);
    const viewTypes = [
        {
          icon: <Grid3X3 className='h-5 w-5'/>,
          name: "Board",
        },
        {
          icon: <List className='h-5 w-5'/>,
          name: "List",
        },
        {
          icon: <Clock4 className='h-5 w-5'/>,
          name: "Timeline",
        },
        {
          icon: <Table className='h-5 w-5'/>,
          name: "Table",
        },
      ];
  return (
    <div className="px-4 xl:px-6">

        <div className="pb-6 pt-6 lg:pt-8 flex justify-between">
            <Header text="Product Design Development"/>
            <Button text='New Boards' icon={<SquarePlus className='w-5' />}/>
            {/* <Display/> */}
        </div>

        {/* TABS */}
        <div className="flex flex-wrap-reverse gap-2 border-gray-200 pb-[8px] pt-2 dark:border-text">
           <div className="flex flex-1 items-center gap-2 md:gap-4">
                {viewTypes.map((item)=>(
                    <TabButton key={item.name} text={item.name} icon={item.icon} setActiveTab={setActiveTab} activeTab={activeTab} />
                ))}
    
            </div>
            <div className="flex items-center gap-2">
                <button className='text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300'>
                   <Filter className='h-5 w-5'/> 
                </button>
                <button className='text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300'>
                   <Share2 className='h-5 w-5'/> 
                </button>
                <div className="relative">
                    <input type='text' placeholder='Search Task' className='rounded-md border py-1 pl-10 pr-4 focus:outline dark:border-dark-secondary dark:bg-dark-secondary dark:text-white'/>
                    <Grid3X3 className='absolute left-3 top-2 h-4 w-4 text-gray-400 dark:text-neutral-500'/>
                </div>

            </div> 
        </div>
       
    </div>
  )
}

export default ProjectHeader;