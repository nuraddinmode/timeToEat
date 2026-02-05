import { Device } from "src/shared/styles/media";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #faf6f2;
  padding: 20px;

  @media ${Device.Laptop} {
    gap: 40px;
  }

  @media ${Device.Laptop} {
    padding: 60px;
  }
`;
