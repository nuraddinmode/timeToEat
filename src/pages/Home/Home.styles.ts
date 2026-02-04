import { media } from "./../../styles/media";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #faf6f2;
  padding: 20px;

  ${media.tablet} {
    gap: 40px;
  }
  ${media.desktop} {
    padding: 60px;
  }
`;
