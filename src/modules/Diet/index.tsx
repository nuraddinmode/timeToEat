import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Device } from "@shared/styles/media";
import { activities } from "./consts";
import { goals } from "./consts";
import { Button } from "@shared/components/Button";
import Arrow from "@assets/icons/arrow.svg?component";

const Root = styled.form`
  padding: 20px 10px 30px 10px;
  background-color: ${Colors.dietForm};
  border-radius: 15px;
  margin-bottom: 40px;

  @media ${Device.Laptop} {
    margin-bottom: 70px;
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 30px;
  }
`;

const Title = styled.h2`
  color: ${Colors.black};
  text-align: center;
  margin: 0 auto;
  font-family: "TT Norms Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 40px;
  width: 60%;

  @media ${Device.Laptop} {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    flex-direction: row;
    align-items: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "gender w h"
    "age activity activity"
    "goal goal goal";
  grid-template-columns: repeat(3, auto);
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media ${Device.Laptop} {
    display: flex;
  }
`;

// Genders, GenderLabel, Buttons

const Genders = styled.div`
  grid-area: gender;
  position: relative;
`;

const GenderLabel = styled.label`
  color: ${Colors.additionalText};
  font-family: "TT Norms Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: -40%;
  left: 40%;
`;

const Buttons = styled.div`
  border-radius: 60px;
  background-color: ${Colors.background};
  padding: 13px 15px;
  width: fit-content;
  justify-self: center;
`;

// Weigh, Height, Age, StyledInput

const Weight = styled.div`
  grid-area: w;
`;

const Height = styled.div`
  grid-area: h;
`;

const Age = styled.div`
  grid-area: age;
`;

const StyledInput = styled.input`
  padding: 13px 15px;
  border-radius: 60px;
  background-color: ${Colors.background};

  width: fit-content;
  text-align: center;

  &::placeholder {
    color: ${Colors.secondary};
    font-family: "TT Norms Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media ${Device.Laptop} {
  }
`;

// Goal, Activity, StyledSelect

const Activity = styled.div`
  grid-area: activity;
`;

const Goal = styled.div`
  grid-area: goal;
`;

const StyledSelect = styled.select`
  padding: 13px 15px;
  border-radius: 60px;

  background-color: ${Colors.background};
  color: ${Colors.secondary};
  font-family: "TT Norms Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: fit-content;
  text-align: center;
  justify-self: center;

  @media ${Device.Laptop} {
  }
`;

const DietNutrition = () => {
  return (
    <Root>
      <Title>Подберите рацион для своих целей</Title>
      <Wrapper>
        <Grid>
          <Genders>
            <GenderLabel htmlFor="">Пол</GenderLabel>
            <Buttons>
              <button>Ж</button>
              <button>М</button>
            </Buttons>
          </Genders>
          <Weight>
            <StyledInput type="text" placeholder="Ваш вес" />
          </Weight>
          <Height>
            <StyledInput type="text" placeholder="Ваш рост" />
          </Height>
          <Age>
            <StyledInput type="text" placeholder="Ваш возраст" />
          </Age>
          <Activity>
            <StyledSelect name="activity" id="">
              {activities.map(({ option, value }) => (
                <option value={value}>{option}</option>
              ))}
              <Arrow />
            </StyledSelect>
          </Activity>
          <Goal>
            <StyledSelect name="goal">
              {goals.map(({ option, value }) => (
                <option value={value}>{option}</option>
              ))}
              <Arrow />
            </StyledSelect>
          </Goal>
        </Grid>

        <Button>Рассчитать рацион</Button>
      </Wrapper>
    </Root>
  );
};

export { DietNutrition };
