import React from "react";
import useCats from "../hooks/useCats";

function CatGallery() {
  const { cats, loading, error } = useCats(6);

  if (loading) return <p>Cargando gatos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div 
      className="cat-gallery"
      style={{ cursor: "url('/img/paws.png') 16 16, auto" }} // cursor desde public/img
    >
      {cats.map((cat) => (
        <img key={cat.id} src={cat.url} alt="Gato" />
      ))}
    </div>
  );
}

export default CatGallery;
