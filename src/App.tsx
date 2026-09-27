import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Award,
  Briefcase,
  ChevronRight,
  ExternalLink,
  Wrench,
  Terminal,
  Home,
  Database,
  Brain,
  Server,
  Globe,
  Cpu,
  Layers,
  GraduationCap,
  BookOpen,
  Github,
  Mail,
  Linkedin,
  Send,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { projects, certifications, experience, skillCategories, education, publications } from './data';
import { Card3D } from './components/Card3D';
import { useSpring, animated } from '@react-spring/web';
import { ParticleBackground } from './components/ParticleBackground';
import { SocialLinks } from './components/SocialLinks';
import { DynamicRoleText } from './components/DynamicRoleText';
import { MouseSpotlight } from './components/MouseSpotlight';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'all' | 'aiml' | 'fullstack'>('all');
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Dynamic ScrollSpy: Update active navigation icon based on actual scroll position
  useEffect(() => {
    const sectionIds = ['home', 'projects', 'publications', 'skills', 'experience', 'education', 'certifications', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('maadeshdarisi2005@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const heroProps = useSpring({
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    config: { tension: 260, friction: 50 }
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Filter projects dynamically
  const filteredProjects = projects.filter((p) => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'aiml') {
      return (
        p.technologies.some((t) => ['Neural Network', 'Deep Learning', 'Machine Learning', 'TensorFlow', 'RNN', 'Gemini API'].includes(t)) ||
        p.title.includes('Cancer') ||
        p.title.includes('Crimson')
      );
    }
    if (projectFilter === 'fullstack') {
      return (
        p.technologies.some((t) => ['Full stack development', 'Flask', 'HTML', 'CSS', 'JavaScript'].includes(t)) ||
        p.title.includes('Wellness') ||
        p.title.includes('Crimson')
      );
    }
    return true;
  });

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={22} /> },
    { id: 'projects', label: 'Projects', icon: <Code2 size={22} /> },
    { id: 'publications', label: 'Publications', icon: <BookOpen size={22} /> },
    { id: 'skills', label: 'Skills', icon: <Wrench size={22} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={22} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={22} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={22} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={22} /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Dynamic Cursor Ambient Spotlight */}
      <MouseSpotlight />

      {/* Particle Starfield Background */}
      <ParticleBackground />

      {/* Dynamic Floating Ambient Background Orbs */}
      <div className="fixed top-20 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-[128px] pointer-events-none animate-float-slow -z-10" />
      <div className="fixed top-1/2 -right-40 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-float-reverse -z-10" />
      <div className="fixed bottom-20 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow -z-10" />

      {/* Fixed Sidebar Navigation with Dynamic Active Glow & Tooltips */}
      <div className="fixed left-3 md:left-5 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {navItems.map(({ id, label, icon }) => {
          const isActive = activeSection === id;
          return (
            <div key={id} className="relative flex items-center">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoveredNav(id)}
                onMouseLeave={() => setHoveredNav(null)}
                onClick={() => scrollToSection(id)}
                aria-label={label}
                className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 relative ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.45)]'
                    : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-500 hover:bg-zinc-800/80'
                }`}
              >
                {icon}
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                )}
              </motion.button>

              {/* Tooltip on hover */}
              <AnimatePresence>
                {hoveredNav === id && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 10 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-full ml-2 px-2.5 py-1 rounded-md bg-zinc-900/95 border border-zinc-700 text-xs font-medium text-white whitespace-nowrap shadow-xl backdrop-blur-md pointer-events-none hidden md:block"
                  >
                    {label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/75 backdrop-blur-md z-40 border-b border-zinc-800/80">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm group-hover:scale-105 transition-transform">
              MD
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Maadesh Darisi
            </span>
          </motion.div>

          <div className="flex items-center gap-4">
            <SocialLinks />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/40 transition-all items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <Sparkles size={14} /> Get in Touch
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Hero Section */}
        <animated.section
          id="home"
          style={heroProps}
          className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center gap-12 py-10"
        >
          <div className="flex-1 text-center lg:text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Opportunities in Software Engineering & AI/ML</span>
            </motion.div>

            {/* Name Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 text-transparent bg-clip-text">
              Hello, I'm Maadesh Darisi
            </h1>

            {/* Dynamic Animated Typing Role */}
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300 mb-6 flex items-center justify-center lg:justify-start gap-2 flex-wrap min-h-[2.5rem]">
              <span className="text-zinc-400">Aspiring</span>
              <DynamicRoleText />
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Computer Science and Engineering graduate with a strong passion for problem-solving, AI, and scalable systems.
              Proficient in <span className="text-zinc-200 font-medium">Java</span>, <span className="text-zinc-200 font-medium">Python</span>, <span className="text-zinc-200 font-medium">SQL</span>, and <span className="text-zinc-200 font-medium">Data Structures & Algorithms</span>, with a published Springer Nature research paper and experience developing full-stack healthcare platforms.
            </p>

            {/* Dynamic Highlights / Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8 max-w-2xl mx-auto lg:mx-0">
              <a
                href="https://leetcode.com/u/maadesh_darisi/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 backdrop-blur-md hover:border-amber-500/50 hover:bg-zinc-900/80 transition-all text-left group block"
              >
                <div className="text-2xl font-bold text-amber-400 group-hover:scale-105 transition-transform flex items-center justify-between">
                  <span>250+</span>
                  <ExternalLink size={12} className="text-zinc-500 group-hover:text-amber-400 transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">LeetCode Solved</div>
              </a>

              <a
                href="https://www.geeksforgeeks.org/user/maadeshdarisi/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 backdrop-blur-md hover:border-emerald-500/50 hover:bg-zinc-900/80 transition-all text-left group block"
              >
                <div className="text-2xl font-bold text-emerald-400 group-hover:scale-105 transition-transform flex items-center justify-between">
                  <span>250+</span>
                  <ExternalLink size={12} className="text-zinc-500 group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">GeeksforGeeks Solved</div>
              </a>

              <div
                onClick={() => scrollToSection('publications')}
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 backdrop-blur-md hover:border-blue-500/50 hover:bg-zinc-900/80 transition-all text-left group cursor-pointer"
              >
                <div className="text-2xl font-bold text-blue-400 group-hover:scale-105 transition-transform">Springer</div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">Published Author</div>
              </div>

              <div
                onClick={() => scrollToSection('certifications')}
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 backdrop-blur-md hover:border-purple-500/50 hover:bg-zinc-900/80 transition-all text-left group cursor-pointer"
              >
                <div className="text-2xl font-bold text-purple-400 group-hover:scale-105 transition-transform">5+</div>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">Certifications</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all border border-zinc-700 font-medium shadow-sm hover:shadow-zinc-800/50"
              >
                Explore My Work <ChevronRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 px-6 py-3 rounded-xl flex items-center gap-2 transition-all border border-emerald-500/40 font-medium shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              >
                <Mail size={18} /> Get in Touch
              </motion.button>
              <motion.a
                href="https://github.com/maadesh-darisi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zinc-900/90 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition-all border border-zinc-700 font-medium shadow-sm"
              >
                <Github size={18} /> GitHub
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1bKFz_VVmLyJ_9zJGbuvP6hWyQAb6nyo4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-zinc-800 text-zinc-300 hover:text-white px-5 py-3 rounded-xl flex items-center gap-2 transition-all border border-zinc-700/80 font-medium"
              >
                Resume <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>

          {/* Clean Portrait - No background light or colored glow */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-zinc-800 bg-zinc-950">
              <img
                src="/m.png"
                alt="Maadesh Darisi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </animated.section>

        {/* Projects Section with Dynamic Filter Tabs */}
        <section id="projects" className="py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs mb-3">
                <Code2 size={14} className="text-emerald-400" />
                <span>Featured Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent bg-clip-text">
                Projects & Innovations
              </h2>
            </div>

            {/* Dynamic Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 backdrop-blur-md w-fit">
              <button
                onClick={() => setProjectFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  projectFilter === 'all'
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                All ({projects.length})
              </button>
              <button
                onClick={() => setProjectFilter('aiml')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  projectFilter === 'aiml'
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                AI & Deep Learning
              </button>
              <button
                onClick={() => setProjectFilter('fullstack')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  projectFilter === 'fullstack'
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                Full Stack & Healthcare
              </button>
            </div>
          </div>

          {/* Animated Project Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={project.title}
                >
                  <Card3D className="bg-zinc-900/60 p-6 rounded-2xl backdrop-blur-md border border-zinc-800/90 hover:border-emerald-500/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      {project.image && (
                        <div className="mb-5 rounded-xl overflow-hidden relative group/img aspect-[16/9] bg-zinc-950 border border-zinc-800">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                          />
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-3 right-3 p-2 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-emerald-500 hover:text-black transition-colors"
                            >
                              <ArrowUpRight size={18} />
                            </a>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        {project.link && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live
                          </span>
                        )}
                      </div>

                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-zinc-800/90 text-zinc-300 px-2.5 py-1 rounded-md text-xs font-medium border border-zinc-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="text-zinc-400 text-xs space-y-1.5 pl-3 border-l-2 border-zinc-800">
                        {project.points.slice(0, 3).map((point, i) => (
                          <li key={i} className="line-clamp-2">{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-xs text-zinc-500">Core Repository</span>
                      )}
                      <a
                        href="https://github.com/maadesh-darisi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github size={14} /> Code
                      </a>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs mb-3">
              <BookOpen size={14} className="text-amber-400" />
              <span>Scientific Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent bg-clip-text">
              Publications
            </h2>
          </motion.div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.a
                key={index}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                className="block"
              >
                <Card3D className="bg-zinc-900/60 p-6 rounded-2xl backdrop-blur-md border border-zinc-800/90 hover:border-amber-500/40 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3.5">
                      <div className="bg-amber-500/10 text-amber-400 p-3 rounded-xl border border-amber-500/20 shrink-0 group-hover:scale-110 transition-transform">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                          {pub.title}
                          <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-amber-400 shrink-0 transition-colors" />
                        </h3>
                        <p className="text-amber-400/90 text-sm font-medium">Published in {pub.publisher}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit shrink-0">
                      Peer Reviewed Research
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed pl-0 md:pl-14">
                    {pub.description}
                  </p>
                </Card3D>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Skills Section with Category Visuals */}
        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs mb-3">
              <Wrench size={14} className="text-emerald-400" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent bg-clip-text">
              Skills & Proficiencies
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Languages', icon: <Terminal className="text-emerald-400" size={20} />, skills: skillCategories.languages },
              { title: 'Software Engineering', icon: <Layers className="text-blue-400" size={20} />, skills: skillCategories.SoftwareEngineering },
              { title: 'Backend & APIs', icon: <Server className="text-purple-400" size={20} />, skills: skillCategories.BackendandAPIs },
              { title: 'AI & Machine Learning', icon: <Brain className="text-pink-400" size={20} />, skills: skillCategories.AIML },
              { title: 'Web Development', icon: <Globe className="text-cyan-400" size={20} />, skills: (skillCategories as any).WebDevelopment || (skillCategories as any).technologies },
              { title: 'Databases', icon: <Database className="text-amber-400" size={20} />, skills: (skillCategories as any).DataBases || (skillCategories as any).databases },
              { title: 'Core CS', icon: <Cpu className="text-indigo-400" size={20} />, skills: skillCategories.CoreCS },
              { title: 'Developer Tools', icon: <Wrench className="text-rose-400" size={20} />, skills: (skillCategories as any).Tools || (skillCategories as any).tools },
            ].map((cat, catIndex) => cat.skills && cat.skills.length > 0 && (
              <Card3D key={catIndex} className="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <h3 className="text-base font-semibold mb-3 flex items-center gap-2 text-white">
                  {cat.icon}
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 hover:text-white px-2.5 py-1 rounded-md border border-zinc-700/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs mb-3">
              <Briefcase size={14} className="text-blue-400" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent bg-clip-text">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <Card3D
                key={index}
                className="bg-zinc-900/60 p-6 rounded-2xl backdrop-blur-md border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-300 font-medium text-sm mb-3">{exp.organization}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs mb-3">
              <GraduationCap size={14} className="text-emerald-400" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent bg-clip-text">
              Education
            </h2>
          </motion.div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card3D
                key={index}
                className="bg-zinc-900/60 p-6 rounded-2xl backdrop-blur-md border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {edu.logo ? (
                      <div className="bg-white/95 p-2 rounded-xl border border-zinc-700/60 shrink-0 h-16 w-16 flex items-center justify-center shadow-sm">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="bg-zinc-800 p-3 rounded-xl border border-zinc-700 shrink-0 h-16 w-16 flex items-center justify-center text-zinc-400">
                        <GraduationCap size={28} />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-zinc-300 font-medium text-sm">{edu.institution}</p>
                      <p className="text-zinc-500 text-xs mt-0.5">{edu.period}</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs mb-3">
              <Award size={14} className="text-purple-400" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent bg-clip-text">
              Certifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card3D
                key={index}
                className="bg-zinc-900/60 p-4 rounded-xl backdrop-blur-md border border-zinc-800 flex items-center justify-between gap-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {cert.logo ? (
                    <div className="bg-white/95 p-1.5 rounded-lg border border-zinc-700/50 shrink-0 h-12 w-16 flex items-center justify-center shadow-sm">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="bg-zinc-800 p-2.5 rounded-lg border border-zinc-700/50 shrink-0 h-12 w-12 flex items-center justify-center text-zinc-400">
                      <Award size={20} />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-zinc-200 text-sm truncate">{cert.title}</h3>
                    <p className="text-zinc-400 text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="text-zinc-400 hover:text-white transition-colors shrink-0 p-2 rounded-lg hover:bg-zinc-800"
                  aria-label={`View certificate for ${cert.title}`}
                >
                  <ArrowUpRight size={18} />
                </motion.a>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Contact / Get in Touch Space */}
        <section id="contact" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4 backdrop-blur-md">
              <Mail size={14} />
              <span>Let's Connect</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent bg-clip-text">
              Get in Touch
            </h2>
            <p className="text-zinc-200 text-lg sm:text-xl leading-relaxed mb-2 font-medium">
              Open to opportunities in <span className="text-white underline decoration-emerald-500 decoration-2 underline-offset-4">Software Engineering</span>, <span className="text-emerald-400 font-semibold">AI/ML</span>, and <span className="text-blue-400 font-semibold">Data Science</span>.
            </p>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto">
              Passionate about building practical solutions using Java, Python, SQL, and machine learning technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <Card3D className="bg-zinc-900/70 p-6 rounded-2xl backdrop-blur-md border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Mail size={26} />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                    Email
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Email</h3>
                <p className="text-zinc-400 text-sm mb-4">Drop a message directly to my inbox:</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=maadeshdarisi2005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-base group-hover:underline break-all"
                >
                  maadeshdarisi2005@gmail.com
                  <ArrowUpRight size={16} className="shrink-0" />
                </a>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-col gap-2">
                <div className="flex gap-2">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=maadeshdarisi2005@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-colors shadow-lg shadow-emerald-950/40"
                  >
                    <Send size={16} /> Send Email (Gmail)
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-medium text-sm transition-colors"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href="mailto:maadeshdarisi2005@gmail.com"
                  className="text-xs text-zinc-500 hover:text-zinc-300 text-center transition-colors underline pt-1"
                >
                  Or open default desktop mail client
                </a>
              </div>
            </Card3D>

            {/* LinkedIn Card */}
            <Card3D className="bg-zinc-900/70 p-6 rounded-2xl backdrop-blur-md border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <Linkedin size={26} />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                    LinkedIn
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Professional Network</h3>
                <p className="text-zinc-400 text-sm mb-4">Connect and explore my professional background:</p>
                <a
                  href="https://www.linkedin.com/in/maadeshdarisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-base group-hover:underline break-all"
                >
                  linkedin.com/in/maadeshdarisi
                  <ArrowUpRight size={16} className="shrink-0" />
                </a>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <a
                  href="https://www.linkedin.com/in/maadeshdarisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-950/40"
                >
                  <Linkedin size={16} /> Connect on LinkedIn
                </a>
              </div>
            </Card3D>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-md text-center py-8 border-t border-zinc-800/80 text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} Maadesh Darisi. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;