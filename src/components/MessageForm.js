import React from 'react'
import Upload from './svg/Upload'

const MessageForm = ({handleSubmit,text,setText}) => {
  return (
    <form className='message_form' onSubmit={handleSubmit}>
        <label htmlFor='img'><Upload/></label>
        <input type='file' id='img' accept='image/*' style={{display:'none'}}/>
      <div>
        <input type='text' placeholder='Enter message' value={text} onChange={e => setText(e.target.value)} className='input'/>
      </div>
      <div>
        <button className='btn'>Send</button>
      </div>
    </form >
  )
}

export default MessageForm
