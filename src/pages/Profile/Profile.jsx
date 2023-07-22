import React from "react";
import "./Profile.css";
import ProfileContent from "./ProfileContent";
import ProfileFloater from "./ProfileFloater";

const Profile = () => {
  return (
    <main className="profile_container">
      <div className="profile_cover">
        <div className="profile_cover_prompt">
          <button className="prompt_heading">Upload Cover Image</button>
        </div>
      </div>
      <section className="profile_wrap">
        <ProfileFloater/>
        <section className="profile_content">
          <ProfileContent />
        </section>
      </section>
    </main>
  );
};

export default Profile;
