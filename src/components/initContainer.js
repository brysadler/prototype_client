import React, { Component } from 'react'
import { connect } from 'react-redux' // connects your components to the store
import { modalRegister } from "../actions/viewActions"
import LoginContainer from './loginContainer'
import RegisterContainer from './registerContainer'
import ProfileContainer from './profileContainer'
import LinkContainer from './linkContainer'

class InitContainer extends Component {
  getCurrentView = (view, user) => {
    if(view && user) {
      if ((view === 'login' || view === 'register') && Object.keys(user).length > 0) {
        console.log('should be goinng to profile')
        return <ProfileContainer/>
      }
    }

    switch (view) {
      case 'login':
        return <LoginContainer/>
      case 'register':
        return <RegisterContainer/>
      case 'profile':
        return <ProfileContainer/>
      case 'link':
        return <LinkContainer/>
      default:
        return null
    }
  }

  render () {
    const currentView = this.getCurrentView(this.props.view, this.props.user)
    return (
      currentView
    )
  }

}

const mapStateToProps = state => ({
  view: state.view.currentView,
  user: state.auth.user
})

export default connect(mapStateToProps, { modalRegister })(InitContainer)