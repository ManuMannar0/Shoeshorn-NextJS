import { useState } from "react";
import { useRouter } from "next/router";
import refresh from "../lib/refresh";

const FormInsert = (props) => {
  const [tipo, setTipo] = useState("MAN");
  const [genere, setGenere] = useState("ROAD RUNNING");
  const [nome, setNome] = useState("");
  const [retail, setRetail] = useState("");
  const [outlet, setOutlet] = useState("");

  const maxLenghtPrice = 6;
  const maxLenghtName = 26;
  const maxPrice = 199;

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleInsert = () => {
    confirm(`Insert ${nome}?`) && postShoes();
  };
  const postShoes = async (e) => {
    e.preventDefault();

    try {
      const body = { tipo, genere, nome, retail, outlet };

      confirm(`Insert ${nome}?`) &&
        (await fetch(`http://localhost:3000/api/postShoes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }));
      () => refresh;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={postShoes}>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)} autoFocus>
        <option value="MAN">MAN</option>
        <option value="WOMAN">WOMAN</option>
        <option value="CHILD">CHILD</option>
      </select>
      <p />
      <select
        value={genere}
        onChange={(e) => setGenere(e.target.value)}
        autoFocus
      >
        <option value="ROAD RUNNING">ROAD RUNNING</option>
        <option value="TRAIL RUNNING">TRAIL RUNNING</option>
        <option value="HIKING">HIKING</option>
        <option value="BACKPACKING">BACKPACKING</option>
        <option value="WINTER">WINTER</option>
      </select>
      <p />
      <input
        onChange={(e) => setNome(e.target.value.toUpperCase())}
        placeholder="Nome"
        type="text"
        maxLength={maxLenghtName}
        value={nome}
      />
      <p />
      <input
        onChange={(e) => setRetail(e.target.value)}
        placeholder="Retail"
        type="number"
        step="0.1"
        min="1"
        max="200"
        maxLength={maxLenghtPrice}
        value={retail}
      />
      <p />
      <input
        onChange={(e) => setOutlet(e.target.value)}
        placeholder="Outlet"
        type="number"
        step="0.1"
        min="1"
        max={maxPrice}
        maxength={maxLenghtPrice}
        value={outlet}
      />
      <p />
      <input
        disabled={!nome || !retail || !outlet}
        type="submit"
        value="INSERT"
      />
    </form>
  );
};

export default FormInsert;
