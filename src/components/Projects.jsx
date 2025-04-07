const Projects = () => {
  const apps = [
    {
      title: "Basic",
      title2: "Shapes Game",
      description: "A fun and interactive game for learning basic shapes.",
      link: "https://vankosav.netlify.app/",
      author: "Ivana Nedeljkov",
      technologies: ["HTML", "CSS", "JavaScript"],
      backgroundColor: "#7A7A7A",
    },
    {
      title: "Food",
      title2: "Core",
      description: "A waste management app designed to help users reduce food waste.",
      link: "https://recipe-app-pied-pi.vercel.app/",
      author: "In collaboration with Kharisma Nankani and Ann-Kathrin Wohlrab",
      technologies: ["JavaScipt", "HandleBars", "Node.js", "MongoDB"],
      backgroundColor: "#A0A0A0",
    },
    {
      title: "Timemaster",
      title2: "",
      description: "An app to help users manage their time and stay productive.",
      link: "https://capable-baklava-9e27da.netlify.app/",
      author: "In collaboration with Hector Gonzales and Fillipo Marinolli",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Flowbite"],
      backgroundColor: "#B9B274"
    },
    {
      title: "Sapper",
      title2: "Intelligence",
      description: "A project as a part of my internship.",
      link: "https://www.sapper-intelligence.com/",
      author: "Andreea Maria Popa & Ivana Nedeljkov",
      technologies: ["JavaScript", "Next.js", "React"],
      backgroundColor: "#D1C448"
    },
    {
      title: "My",
      title2: "Website",
      description: "A personal website showcasing my projects and skills.",
      link: "https://vankosav.netlify.app/",
      author: "In collaboration with Vladimir Crvenkovic",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      backgroundColor: "#EAD61C"
    },
  ];

  return (
    <section id="projects" className="w-full bg-black text-center py-20">
  <h2 className="text-3xl text-white font-poppins uppercase font-bold mb-28 tracking-tight">
    Projects
  </h2>
  <div className="w-full space-y-0">
    {apps.map((app, index) => (
      <div
        key={index}
        className="px-4 py-6 relative flex justify-between items-start"
        style={{ backgroundColor: app.backgroundColor }}
      >
        {/* Left Section */}
  <div className="flex flex-col text-left w-3/5 tracking-tight">
    <div className="font-poppins text-4xl font-semibold text-black leading-tight" style={{ letterSpacing: '-0.05em' }}>
      {app.title}
    </div>
    {app.title2 && (
      <div className="font-poppins text-4xl font-semibold text-black" style={{ letterSpacing: '-0.05em', marginTop: '-8px' }}>
        {app.title2}
      </div>
    )}

    {/* Author goes here */}
    <p className="text-xs font-poppins uppercase text-black mt-2 mb-1">
      Author: {app.author}
    </p>

    <p className="text-lg font-poppins text-black mb-4 mt-2">{app.description}</p>
    <div className="text-black font-poppins text-base mt-2 flex flex-wrap gap-x-4 gap-y-1">
      <strong className="mr-2">Technologies:</strong>
      {app.technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  </div>

        {/* Right Section */}
        
        <div className="w-2/5 flex flex-col items-end pr-4">
    <a
      href={app.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-normal uppercase font-poppins font-bold text-black hover:underline"
    >
      Visit Project
    </a>
  </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Projects;