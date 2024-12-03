import React from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">Charles S. Faye</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2">Accueil</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2">À Propos</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2">Compétences</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2">Projets</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2">Contact</a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/CharlesFaye" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/charles-simel-faye-3382bb2aa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Bebouzo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ marginTop: '5px' }}  />

              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-2">
            <a href="#home" className="py-2 text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2" onClick={closeMenu}>Accueil</a>
            <a href="#about" className="py-2 text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2" onClick={closeMenu}>À Propos</a>
            <a href="#skills" className="py-2 text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2" onClick={closeMenu}>Compétences</a>
            <a href="#projects" className="py-2 text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2" onClick={closeMenu}>Projets</a>
            <a href="#contact" className="py-2 text-gray-600 hover:text-gray-900 focus:outline-2 focus:outline focus:outline-text-gray-900 focus:outline-offset-2" onClick={closeMenu}>Contact</a>
            <div className="flex items-center gap-4 py-2">
              <a href="https://github.com/CharlesFaye" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label='Voir mon profil Github'>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/charles-simel-faye-3382bb2aa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label='Voir mon profil Linkedin'>
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Bebouzo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label='Voir mon profil Twitter'>
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;