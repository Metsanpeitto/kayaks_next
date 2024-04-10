export type Locale = "en-US" | "es";

export interface FrameProps {
  frameTitle: String;
}

export interface CardProps {
  image?: JSX.Element;
  text?: String;
  title?: String;
}

export interface NavbarProps {
  locale: String;
}
