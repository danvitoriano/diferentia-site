import type React from "react";

type MdElProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "md-filled-button": MdElProps & { disabled?: boolean; type?: string };
      "md-outlined-button": MdElProps & { disabled?: boolean; type?: string };
      "md-text-button": MdElProps & { disabled?: boolean; type?: string };
      "md-filled-tonal-button": MdElProps & { disabled?: boolean };
      "md-outlined-text-field": MdElProps & {
        label?: string;
        type?: string;
        required?: boolean;
        value?: string;
        name?: string;
      };
      "md-elevated-card": MdElProps;
      "md-filled-card": MdElProps;
      "md-assist-chip": MdElProps & { label?: string };
      "md-list": MdElProps;
      "md-list-item": MdElProps & {
        type?: "button" | "link" | "text";
        headline?: string;
        supportingText?: string;
        href?: string;
        target?: string;
        selected?: boolean;
        disabled?: boolean;
      };
      "md-divider": MdElProps & { inset?: boolean };
      "md-icon": MdElProps;
    }
  }
}
