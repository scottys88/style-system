import { DefaultTheme } from "styled-components";
import { myTheme } from "../raa-theme";

export const widthAsPercent = (width: keyof DefaultTheme["columnWidths"]): string => {
    return myTheme.columnWidths[width];
};