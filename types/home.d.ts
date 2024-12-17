export interface storybook {
  image: string;
  name1: string;
  name2: string;
}

export interface HomeClientResult {
  _id: string; // Sanity document ID
  heading1: string;
  heading2: string;
  description1: string;
  description2: string;
  name: string;
  companyLogoUrl: string;
  imageUrl: string;
  link: string;
}

export interface productComponentType {
  image: string;
  heading: string;
  description: string;
  text: string;
  href: string;
}

export interface storyTelling {
  _id: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
}

export interface differenceComponentType {
  heading: string;
  subheading: string;
  text1: string;
  text2: string;
  classNameImg?: string;
  image: string;
}

export interface differences {
  heading: string;
  subheading: string;
  content: string;
  classNameImg?: string;
  photoUrl: string;
}

export interface storyBook {
  _id: string;
  text1: string;
  text2: string;
  image: string;
}

export interface consultation {
  _id: string;
  index: number;
  heading: string;
  text: string;
}
