export interface linksType {
  text: string;
  href: string;
  subLinks?: {
    text: string;
    href: string;
  }[];
}
