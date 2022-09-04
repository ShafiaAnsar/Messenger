import React from 'react'
import { Link } from 'react-router-dom'
import {auth,db} from '../../firebase'
import {signOut} from 'firebase/auth'
import {updateDoc,doc} from 'firebase/firestore'
const Navbar = () => {
  const handleSignOut= async()=>{
    await updateDoc(doc(db,'users', auth.currentUser.uid),{
      isOnlineTrue:false
    })
    await signOut(auth)
}
return (
    <nav>
      <h3>
        <Link to='/'>Messenger</Link>
      </h3>
      <div>
        {auth.currentUser?(
        <>
        <Link to='/profile'>Profile</Link>
        <button className='btn' onClick={handleSignOut}>Logout</button>
        </>):(<>
        <Link to ='/register'>Register</Link>
        <Link to='/login' >Login</Link></>)
        } 
      </div>


    </nav>
  )
}

export default Navbar
