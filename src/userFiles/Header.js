import React from 'react'
import './Header.css';
import { topics } from '../userFiles/topics';
import { useSelector } from 'react-redux';
import { selectSelectedTopic } from '../store/topicSlice';
    
    

const Header = () => {
  const selectedTopic = useSelector(selectSelectedTopic);
  const { header, subHeader } = topics[selectedTopic]

    return (
    <div className='header-container'> 
         <div className='header-title'>
           <h1 className="beer-span">{header}</h1>
           <h2 className="hop-span">{subHeader}</h2> 
        </div>            
    </div>
  )
}

export default Header
