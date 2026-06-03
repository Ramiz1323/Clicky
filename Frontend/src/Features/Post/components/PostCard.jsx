import React from "react";
import "../style/PostCard.scss";

const PostCard = ({ 
  post, 
}) => {
  const { caption, imgUrl, user } = post;
  const { fullname, username, profileImage } = user ;

  return (
    <article className="post-card">
      {/* Header */}
      <header className="post-header">
        <div className="post-author-info">
          <img
            src={profileImage}
            alt={fullname}
            className="author-avatar"
          />
          <div className="author-details">
            <h3 className="author-name">{fullname}</h3>
            <p className="post-meta">
              @{username} • time pore lagabo
            </p>
          </div>
        </div>
        <button className="menu-btn" aria-label="More options">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
        </button>
      </header>

      <div className="post-image-wrapper">
        <img
          src={imgUrl}
          alt="Post content"
          className="post-image"
          loading="lazy"
        />
      </div>

      <footer className="post-footer">
        <div className="interaction-bar">
          <div className="left-interactions">
            <button
              className={`action-btn like-btn`}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heart-outline">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            <button className="action-btn comment-btn" aria-label="Comment">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>

            <button className="action-btn share-btn" aria-label="Share">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>

          <button
            className="action-btn bookmark-btn"
            aria-label="Bookmark post"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>

        <div className="likes-display">
          <span>0 likes</span>
        </div>

        <div className="post-caption-section">
          <p className="caption-text">
            <span className="caption-username">{username}</span>{" "}
            {caption}
          </p>
        </div>
      </footer>
    </article>
  );
};

export default PostCard;
