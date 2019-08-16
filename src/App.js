import {Route} from 'react-router-dom'
import First from './Components/first'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={First}></Route>
      </div>
    )
  }
}

export default App