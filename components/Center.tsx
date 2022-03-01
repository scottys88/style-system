import styled from "styled-components";

export const Center = styled.div`
  box-sizing: content-box;
  max-inline-size: 102rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 2.4rem;
  @media only screen and (min-width: 768px) {
    padding-inline: 3rem;
  }
  @media only screen and (min-width: 996px) {
    padding-inline: 6rem;
  }
`;
