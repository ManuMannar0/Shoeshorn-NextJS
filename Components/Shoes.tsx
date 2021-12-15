import Shoe from "./Shoe";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useState } from "react";
import {StyledSection} from './StyledCommon'

const Shoes = ({shoes}) => {
  const [filter, setFilter] = useState('')
  // const router = useRouter();
  // const refreshData = () => {
  //   router.replace(router.asPath);
  // };

  // const deleteShoes = async (e, shoeIndex) => {
  //   console.log("hey");
  //   e.preventDefault();
  //   try {
  //     const body = { shoeIndex };
  //     await fetch(`http://localhost:3000/api/deleteShoe`, {
  //       method: "DELETE",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });
  //     refreshData();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
    <StyledSection>
      <input 
        type="text" 
        placeholder="search here" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
      />
    </StyledSection>
    <StyledSection>
      <ul>
        {
          shoes.map(shoeData => {
            if(shoeData.nome.toLowerCase().includes(filter.toLowerCase())){
              return(
                <Shoe
                  key={uuidv4()}
                  shoeData={shoeData}
                  //deleteShoes={deleteShoes}
                />
              )
            }
          })
        }
        {/* {shoes.map((shoeData) => {
          if(shoeData.nome.includes(filter)){
            return(
              <Shoe
              key={uuidv4()}
              shoeData={shoeData}
              //deleteShoes={deleteShoes}
            />
            )
          }
            }
          )
        } */}
      </ul>
    </StyledSection>
    <StyledSection>
      <button onClick={() => false}>PRINT</button>
    </StyledSection>
    </>
  );
};

export default Shoes;
