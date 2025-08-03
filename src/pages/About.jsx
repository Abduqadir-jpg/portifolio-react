import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h1>
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="rounded-full w-48 h-48 object-cover shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Apdukhadir Moha</h2>
              <h3 className="text-xl text-blue-600 mb-4">Front-End Developer</h3>
              <p className="text-gray-600 mb-4">
                I'm passionate about creating intuitive and visually appealing user interfaces that provide great user experiences.
              </p>
              <p className="text-gray-600">
                With over 5 years of experience in web development, I specialize in building responsive websites and web applications using modern technologies.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-3">Technical Skills</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">HTML5, CSS3, JavaScript (ES6+)</li>
                  <li className="text-gray-600">React.js, Next.js</li>
                  <li className="text-gray-600">Tailwind CSS, Bootstrap</li>
                  <li className="text-gray-600">Git, GitHub</li>
                  <li className="text-gray-600">Responsive Web Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-700 mb-3">Professional Skills</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">Problem Solving</li>
                  <li className="text-gray-600">Team Collaboration</li>
                  <li className="text-gray-600">Communication</li>
                  <li className="text-gray-600">Time Management</li>
                  <li className="text-gray-600">Attention to Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;