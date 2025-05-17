import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProps {
  name: string;
  percentage: number;
  color: string;
  icon?: string;
  darkMode: boolean;
}

const Skill: React.FC<SkillProps> = ({ name, percentage, color, darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{name}</h4>
        <span className="text-sm">{percentage}%</span>
      </div>
      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <motion.div
          className={`h-full rounded-full ${color}`}
          style={{ width: '0%' }}
          animate={{ width: inView ? `${percentage}%` : '0%' }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const programmingSkills = [
    { name: 'Python', percentage: 90, color: 'bg-blue-500' },
    { name: 'Java', percentage: 85, color: 'bg-red-500' },
    { name: 'C', percentage: 80, color: 'bg-gray-500' },
  ];

  const webTechSkills = [
    { name: 'HTML & CSS', percentage: 85, color: 'bg-orange-500' },
    { name: 'JavaScript', percentage: 80, color: 'bg-yellow-500' },
    { name: 'React JS', percentage: 75, color: 'bg-cyan-500' },
    { name: 'React Native', percentage: 70, color: 'bg-blue-400' },
  ];

  const databaseSkills = [
    { name: 'MySQL', percentage: 85, color: 'bg-blue-600' },
    { name: 'MongoDB', percentage: 80, color: 'bg-green-500' },
  ];

  const mlSkills = [
    { name: 'Scikit-learn', percentage: 85, color: 'bg-orange-500' },
    { name: 'Pandas', percentage: 90, color: 'bg-purple-500' },
    { name: 'NumPy', percentage: 88, color: 'bg-blue-500' },
    { name: 'OpenCV', percentage: 75, color: 'bg-green-500' },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`min-h-screen w-full flex flex-col justify-center px-8 py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-wider text-indigo-500 font-semibold mb-2">
            My Expertise
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Skills & Proficiency
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500"></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h4 variants={itemVariants} className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Programming Languages
            </motion.h4>
            
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Skill
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    darkMode={darkMode}
                  />
                </motion.div>
              ))}
            </div>

            <motion.h4 variants={itemVariants} className="text-xl font-bold mb-6 flex items-center mt-12">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Web Technologies
            </motion.h4>
            
            <div className="space-y-6">
              {webTechSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Skill
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    darkMode={darkMode}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h4 variants={itemVariants} className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Databases
            </motion.h4>
            
            <div className="space-y-6">
              {databaseSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Skill
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    darkMode={darkMode}
                  />
                </motion.div>
              ))}
            </div>

            <motion.h4 variants={itemVariants} className="text-xl font-bold mb-6 flex items-center mt-12">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mr-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Machine Learning & Data Science
            </motion.h4>
            
            <div className="space-y-6">
              {mlSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Skill
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    darkMode={darkMode}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className={`mt-10 p-6 rounded-lg border border-indigo-100 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <h4 className="text-lg font-semibold mb-3">Current Learning Focus</h4>
              <div className="flex flex-wrap gap-2">
                {['Deep Learning', 'Computer Vision', 'NLP', 'AWS'].map((item, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;