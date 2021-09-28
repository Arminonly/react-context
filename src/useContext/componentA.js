import React, {useContext}  from 'react'
import {Button} from 'reactstrap'
import MyContext from './context'

export default function ComponentA() {
    const {sayHi,goodBye, text, info} = useContext(MyContext)

  return <div>
  <p><Button color = 'success' onClick={sayHi}>Hi</Button></p>
  <h6>This is a {text} </h6>
  <div>
      <h6>{info.name} </h6>
      <h6>{info.age} </h6>
  </div>
  <p><Button color = 'danger' onClick={goodBye}>Good-bye</Button></p>
            
            
  </div>
}
