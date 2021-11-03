import React, {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {listEvents, deleteEvent} from '../store/actions/eventActions'
import {EVENT_CREATE_RESET} from '../store/constants/eventConstants'

function EventListScreen({history, match}) {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const eventList = useSelector(state => state.eventList)
  const {loading, error, events, pages, page} = eventList

  const eventDelete = useSelector(state => state.eventDelete)
  const {loading: loadingDelete, error: errorDelete, success: successDelete} = eventDelete

  const eventCreate = useSelector(state => state.eventCreate)
  const {loading: loadingCreate, error: errorCreate, success: successCreate, event: createdEvent} = eventCreate

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    dispatch({
      type: EVENT_CREATE_RESET
    })
    if (!userInfo.isSupervisor) {
      history.push('/login')
    }
    if (successCreate) {
      history.push(`/supervisor/event/${createdEvent._id}/edit`)
    } else {
      dispatch(listEvents('', '', '', pageNumber))
    }
  }, [dispatch, history, userInfo, successDelete, successCreate, createdEvent, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteEvent(id))
    }
  }

  const createEventHandler = () => {
    history.push(userInfo.isAdmin ? `/admin/event/create` : `/supervisor/event/create`)
  }

  return (
    <Container>
      <Row className='align-items-center'>
        <Col>
          <h1>Events</h1>
        </Col>
        <Col className='text-right'>
          <Button
            className='my-3'
            onClick={createEventHandler}
          >
            <i className='fas fa-plus'></i> Create Event
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? <Loader /> : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>HOST</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>PLACE</th>
                <th>REGION</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event._id}>
                  <td>{event._id}</td>
                  <td>{event.name}</td>
                  <td>{event.host}</td>
                  <td>{event.price} TND</td>
                  <td>{event.category}</td>
                  <td>{event.country}</td>
                  <td>{event.place}</td>
                  <td>
                    <LinkContainer to={userInfo.isAdmin ? `/admin/event/${event._id}/edit` : `/supervisor/event/${event._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(event._id)}  
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
            isAdmin={true}
          />
        </>
      )}
    </Container>
  )
}

export default EventListScreen
