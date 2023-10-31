import About from "@/components/About";
import Besheep from "@/components/Besheep";
import Contacts from "@/components/Contacts";
import EventSection from "@/components/EventSection";
import Hero from "@/components/Hero";
import Join from "@/components/Join";

const Home = () => {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <Besheep />
        <About />
        <EventSection />
        <Join />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
