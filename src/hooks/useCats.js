import { useState, useEffect } from "react";

export default function useCats(limit = 5) {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCats() {
      try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
        if (!res.ok) throw new Error("Error al obtener gatos");
        const data = await res.json();
        setCats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCats();
  }, [limit]);

  return { cats, loading, error };
}
