import React from 'react';
import classes from './ProfileInfo.module.css';
import { GridLoader } from 'react-spinners';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <GridLoader />;
  }
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg"></img>
      </div>
      <div className={classes.descriptionBlock}>
        <h1>{props.profile.fullName}</h1>
        <img src={props.profile.photos.large} alt="profileImage" />
        <h4>{props.profile.aboutMe}</h4>
      </div>
    </div>
  );
};

export default ProfileInfo;
