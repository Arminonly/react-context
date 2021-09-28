import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import MyContext from '../../useContext/context'

export default function SecondComponent() {
  const { secondComponent, color } = useContext(MyContext)
  return (
    <div>
    <p>SecondComponent Page</p>
      
      <Button color={color.second} onClick={secondComponent}>
        SecondComponent Page
      </Button>
    </div>
  )
}
