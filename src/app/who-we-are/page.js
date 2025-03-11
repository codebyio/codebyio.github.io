import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import Section from "@/components/shared/Section/Section";
import WindowCard from "@/components/shared/WindowCard/WindowCard";
import Grid2 from "@mui/material/Grid2";

export default function Home() {
  return (
    <>
      <HeroBanner title='Who We Are' alt='Hero Banner' />
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
          <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
            <WindowCard
              title='Website Development'
              body='Our web development service creates personalized websites, including company profiles, portfolios, and e-commerce sites.'
              href='/asd'
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
            <WindowCard
              title='Website Mockup'
              body='Preview your website’s design and functionality with our detailed mockups before web development begins.'
              href='/asd'
              invertColor={true}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
            <WindowCard
              title='Digital Marketing'
              body='Get practical advice on best practices, server selection, and team recruitment through our tech consultancy service.'
              href='/asd'
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
            <WindowCard
              title='Tech Consultancy'
              body='Get practical advice on best practices, server selection, and team recruitment through our tech consultancy service.'
              href='/asd'
              invertColor
            />
          </Grid2>
        </Grid2>
      </Section>
      <CtaSection />
    </>
  );
}
