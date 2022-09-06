import React from 'react'
import Img from "../asset/img.jpg";

const User = ({user}) => {
  return (
    <div className='user_wrapper'>
        <div className='user_info'>
            <div className='user_detail'>
                <img src={user.avatar || Img} alt='avatar' className='avatar'/>
                <h4>{user.name}</h4>
            </div>
            <div
            className={`user_status ${user.isOnLine ? "online" : "offline"}`}
          ></div>
        </div>
      
    </div>
  )
}

export default User
