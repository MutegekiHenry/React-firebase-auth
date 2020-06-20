import React, { Component } from 'react'
import firebase from 'firebase'
import { withRouter } from 'react-router-dom'
class Home extends Component {
    componentDidMount() {
        // firebase.auth().currentUser.getIdToken()
        //     .then(idToken => {
        //         localStorage.setItem('token' , idToken)
        //     })
        //     .catch(e => console.log(e))
    }
    render() {
        console.log(this.props)
        console.log(localStorage.getItem("token"))
        return (
            <div>
                Home
            </div>
        )
    }
}
export default withRouter(Home)