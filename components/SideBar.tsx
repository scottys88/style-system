import styled from "styled-components";

const SideBarWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  main {
    flex: 1;
  }
`;

export type SideBarProps = {
  children?: React.ReactNode;
};

export const SideBar = ({ children }: SideBarProps) => {
  return <SideBarWrapper>{children}</SideBarWrapper>;
};
