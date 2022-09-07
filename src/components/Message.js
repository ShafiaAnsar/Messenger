import React from 'react'
import Moment from 'react-moment'
const Message = ({msg}) => {
  return (
    <div className='message_wrapper'>
      <p>{
        msg.media?<img src={msg.media} alt={msg.text}/>:null
        }
        {msg.text}
        <br/>
        <small><Moment fromNow={msg.createdAt.toDate()}></Moment> </small>
        </p>
    </div>
  )
}

export default Message
