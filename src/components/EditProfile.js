import React from 'react'
import { Link } from 'react-router-dom';
import profilePic from "../images/profilePic.jpg";

const editProfile = ({userInfo, setUserInfo}) => {
    const {firstName, lastName, position, age, about} = userInfo

    function handleInfoChange(event){
        setUserInfo(oldInfo => ({...oldInfo, [event.target.name] : event.target.value}))
    }


    return (
        <section className="profile">
            <img src={profilePic} className="profile-pic" alt='profile pic'/>
            <div className='edit-info'>
                <div className="name-input-wrapper">
                    <label htmlFor="firstName"></label>
                    <input 
                        value={firstName} 
                        name="firstName"
                        className='name firstname-input'
                        onChange={handleInfoChange} 
                        placeholder="Last Name"
                    />
                    <label htmlFor="lastName"></label>
                    <input 
                        value={lastName} 
                        name="lastName"
                        className='name lastname-input'
                        onChange={handleInfoChange} 
                        placeholder="Last Name"
                    />
                </div>
                <label htmlFor="position"></label>
                <input 
                    value={position} 
                    name="position"
                    className='pos'
                    onChange={handleInfoChange} 
                    placeholder="Position"
                />
                <label htmlFor="age"></label>
                <input 
                    value={age} 
                    name="age" 
                    className='age'
                    onChange={handleInfoChange} 
                    placeholder="Age" 
                />
            </div>
            <div className='about'>
                <label htmlFor="about"><h3>About</h3></label>
                <textarea value={about} id="about" name='about' onChange={handleInfoChange} placeholder="Tell us about you..."/>
            </div>
            <Link to="/profile" className='button-wrapper'>
                <button className='save-profile'>Save Profile</button>
            </Link>
        </section>
    )
}

export default editProfile;