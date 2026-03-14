'use client';

import Link from 'next/link';

const LXDProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Translating Reports to Identify and Remove Barriers to Learning",
      description: "Teachers often receive long psychological reports but struggle to translate them into actionable classroom accommodations. Designed a workshop that helps teachers interpret standardized assessment data and identify appropriate learning supports.",
      number: "Interactive Workshop",
      path: "/lxdprojects/project1",
      gradient: "from-[#d0bb7a] via-yellow-300 to-yellow-400",
      textColor: "black"
    },
    {
      id: 2,
      title: "Teach Every Learner: Rethinking Inclusion with UDL",
      description: "Students with learning differences often do not receive appropriate accommodations due to lack of teacher training. Created a professional development session introducing MTSS and Universal Design for Learning strategies.",
      number: "Self-Paced eLearning Course",
      path: "/lxdprojects/project2",
      gradient: "from-[#a7adba] via-[#b8bcc3] to-[#C0C5CE]",
      textColor: "black"
    },
    {
      id: 3,
      title: "Building Trust for Effective Collaboration",
      description: "This project video explores psychological safety's role in team collaboration, showing how trust and open communication boost problem-solving and dynamics in safe environments.C",
      number: "Video-based microlearning",
      path: "/lxdprojects/project3",
      gradient: "from-[#a7adba] via-[#b8bcc3] to-[#C0C5CE]",
      textColor: "black"
    },
  ];

  return (
    <section id="lxd-projects" className="w-full bg-black text-center py-20">
      <h2 className="text-3xl text-white font-poppins uppercase font-bold mb-28 tracking-tight">
        Learning Design Projects
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Link key={project.id} href={project.path} className="block w-full">
              <div className="card group relative w-full h-[400px] bg-white rounded-[15px] shadow-2xl overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl">
                {/* Front Face: Content */}
                <div className="face face1 absolute inset-0 flex flex-col justify-start items-center p-6 pt-12 text-center z-10"> {/* Added pt-12, justify-start */}
                  <h3 className="text-2xl font-bold mb-4" style={{ color: project.textColor }}>
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed max-w-md mx-auto opacity-90" style={{ color: project.textColor }}>
                    {project.description}
                  </p>
                </div>
                {/* Back Face: Number */}
                <div className={`face face2 absolute bottom-0 left-0 w-full h-full bg-gradient-to-r ${project.gradient} flex flex-col justify-end items-center pb-4 transition-all duration-500 ease-in-out group-hover:h-20 rounded-[15px] group-hover:rounded-b-[15px]`}>
                  <h2 className="text-5xl font-black text-white drop-shadow-lg transition-all duration-500 group-hover:text-2xl leading-none"> {/* Smaller: 7xl -> 2xl */}
  {project.number} {/* Now "Self-Paced eLearning Course" */}
</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LXDProjects;
