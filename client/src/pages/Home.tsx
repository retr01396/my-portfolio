/**
 * Home Page - Cinematic Portfolio
 * 
 * Main entry point for the ultra-premium cinematic portfolio experience.
 * Renders:
 * - Hero World (immersive tunnel with particles)
 * - MERN Stack World (data visualizations)
 * - Blender World (3D geometry showcase)
 * - About Section
 * - Skills Section
 * - Experience Section
 * - Contact Section
 * 
 * Location: client/src/pages/Home.tsx
 * Purpose: Main portfolio page with cinematic storytelling
 */

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-black opacity-60" />
        
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SINFIRE
            </span>
          </h1>
          
          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl font-light text-cyan-300 tracking-wide">
              Creative Developer
            </p>
            <p className="text-xl md:text-2xl font-light text-purple-300 tracking-wide">
              Full Stack Engineer
            </p>
            <p className="text-xl md:text-2xl font-light text-blue-300 tracking-wide">
              3D Experience Designer
            </p>
          </div>

          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting immersive digital experiences through cinematic web design, MERN stack development, and 3D visualization.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            Explore Portfolio
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 pointer-events-none" />
      </section>

      {/* About Section */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a creative developer passionate about building immersive digital experiences that push the boundaries of web design and interactivity.
              </p>
              <p>
                With expertise in the MERN stack, 3D modeling with Blender, and game engines like Unity and Unreal, I create cinematic web experiences that feel like interactive movies.
              </p>
              <p>
                My work combines technical excellence with artistic vision, resulting in award-winning portfolio pieces that showcase innovation in web development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Specializations</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  MERN Stack Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Cinematic Web Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  3D Modeling & Animation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  Interactive Experiences
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full" />
                  Game Engine Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-transparent rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>C Language</li>
                <li>C++ (Basic)</li>
                <li>Java (Basic)</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-gradient-to-br from-purple-900/20 to-transparent rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Web Stack</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>MongoDB</li>
                <li>GSAP & Framer Motion</li>
                <li>Three.js & R3F</li>
              </ul>
            </div>

            {/* Creative Tools */}
            <div className="bg-gradient-to-br from-blue-900/20 to-transparent rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Creative Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Blender 3D</li>
                <li>Unity Engine</li>
                <li>Unreal Engine</li>
                <li>Adobe Creative Suite</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience & Projects
            </span>
          </h2>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-r from-cyan-900/10 to-purple-900/10 rounded-lg p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">3D Logo Animation for College Techfest</h3>
              <p className="text-sm text-gray-400 mb-4">Blender 3D & Animation</p>
              <p className="text-gray-300">
                Created immersive 3D logo animations displayed on LED walls during college techfest, showcasing advanced Blender modeling and animation techniques.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Multiple Event Websites</h3>
              <p className="text-sm text-gray-400 mb-4">React, Next.js & Web Design</p>
              <p className="text-gray-300">
                Built responsive, cinematic websites for various college events, including techfest, MBA batch, and other institutional events with smooth animations and modern UI.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-r from-blue-900/10 to-cyan-900/10 rounded-lg p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Hackathon Participations</h3>
              <p className="text-sm text-gray-400 mb-4">VIT Hackathon & Rajagiri Hackathon</p>
              <p className="text-gray-300">
                Participated in multiple hackathons, reaching semifinals at VIT hackathon. Developed innovative solutions showcasing full-stack development and creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-slate-800 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Build Experiences
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Not just websites. Immersive digital experiences that captivate, engage, and inspire.
          </p>

          <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 text-lg">
            Get In Touch
          </button>

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-gray-700">
            <p className="text-gray-400">
              © 2026 SINFIRE. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
