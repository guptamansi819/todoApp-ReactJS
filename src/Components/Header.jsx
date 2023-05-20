import React from 'react'

const Header = () => {
    const style ={
        display : 'flex',
        backgroundColor :'#66023C',
        justifyContent:'center',
        height: '8vh',
        alignItems:'center',
        color:'whitesmoke',
        font:'200 1.2rem cursive'
      }
  return (
    <div style={style}>
      <h1 >Get ready to complete your daily goals</h1>
    </div>
  )
}

export default Header
