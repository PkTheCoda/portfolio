import React from 'react'
import ReactMarkdown from 'react-markdown'

const Learn = () => {
  return (
    <div className='bg-red-100 p-10 font-outfit'>
        <ReactMarkdown>
            this is     *italic* and this is **bold**
            
            # title 1
        </ReactMarkdown>
    </div>
  )
}

export default Learn