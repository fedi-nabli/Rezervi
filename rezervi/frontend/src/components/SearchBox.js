import React, {useState} from 'react'
import {Form, Button, InputGroup} from 'react-bootstrap'

const SearchBox = ({history}) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/events')
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <InputGroup>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Events...'
          className='mr-sm-2 ml-sm-5'
        ></Form.Control>
        <Button
          type='submit'
          variant='outline-success'
          className='p-2'
        >Search</Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBox
