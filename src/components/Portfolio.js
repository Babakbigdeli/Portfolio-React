import Projects from "./Projects";
import SampleProjects from "../utility/SampleProjects";

function Portfolio() {
  return (
    <div className="mt-16 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {SampleProjects.map((project, index) => (
          <Projects
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;