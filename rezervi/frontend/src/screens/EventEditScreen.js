import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {listEventDetails, updateEvent} from '../store/actions/eventActions'
import {EVENT_UPDATE_RESET} from '../store/constants/eventConstants'

const EventEditScreen = ({match, history}) => {
  const eventId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [host, setHost] = useState('')
  const [country, setCountry] = useState('')
  const [place, setPlace] = useState('')
  const [time, setTime] = useState(new Date())
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  
  const dispatch = useDispatch()

  const eventDetails = useSelector(state => state.eventDetails)
  const {loading, error, event} = eventDetails

  const eventUpdate = useSelector(state => state.eventUpdate)
  const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = eventUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({
        type: EVENT_UPDATE_RESET
      })
      history.push('/admin/productlist')
    } else {
      if (!event.name || event._id !== eventId) {
        dispatch(listEventDetails(eventId))
      } else {
        setName(event.name)
        setPrice(event.price)
        setImage(event.image)
        setHost(event.host)
        setTime(event.time)
        setCountry(event.country)
        setPlace(event.place)
        setCategory(event.category)
        setCountInStock(event.countInStock)
        setDescription(event.description)
      }
    }
  }, [event, dispatch, eventId, history, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const {data} = await axios.post('/api/upload', formData, config)
      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateEvent({
      _id: eventId,
      name,
      price,
      image,
      host,
      time,
      country,
      place,
      category,
      description,
      countInStock
    }))
  }

  return (
    <div className='edit'>
      <Link to='/admin/productlist' className='btn btn-ligth my-3'>Go Back</Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? <Loader /> : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type='name' 
                placeholder='Enter name' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control 
                type='number' 
                placeholder='Enter price' 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='image'>
            <Form.Label>Image</Form.Label>
              <Form.Control 
                type='text' 
                placeholder='Enter image url' 
                value={image} 
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control
                type='file'
                onChange={uploadFileHandler}
              ></Form.Control>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group controlId='place'>
              <Form.Label>Country</Form.Label>
              <Form.Control 
                type='text' 
                placeholder='Enter country name' 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='place'>
              <Form.Label>Place</Form.Label>
              <Form.Control 
                type='text' 
                placeholder='Enter place' 
                value={place} 
                onChange={(e) => setPlace(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='host'>
              <Form.Label>Host</Form.Label>
              <Form.Control 
                type='text' 
                placeholder='Enter host name' 
                value={host} 
                onChange={(e) => setHost(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='time'>
              <Form.Label>Time</Form.Label>
              <Form.Control 
                type='date' 
                placeholder='Enter date and time' 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control 
                type='number' 
                placeholder='Enter count in stock' 
                value={countInStock} 
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control 
                type='text' 
                placeholder='Enter category' 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type='text' 
                placeholder='Enter description' 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>Update</Button>
          </Form>
        )}
      </FormContainer>
    </div>
  )
}

export default EventEditScreen