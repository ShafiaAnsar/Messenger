import React from 'react'
import Camera from '../components/svg/Camera'
const Profile = () => {
  return (
    <section>
    <div className='profile_container'>
      <div className='img_container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCbJoUCRscGfzySEtqoR5HtHnEOE0ux4r-A&usqp=CAU' alt='img' />
        <div className='overlay'>
            <div>
                <label htmlFor='photo'>
                    <Camera/>
                </label>
                <input type='file' accept='image/*' style={{display:'none'}} id='photo'/>
            </div>
        </div>
      </div>
      <div className='text_container-profile'>
        <h3>User Name</h3>
        <p> User Email</p>
        <hr/>
        <small>Joined on : ...</small>
      </div>
    </div>
    </section>
  )
}

export default Profile
