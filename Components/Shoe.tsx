import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Label from "./StyledTemplateLabel";

const StyledSelectTemplate = styled.div<{isVisible: boolean}>`
  display: ${(props) => props.isVisible ? 'block' : 'none'};
`

const StyledShoeForSelection = styled.li<{isSelected: boolean}>`
  background-color: ${(props) => props.isSelected ? 'green' : 'gray'};
  div{
    display: flex;
    p:nth-child(1){}
      font-weight: bold;
      font-size: 16px;
    }
    p{
      padding: 8px;
    }
  }
`

const SelectTemplate = ({isVisible, shoeData}) => {
  const [template, setTemplate] = useState('Essential');
  const [priceOrPerc, setPriceOrPerc] = useState('0');
  const templateOption = ['Essential', 'SpecialPrice', 'Sales']
  return(
    <StyledSelectTemplate isVisible={isVisible}>
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
      <Label 
        shoe={shoeData} 
        template={template}
        priceOrPerc={priceOrPerc} 
      />
    </StyledSelectTemplate>
  )
}
const ShoeForSelection = ({shoeData}) => {
  //const deleteShoes = props.deleteShoes;
  const [isSelected, setIsSelected] = useState(false);
//CAMBIA VAR/CONST IN INGLESE
  return (
    <>
      <StyledShoeForSelection 
        isSelected={isSelected}
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        <div>
          <p>{shoeData.nome}</p>
          <p>{shoeData.tipo}</p>
          <p>{shoeData.genere}</p>
          <p>retail price: {shoeData.retail}€</p>
          <p>outlet price: {shoeData.outlet}€</p>
          {/* <button
            onClick={(e) => {
              confirm(`Delete ${nome}?`) &&
                deleteShoes(e, indice);
            }}
          >
            Delete
          </button> */}
        </div>
      </StyledShoeForSelection>
      <SelectTemplate 
        key={uuidv4()}
        isVisible={isSelected}
        shoeData={shoeData}
      />
    </>
  );
};

export default ShoeForSelection;
