declare module "styled-system" {
  export const util: {
    breaks(...args: any[]): any;
    media(n: number): (d: any, i: number) => void;
    mq(n: number): string;
  };

  type ResponsiveValue<T> = T | (T | null)[];

  export type SpaceValue = number | string;
  export type ResponsiveSpaceValue = ResponsiveValue<SpaceValue>;

  export interface SpaceProps {
    m?: ResponsiveSpaceValue;
    mt?: ResponsiveSpaceValue;
    mr?: ResponsiveSpaceValue;
    mb?: ResponsiveSpaceValue;
    ml?: ResponsiveSpaceValue;
    mx?: ResponsiveSpaceValue;
    my?: ResponsiveSpaceValue;
    p?: ResponsiveSpaceValue;
    pt?: ResponsiveSpaceValue;
    pr?: ResponsiveSpaceValue;
    pb?: ResponsiveSpaceValue;
    pl?: ResponsiveSpaceValue;
    px?: ResponsiveSpaceValue;
    py?: ResponsiveSpaceValue;
  }

  export function space(...args: any[]): any;

  export type TextAlignValue =
    | "left"
    | "right"
    | "center"
    | "justify"
    | "justify-all"
    | "start"
    | "end"
    | "match-parent";
  export type ResponsiveTextAlignValue = ResponsiveValue<TextAlignValue>;

  export interface TextAlignProps {
    align?: ResponsiveTextAlignValue;
  }

  export function textAlign(...args: any[]): any;

  export type WidthValue = number | string;
  export type ResponsiveWidthValue = ResponsiveValue<WidthValue>;

  export interface WidthProps {
    w?: ResponsiveWidthValue;
    width?: ResponsiveSpaceValue;
  }

  export function width(...args: any[]): any;
}
