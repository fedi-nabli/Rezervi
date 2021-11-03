import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {listOrders} from '../store/actions/orderActions'

function OrderListScreen({history, match}) {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const orderList = useSelector(state => state.orderList)
  const {loading, error, orders, pages, page} = orderList

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isSupervisor) {
      dispatch(listOrders(pageNumber))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, pageNumber])

  return (
    <Container>
      <h1>Orders</h1>
      {loading ? <Loader /> : error ? (
        <Message variant='danger'>{error}</Message>
      ) : orders.length > 0 ? (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0,10)}</td>
                  <td>{order.totalPrice} TND</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0,10)
                    ) : (
                      <i className='fas fa-times' style={{color: 'red'}}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0,10)
                    ) : (
                      <i className='fas fa-times' style={{color: 'red'}}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant='light' className='btn-sm'>
                        Details
                      </Button>
                    </LinkContainer>
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
      ) : (
        <Message variant='info'>You have no orders yet</Message>
      )}
    </Container>
  )
}

export default OrderListScreen
