import styled from "styled-components";

const ButtonBase = styled.button`
  padding: ${(props) =>
    `${props.theme.spacing.small} ${props.theme.spacing.medium}`};
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.25s ease;
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.colors.primary1["100"]};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary1.hover};
  }
`;

const SecondaryButton = styled(ButtonBase)``;

const TextButton = styled(ButtonBase)``;

export type ButtonProps = {
  variation?: "primary" | "secondary" | "text";
  children?: React.ReactNode | HTMLSpanElement;
};

export const Button = ({ variation, children }: ButtonProps) => {
  return variation === "primary" ? (
    <PrimaryButton>{children}</PrimaryButton>
  ) : variation === "secondary" ? (
    <SecondaryButton>{children}</SecondaryButton>
  ) : variation === "text" ? (
    <TextButton>{children}</TextButton>
  ) : (
    <PrimaryButton></PrimaryButton>
  );
};
