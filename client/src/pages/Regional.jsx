import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Regional() {
  const [regional, setRegional] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/regional_art/${id}`)
      .then((response) => response.json())
      .then((regional) => setRegional(regional));
  }, [id]);

  return (
    <main>
      {regional ? (
        <>
          <h1>{regional.name}</h1>

          <p>Asal Daerah : {regional.from}</p>
          <p>{regional.description}</p>
        </>
      ) : (
        "Loading..."
      )}
    </main>
  );
}
