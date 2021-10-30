import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styled from "styled-components";

const Shoe = ({tipo, genere, nome, retail, outlet, indice}) => {
  //const deleteShoes = props.deleteShoes;
  const [isSelect, setIsSelect] = useState(false);
//CAMBIA VAR/CONST IN INGLESE
console.log(isSelect)
  return (
    <Item isSelect={isSelect}
      key={uuidv4().toString()}
      className={`shoe ${isSelect ? "isSelected" : ""}`}
      onClick={() => {
        setIsSelect(!isSelect);
      }}
    >
      <p>{tipo}</p>
      <p>{genere}</p>
      <p>{nome}</p>
      <p>retail price: {retail} €</p>
      <p>outlet price: {outlet} €</p>
      {/* <button
        onClick={(e) => {
          confirm(`Delete ${nome}?`) &&
            deleteShoes(e, indice);
        }}
      >
        Delete
      </button> */}
      <hr />
    </Item>
  );
};

const Item = styled.li<{isSelect: boolean}>`
  background-color: ${(props) => props.isSelect ? 'green' : 'gray'};
`

export default Shoe;
