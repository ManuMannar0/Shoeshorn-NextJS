import { useState } from "react";

const FormSelect = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(shoesList.length).fill(false)
  );
  return (
    <form onSubmit={postShoes}>
      <input type="submit" value="Select" />
    </form>
  );
};

export default FormSelect;
