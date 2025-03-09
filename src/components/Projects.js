function Projects({ image, title, description, githubLink, deployedLink }) {
  return (
    <div className="bg-[#e9e5dc] border-2 border-[#b7b9b8] p-4 rounded-lg shadow-lg flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="mt-auto pt-3 flex justify-between border-t border-gray-300">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-[#333337] font-bold hover:underline">GitHub</a>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="text-[#333337] font-bold hover:underline">Live Demo</a>
      </div>
    </div>
  );
}

export default Projects;
