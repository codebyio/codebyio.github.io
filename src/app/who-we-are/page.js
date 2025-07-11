import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import Section from "@/components/shared/Section/Section";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import WindowCard from "@/components/shared/WindowCard/WindowCard";
import Grid2 from "@mui/material/Grid2";

export default function Home() {
  return (
    <>
      <HeroBanner
        title='Who We Are'
        subtitle='Delivering innovative web solutions and data-driven marketing strategies to help businesses grow.'
        alt='Hero Banner'
      />
      <Section>
        <h3 className='text-center'>
          Founded in 2024, CodebyIO is a website development and digital consultancy studio that
          builds custom, high-performance websites tailored to your brand. We don't use templates.
          Everything we build is designed to fit your identity and goals. We combine clean code with
          clear communication to turn early-stage ideas into fully functional digital experiences.
          Every solution is collaborative, thoughtful, and focused on what works — technically and
          strategically. More than developers, we are your digital partners. We guide, challenge,
          and grow together with you.
        </h3>
      </Section>
      <Section>
        <SectionTitle title='What Drives Us' />
        <Grid2
          container
          spacing={{ xs: 2, sm: 2, md: 3 }}
          flexWrap={{ xs: "nowrap", md: "wrap" }}
          sx={{ overflowX: { xs: "auto", md: "hidden" } }}
          width='100%'
        >
          <Grid2
            offset={{ xs: 0, lg: 1.5 }}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            minWidth={{ xs: 280, sm: 300, md: "auto" }}
          >
            <WindowCard
              title='Vision'
              body='To be the trusted partner in turning digital ideas into websites that work — smart, reliable, and thoughtfully designed'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} minWidth={{ xs: 280, sm: 300, md: "auto" }}>
            <WindowCard
              title='Mission'
              body='To deliver tailored websites and consultancy with real clarity, technical care, and a spirit of collaboration.'
              invertColor={true}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} minWidth={{ xs: 280, sm: 300, md: "auto" }}>
            <WindowCard
              title='Value'
              body='Excellence with purpose. Creativity with clarity. Collaboration with trust.'
            />
          </Grid2>
        </Grid2>
      </Section>
      <CtaSection />
    </>
  );
}
