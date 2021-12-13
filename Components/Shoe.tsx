import { useState } from "react";
import styled from "styled-components";

const StyledShoe = styled.li<{isSelected: boolean}>`
  background-color: ${(props) => props.isSelected ? 'green' : 'gray'};
`
const StyledTemplate = styled.div<{isVisible: boolean}>`
  display: ${(props) => props.isVisible ? 'block' : 'none'};
`
const SelectTemplate = ({isVisible, shoeData}) => {
  const [template, setTemplate] = useState('Essential');
  const [priceOrPerc, setPriceOrPerc] = useState('0');
  const templateOption = ['Essential', 'SpecialPrice', 'Sales']
  return(
    <StyledTemplate isVisible={isVisible}>
      <input 
        type="number" 
        maxLength={3}
        value={priceOrPerc}
        onChange={(e) => setPriceOrPerc(e.target.value)}
      />
      <select
        autoFocus
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
      >
        {templateOption.map(option => <option value={option}>{option}</option>)}
      </select>
      <div>
        <p>{shoeData.nome}</p>
        <p>retail price: {shoeData.retail} €</p>
        <p>outlet price: {shoeData.outlet} €</p>
        <p>{template}</p>
      </div>
    </StyledTemplate>
  )
}
const Shoe = ({shoeData}) => {
  //const deleteShoes = props.deleteShoes;
  const [isSelected, setIsSelected] = useState(false);
//CAMBIA VAR/CONST IN INGLESE
  return (
    <>
      <StyledShoe 
        isSelected={isSelected}
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        <p>{shoeData.tipo}</p>
        <p>{shoeData.genere}</p>
        <p>{shoeData.nome}</p>
        <p>retail price: {shoeData.retail} €</p>
        <p>outlet price: {shoeData.outlet} €</p>
        {/* <button
          onClick={(e) => {
            confirm(`Delete ${nome}?`) &&
              deleteShoes(e, indice);
          }}
        >
          Delete
        </button> */}
      </StyledShoe>
      <SelectTemplate 
        isVisible={isSelected}
        shoeData={shoeData}
      />
    </>
  );
};

export default Shoe;
