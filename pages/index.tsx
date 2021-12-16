import Shoes from "../Components/Shoes";
import { GlobalStyle } from "../Components/StyledCommon";
import { Provider } from "react-redux";
import { store } from '../store/store'
import Search from "../Components/Search";
import Insert from "../Components/Insert";
import Print from "../Components/Print";
import styled from "styled-components";

const StyledFixedTop = styled.div`
  position: fixed;
  top: 0px;
  background-color: #ffffffe8;
`
const StyledFixedBottom = styled.div`
  padding-top: 120px;
`

const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <StyledFixedTop>
          <Insert />
          <Search />
          <Print />
        </StyledFixedTop>
        <StyledFixedBottom>
          <Shoes shoes={props.shoesFromServer} />
        </StyledFixedBottom>
      </Provider>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/getAllShoes");
  const shoesFromServer = await res.json();
  return {
    props: { shoesFromServer },
  };
};

export default App;
