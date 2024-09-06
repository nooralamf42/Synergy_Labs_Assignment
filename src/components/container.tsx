import React from 'react'

type containerPropsType = {
    children : React.ReactNode,
    className? : String
}
function Container({children, className=''}:containerPropsType) {
  return (
    <section className={`container mx-auto mt-4 px-4 ${className}`}>
        {children}
    </section>
  )
}

export default Container