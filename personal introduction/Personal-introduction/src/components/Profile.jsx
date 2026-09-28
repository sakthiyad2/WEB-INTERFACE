import profile from "../assets/profile.png";

function Profile(props) {
  return (
    <section className="card">
      <h2>Profile</h2>

      <div className="profile-container">
        <img src={profile} alt="Profile" className="profile-image" />

        <div className="profile-details">
          <p><strong>Name:</strong> {props.name}</p>
          <p><strong>Age:</strong> {props.age}</p>
          <p><strong>College:</strong> {props.college}</p>
          <p><strong>Department:</strong> {props.department}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;