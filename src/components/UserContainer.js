import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import  Dropdown from './Dropdown'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../components/UserTypes'




function UserContainer ({ userData, fetchUsers }) {
  useEffect(() => {

    const fetchUsers = () => {
      
      return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            // response.data is the users
            const users = response.data
            dispatch(fetchUsersSuccess(users))
          })
          .catch(error => {
            // error.message is the error message
            dispatch(fetchUsersFailure(error.message))
          })
      }
    }
    

   const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}
 const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

 const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
 };
 fetchUsers() ;
  }, [])

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <Dropdown  name={user.name} />)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)

