
import React from 'react'
import Cart from './Cart'
import { useState } from 'react'

const Header = (props) => {


  return (
    <header>
      <a href="/"><h1>MouseHeavan</h1></a>
      {props.children}
    </header>
  )
}

export default Header