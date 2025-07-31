import Image from "next/image";
import Grid2 from "@mui/material/Grid2";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import Section from "@/components/shared/Section/Section";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import WindowCard from "@/components/shared/WindowCard/WindowCard";
import CoreValue from "@/components/shared/CoreValue/CoreValue";

import CORE_VALUES from "../../../public/assets/images/CORE_VALUES.png";

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
          Founded in 2024, CodebyIO is a website development and digital consultancy agency that
          builds custom, high-performance websites tailored to your brand. We don't use templates.
          Everything we build is designed to fit your identity and goals. We combine clean code with
          clear communication to turn early-stage ideas into fully functional digital experiences.
          Every solution is collaborative, thoughtful, and focused on what works — technically and
          strategically. More than developers, we are your digital partners. We guide, challenge,
          and grow together with you.
        </h3>
      </Section>
      <Section>
        <Grid2
          container
          spacing={{ xs: 2, sm: 2, md: 3 }}
          flexWrap={{ xs: "nowrap", md: "wrap" }}
          sx={{ overflowX: { xs: "auto", md: "hidden" } }}
          width='100%'
        >
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }} minWidth={{ xs: 280, sm: 300, md: "auto" }}>
            <WindowCard
              title='Vision'
              body='We imagine a digital world where businesses feel confident about what they build. Our role is to bring clarity, care, and professionalism into every step, so each solution is created with purpose and direction.'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }} minWidth={{ xs: 280, sm: 300, md: "auto" }}>
            <WindowCard
              title='Mission'
              body='We help businesses build digital solutions with confidence. We work through clear structure, open communication, and consistent collaboration. Our process is made to guide ideas into results that feel aligned, purposeful, and easy to understand.'
              invertColor={true}
            />
          </Grid2>
        </Grid2>
        <br></br>
        <br></br>
        <Grid2 container spacing={4} alignItems='center' justifyContent='center'>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 5 }}>
            <Image src={CORE_VALUES} className='img-fluid' alt='Core Values' />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 7 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 12 }}>
                <CoreValue
                  title='Care in Every Step'
                  description='We give every part of the process the attention it deserves. Nothing is rushed, and nothing is treated like a formality'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12 }}>
                <CoreValue
                  title='Professional in Practice'
                  description='We work with structure and transparency, so clients always know where things stand and what comes next. Communication stays clear, the process stays on track'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12 }}>
                <CoreValue
                  title='Build with Purpose'
                  description='We prioritize results that align with your goals. What we build is made to last, not just to launch'
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12 }}>
                <CoreValue
                  title='Work Like a Partner'
                  description='We guide the process with structure and clarity, making sure every decision feels informed, aligned, and built on trust'
                />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Section>
      <CtaSection />
    </>
  );
}
