import React from 'react';

type TabButtonProps = {
    text: string;
    icon: React.ReactNode;
    activeTab: string;
    setActiveTab: (tabName:string)=> void;
}

const TabButton = ({text, icon, activeTab, setActiveTab}: TabButtonProps) => {
    const isActive= activeTab === text;
  return (
    <button className={`relative flex items-center gap-2 px-1 py-5 transition-all ease-in duration-300 font-bold text-gray-500 after:absolute after:bottom-[4px] after:left-0 after:h-[2px] after:w-full dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 ${isActive ? " after:bg-blue-600 after:rounded-lg dark:text-white" : ""}`}
    onClick={()=>setActiveTab(text)}
    >
        {icon}
        {text}
    </button>
  )
}

export default TabButton;