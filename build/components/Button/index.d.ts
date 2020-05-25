import { ReactNode, MouseEventHandler } from 'react';
export declare enum ButtonType {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary"
}
export declare enum ButtonSize {
    Small = "small",
    Medium = "medium",
    Big = "big"
}
interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick: MouseEventHandler;
    buttonType?: ButtonType;
    buttonSize?: ButtonSize;
}
export default function (props: ButtonProps): JSX.Element;
export {};
