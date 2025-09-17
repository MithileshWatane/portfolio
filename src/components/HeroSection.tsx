import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Sparkles, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = ['Full-Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typeText = async () => {
      for (let i = 0; i <= currentRole.length; i++) {
        setTypedText(currentRole.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      await new Promise(resolve => setTimeout(resolve, 2000));
      for (let i = currentRole.length; i >= 0; i--) {
        setTypedText(currentRole.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    };
    
    typeText();
  }, [currentIndex]);

  const Links = {
    github: "https://github.com/MithileshWatane",
    linkedin: "https://www.linkedin.com/in/Mithilesh-Watane",
    Leetcode: "https://leetcode.com/u/Mithilesh_Watane",
    email: "mithileshwatane11@gmail.com"
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-black">
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4) 0%, transparent 50%)`
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
      
      {/* Rotating Ring */}
      <div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-blue-500/30 rounded-full" style={{ animation: 'spin 10s linear infinite' }} />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col max-w-2xl space-y-8 text-center lg:text-left">
          {/* Greeting with Icon */}
          <div className="flex items-center justify-center lg:justify-start gap-3 text-blue-400">
            <span className="text-lg font-medium tracking-wide">Hello, I'm</span>
          </div>

          {/* Name with Gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-white via-gray-200 to-blue-200 bg-clip-text text-transparent">
              Mithilesh
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 bg-clip-text text-transparent relative">
              Watane
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full transform scale-x-0 animate-scale-x" />
            </span>
          </h1>

          {/* Typed Role */}
          <div className="text-2xl md:text-3xl text-gray-300 font-light h-12 flex items-center justify-center lg:justify-start">
            <span>{typedText}</span>
            <span className="ml-1 w-0.5 h-8 bg-blue-400 animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Crafting digital experiences with{" "}
            <span className="text-blue-400 font-semibold">modern technologies</span> and{" "}
            <span className="text-sky-400 font-semibold">creative solutions</span>.
            Passionate about building scalable applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-sky-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a
              href="#projects"
              className="group px-8 py-4 border-2 border-blue-500/50 rounded-full text-blue-300 font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                View Projects
              </span>
            </a>
          </div>

          {/* Social Links */}
         <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
  {[
    { 
      icon: "https://img.icons8.com/3d-fluency/375/github-logo.png", 
      link: Links.github, 
      label: "GitHub", 
      color: "hover:text-white-300" 
    },
    { 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", 
      link: Links.linkedin, 
      label: "LinkedIn", 
      color: "hover:text-blue-400" 
    },
    { 
      icon: "https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000", 
      link: Links.Leetcode, 
      label: "LeetCode", 
      color: "hover:text-yellow-400" 
    },
    { 
      icon: "https://img.icons8.com/color/48/gmail-new.png", 
      link: Links.email, 
      label: "Email", 
      color: "hover:text-sky-400" 
    },
  ].map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-500 ${social.color} transition-all duration-300 p-3 rounded-full hover:bg-white/10 hover:scale-110 backdrop-blur-sm`}
      aria-label={social.label}
    >
      <img src={social.icon} alt={social.label} className="w-6 h-6" />
    </a>
  ))}
</div>

        </div>

        {/* Right Content - Enhanced Code Block */}
        <div className="w-full max-w-lg">
          <div className="relative">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-sky-600/20 rounded-3xl blur-xl" />
            
            {/* Code Terminal */}
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
                <div className="flex space-x-3">
                  <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors" />
                  <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Code className="w-4 h-4" />
                  <span>developer.js</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 space-y-3 font-mono text-sm">
                <div className="text-gray-500 flex items-center gap-2">
                  <span>{"///"}</span>
                  <span>Software Engineer & Creator</span>
                </div>
                
                <div className="text-sky-400">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-yellow-400">{"{"}</span>
                </div>

                {[
                  { key: 'name', value: "'Mithilesh Watane'", delay: 0.5 },
                  { key: 'title', value: "'Full-Stack Developer'", delay: 1 },
                  { key: 'location', value: "'Amravati, Maharashtra'", delay: 1.5 },
                  { key: 'languages', value: "['Java', 'JavaScript', 'Python']", delay: 2 },
                  { key: 'frameworks', value: "['React', 'Node.js', 'Next.js']", delay: 2.5 },
                  { key: 'databases', value: "['MongoDB', 'MYSQL', 'Redis']", delay: 3 },
                  { key: 'passion', value: "'Problem Solving & Innovation'", delay: 3.5 },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="pl-6 opacity-0"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${item.delay}s forwards`
                    }}
                  >
                    <span className="text-blue-300">{item.key}</span>
                    <span className="text-gray-400">: </span>
                    <span className="text-green-400">{item.value}</span>
                    <span className="text-gray-400">,</span>
                  </div>
                ))}

                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">{"}"}</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>

      <style>{`
        @keyframes scale-x {
          to { transform: scaleX(1); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;