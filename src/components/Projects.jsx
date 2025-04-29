const Projects = () => {
  const apps = [
    {
      title: "Basic",
      title2: "Shapes Game",
      description: "A fun and interactive game for learning basic shapes.",
      link: "https://vankosav.netlify.app/",
      link2:"https://github.com/Vankosav/Project_1",
      author: "Ivana Nedeljkov",
      technologies: ["HTML", "CSS", "JavaScript"],
      backgroundColor: "#a7adba",
    },
    {
      title: "Food",
      title2: "Core",
      description:
        "A waste management app designed to help users reduce food waste.",
      link: "https://recipe-app-pied-pi.vercel.app/",
      link2: "https://github.com/Vankosav/ironhack-project2",
      author: "In collaboration with Kharisma Nankani and Ann-Kathrin Wohlrab",
      technologies: ["JavaScipt", "HandleBars", "Node.js", "MongoDB"],
      backgroundColor: "#C0C5CE",
    },
    {
      title: "Timemaster",
      title2: "",
      description:
        "An app to help users manage their time and stay productive.",
      link: "https://capable-baklava-9e27da.netlify.app/",
      link2:"https://github.com/Vankosav/adhdapp_frontend",
      link3:"https://github.com/Vankosav/adhdapp_backend",
      author: "In collaboration with Hector Gonzales and Fillipo Marinolli",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Flowbite"],
      backgroundColor: "#d0bb7a",
    },
    {
      title: "Sapper",
      title2: "Intelligence",
      description: "A project as a part of my internship.",
      link: "https://www.sapper-intelligence.com/",
      link2:"https://github.com/Vankosav/projectSI",
      author: "Andreea Maria Popa & Ivana Nedeljkov",
      technologies: ["JavaScript", "Next.js", "React"],
      backgroundColor: "#e1b712",
    },
    {
      title: "My",
      title2: "Webpage",
      description: "A personal webpage showcasing my projects and skills.",
      link: "https://my-newweb-site.vercel.app/",
      link2:"https://github.com/Vankosav/MyWebSite",
      author: "In collaboration with Vladimir Crvenkovic",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      backgroundColor: "#FACC15",
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
              <div
                className="font-poppins text-4xl font-semibold text-black leading-tight"
                style={{ letterSpacing: "-0.05em" }}
              >
                {app.title}
              </div>
              {app.title2 && (
                <div
                  className="font-poppins text-4xl font-semibold text-black"
                  style={{ letterSpacing: "-0.05em", marginTop: "-8px" }}
                >
                  {app.title2}
                </div>
              )}

              {/* Author goes here */}
              <p className="text-xs font-poppins uppercase text-black mt-2 mb-1">
                Author: {app.author}
              </p>

              <p className="text-lg font-poppins text-black mb-4 mt-2">
                {app.description}
              </p>
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
  {app.link2 && (
    <a
      href={app.link2}
      target="_blank"
      rel="noopener noreferrer"
      className="text-normal uppercase font-poppins font-bold text-black hover:underline"
    >
      GitHub
    </a>
  )}
  {app.link3 && (
    <a
      href={app.link3}
      target="_blank"
      rel="noopener noreferrer"
      className="text-normal uppercase font-poppins font-bold text-black hover:underline"
    >
      GitHub 2
    </a>
  )}
</div>
          </div>
        ))}
      </div>      
    </section>
  );
};

export default Projects;
