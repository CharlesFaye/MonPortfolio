import { Github, Linkedin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">Charles S. Faye</div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/CharlesFaye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label='Voir mon profil Github'
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/charles-simel-faye-3382bb2aa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label='Voir mon profil Linkedin'
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/Bebouzo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label='Voir mon profil Twitter'
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ marginTop: '5px' }}  />
            </a>
           
              
          
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tous droits réservés à Charles S. Faye</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;