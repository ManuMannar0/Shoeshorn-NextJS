import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Shoe = (props) => {
  const deleteShoes = props.deleteShoes;
  const [focused, setFocused] = useState(false);

  return (
    <li
      key={uuidv4().toString()}
      className={`shoe ${focused ? "selected" : ""}`}
    >
      <h1>{focused}</h1>
      <p key={uuidv4().toString()}>{props.shoe.tipo}</p>
      <p key={uuidv4().toString()}>{props.shoe.genere}</p>
      <h3 key={uuidv4().toString()}>{props.shoe.nome}</h3>
      <p key={uuidv4().toString()}>retail price: {props.shoe.retail} €</p>
      <p key={uuidv4().toString()}>outlet price: {props.shoe.outlet} €</p>
      <button
        key={uuidv4().toString()}
        onClick={(e) => {
          confirm(`Delete ${props.shoe.nome}?`) &&
            deleteShoes(e, props.shoe.indice);
        }}
      >
        Delete
      </button>
      <button
        key={uuidv4().toString()}
        onClick={() => {
          setFocused(!focused);
        }}
      >
        Select
      </button>
      <hr key={uuidv4().toString()} />
    </li>
  );
};

export default Shoe;
