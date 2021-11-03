import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Event from '../components/Event'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import {listEvents} from '../store/actions/eventActions'

function EventsScreen({match}) {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  
  const dispatch = useDispatch()

  const eventList = useSelector(state => state.eventList)
  const {loading, error, events, pages, page} = eventList
  
  useEffect(() => {
    dispatch(listEvents(keyword, '', '', pageNumber))
  }, [dispatch, keyword, pageNumber])
  
  return (
    <div className='event'>
      <Meta
        title='Events'
      />
      <h1>All Events</h1> 
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
        <>
          <Row>
            {events.map((event) => (
              <Col key={event._id} sm={12} md={6} lg={4} xl={3}>
                <Event event={event} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </div>
  )
}

export default EventsScreen