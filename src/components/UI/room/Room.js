import React from 'react';
import './Room.scss'

function Room({room}) {
  return (
    <div  className="room">{room.name}</div>
  )
}

export default Room