import { useState } from "react";

const projects = {
  web: [
    {
      title: "College Website",
      description: "Modern responsive college website",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/sakthiyad2/SCET-College-Website-"
    },
    {
      title: "MindMirror",
      description: "AI mental wellness web app",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/sakthiyad2/MindMirror-website"
    },
    {
      title: "MR.Review",
      description: "Movie review platform",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/sakthiyad2/Movie-Review-website-MR.Review"
    },
    {
      title: "Paws and Wings",
      description: "Pet adoption website",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/sakthiyad2/Paws-and-Wings---Pet-Adoption-Website"
    },
    {
      title: "Portfolio Website",
      description: "Personal developer portfolio",
      technologies: "HTML, CSS, JavaScript",
      link: "#"
    },
    {
      title: "Village Milk Collection System",
      description:
        "Web application for managing daily milk collection records using Node.js, Express.js and SQLite.",
      technologies: "Node.js, Express.js, SQLite",
      link: "https://github.com/sakthiyad2/Village-Milk-Collection-System"
    }
  ],

  java: [
    {
      title: "Bank Management System",
      description: "Bank Account",
      technologies: "Java",
      link: "https://github.com/sakthiyad2/BankManagementSystem-java"
    },
    {
      title: "Library Management",
      description: "Library record system",
      technologies: "Java, OOPS",
      link: "https://github.com/sakthiyad2/Library-Management-java-OOPS"
    },
    {
      title: "Student Management",
      description: "Student database app",
      technologies: "Java, OOPS",
      link: "https://github.com/sakthiyad2/Student-Management-Java-OOPS"
    },
    {
      title: "Hospital Management",
      description: "Hospital Management using Inheritance",
      technologies: "Java, Inheritance",
      link: "https://github.com/sakthiyad2/Hospital-Management-inheritance-OOPS-Java"
    },
    {
      title: "Vehicle Hierarchy System",
      description: "Vehicle Hierarchy",
      technologies: "Java, OOPS",
      link: "https://github.com/sakthiyad2/Vehicle-Hierarchy"
    },
    {
      title: "Inventory System",
      description: "Stock management",
      technologies: "Java",
      link: "https://github.com/sakthiyad2/InventorySystem-java-"
    },
    {
      title: "Online Quiz",
      description: "Quiz application",
      technologies: "Java",
      link: "https://github.com/sakthiyad2/QuizUi-java"
    },
    {
      title: "Course Management",
      description: "Course Management App",
      technologies: "Java, OOPS",
      link: "https://github.com/sakthiyad2/Course-Management-Java-OOPS"
    },
    {
      title: "Employee Payroll",
      description: "Payroll calculation",
      technologies: "Java, OOPS",
      link: "https://github.com/sakthiyad2/Employee-Payroll-Java-OOPS"
    },
    {
      title: "Hospital Management",
      description: "Hospital records",
      technologies: "Java, OOPS",
      link: "https://github.com/sakthiyad2/Hospital-Management-Java-OOPS"
    },
    {
      title: "Bank Account",
      description: "Bank account system",
      technologies: "Java, OOPS",
      link: "https://github.com/sakthiyad2/Bank-Account-Java-OOPS"
    },
    {
      title: "Food Ordering",
      description: "Restaurant ordering app",
      technologies: "Java",
      link: "https://github.com/sakthiyad2/FoodOrderingSystem-java"
    },
    {
      title: "Food Delivery Payment",
      description: "Food Delivery Payment",
      technologies: "Java",
      link: "https://github.com/sakthiyad2/FoodDeliveryPayment-java"
    },
    {
      title: "Vehicle Detail System",
      description: "Vehicle Detail",
      technologies: "Java, OOPS",
      link: "https://github.com/sakthiyad2/Vehicle-Details-System-using-Method-Overloading-Polymorphism-in-Java-"
    },
    {
      title: "Smart Home Automation",
      description: "Smart Home System",
      technologies: "Java, Interfaces, OOPS",
      link: "https://github.com/sakthiyad2/Smart-Home-Automation-System-using-Java-Interfaces-OOP-"
    },
    {
      title: "Vehicle Rental",
      description: "Vehicle renting",
      technologies: "Java",
      link: "https://github.com/sakthiyad2/Vehicle-Rental-System-java"
    },
    {
      title: "Movie Ticket Booking",
      description: "Ticket Booking",
      technologies: "Java",
      link: "https://github.com/sakthiyad2/MovieTicketBookingSystem-java"
    }
  ],

  python: [
    {
      title: "ATM",
      description: "ATM System",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/ATM-python"
    },
    {
      title: "Data Processing",
      description: "Expense Tracker",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/data_processing_project"
    },
    {
      title: "Dice Game",
      description: "Game app",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/Dice-game-python"
    },
    {
      title: "File Based Notes Saver",
      description: "Notes Saver",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/File-based-notes-saver"
    },
    {
      title: "Hangman Game",
      description: "Game App",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/Hangman"
    },
    {
      title: "Library Management System",
      description: "Library Management",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/Library-Management-python"
    },
    {
      title: "Number Guessing Game",
      description: "Game",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/Number-Guessing-Game-Python"
    },
    {
      title: "Password Strength Checker",
      description: "Password Checker",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/Password-Strength-Checker"
    },
    {
      title: "Quiz",
      description: "Quiz game",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/Quiz-Python"
    },
    {
      title: "Rock Paper Scissor",
      description: "Game",
      technologies: "Python",
      link: "https://github.com/sakthiyad2/Rock-Paper-Scissor-vs-Computer"
    }
  ]
};

function Projects() {
  const [category, setCategory] = useState("all");

  const allProjects = [
    ...projects.web,
    ...projects.java,
    ...projects.python
  ];

  const displayedProjects =
    category === "all" ? allProjects : projects[category];

  return (
    <section className="projects-page">
      <div className="page-container">

        <h1>My Projects</h1>

        <p className="section-description">
          A collection of projects I have developed while learning
          web development, Java, Python and data science.
        </p>

        <div className="project-count">
          <strong>{allProjects.length}</strong> Projects
        </div>

        <div className="project-categories">

          <button
            className={category === "all" ? "active-category" : ""}
            onClick={() => setCategory("all")}
          >
            All ({allProjects.length})
          </button>

          <button
            className={category === "web" ? "active-category" : ""}
            onClick={() => setCategory("web")}
          >
            Web ({projects.web.length})
          </button>

          <button
            className={category === "java" ? "active-category" : ""}
            onClick={() => setCategory("java")}
          >
            Java ({projects.java.length})
          </button>

          <button
            className={category === "python" ? "active-category" : ""}
            onClick={() => setCategory("python")}
          >
            Python ({projects.python.length})
          </button>

        </div>

        <div className="projects-grid">

          {displayedProjects.map((project, index) => (
            <div className="project-card" key={index}>

              <h2>{project.title}</h2>

              <p>
                {project.description}
              </p>

              <span className="project-technologies">
                {project.technologies}
              </span>

              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View Project
                </a>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;