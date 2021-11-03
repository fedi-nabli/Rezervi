import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Event({event}) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/event/${event._id}`}>
        <Card.Img src={event.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/event/${event._id}`}>
          <Card.Title as="div">
            <strong>{event.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating 
            value={event.rating} 
            text={`${event.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="p">{event.time}</Card.Text>
        <Card.Text as="p">{event.country}, {event.place}</Card.Text>
        <Card.Text as="h3">{event.price} TND</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Event
