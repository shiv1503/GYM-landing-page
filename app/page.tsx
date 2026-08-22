import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Facilities from "@/components/Facilities";
import Membership from "@/components/Membership";
import Schedule from "@/components/Schedule";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <StatsBar />
        <Facilities />
        <Membership />
        <Schedule />
        <Trainers />
        <Testimonials />
        <Location />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
