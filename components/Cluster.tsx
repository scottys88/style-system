import styled, { DefaultTheme } from "styled-components";
import { Align, Spacing } from "../raa-theme";

type Justify = "flex-start" | "flex-end" | "center" | "space-between";

type ClusterProps = {
  justify?: Justify;
  align?: Align;
  spacing?: Spacing;
  as?: string;
};

export const Cluster = styled.div<ClusterProps>`
  display: flex;

  align-items: ${(props) =>
    props.align === "start"
      ? `flex-start`
      : props.align === "end"
      ? `flex-end`
      : props.align === "center"
      ? `center`
      : `center`};

  justify-content: ${(props) => (props.justify ? props.justify : "default")};

  gap: ${(props) =>
    props.spacing
      ? props.theme.spacing[props.spacing]
      : props.theme.spacing.small};
`;
