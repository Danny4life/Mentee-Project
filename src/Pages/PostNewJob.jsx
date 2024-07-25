import React from 'react';
import JobHeader from '../components/postJob/jobHeader';
import JobBody from '../components/postJob/jobBody';
import Dropdown from '../components/postJob/DropDown';


const PostNewJob = () => {
  return (
    <div>
        <JobHeader/>
        <JobBody/>
        <Dropdown/>
    </div>
  )
}

export default PostNewJob