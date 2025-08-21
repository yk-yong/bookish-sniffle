declare module "@newss/ui/components/button/type" {
  import { TextProps } from "@newss/ui";

  export type ButtonType = "primary" | "secondary" | "text";

  export interface CustomButtonProps {
    type?: ButtonType;
  }

  export interface CustomButtonTextProps {
    textProps?: TextProps;
  }
}
