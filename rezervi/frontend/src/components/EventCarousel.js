import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Carousel, Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import {listLatestEvents} from '../store/actions/eventActions'

function ProductCarousel() {
  const dispatch = useDispatch()

  const eventLatest = useSelector(state => state.eventLatest)
  const {loading, error, events} = eventLatest

  useEffect(() => {
    dispatch(listLatestEvents())
  }, [dispatch])

  return loading ? <Loader /> : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
    <div>
      <Carousel pause='hover' className='bg-dark'>
        {events.map(event => (
          <Carousel.Item key={event._id}>
            <Link to={`/event/${event._id}`}>
              <Image src={event.image} alt={event.name} />
              <Carousel.Caption className='carousel-caption'>
                <h2>New This Month</h2>
                <p>Explore our newest Events</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default ProductCarousel
