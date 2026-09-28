import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Goal from "./components/Goal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const profile = {
    name: "Sakthiya D",
    age: 18,
    college: "Prince Dr. K. Vasudevan College of Engineering and Technology",
    department: "B.Tech Artificial Intelligence and Data Science",
  };

  const about =
    "I am an enthusiastic Artificial Intelligence and Data Science student with a strong interest in web development, UI/UX design, Java, Python, and React. I enjoy learning new technologies and building creative projects.";

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "Python",
    "Figma",
    "React",
  ];

  const goal =
    "My career objective is to become a skilled Full Stack Developer and UI/UX Designer while continuously improving my technical and problem-solving skills.";

  const contact = {
    email: "dsakthiya2@gmail.com",
    phone: "+91 6381779033",
    github: "https://github.com/sakthiyad2",
  };

  return (
    <div className="container">

      <Header
        title="Personal Introduction"
        subtitle="Welcome to My Portfolio"
      />

      <Profile
        name={profile.name}
        age={profile.age}
        college={profile.college}
        department={profile.department}
      />

      {/* About Me + Technical Skills */}
      <div className="about-skills-container">
        <About introduction={about} />

        <Skills skills={skills} />
      </div>

      <Goal goal={goal} />

      <Contact
        email={contact.email}
        phone={contact.phone}
        github={contact.github}
      />

      <Footer message="Thank you for visiting my personal introduction page." />

    </div>
  );
}

export default App;