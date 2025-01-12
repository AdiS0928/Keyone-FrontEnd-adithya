export type MenuItemType = {
  label: string;
  url: string;
  children?: MenuItemType[];
  isHeading?: boolean;
};

export type DialCodeType = {
  name: string;
  dialCode: string;
  code: string;
  flag: string;
};

export type ButtonType = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export type FAQType = {
  question: string;
  answer: string;
  button?: ButtonType;
};

export type LabelType = {
  label: string;
  url?: string;
  schemaUrl?: string;
};

export type BreadcrumbType = LabelType[];

export type FormatType = {
  id: number;
  code: string;
  name: string;
  parentId?: number;
  isFeatured?: boolean;
  slug: string;
  heading?: string;
  description?: string;
  poster?: ImageType;
  poster2?: ImageType;
  ogImg?: string;
  gallery?: AnimatedSectionsType;
  children?: FormatType[];
};

export type ImageType = {
  src: string;
  alt: string;
};

export type AnimatedSectionsType = {
  images: ImageType[];
  content: AnimatedContentType;
};

export type AnimatedContentType = {
  heading?: string;
  children?: { heading?: string; texts: string[] }[];
};

export type SVGElementType = {
  className?: string;
};

export type TokenType = string | undefined | null;
