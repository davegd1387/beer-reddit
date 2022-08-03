import React, { useState, useEffect } from 'react'
import { HiOutlineSearch } from 'react-icons/hi';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubreddit, selectSelectedSubreddit, setSearchTerm } from '../store/redditSlice';
import { selectSubreddits } from '../store/subRedditSlice';
import  { selectSelectedTopic } from '../store/topicSlice';

const SearchBar = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const subreddits = useSelector(selectSubreddits);
    const selectedTopic = useSelector(selectSelectedTopic);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);
    
    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };
    return (
        <div className='search-bar'>
          <div className="search-title-div">
            <p >Posts for <span>{selectedSubreddit}</span></p>
          </div>
          <div className='subreddit-dropdown-div'>

            <select
                id="subreddit-dropdown"
                onChange={(e) => dispatch(setSelectedSubreddit(e.currentTarget.value))}
                placeholder="subreddit"
                className="subreddit-opt place-holder"
            >
              <option key='999999999' value={selectedSubreddit}  className="subreddit-opt place-holder">Your Subreddits Are...</option>
              {            
                  subreddits[selectedTopic].map((subreddit) => 
                  (
                      <option key={subreddit.id} value={subreddit.url} className="subreddit-opt">
                        {subreddit.display_name}
                      </option>
                  )
                    
              )}
            </select>
          </div>
          <div className="search-form-div">
            <form className="search-form" onSubmit={onSearchTermSubmit}>
              
              
              <input
                type="text"
                placeholder="Search"
                value={searchTermLocal}
                onChange={onSearchTermChange}
                aria-label="Search posts"
              />
              <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                <HiOutlineSearch />
              </button>
              
            </form>
          </div>
        </div>
      );
}

export default SearchBar
