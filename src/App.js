import './App.css'
import React from 'react'
import Toolbar from './Examples/toolBar'
import Lesson from './Examples/lesson'
import MainContent from './useContext/mainContext'
import MyContext from './useContext/context'
import MainComponent from './Examples/component/mainComponent'

export default function App() {
  const sayHi = () => alert('Say hi')
  const goodBye = () => alert('Say good bye')
  const firstComponent = () => alert('firstComponent buton pressed')
  const secondComponent = () => alert('secondComponent buton pressed')
  return (
    <MyContext.Provider
      value={{
        firstComponent,
        secondComponent,
        sayHi,
        goodBye,
        text:"Component A text",
        info:{
          name:'Tom',
          age:40
        },
        color:{
          first:'success',
          second:'info'
        }
      }}
    >
      <div className="App">
        <h3>React Context Example</h3>
        <hr />
        <Toolbar theme="warning" />
        <hr />
        <Lesson />
        <hr />
        <MainContent />
        <hr />
        <MainComponent/>
      </div>
    </MyContext.Provider>
  )
}
