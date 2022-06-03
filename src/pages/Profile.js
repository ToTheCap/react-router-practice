import React from 'react'
import { Link } from 'react-router-dom';
import profilePic from "../images/profilePic.jpg";
import EditProfile from '../components/EditProfile';

const Profile = ({userInfo}) => {
    const {firstName, lastName, position, age, about} = userInfo
    console.log("Profile Refreshed");
    return (
        <section className="profile">
            <img src={profilePic} className="profile-pic" alt='profile pic'/>
            <div className='info'>
                <h2 className='name'>{firstName} {lastName}</h2>
                <p className='pos'>{position}</p>
                <p className='age'>{age} years old</p>
            </div>
            <div className='about'>
                <h3>About</h3>
                <p>{about}</p>
            </div>
            <Link to="edit-profile" className='button-wrapper'>
                <button className='edit-profile'>Edit Profile</button>
            </Link>
        </section>
    )
}

export default Profile;