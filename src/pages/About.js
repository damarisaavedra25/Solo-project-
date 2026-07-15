import React from 'react';

const About = ({ traduccion }) => {
  const features = [
    { label: traduccion.sobreMiComida, desc: traduccion.sobreMiComidaDetalle },
    { label: traduccion.sobreMiHobby, desc: traduccion.sobreMiHobbyDetalle },
    { label: traduccion.sobreMiPoder, desc: traduccion.sobreMiPoderDetalle },
  ];

  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-10 shadow-2xl backdrop-blur-lg">
        
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {traduccion.sobreMiTitulo}
        </h2>
        
        <ul className="space-y-6">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-4 text-lg text-slate-300">
              <span className="text-2xl mt-[-4px]">🐾</span>
              <p>
                <strong className="text-white">{item.label}</strong> {item.desc}
              </p>
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
};

export default About;