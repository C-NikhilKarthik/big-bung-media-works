import { ClientResults } from "@/components/Home/client-results";
import Consultation from "@/components/Home/Consultation";
import Difference from "@/components/Home/difference";
import LandingSection from "@/components/Home/LandingSection";
import OurStorybook from "@/components/Home/OurStorybook";
import Scroll from "@/components/Home/Scroll";
import StoriesTold from "@/components/Home/stories-told";
// import StoryTelling from "@/components/Home/story-telling";

export default function Home() {
  return (
    <div className="w-full pt-32">
      <LandingSection />
      <Scroll />
      <OurStorybook />
      <StoriesTold />
      <Difference />
      <ClientResults />
      <Consultation />
      {/* <StoryTelling /> */}
    </div>
  );
}
