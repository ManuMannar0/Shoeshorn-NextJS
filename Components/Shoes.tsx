import Shoe from "./Shoe";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import {StyledSection} from './StyledCommon'
import { useSelector } from "react-redux";
import { filterSelector } from "../store/selectors";

const Shoes = ({shoes}) => {
  const filter = useSelector(filterSelector)
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
      <ul>
        {
          shoes.map(shoe => {
            if(shoe.nome.toLowerCase().includes(filter.toLowerCase())){
              return(
                <Shoe
                  key={uuidv4()}
                  shoe={shoe}
                  //deleteShoes={deleteShoes}
                />
              )
            }
          })
        }
      </ul>
    </StyledSection>
    </>
  );
};

export default Shoes;
