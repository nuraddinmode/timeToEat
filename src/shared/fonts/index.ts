import { css } from "styled-components";
import { Device } from "@shared/styles/media";

const Font = {
  Text: {
    H1: css`
      font-family: "Manrope", sans-serif;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      @media ${Device.Laptop} {
        font-size: 60px;
      }
    `,
    H2: css`
      font-family: "Manrope", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      @media ${Device.Laptop} {
        font-size: 48px;
      }
    `,
    H3: css`
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      @media ${Device.Laptop} {
        font-size: 24px;
      }
    `,
    H4: css`
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      @media ${Device.Laptop} {
        font-size: 20px;
      }
    `,
    H5: css`
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      @media ${Device.Laptop} {
        font-size: 16px;
      }
    `,
    H6: css`
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    `,
    P: css`
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    `,
  },
};

export { Font };
