import React from 'react'
import { ListGroup } from 'react-bootstrap'

const EditProfile = () => {
  return (
    <div className='d-flex w-75 mx-auto gap-3 mt-4'>
        <div className="nav-tabs">
        <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
        </div>
        <div className="edit-container">
            Right section
        </div>
    </div>
  )
}

export default EditProfile