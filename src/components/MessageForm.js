import React from 'react'
import Upload from './svg/Upload'

const MessageForm = () => {
  return (
    <form className='message_form'>
        <label htmlFor='img'><Upload/></label>
        <input type='file' id='img' accept='image/*' style={{display:'none'}}/>
      <div>
        <input type='text' placeholder='Enter message' className='input'/>
      </div>
      <div>
        <button className='btn'>Send</button>
      </div>
    </form >
  )
}

export default MessageForm
