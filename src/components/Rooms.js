import React from 'react'
import Room from './UI/room/Room'

function Rooms({rooms}) {
  return (
    
      
    <div className='rooms'>
        {rooms.map(room => {
          return <Room key={room.id} room={room}/>
        })}
    </div>
  )
}

export default Rooms