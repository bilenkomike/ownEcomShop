import styled from "styled-components";

export const PromoStyled = styled.div`
  position: relative;

  margin-top: 60px;

  & > button {
    position: absolute;
    bottom: 0;
    right: 0;

    border-radius: 0px 4px 4px 0px;

    padding: 13px 40px;
    height: 47px;
  }

  & > div {
    width: 100%;
    & > input {
      width: 100%;
    }
  }
`;
