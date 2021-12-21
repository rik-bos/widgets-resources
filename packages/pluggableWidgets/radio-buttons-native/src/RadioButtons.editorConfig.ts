import { StructurePreviewProps } from "@mendix/piw-utils-internal";
import { RadioButtonsPreviewProps } from "../typings/RadioButtonsProps";
import darkRadioIcon from "./assets/radioButton_dark.svg";
import lightRadioIcon from "./assets/radioButton_light.svg";

export function getPreview(values: RadioButtonsPreviewProps, isDark: boolean): StructurePreviewProps {
    const label: StructurePreviewProps = {
        type: "Container",
        borders: false,
        children: [
            { type: "Container", padding: 2 },
            {
                type: "Text",
                content: values.label,
                grow: 1,
                fontColor: isDark ? "#D6D6D6" : "#0A1324"
            },
            { type: "Container", padding: 2 }
        ]
    };
    const itemLabel: StructurePreviewProps = {
        type: "Container",
        borders: false,
        children: [
            { type: "Container", padding: 2 },
            {
                type: "Text",
                content: values.enum,
                grow: 1,
                fontColor: isDark ? "#D6D6D6" : "#0A1324"
            },
            { type: "Container", padding: 2 }
        ]
    };

    const radioImage: StructurePreviewProps = {
        type: "Image",
        document: decodeURIComponent((isDark ? darkRadioIcon : lightRadioIcon).replace("data:image/svg+xml,", "")),
        width: 30,
        height: 30
    };

    const radioItemRow: StructurePreviewProps = {
        children: [radioImage, itemLabel],
        borders: false,
        padding: 4,
        ...(values.orientation === "horizontal"
            ? {
                  type: "RowLayout",
                  columnSize: "grow"
              }
            : {
                  type: "Container"
              })
    };

    const children = [label, radioItemRow];

    return {
        type: "Container",
        borders: false,
        padding: 4,
        children
    };
}
