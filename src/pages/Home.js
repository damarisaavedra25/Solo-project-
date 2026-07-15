import React from 'react';

const SEGUIDORES_DATA = [
  { id: 1, src: "/img/portrait1.jpg" },
  { id: 2, src: "/img/portrait2.jpeg" },
  { id: 3, src: "/img/portrait3.jpeg" }
];

const HISTORIA_IMGS = [
  { src: "/img/foto4.jpg", pos: "object-center" },
  { src: "/img/foto5.jpg", pos: "object-[50%_20%]" },
  { src: "/img/foto6.jpg", pos: "object-center" }
];

const MOMENTOS_IMGS = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];

const Home = ({ traduccion, miau, contadorMiau }) => {
  const scrollToGallery = () => {
    document.getElementById('galeria-home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="space-y-16 py-16">
      {/* HERO SECTION */}
      <section id="home" className="max-w-6xl mx-auto w-full px-4 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] text-white">
            {traduccion.bienvenida} <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {traduccion.nombre}
            </span>
          </h1>

          <p className="text-xl text-slate-400">{traduccion.tagline}</p>
          <p className="text-slate-300 max-w-md">{traduccion.descripcion}</p>

          <div className="flex gap-4">
            <button onClick={miau} className="bg-cyan-500 hover:bg-cyan-400 transition-all text-slate-900 px-6 py-2 rounded-lg font-bold">
              {traduccion.btnSaludar}
            </button>
            <button onClick={scrollToGallery} className="border border-white/20 hover:border-white/40 text-white px-6 py-2 rounded-lg transition-all">
              {traduccion.btnFotos}
            </button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-3">
              {SEGUIDORES_DATA.map((p) => (
                <img key={p.id} src={p.src} alt="Seguidor" className="w-10 h-10 rounded-full border-2 border-slate-900" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm">+{traduccion.seguidores}</span>
              <span className="text-slate-400 text-xs">{traduccion.agradecimiento}</span>
            </div>
          </div>

          <p className="text-slate-500">🐾 {traduccion.contadorSaludos.replace("{cantidad}", contadorMiau)}</p>
        </div>

        {/* IMAGEN HERO - TAMAÑO GRANDE FORZADO */}
        <div className="flex-1 flex justify-center items-center relative py-10 w-full">

          <div className="absolute w-[650px] h-[650px] bg-cyan-500/15 rounded-full blur-3xl animate-pulse" />

          <div className="relative w-[500px] h-[500px] flex items-center justify-center shrink-0">

            <div className="absolute inset-0 rounded-full border border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,0.2)]" />

            <img
              src="/img/foto15.png"
              alt="Mayo"
              className="w-[92%] h-[92%] object-cover rounded-full border-4 border-slate-900 shadow-2xl"
            />

            {/* Tarjeta de Mood */}
            <div className="absolute -bottom-2 right-4 bg-slate-800/90 border border-cyan-500/20 px-6 py-4 rounded-2xl text-white shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[11px] text-cyan-400 uppercase tracking-widest font-bold">
                  {traduccion.moodTitulo}
                </span>
              </div>
              <span className="font-semibold text-2xl">{traduccion.moodDesc}</span>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="w-full bg-slate-900/80 rounded-2xl p-10 max-w-6xl mx-auto border border-white/5">
        <h2 className="text-2xl font-bold text-white mb-6">{traduccion.historiaTitulo}</h2>
        <div className="space-y-4 mb-8 text-slate-300">
          <p>{traduccion.historiaP1}</p>
          <p>{traduccion.historiaP2}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HISTORIA_IMGS.map((img, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-colors">
              <img src={img.src} className={`w-full h-full object-cover ${img.pos}`} alt={`Historia ${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria-home" className="max-w-5xl mx-auto w-full px-4 mb-16">
        {/* He añadido este div con las clases de fondo que tenías originalmente */}
        <div className="bg-slate-900/80 rounded-2xl p-10 shadow-lg border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6">{traduccion.momentos}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {MOMENTOS_IMGS.map((img, i) => (
              <div key={i} className="w-64 h-64 overflow-hidden rounded-2xl group cursor-pointer border border-white/10">
                <img
                  src={`/img/${img}`}
                  alt={`Momento ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;