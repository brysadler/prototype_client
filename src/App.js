import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Background from './components/background'
import LoginContainer from './components/loginContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Background/>
      </Provider>
    )
  }
}

export default App
