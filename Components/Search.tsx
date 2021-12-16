import { StyledSection } from "./StyledCommon"
import { useDispatch, useSelector } from "react-redux";
import { FILTER_UPDATE } from '../store/actions'
import { filterSelector } from "../store/selectors";

const Search = () => {
    const dispatch = useDispatch()
    const filter = useSelector(filterSelector)

    return(
        <StyledSection>
        <input 
            type="text" 
            placeholder="search here" 
            value={filter} 
            onChange={(e) => dispatch(FILTER_UPDATE(e.target.value))}
        />
        </StyledSection>
    )
}

export default Search