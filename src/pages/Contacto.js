import React from 'react';

function Contacto({ traduccion, enviarMensaje, nombreUsuario, setNombreUsuario, mensajeUsuario, setMensajeUsuario }) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-lg">
        
        <h2 className="text-3xl font-bold text-white mb-6 text-center">{traduccion.contactoTitulo}</h2>
        
        <div className="text-center space-y-2 mb-8">
          <p className="text-slate-400">
            {traduccion.labelCorreo} <span className="text-cyan-400">damaris.svdra@gmail.com</span>
          </p>
          <p className="text-slate-300 font-medium">{traduccion.contactoPremio}</p>
        </div>

        <form onSubmit={enviarMensaje} className="space-y-4">
          <input
            type="text"
            placeholder={traduccion.placeholderNombre}
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
          />
          
          <textarea
            placeholder={traduccion.placeholderMensaje}
            value={mensajeUsuario}
            onChange={(e) => setMensajeUsuario(e.target.value)}
            rows="5"
            className="w-full p-4 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-slate-950 font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            {traduccion.btnForm}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;