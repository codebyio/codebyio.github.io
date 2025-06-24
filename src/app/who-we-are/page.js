import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import Section from "@/components/shared/Section/Section";
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
          At codebyIO, we provide a range of services to help you build and grow your online
          presence — from custom web mockups and development to expert tech consultancy, all
          designed to deliver a high-performance website that fits your business needs.
        </h3>
      </Section>
      <Section title='Our Services' position='center'>
        <Grid2 container spacing={3}>
          <Grid2 offset={{ xs: 0, lg: 1.5 }} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <WindowCard
              title='Vision'
              body='To be the trusted partner for transforming digital dreams into reality, delivering high-quality websites and expert tech consultancy with a fun and engaging approach.'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <WindowCard
              title='Mission'
              body='To provide tailored web solutions and consultancy services, combining creativity, expertise, and a fun spirit to ensure client satisfaction and success.'
              invertColor={true}
            />
          </Grid2>
          <Grid2 offset={{ sm: 3, md: 0 }} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <WindowCard
              title='Value'
              body='We value excellence, creativity, transparency, and trustworthiness. We foster engagement, prioritize customer satisfaction, and make work enjoyable for all.'
            />
          </Grid2>
        </Grid2>
      </Section>
      <CtaSection />
    </>
  );
}
