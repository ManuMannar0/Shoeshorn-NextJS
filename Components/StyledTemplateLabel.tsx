import styled from "styled-components";
import kids from '../imgs/ico_kids.png'; 
import man from '../imgs/ico_man.png'; 
import woman from '../imgs/ico_woman.png'; 
import roadrunning from '../imgs/thumb_road_running.png'; 
import hiking from '../imgs/thumb_hiking.png'; 
import backpacking from '../imgs/thumb_backpacking.png'; 
import winter from '../imgs/thumb_winter.png'; 
import sport from '../imgs/thumb_sport_style.png'; 

//refactor styles (no classes, all styled comp)
const StyledLabel = styled.div`
  width: 23.1cm;
  height: 2.9cm;
  border: 1px solid;
  display: flex;
  padding: 0.3cm;
  .zero{
    width: 2cm;
    height: 100%;
    img{
      height: 77%;
      padding-left: 0.2cm;
      padding-top: 0.4cm;
      padding-right: 0.2cm;
    }
  }
  .uno{
    height: 100%;
    text-align: center;
    z-index: 10;
    img{
      height: 100%;
    }
    div{
      margin-top: -4.5rem;
      font-size: 1.4rem;
    }
  }
  .due{
    width: 13cm;
    height: 100%;
    text-align: center;
    div{
      padding-top: 2.22rem;
      font-size: 2rem;
    } 
  }
  .tre{
    width: 4cm;
    height: 100%;
    text-align: right;
    div:nth-child(1){
      font-size: 0.5cm;
      text-decoration: line-through;
      padding: 0.2rem 0 0.2rem 0;
    }
    div:nth-child(2){
      color: red;
      padding: 3.2rem 0 0.2rem 0;
      font-size: 0.6cm;
    }
  }
`

const Label = () => {
    return(
        <StyledLabel>
            <div className="zero">
                <img src={man.src} alt='genre' />
            </div>
            <div className="uno">
                <img src={hiking.src} alt='style' />
                <div>HIKING</div>
            </div>
                <div className="due">
                <div>ACRO CHUKKA WR 2</div>
            </div>
            <div className="tre">
                <div>140,00 €</div>
                <div>91,00 €</div>
            </div>
        </StyledLabel>
    )
}

export default Label