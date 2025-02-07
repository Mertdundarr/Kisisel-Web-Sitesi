import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ProfileSection.css";

const ProfileSection = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const { profile, aboutMe } = profileData;

  return (
    <section className="profile-section">
      <h2 className="profile-main-title">Profil</h2>
      <div className="profile-grid">
        {/* Profile Details */}
        <div className="profile-details">
  <h3 className="profile-subtitle">Profil</h3>
  <p>
    <strong>Doğum Tarihi</strong> <span className="profile-info">{profile.birthDate}</span>
  </p>
  <p>
    <strong>İkamet Şehri</strong> <span className="profile-info">{profile.city}</span>
  </p>
  <p className="extra-spacing">
    <strong>Eğitim Durumu</strong>
    <span className="profile-info">{profile.education}</span>
  </p>
  <p>
    <strong>Tercih Ettiği Rol</strong> <span className="profile-info">{profile.preferredRole}</span>
  </p>
</div>

        {/* About Me */}
        <div className="about-me">
          <h3 className="profile-subtitle">Hakkımda</h3>
          {aboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <hr className="profile-divider" />
    </section>
  );
};

export default ProfileSection;
