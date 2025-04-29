const Roles = () => {
  const CardSection = ({ title, title2, description, image, children }) => {
    return (
<div className="w-full max-w-[800px] h-full bg-black p-4 font-poppins flex flex-col justify-between">
<h3 className="text-4xl font-poppins font-semibold leading-tight text-white" style={{ letterSpacing: '-0.05em' }}>{title}</h3>
        <h3 className="text-4xl font-poppins font-medium leading-tight text-yellow-400" style={{ letterSpacing: '-0.05em', marginTop: '-16px' }}>{title2}</h3>
        <p className="mt-2 text-lg text-white text-left font-poppins" style={{ letterSpacing: '-0.02em', marginTop: '2px' }}>{description}</p>
        <div className="bg-yellow-400 mt-4 p-0">
          <img className="w-full h-68 sm:h-68 object-cover" src={image} alt={title} />
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };

  return (
<section className="w-full px-6 sm:px-8 py-16 bg-black">
<div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
      {/* Web Developer */}
      <CardSection
        title="Web"
        title2="Developer"
        description="Creating dynamic, user-friendly websites and applications."
        image="/webdev.png"
      >
        <ul className="mt-4 text-lg text-black font-poppins list-disc list-inside">
          <li>HTML, CSS, JavaScript</li>
          <li>React, Next.js, Node.js</li>
          <li>MongoDB, Express.js</li>
          <li>Git, GitHub, Version Control</li>
          <li>Problem Solving</li>
          <li>Attention to details</li>
          <li>Collaboration</li>
        </ul>
      </CardSection>

      {/* Learning Designer */}
      <CardSection
        title="Learning"
        title2="Designer"
        description="Designing engaging learning experiences for modern education."
        image="/design.png"
      >
        <ul className="mt-4 text-lg text-black font-poppins list-disc list-inside">
          <li>ADDIE</li>
          <li>SAM</li>
          <li>LMS</li>
          <li>Canva</li>
          <li>Communication</li>
          <li>Creativity</li>
          <li>Critical Thinking</li>
        </ul>
      </CardSection>

      {/* Inclusive Educator */}
      <CardSection
        title="Inclusive"
        title2="Educator"
        description="Promoting equity through inclusive, diverse learning pathways."
        image="/edu.png"
      >
        <ul className="mt-4 text-lg text-black font-poppins list-disc list-inside">
          <li>DEIJ</li>
          <li>MTSS / RTI Frameworks</li>
          <li>Social-Emotional Learning</li>
          <li>EdTech</li>
          <li>UDL</li>
          <li>Accessibility</li>
          <li>Patience</li>
        </ul>
      </CardSection>
      </div>
    </section>
  );
};

export default Roles;
