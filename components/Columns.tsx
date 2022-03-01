import styled from "styled-components";
import { Spacing } from "../raa-theme";

type ColumnsProps = {
  spacing?: Spacing;
};

export const Columns = styled.div<ColumnsProps>`
  display: flex;
  flex-wrap: no-wrap;
  gap: ${(props) =>
    props.spacing
      ? props.theme.spacing[props.spacing]
      : props.theme.spacing.small};
`;
