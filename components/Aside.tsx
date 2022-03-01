import styled from "styled-components";

export const AsideElement = styled.aside`
  border: 1px solid black;
  width: 100%;
  transform: translateX(-100%);
  position: absolute;
  background: white;
  max-width: 26rem;
  &.active {
    transform: translateX(0%);
  }
  @media only screen and (min-width: 769px) {
    position: static;
    transform: translateX(0%);
  }
`;

type AsideProps = {
  children: React.ReactNode;
};

export const Aside = ({ children }: AsideProps) => {
  return <AsideElement>{children}</AsideElement>;
};
