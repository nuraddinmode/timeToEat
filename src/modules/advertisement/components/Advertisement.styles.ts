import styled from "styled-components";
import { media } from "../../../shared/styles/media";

export const Wrapper = styled.div`
  min-height: 40px;
  background-color: #a98c64;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${media.tablet} {
    min-height: 50px;
  }
  ${media.desktop} {
    min-height: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${media.tablet} {
    gap: 15px;
  }
  ${media.desktop} {
    gap: 20px;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-variant-ligatures: none;
  font-family: "TT Norms Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  ${media.tablet} {
    font-size: 15px;
  }
  ${media.desktop} {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  display: none;

  ${media.tablet} {
    display: flex;
    gap: 7px;
    align-items: center;

    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: #fff;
    font-variant-ligatures: none;
    font-family: "TT Norms Pro";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  ${media.desktop} {
    gap: 10px;
    font-size: 24px;
  }
`;
