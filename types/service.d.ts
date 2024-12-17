export interface servicePageType {
  mainTitle1: string;
  mainTitle2: string;
  description: string;
  imageMain: string;
  sectionTitle1: string;
  sectionTitle2: string;
  sectionDescription: string;
  sectionCards: {
    heading: string;
    description: string;
    photo: string;
  }[];
  section2Title1: string;
  section2Title2: string;
  images: {
    photo: string;
  }[];
  section3Title1: string;
  section3Title2: string;
  section3Description: string;
  section3Image: string;
  section4: {
    heading: string;
    index: number;
    description: string;
    photo: string;
  }[];
  finalPhoto: string;
  finalTitle: string;
  finalDescription: string;
}
