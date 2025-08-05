import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Award, Briefcase, ChevronRight, ExternalLink, Wrench, Code, Terminal, Home } from 'lucide-react';
import { projects, certifications, experience, skillCategories } from './data';
import { Card3D } from './components/Card3D';
import { SkillCard } from './components/SkillCard';
import { useSpring, animated } from '@react-spring/web';
import { ParticleBackground } from './components/ParticleBackground';
import { SocialLinks } from './components/SocialLinks';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const heroProps = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { tension: 280, friction: 60 }
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Fixed Sidebar Navigation */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6">
        {[
          { id: 'home', icon: <Home size={24} /> },
          { id: 'projects', icon: <Code2 size={24} /> },
          { id: 'skills', icon: <Wrench size={24} /> },
          { id: 'experience', icon: <Briefcase size={24} /> },
          { id: 'certifications', icon: <Award size={24} /> }
        ].map(({ id, icon }) => (
          <motion.button
            key={id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(id)}
            className={`p-3 rounded-full bg-zinc-800/50 backdrop-blur border ${
              activeSection === id ? 'border-white' : 'border-zinc-700'
            } hover:border-white transition-colors`}
          >
            {icon}
          </motion.button>
        ))}
      </div>
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-zinc-800">
        <nav className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-white"
          >
            Portfolio
          </motion.h1>
          <SocialLinks />
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <animated.section 
          id="home"
          style={heroProps}
          className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">
              Hello, I'm Maadesh Darisi
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mb-8">
            Computer Science and Engineering student with a passion for problem-solving and software development. Skilled in Java,
 data structures, and algorithms, with experience in competitive programming and front-end web development.Eager to
 contribute technical expertise to innovative projects.
            </p>
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors border border-zinc-700"
              >
                Explore my work <ChevronRight size={20} />
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1-BajjQwuVT94ea_lIzmbRt4e4ZFuh9_W/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-zinc-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors border border-zinc-700"
              >
                My Resume <ExternalLink size={20} />
              </motion.a>
            </div>
          </div>
          <Card3D className="flex-1 flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-zinc-800 shadow-[0_0_30px_rgba(39,39,42,0.8)]">
              <img 
                src="/profile.jpg"
                alt="Maadesh Darisi" 
                className="w-full h-full object-cover"
              />
            </div>
          </Card3D>
        </animated.section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-2"
          >
            <Code2 size={24} className="text-zinc-400" />
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href="https://github.com/maadesh-darisi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block"
              >
                <Card3D
                  className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 cursor-pointer"
                >
                  {project.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={16} className="text-zinc-400" />
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm border border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-zinc-400 space-y-2">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Card3D>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Languages */}
            <Card3D className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Terminal className="text-zinc-400" size={20} />
                Languages
              </h3>
              <div className="space-y-2">
                {skillCategories.languages.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </Card3D>

            {/* Technologies */}
            <Card3D className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="text-zinc-400" size={20} />
                Technologies
              </h3>
              <div className="space-y-2">
                {skillCategories.technologies.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </Card3D>

            {/* Developer Tools */}
            <Card3D className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Wrench className="text-zinc-400" size={20} />
                Developer Tools
              </h3>
              <div className="space-y-2">
                {skillCategories.tools.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </Card3D>
              {/* DataBases */}
            <Card3D className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="text-zinc-400" size={20} />
                Databases
              </h3>
              <div className="space-y-2">
                {skillCategories.DataBases.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </Card3D>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-2"
          >
            <Briefcase size={24} className="text-zinc-400" />
            Experience
          </motion.h2>
          {experience.map((exp, index) => (
            <Card3D
              key={index}
              className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-800 mb-4"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-zinc-400">{exp.organization}</p>
              <p className="text-zinc-500 mb-2">{exp.period}</p>
              <p className="text-zinc-400">{exp.description}</p>
            </Card3D>
          ))}
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-2"
          >
            <Award size={24} className="text-zinc-400" />
            Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card3D
                key={index}
                className="bg-zinc-900/50 p-4 rounded-lg backdrop-blur-sm border border-zinc-800 flex items-center justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-zinc-200">{cert.title}</h3>
                  <p className="text-zinc-400">{cert.issuer}</p>
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </Card3D>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm text-center py-6 border-t border-zinc-800">
        <p className="text-zinc-400">
          © {new Date().getFullYear()} Maadesh Darisi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;