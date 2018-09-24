import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import Button from './button'
import { addUserBankAccount } from '../actions/linkActions'
import { modalLink } from "../actions/viewActions"

class ProfileContainer extends Component {

  linkUser = () => {
    console.log('linking user..')
    this.props.modalLink()
  }

  createTransactionList = (json) => {
    return (
      <Fragment>
        <h2>Transactions</h2>
        <ol>
          {typeof json === 'object' ? json.map((item) => (
            <li
              key={item.transaction_id}
            >
              <p>{`Amount: $${item.amount}`}</p>
              <p>{`Date: ${item.date}`}</p>
              <p>{`Location: ${item.name}`}</p>
            </li>
          )) : <h2>Service Unavailable</h2>}
        </ol>
      </Fragment>
    )
  }

  getCurrent = (current) => {
    return (
      <Fragment>
        <h2>Current</h2>
        <h3>{`$${current}`}</h3>
        <h4>Note* we'll only charge you when this number hits $5.00!</h4>
      </Fragment>
    )
  }

  render () {
    console.log(this.props.user)
    return (
      <Fragment>
        <h1>{`Welcome back ${this.props.user.firstName}!`}</h1>
        {/*<p>{this.props.user.email}</p>*/}
        {/*<p>{this.props.user.dob}</p>*/}
        {this.getCurrent(this.props.user.current)}
        {this.createTransactionList(this.props.user['0'])}
        <button
          onClick={this.linkUser}
        >Click to Link Account'</button>
      </Fragment>
    )
  }

}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { addUserBankAccount, modalLink })(ProfileContainer)