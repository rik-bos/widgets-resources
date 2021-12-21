/**
 * This file was generated from RadioButtons.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type OrientationEnum = "vertical" | "horizontal";

export interface RadioButtonsProps<Style> {
    name: string;
    style: Style[];
    enum: EditableValue<string>;
    orientation: OrientationEnum;
    label: string;
    onChange?: ActionValue;
}

export interface RadioButtonsPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    enum: string;
    orientation: OrientationEnum;
    label: string;
    onChange: {} | null;
}
