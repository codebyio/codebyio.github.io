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
          Our mission is to help clients create the websites they envision with the best
          performance. We specialize in Web Development and Tech Consultancy, making sure every
          project meets high standards of quality and efficiency. Our vision is to turn ideas into
          reality by providing personalized, professional, and enjoyable services. We believe in
          simplicity and excellence, and we’re dedicated to making your web dreams come true.
        </h3>
      </Section>
      <Section title='Our Services' position='center'>
        <Grid2 container spacing={3}>
          <Grid2 offset={{ xs: 0, lg: 1.5 }} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <WindowCard
              title='Website Development'
              body='Our web development service creates personalized websites, including company profiles, portfolios, and e-commerce sites.'
              href='/services/website-development'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <WindowCard
              title='Website Mockup'
              body='Preview your website’s design and functionality with our detailed mockups before web development begins.'
              href='/services/website-mockup'
              invertColor={true}
            />
          </Grid2>
          <Grid2 offset={{ sm: 3, md: 0 }} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <WindowCard
              title='Tech Consultancy'
              body='Get practical advice on best practices, server selection, and team recruitment through our tech consultancy service.'
              href='/services/tech-consultancy'
            />
          </Grid2>
        </Grid2>
      </Section>
      <CtaSection />
    </>
  );
}
