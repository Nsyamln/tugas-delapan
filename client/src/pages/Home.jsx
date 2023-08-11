import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const [regionals, setRegionals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/regional_art")
      .then((response) => response.json())
      .then((regionals) => setRegionals(regionals));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 pb-8 px-20 py-4">
      <div className="text-xl text-justify ">
        <p className="text-4xl ">Kesenian Daerah</p>
        <p>
          Indonesia adalah negara yang memiliki banyak keberagaman salah satunya
          adalah keberagaman budaya. Dengan adanya keberagaman budaya, kemudian
          menciptakan berbagai jenis kesenian tradisional.
        </p>
        <p>
          Dari berbagai kesenian tradisional, ada banyak jenis kesenian yang
          sudah terkenal hingga manca negara, lo. Kali ini kita akan berkenalan
          dengan beberapa kesenian tradisional yang terkenal dari berbagai
          wilayah di Indonesia.
        </p>
      </div>
      {regionals.map((ra) => (
        <div
          key={ra.id}
          className="bg-c2 px-4 pb-2 rounded-xl flex flex-col  w-56  aligns-center "
        >
          <h3 className="text-3xl">{ra.name}</h3>
          <img
            src={ra.pict}
            alt={ra.name}
            className="max-w-full h-auto rounded-lg"
          />
          <p className="text-xl"> {ra.from}</p>
          <Link to={`/regional_art/${ra.id}`}>
            <Button className="rounded-xl bg-c3 border-none  text-lg px-4 py-2 ">
              Detail
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
