import React from 'react'
import { topics } from '../userFiles/topics';
import './TopHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTopicThunk, selectSelectedTopic } from '../store/topicSlice';

const TopHeader = () => {
    
    const selectedTopic = useSelector(selectSelectedTopic);
    const dispatch = useDispatch();
    const handleNewTopic= (id) => {
      dispatch(
        changeTopicThunk(
          {
            id,
            url: topics[id].url,
          }
        )
      )
    }
    return (
        <div className='top-header-container'>
          <div className='topic-title-div'>
            <h2>   My Reddit   </h2>
          </div>
          <div className='topic-dropdown-div'>

            <select
                id="topic-dropdown"
                onChange={(e) => handleNewTopic(e.currentTarget.value)}
                placeholder="topic"
                className="topic-opt"
              >
              <option key='999999999' value={selectedTopic}  className="topic-opt place-holder">Your Topics Are...</option>
              {            
                  topics.map((topic) => 
                  (
                    <option key={topic.id} value={topic.id} className="topic">
                        {topic.display_name}
                      </option>
                  )
                    
              )}
            </select>
          </div>
          
        </div>
      );
}

export default TopHeader;
