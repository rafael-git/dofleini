import React from 'react';
import './index.css';

import user1 from '../../../../assets/img/user-5.jpg';
import user2 from '../../../../assets/img/user-3.jpg';
import share from  '../../../../assets/img/share.png';
import { Link } from 'react-router-dom';

const Share = () => {
  return (
    <div className='share-container'>
        <div className='user-container'>
            <div className='users-img'>
                <img className='img' src={user1} alt='user'/>
                <img className='img' src={user2} alt='user'/>
            </div>
            <div className='users-text'>
                <span className='font collaboratos'>Collaborators</span>
                <Link className='font team-link' to='/'>View your team</Link>
            </div>
        </div> 
        <div className='share-arrow'>
            <div className='arrow-img'>
                <img src={share} alt='share'/>
            </div>
            
            <span className='share-text'>Share</span>
        </div>          
    </div>
  )
}

export default Share