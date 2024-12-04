const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'WordPress', level: 75 },
    { name: 'Développement Android', level: 50 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Compétences Techniques</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-blue-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;