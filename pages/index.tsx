import Image from "next/image";
import Container from "@/components/Container";
import PostTabs from "@/components/PostTabs";
import FeaturedPostLarge from "@/components/FeaturedPostLarge";

const Home: React.FC = () => {
  return (
    <Container>
      <section className="flex flex-col flex-wrap py-5 mx-5 space-x-0 space-y-5 lg:space-x-5 lg:space-y-0 lg:flex-row lg:flex-nowrap">
        <FeaturedPostLarge />
        <PostTabs />
      </section>
    </Container>
  );
};
export default Home;
