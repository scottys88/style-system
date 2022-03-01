import styled, { DefaultTheme } from "styled-components";
import { Spacing } from "../raa-theme";
import { widthAsPercent } from "../utils/widthAsPercent";

type TilesProps = {
  spacing?: Spacing;
  width: keyof DefaultTheme["columnWidths"];
};

export const Tiles = styled.div<TilesProps>`
  --spacing: ${(props) =>
    props.spacing
      ? props.theme.spacing[props.spacing]
      : props.theme.spacing.small};

  --width: ${(props) =>
    props.width
      ? props.theme.columnWidths[props.width]
      : props.theme.columnWidths["1/2"]};}
  
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing);
  width: 100%;

  > * {
      flex: 0 0 calc(var(--width) - (var(--spacing) / 2));
  }
`;
