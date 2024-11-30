import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    

        const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          
          if(!form.current) return;
          emailjs.
            sendForm(
              "service_zqs6bdc",
              "template_11rytxe",
             form.current,
              "rA8UKTE24F-SWWTHx"
        )
            .then(
              (result) => {
                console.log('Message envoyé :', result.text);
                form.current?.reset();
              },
              (err) => {
                console.error('Erreur lors de l\'envoi:', err);
              }
            );
        };
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Se Connecter</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Je suis ouvert aux opportunités de travail, de stage ou tout simplement pour collaborer. Si jamais vous trouvez mon profil
            intéressant, n'hésiter pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">charlesfaye99@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                <p className="mt-1 text-gray-600">+212 060-4887615</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Localisation</h3>
                <p className="mt-1 text-gray-600">Sidi Maarouf, Casablanca</p>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                name='user_name'
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name='user_email'
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name='message'
                rows={4}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Envoyer un message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;