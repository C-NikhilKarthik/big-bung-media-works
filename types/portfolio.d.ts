export interface portfolioType {
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export interface PageProps {
  params: {
    id: string;
  };
}
