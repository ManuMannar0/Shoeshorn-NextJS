import Head from "next/head";
import Shoes from "../Components/Shoes";
import FormInsert from "../Components/FormInsert";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";


const Home = (props) => {

  //STATE SHOE
  const [isFilterButtton, setIsFilterButton] = useState(true);
  const [buttonText, setButtonText] = useState("FILTER");

  //FILTER DA CONVERTIRE
  // const shoAll = () => {
  const filter = () => {
  //   let selectedShoes = document.querySelectorAll("li:not(.selected)");
  //   for (let shoe of selectedShoes) {
  //     shoe.style.display = "none";
  //   }
  // };
  //FILTER DA CONVERTIRE
  // const filterShowall = () => {
  //   setIsFilterButton(!isFilterButtton);
  //   switch (isFilterButton) {
  //     case true:
  //       setButtonText("SHOW ALL");
  //       break;
  //     case false:
  //       break;

  //     default:
  //       break;
  //   }
  };
  return (
    <>
      <main>
        <GlobalStyle />
        <FormInsert />
        <Shoes shoes={props.shoesFromServer} />
        {/* <button
          onClick={() => {
            //FILTER DA CONVERTIRE
            filterShowall();
          }}
        >
          FILTER
        </button> */}
      </main>
    </>
  );
};

const GlobalStyle = `
* {
  box-sizing: border-box;
}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  input{
    text-transform:uppercase;
  }
`

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/getAllShoes");
  const shoesFromServer = await res.json();
  return {
    props: { shoesFromServer },
  };
};

export default Home;
