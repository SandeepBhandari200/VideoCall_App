import React, { useState, useCallback } from 'react'
import {useNavigate} from 'react-router-dom'

const ZegoClaude = () => {

    const [value, setValue] = useState()

    const navigate = useNavigate()

    const joinRoom = useCallback(
      () => {
        navigate(`/room/${value}`)
      },
      [navigate, value],
    )
    

  return (
    <div className='bg-mist-500 w-fit m-4'>
        <input className='m-4 p-4 border-2 border-black rounded'  type="text" placeholder='Enter room id'  onChange={(e)=>{
            setValue(e.target.value)

        }} />
        <button   className='m-4 px-6 py-2 border-2 border-black bg-amber-950 text-white rounded' onClick={joinRoom}>Join</button>
      
    </div>
  )
}

export default ZegoClaude
