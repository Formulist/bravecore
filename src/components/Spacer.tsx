import { sizes } from "@/app/styles/sizes";
import React from "react";

const fill = {
  display: "flex",
  flex: "1 0 auto",
  minWidth: "0",
};

/**
 * All sizes base 4px (ex: 0=0px, 1=4px ... 100 = 400px)
 */
export const Spacer = ({
  width,
  height,
}: {
  width?: number | "fill";
  height?: number | "fill";
}): JSX.Element => {
  const size = width || height || 0;
  let sizePx = sizes[size];

  let SIZE_STYLE = {};

  if (size === "fill" && width) {
    SIZE_STYLE = {
      ...fill,
      flexFlow: "row nowrap",
    };
  } else if (size === "fill") {
    SIZE_STYLE = {
      ...fill,
      flexFlow: "column nowrap",
    };
  } else if (width) {
    SIZE_STYLE = {
      width: sizePx,
      minWidth: sizePx,
      maxWidth: sizePx,
    };
  } else if (height) {
    SIZE_STYLE = {
      height: sizePx,
      minHeight: sizePx,
      maxHeight: sizePx,
    };
  }

  return <div style={SIZE_STYLE} />;
};
