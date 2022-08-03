import React from 'react';
// import React, { useState } from 'react';
// import Skeleton from 'react-loading-skeleton';
import './Post.css';
import { TiMessage } from 'react-icons/ti';
import moment from 'moment';
import Card from './Card';
import Comment from './Comment';

const Post = (props) => {
  const { post, onToggleComments } = props;
 
  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (post.loadingComments) {
      return (
        <div>
          {/* <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton /> */}
          <p>Skeleton goes here</p>
        </div>
      );
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <article key={post.id}>
      <Card>
      <div className="post-wrapper">
    <div className="post-main-container">
        <div className="main-details-container">

            <div className="details-author-container">
                <span className="author-section"> 
                    By: <span className="author-username">{post.author}</span>
                   {" "}{moment.unix(post.created_utc).fromNow()}
                </span>
            </div>

            <div className="details-comment-container">
                   {post.num_comments}
                    <button
                      type="button"
                      className={`icon-action-button ${
                      post.showingComments && 'showing-comments'
                      }`}
                      onClick={() => onToggleComments(post.permalink)}
                      aria-label="Show comments"
                    >
                    <TiMessage className="icon-action" />
                    </button>
                
            </div>
            
            
        </div>

        <div className="main-title-container">
            <h3 className="post-title">{post.title}</h3>
        </div>
    </div>

    <div className="post-image-container">
        <img src={post.url} alt="" className="post-image" />
    </div>

    <div className="post-comments-container">
        {renderComments()}
    </div>

</div>
            
        
      </Card>
    </article>
  );
};

export default Post