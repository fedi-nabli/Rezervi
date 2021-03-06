import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Event from '../components/Event'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {listLatestEvents} from '../store/actions/eventActions'
import EventtCarousel from '../components/EventCarousel'

function HomeScreen({match}) {
  const dispatch = useDispatch()

  const eventLatest = useSelector(state => state.eventLatest)
  const {loading, error, events} = eventLatest
  
  useEffect(() => {
    dispatch(listLatestEvents())
  }, [dispatch])
  
  return (
    <div className='event'>
      <Meta />
      <EventtCarousel />
      <h1 style={{marginTop: 50}}>Latest Events</h1> 
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
        <>
          <Row>
            {events.map((event) => (
              <Col key={event._id} sm={12} md={6} lg={4} xl={3}>
                <Event event={event} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  )
}

export default HomeScreen