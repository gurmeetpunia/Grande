import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  let sizeClass;

  switch (size) {
    case 'sm':
      sizeClass = 'text-sm';
      break;
    case 'md':
      sizeClass = 'text-base';
      break;
    case 'lg':
      sizeClass = 'text-lg';
      break;
    case 'xl':
      sizeClass = 'text-xl';
      break;
    default:
      sizeClass = 'text-base';
  }

  return (
    <div
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius}}
      className={`${sizeClass} p-3 hover:drop-shadow-xl`}
      >
      {text}
    </div>
  )
}

export default Button