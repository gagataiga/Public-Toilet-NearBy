import React from 'react'
import { TagProps } from './types'

const Tag = ({tagKey,label,isSelected,onToggle}:TagProps) => {
  return (
    <div className='tag'>
      <button type="button"
      onClick={() => onToggle(tagKey)}
      style={{
        backgroundColor: isSelected ? 'blue' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        margin: '5px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
    </div>
  )
}

export default Tag
