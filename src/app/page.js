import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import Section from "@/components/shared/Section/Section";
import WindowCard from "@/components/shared/WindowCard/WindowCard";
import Grid2 from "@mui/material/Grid2";

export default function Home() {
  return (
    <>
      <HeroBanner
        title='Your Business Digitalization Partner'
        subtitle='Delivering innovative web solutions and data-driven marketing strategies to help businesses grow.'
        alt='Home Hero Banner'
        href='#'
      />
      <Section position='center'>
        <h3 className='text-center'>
          {`At CodeByIO, we turn digital dreams into reality with expert craftsmanship and innovative solutions.`}
          <br></br>
          {`We're committed to delivering high-performance, user-friendly websites that bring visions to life.`}
          <br></br>
          {`Trust in our experience, rely on our professionalism, and enjoy the journey of building something amazing together.`}
        </h3>
      </Section>
      <Section position='center'>
        <Grid2 container spacing={3}>
          <Grid2 item offset={{ xs: 0, md: 2 }} size={{ xs: 12, md: 4 }}>
            <WindowCard
              title='Vision'
              body='To be the trusted partner for transforming digital dreams into reality, delivering high-quality websites and expert tech consultancy with a fun and engaging approach.'
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <WindowCard
              title='Mission'
              body='To provide tailored web solutions and consultancy services, combining creativity, expertise, and a fun spirit to ensure client satisfaction and success.'
              invertColor={true}
            />
          </Grid2>
          <Grid2 item offset={{ xs: 0, md: 4 }} size={{ xs: 12, md: 4 }}>
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
