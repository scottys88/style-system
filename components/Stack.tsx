import styled from "styled-components";
import { Align, Spacing } from "../raa-theme";

export interface IStackProps {
  spacing: Spacing;
  justify?: Align;
}

export const Stack = styled.div<IStackProps>`   
    display: flex;
    flex-direction: column;
    width: 100%;
    
    align-items: ${(props) =>
      props.justify === "start"
        ? `flex-start`
        : props.justify === "end"
        ? `flex-end`
        : props.justify === "center"
        ? `center`
        : `center`};
         

    > * + * {
        display: block;
        margin-top: ${(props) =>
          props.spacing
            ? `${props.theme.spacing[props.spacing]}`
            : `${props.theme.spacing.medium}`}    
`;
