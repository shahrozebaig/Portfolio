import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'WhatsApp Birthday Wishing Bot',
      description: 'Automates birthday wishes via WhatsApp using a scheduler and user data from a file. Enhances personal or professional communication by ensuring timely, personalized messages.',
      image: '/Birthday-Wishing-Bot.jpg',
      tags: ['Python', 'Pandas', 'pywhatkit', 'Datetime'],
      githubUrl: 'https://github.com/shahrozebaig/Whatsapp-Birthday-bot',
      liveUrl: '#',
      category: 'automation',
    },
    {
      id: 2,
      title: 'Automated Android Malware Detection',
      description: 'Built an ensemble machine learning model using Random Forest, SVM, and Gradient Boosting to detect malware in Android applications. Used performance metrics like accuracy and F1-score for model evaluation.',
      image: '/android-malware.jpg',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'ml',
    },
    {
      id: 3,
      title: 'Early Detection of Alzheimer\'s Disease',
      description: 'Created a full-stack web app for predicting Alzheimer\'s at an early stage. Doctors can input patient data and receive results powered by machine learning.',
      image: '/Alzheimers-Disease.jpg',
      tags: ['Python', 'MongoDB', 'React JS', 'Machine Learning', 'OpenCV'],
      githubUrl: 'https://github.com/shahrozebaig/Alzheimer-Detection',
      liveUrl: '#',
      category: 'web',
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'automation', label: 'Automation' },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen w-full py-20 px-8 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-wider font-semibold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Work
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Recent Projects
          </motion.h3>
          <motion.div variants={itemVariants} className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg">
            Here's a selection of my recent projects showcasing my skills in AI/ML, web development, and automation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded-full ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
