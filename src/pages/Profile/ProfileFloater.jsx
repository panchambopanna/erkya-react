import React from "react";
import { FiEdit2, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileFloater = (props) => {
  const {open} = props;

  const navigate = useNavigate();

  return (
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
        <div className="user_profession">Photographer</div>
        <div className="photography_niches">Portrait, Wedding</div>
      </div>
      <div className="profile_user_contacts">
        <span>
          <a href="mailto:aryakarthik13@gmail.com"> aryakarthik13@gmail.com </a>
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
                <FiTwitter />
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
                <FiLinkedin />{" "}
              </span>
              <span className="labels">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="profile_edit_container" onClick={()=>navigate('/karthikarya/edit')}>
        <div className="profile_edit_button">
          <span className="profile_edit_icon">
            <FiEdit2 />
          </span>
          <span className="profile_edit_label" >Edit Profile</span>
        </div>
      </div>
    </aside>
  );
};

export default ProfileFloater;
