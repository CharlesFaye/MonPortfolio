import { Code2, Globe, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">À Propos de Moi</h2>
            Je suis un développeur Front-End passionné par la création de solutions informatiques. 
            Avec de l'expertise dans les technologies modernes, je transforme vos visions en réalité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Code Propre</h3>
            <p className="text-gray-600">
              J'écris du code propre, maintenable suivant les meilleures pratiques et principes du développement web.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Layout className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Je crée des sites web responsifs en vue d'obtenir une adaptibilité et une réactivité égales à toutes les plateformes.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">WordPress</h3>
            <p className="text-gray-600">
              Je crée des sites WordPress modernes en utilisant les thèmes et les extensions que fournit ce populeux CMS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;