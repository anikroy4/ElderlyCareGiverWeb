import React from 'react'

const Container = ({className,children }) => {
  return (
    <>
        <div className={`max-w-[1250px] bg-red-400 mx-auto ${className}`}>{children}</div>
    
    </>
  )
}

export default Container