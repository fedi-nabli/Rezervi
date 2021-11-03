import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'
import {listEventDetails, craeteEventReview} from '../store/actions/eventActions'
import {EVENT_CREATE_REVIEW_RESET} from '../store/constants/eventConstants'

function EventScreen({history, match}) {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  
  const dispatch = useDispatch()

  const eventDetails = useSelector((state) => state.eventDetails)
  const {loading, error, event} =  eventDetails

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} =  userLogin

  const eventCreateReview = useSelector((state) => state.eventCreateReview)
  const {success: successEventReview, error: errorEventReview} =  eventCreateReview
  
  useEffect(() => {
    if (successEventReview) {
      alert('Review Submitted')
      setRating(0)
      setComment('')
      dispatch({ type: EVENT_CREATE_REVIEW_RESET })
    }
    dispatch(listEventDetails(match.params.id))
  }, [dispatch, match, successEventReview])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(craeteEventReview(match.params.id, {
      rating,
      comment
    }))
  }
  
  return (
    <div className='event'>
      <Link className="btn btn-light my-3" to="/events">
        Go Back
      </Link>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
        <>
          <Meta
            title={event.name}
          />
          <Row>
            <Col md={6}>
              <Image src={event.image} alt={event.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{event.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating value={event.rating} text={`${event.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                  Place: {event.country}, {event.place}
                </ListGroup.Item>
                <ListGroup.Item>
                  Time: {event.time}
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: ${event.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: {event.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        Price:
                      </Col>
                      <Col>
                        <strong>{event.price} TND</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        Status:
                      </Col>
                      <Col>
                        {event.countInStock > 0 ? 'In stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {event.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                            {
                              [...Array(event.countInStock).keys()].map(x => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))
                            }
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block" 
                      type="button" 
                      disabled={event.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {event.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {event.reviews.map(review => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0,10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {errorEventReview && <Message variant='danger'>{errorEventReview}</Message>}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
                          <option value=''>Select...</option>    
                          <option value='1'>1 - Poor</option>   
                          <option value='2'>2 - Fair</option>   
                          <option value='3'>3 - Good</option>   
                          <option value='4'>4 - Very Good</option>   
                          <option value='5'>5 - Excellent</option>   
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          rows={3}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        type='submit'
                        variant='primary'
                      >Submit</Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default EventScreen