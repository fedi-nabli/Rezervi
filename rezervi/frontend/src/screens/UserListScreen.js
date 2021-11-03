import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {listUsers, deleteUser} from '../store/actions/userActions'

function UserListScreen({history, match}) {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const userList = useSelector(state => state.userList)
  const {loading, error, users, pages, page} = userList

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const userDelete = useSelector(state => state.userDelete)
  const {success: successDelete} = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers(pageNumber))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, successDelete, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
    }
  } 

  return (
    <Container>
      <h1>Users</h1>
      {loading ? <Loader /> : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>SUPERVISOR</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isSupervisor ? (
                      <i className='fas fa-check' style={{color: 'green'}}></i>
                    ) : (
                      <i className='fas fa-times' style={{color: 'red'}}></i>
                    )}
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <i className='fas fa-check' style={{color: 'green'}}></i>
                    ) : (
                      <i className='fas fa-times' style={{color: 'red'}}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(user._id)}  
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate
            pages={pages}
            page={page}
            isAdmin={userInfo.isAdmin}
            isSupervisor={userInfo.isSupervisor}
          />
        </>
      )}
    </Container>
  )
}

export default UserListScreen
