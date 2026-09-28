function HobbyCard({ image, title, description }) {

  return (
    <div className="hobby-card">

      <img
        src={image}
        alt={title}
        className="hobby-image"
      />

      <div className="hobby-content">

        <h2>{title}</h2>

        <p>{description}</p>

      </div>

    </div>
  );
}

export default HobbyCard;