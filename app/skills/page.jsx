import ExpCard from "@components/ExpCard";
import SkillCard from "@components/SkillCard.jsx";
import LinkedIn from "@components/logos/LinkedIn";
import ReactL from "@components/logos/ReactL";
import Java from "@components/logos/Java";
import Python from "@components/logos/Python";
import SQL from "@components/logos/SQL";
const SkillsPage = () => {
  //Array that stores skills
  const skills = [
    {
      name: "React",
      tag: "Web Dev",
      description: "Created many projects using React and NextJS",
      logo: ReactL,
    },
    {
      name: "Python",
      tag: "Application and Testing",
      description: "Used python for testing purpose and build basic api with Django Framework",
      logo: Python,
    },
    {
      name: "Java",
      tag: "OOP and DSA",
      description:
        "oop and data structures. Java Swing",
      logo: Java,
    },
    {
      name: "SQL",
      tag: "Database",
      description:
        "Worked with Mysql and PostgreSQL",
      logo: SQL,
    },
    
  ];
  // Array for experience
  const experience = [
    {
      title: "Associate Software Engineer",
      desc: "Worked with Reactjs, Nextjs, Tailwind CSS, Sass, Python, Node",
      date: "2023-2024",
    },
    {
      title: "Intern (MIS)",
      desc: "Worked with Jquery, Bootstrap4, Vanilla Javascript, MySQL",
      date: "2022-2023",
    },
  ];
  return (
    <div className="main skills">
      <div className="wrapper-skills-page">
        <a className="heading">Languages</a>
        <div className="contain-skill">
          {/* map over skills array and create a skill card for each skill */}
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              tag={skill.tag}
              description={skill.description}
              logo={skill.logo}
            />
          ))}
        </div>
        <br />
        <br />
        <a className="heading">Experience</a>
        <div className="contain-exp">
          {/* map over experience array and create exp card */}
          {experience.map((exp, index) => (
            <ExpCard
              title={exp.title}
              desc={exp.desc}
              date={exp.date}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
