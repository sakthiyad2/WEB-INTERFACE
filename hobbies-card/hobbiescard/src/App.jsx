import HobbyCard from "./components/HobbyCard";
import "./App.css";

function App() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="app">

      <header className="header">
        <h1>My Hobbies</h1>

        <p>
          A few things I enjoy doing in my free time
        </p>
      </header>

      <div className="hobby-container">

        <HobbyCard
          image={`${base}images/photography.jpg`}
          title="Taking Photos"
          description="I enjoy capturing beautiful moments, nature, and interesting places through photography."
        />

        <HobbyCard
          image={`${base}images/music.jpg`}
          title="Listening to Music"
          description="Listening to music helps me relax, enjoy my free time, and improve my mood."
        />

        <HobbyCard
          image={`${base}images/movies.jpg`}
          title="Watching Series and Movies"
          description="I enjoy watching movies and series because they are entertaining and help me explore different stories."
        />

        <HobbyCard
          image={`${base}images/walking.jpg`}
          title="Walking"
          description="Walking helps me stay active, refresh my mind, and enjoy the surroundings."
        />

        <HobbyCard
          image={`${base}images/gardening.jpg`}
          title="Gardening"
          description="I enjoy gardening because taking care of plants is relaxing and gives me a connection with nature."
        />

        <HobbyCard
          image={`${base}images/baking.jpg`}
          title="Baking"
          description="Baking is a fun hobby for me because I enjoy trying new recipes and creating delicious treats."
        />

        <HobbyCard
          image={`${base}images/gaming.jpg`}
          title="Gaming"
          description="I especially enjoy Minecraft because I can explore, build creative worlds, and have fun."
        />

      </div>

      <footer className="footer">
        <p>My Hobbies • Things I Enjoy</p>
      </footer>

    </div>
  );
}

export default App;
