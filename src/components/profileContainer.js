import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import Button from './button'

class ProfileContainer extends Component {

  linkUser = () => {
    this.props.linkAccount()
  }
  render () {
    return (
      <Fragment>
        <p>This is where we link our back account</p>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <p>{this.props.dob}</p>
        <Button
          text='Click to Link Account'
          onClick={this.linkUser}
        />
      </Fragment>
    )
  }

}

const mapStateToProps = state => ({
  name: state.auth.user.name,
  email: state.auth.user.email,
  dob: state.auth.user.dob
})

export default connect(mapStateToProps)(ProfileContainer)