import Projects from "./Projects";
import SampleProjects from "../utility/SampleProjects";

function Portfolio() {
  return (
    <div className="mt-16 p-6 bg-[#e9e5dc] shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {SampleProjects.map(({ image, title, description, githubLink, deployedLink }, index) => (
          <Projects
            key={index}
            image={image}
            title={title}
            description={description}
            githubLink={githubLink}
            deployedLink={deployedLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;