
import React from 'react';

type ButtonProps = {
    text: string;
    icon?: React.ReactNode;
}

const Button = ({text, icon}: ButtonProps) => {
  return (
    <button className='flex w-auto px-2 gap-2 text-white items-center bg-blue-600 rounded-md hover:bg-blue-700 transition text-md font-bold'>
       {icon} {text}
    </button>
  )
}

export default Button