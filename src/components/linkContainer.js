import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'
import { config } from "../config"
import { addUserBankAccount } from "../actions/linkActions"
import { modalProfile } from "../actions/viewActions"
import { connect } from 'react-redux'


//TODO make into redux and grab the ID to pass back to the server to update the row in mongo
class LinkContainer extends Component {
  handleOnSuccess = (token, metadata) => {
    // send token to client server
    console.log('token to send:', token)
    this.props.addUserBankAccount(token, this.props.user._id)
    this.handleOnExit()
  }
  handleOnExit = () => {
    // handle the case when your user exits LinkContainer
    console.log('exiting..')
    this.props.modalProfile()
  }
  render() {
    console.log('user id:', this.props.user)
    return (
      <PlaidLink
        clientName="Your app name"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey={config.link.key}
        onExit={this.handleOnExit}
        onSuccess={this.handleOnSuccess}>
        Open Link and connect your bank!
      </PlaidLink>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
})
export default connect(mapStateToProps, { addUserBankAccount, modalProfile })(LinkContainer)