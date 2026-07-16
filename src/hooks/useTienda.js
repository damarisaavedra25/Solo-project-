import { useState } from 'react';

export const useTienda = () => {
  const [ordenCompletada, setOrdenCompletada] = useState(null);
  const [colorClasica, setColorClasica] = useState(1);
  const [tallaClasica, setTallaClasica] = useState('S');
  const [colorMiauSel, setColorMiauSel] = useState(1);
  const [tallaMiauSel, setTallaMiauSel] = useState('S');
  const [indiceClasica, setIndiceClasica] = useState(0);
  const [indiceMiau, setIndiceMiau] = useState(0);
  
  // Aquí agregamos el estado para el "Loading"
  const [cargando, setCargando] = useState(false);

  const rotarClasica = () => setIndiceClasica((prev) => (prev + 1) % 3);
  const rotarMiau = () => setIndiceMiau((prev) => (prev + 1) % 3);

  const procesarOrden = async (producto, precio, talla, color) => {
    setCargando(true); // Iniciamos el estado de carga
    try {
      // Simulamos la espera de un servidor
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      const nuevaOrden = {
        folio: 'MAY-' + Math.floor(Math.random() * 10000),
        producto,
        prenda: producto,
        talla,
        color,
        total: '$' + (precio + 200) + ' MXN',
        envio: '$200 MXN'
      };
      setOrdenCompletada(nuevaOrden);
    } catch (error) {
      // Si algo falla, el catch lo atrapa
      console.error("Error al generar orden:", error);
      alert("Hubo un error al procesar tu orden. Intenta de nuevo.");
    } finally {
      // Esto se ejecuta siempre (con o sin error), para quitar el modo carga
      setCargando(false);
    }
  };

  return {
    ordenCompletada, setOrdenCompletada,
    colorClasica, setColorClasica, tallaClasica, setTallaClasica,
    colorMiauSel, setColorMiauSel, tallaMiauSel, setTallaMiauSel,
    indiceClasica, rotarClasica, indiceMiau, rotarMiau,
    cargando, 
    procesarOrden
  };
};