import Shoe from "./Shoe";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const Shoes = (props) => {
  const shoes = props.shoes;

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const deleteShoes = async (e, shoeIndex) => {
    console.log("hey");
    e.preventDefault();
    try {
      const body = { shoeIndex };
      await fetch(`http://localhost:3000/api/deleteShoe`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      refreshData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul>
      {shoes.map((shoe) => {
        if(true){return (
          <Shoe
            tipo={shoe.tipo} genere={shoe.genere} nome={shoe.nome} retail={shoe.retail} outlet={shoe.outlet} indice={shoe.indice}
            //deleteShoes={deleteShoes}
          />
        );}
        
      })}
    </ul>
  );
};

export default Shoes;
