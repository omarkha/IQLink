import React from "react";
import my_picture from "../assets/mypicture.jpg";
import { MdInsertPhoto } from "react-icons/md";
import Post from "../components/Post";
const HomePageFeed = () => {
  return (
    <div className="home-page-feed">
      <div className="start-a-post">
        <div className="start-a-post-top">
          <div
            style={{ backgroundImage: `url(${my_picture})` }}
            className="start-a-post-profile-picture"
          ></div>
          <textarea placeholder="Write a post..."></textarea>
        </div>

        <div className="start-a-post-bottom">
          <ul>
            <li>
              <MdInsertPhoto /> Photo
            </li>
            <li>
              <MdInsertPhoto /> Video
            </li>
          </ul>
        </div>
      </div>
      <section className="feed-posts">
        <Post />
        <Post />
        <Post />
      </section>
    </div>
  );
};

export default HomePageFeed;
