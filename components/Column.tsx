import styled, { DefaultTheme } from "styled-components";
import { myTheme } from "../raa-theme";
import { widthAsPercent } from "../utils/widthAsPercent";

type ColumnProps = {
  width: keyof DefaultTheme["columnWidths"];
};

export const Column = styled.div<ColumnProps>`
  width: 100%;

  ${(props) =>
    props.width === "content"
      ? `flex-shrink: 0;`
      : props.width === "fluid"
      ? undefined
      : `flex: 0 0 ${widthAsPercent(props.width)}`}
`;
