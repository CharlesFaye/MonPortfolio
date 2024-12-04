import { ArrowRight } from 'lucide-react';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Développeur Front-End
              <span className="text-3xl md:text-5xl block text-blue-600">Je crée des expériences web uniques et modernes</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Avec + de 2 ans d'expérience dans le domaine de la technologie, je suis là pour satisfaire vos exigences en termes
              de créativité, d'adaptibilité et de réactivité de vos applications web.
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label='Accéder à mes coordonnées'
              >
                Me Contacter
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#projects"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                aria-label="Voir les projets que j'ai réalisés"
              >
                Voir mes projets
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/assets/images/hero-image.jpeg"
              alt="Un développeur pointé en face de deux écrans."
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;