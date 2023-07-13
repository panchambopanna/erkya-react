import React from "react";
import { FiEdit2, FiLinkedin, FiTwitter } from "react-icons/fi";
import "./Profile.css";

const Profile = () => {
  return (
    <main className="profile_container">
      <div className="profile_cover">
        <div className="profile_cover_prompt">
          <button className="prompt_heading">Upload Cover Image</button>
        </div>
      </div>
      <section className="profile_wrap">
        <aside className="profile_info_container">
          <div className="avatar_container">
            <div className="profile_user">
              <img
                className="profile-image"
                src="https://i.pravatar.cc/100"
                alt=""
              />{" "}
            </div>
          </div>
          <h1 className="profile_username"> Karthik Arya</h1>
          <div className="profile_user_profession">
            <p className="user_profession">Photographer</p>
            <p className="photography_niches">Portrait, Wedding</p>
          </div>
          <div className="profile_user_contacts">
            <span>
              <a href="mailto:aryakarthik13@gmail.com">
                {" "}
                aryakarthik13@gmail.com{" "}
              </a>
            </span>
            <span>
              <a href="tel:+919035403530"> 9035403530 </a>
            </span>
          </div>

          <div className="socialmedia_container">
            <div className="socialmedia_links">
              <div className="social_items">
                <a
                  href="https://twitter.com/aryakarthik"
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icons">
                    {" "}
                    <FiTwitter />{" "}
                  </span>
                  <span className="labels">Twitter</span>
                </a>
              </div>

              <div className="social_items">
                <a
                  href="https://www.linkedin.com/in/karthik-b-m-6710257a/"
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icons">
                    {" "}
                    <FiLinkedin />{" "}
                  </span>
                  <span className="labels">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="profile_edit_container">
            <div className="profile_edit_button">
              <span className="profile_edit_icon">
                <FiEdit2 />
              </span>
              <span className="profile_edit_label">Edit Profile</span>
            </div>
          </div>
        </aside>
        <section className="profile_content">
          <ul className="profile_nav">
            <li className="profile_tabs">
              <a href="/">Work</a>
            </li>
            <li className="profile_tabs">
              <a href="/">Insights</a>
            </li>
          </ul>
          <div className="profiletabs_container"></div>
        </section>
      </section>
    </main>
  );
};

export default Profile;
