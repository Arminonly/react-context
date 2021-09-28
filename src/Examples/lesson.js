import React, { Component, Fragment } from 'react'
import { Button } from 'reactstrap'

const LevelThree = () => (
  <LevelContext.Consumer>
    {({ name, lastname, click, color, text }) => (
      <Fragment>
        <h5>{name} </h5>
        <h5>{lastname} </h5>
        <Button onClick={click} color={color}>
          {text}{' '}
        </Button>
      </Fragment>
    )}
  </LevelContext.Consumer>
)

const LevelTwo = () => <LevelThree />
const LevelOne = () => <LevelTwo />

const LevelContext = React.createContext()

export default class Lesson extends Component {
  state = {
    name: 'Tom',
    greet: function () {
      return 'hello ' + this.name
    },
  }
  render() {
    return (
      <div>
        Lesson page
        <LevelContext.Provider
          value={{
            name: 'Alex',
            text: 'Press me',
            color: 'danger',
            lastName: 'Smith',
            click: () => alert(this.state.greet()),
          }}
        >
          <LevelOne />
        </LevelContext.Provider>
      </div>
    )
  }
}
