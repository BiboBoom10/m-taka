import React from 'react';
import classes from './Post.module.css';
import TopNav from '../components/TopNav';
import { BiArrowBack } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { MdAddPhotoAlternate } from 'react-icons/md';


function Post() {
  return (
    <div>
        <TopNav />
        
        <div className={classes.navigate}>
            <BiArrowBack className={classes['back-button']} />
            <button className={classes['post-button']}>Post</button>
        </div>

        <div>
            <p className={classes['user-text']}><FaUserCircle className={classes['user-icon']} /> M-taka </p>
        </div>

        <div className={classes['text-box-align']}>
            <textarea className={classes['user-textbox']} rows="8" cols="43" placeholder='Write your post(Up to 500 Characters)'></textarea>
        </div>

        <div>
            <button className={classes['image-button']}> <MdAddPhotoAlternate /> Attach Photo</button>
        </div>

        <div className={classes['keyboard-area']}>
            <p>Keyboard Area</p>
        </div>

    </div>
  )
}

export default Post;