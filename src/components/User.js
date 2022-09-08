import React, { useEffect, useState } from 'react'
import Img from "../asset/img.jpg";
import {onSnapshot,doc} from 'firebase/firestore'
import {db} from '../firebase'
const User = ({user,user1,selectUser,chat}) => {
  const user2 = user?.uid
  const [data,setData] = useState('')
  useEffect(()=>{
        const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
        let unsub = onSnapshot(doc(db, "lastMsg", id),doc =>{   
          setData(doc.data())
          }
        )
        return()=>unsub()
  },[])
    return (
    <div className={`user_wrapper ${chat.name === user.name && 'selected_user'}`}onClick={() => selectUser(user)}>
        <div className='user_info'>
            <div className='user_detail'>
                <img src={user.avatar || Img} alt='avatar' className='avatar'/>
                <h4>{user.name}</h4>
            </div>
            <div
            className={`user_status ${user.isOnLine ? "online" : "offline"}`}
          ></div>
        </div>
      {data &&(
        <p className='truncate'>
         <strong>{data.from === user1 ?"Me:":null}</strong>
          {data.text}</p>
      )}
    </div> 
  )
}

export default User
