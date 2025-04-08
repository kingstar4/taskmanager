import React from 'react'

type Props = {
    text: string;
    buttonComponent?: React.ReactNode;
    isSmallText?: boolean;
};
// For the text header
const Header = ({text, buttonComponent, isSmallText= false}: Props) => {
  return (
    <div className='mb-5 flex w-auto items-center justify-between'>
        <h1 className={`${isSmallText ? 'text-lg' : 'text-2xl'} font-semibold dark:text-white`}>
            {text}
        </h1> 
        {buttonComponent}
    </div>
  )
}

export default Header;