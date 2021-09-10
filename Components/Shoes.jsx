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
        return (
          <Shoe
            key={uuidv4().toString()}
            shoe={shoe}
            deleteShoes={deleteShoes}
          />
        );
      })}
    </ul>
  );
};

export default Shoes;