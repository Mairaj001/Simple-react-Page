import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {userId}=useParams();
  return (
    <div className='w-full text-center text-orange-700 bg-gray-700 h-7'>user: {userId} </div>
  )
}

export default User