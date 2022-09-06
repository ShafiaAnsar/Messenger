import React,{useEffect,useState} from 'react'
import {db,auth} from '../firebase'
import {collection,query,where,onSnapshot} from 'firebase/firestore'
import User from '../components/User'
const Home = () => {
  const [users,setUsers] = useState([])
  const [chat,setChat] = useState('')
  useEffect(()=>{
  const userRef = collection(db,'users')
  //create query
  const q =query(userRef,where('uid','not-in',[auth.currentUser.uid]))
  //execute query
  const unsub = onSnapshot(q,querySnapshot=>{
    let users=[]
    querySnapshot.forEach(doc=>{
      users.push(doc.data())
    })
    setUsers(users)
  }) 
  return ()=>unsub()
 },[])
 const selectUser =(user)=>{
  console.log(user)
  setChat(user)
 }
  return (
    <div className='home_container'>
      <div className='users_container'>
        {users.map(user =><User key={user.uid} user={user} selectUser={selectUser}
        />
       )}
      </div>
      <div className='messages_container'>
        {chat ? 
        <div className='message_user'>
          <h3>{chat.name}</h3>

        </div>:
        <h3 className='no_conv'>Select a user to start conversation</h3>
         }
      </div>
    </div>
  )
}

export default Home
