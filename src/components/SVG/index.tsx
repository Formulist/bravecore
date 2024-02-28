import React from "react";
import { library } from "./library";
type SVGKeys = keyof typeof library;
const SVGKeys = Object.keys(library).reduce((acc, key) => {
  return {
    ...acc,
    [key]: key,
  };
}, {} as Record<SVGKeys, SVGKeys>);

export const SVG = (props: { iconKey: SVGKeys }): JSX.Element => {
  const Component = library[props.iconKey];
  if (!Component) return <div />;
  return <Component />;
};

SVG.Keys = SVGKeys;
