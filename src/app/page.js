import Image from "next/image";
import Grid2 from "@mui/material/Grid2";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CtaCard from "@/components/shared/CtaCard/CtaCard";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import Section from "@/components/shared/Section/Section";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

import { MdGroups, MdDesignServices, MdLanguage } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import DISCUSSION from "../../public/assets/images/DISCUSSION.png";
import StepList from "@/components/shared/StepList/StepList";

export default function Home() {
  const steps = [
    {
      title: "Requirement Gathering",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit laboriosam, velit architecto illo, corporis sequi temporibus molestias dolor dolorem a iusto voluptate facere blanditiis quis magnam laborum eos rerum?",
    },
    {
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit laboriosam, velit architecto illo, corporis sequi temporibus molestias dolor dolorem a iusto voluptate facere blanditiis quis magnam laborum eos rerum?",
    },
    {
      title: "Delivery & Improvement",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit laboriosam, velit architecto illo, corporis sequi temporibus molestias dolor dolorem a iusto voluptate facere blanditiis quis magnam laborum eos rerum?",
    },
  ];

  return (
    <>
      <HeroBanner
        title='Your Business Digitalization Partner'
        subtitle='Delivering innovative web solutions and data-driven marketing strategies to help businesses grow.'
        alt='Home Hero Banner'
        video
        href='#'
      />
      <Section position='center'>
        <h3 className='text-center'>
          At CodeByIO, we’re not just website developer, we’re your digital partners. We specialize
          in fully custom-coded websites tailored to your brand’s identity and built for high
          performance. With a strong foundation, our solutions are never templated, they’re crafted!
          We bring more than technical expertise; we bring collaboration. We aim to go beyond the
          typical client-vendor relationship by working closely with you as a strategic partner.
          Whether you’re starting from stratch or scaling your digital presence, we help turn your
          vision into a fully functional, optimized experience.
        </h3>
      </Section>
      <Section position='center'>
        <SectionTitle
          title='Our Digitalization Solutions'
          subtitle='We provide a variety of digital solutions that include responsive web design, app development, digital marketing strategies and more.'
        />
        <Grid2
          container
          spacing={{ xs: 2, sm: 2, md: 4 }}
          flexWrap={{ xs: "nowrap", md: "wrap" }}
          sx={{ overflowX: { xs: "auto", md: "hidden" } }}
          width='100%'
        >
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 250, sm: 300, md: "auto" }}>
            <CtaCard
              title='Website Development'
              subtitle='Increasing conversions, repeat traffic, and online authority across your website is our top priority'
              icon={<MdLanguage />}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 250, sm: 300, md: "auto" }}>
            <CtaCard
              title='Website Mockup'
              subtitle='Increasing conversions, repeat traffic, and online authority across your website is our top priority'
              icon={<MdDesignServices />}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 250, sm: 300, md: "auto" }}>
            <CtaCard
              title='Tech Consultancy'
              subtitle='Increasing conversions, repeat traffic, and online authority across your website is our top priority'
              icon={<MdGroups />}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 250, sm: 300, md: "auto" }}>
            <CtaCard
              title='One-Stop Solution'
              subtitle='Increasing conversions, repeat traffic, and online authority across your website is our top priority'
              icon={<FaHandshakeSimple />}
            />
          </Grid2>
        </Grid2>
      </Section>
      <Section position='center'>
        <SectionTitle
          title='Your Journey With Us'
          subtitle='We provide a variety of digital solutions that include responsive web design, app development, digital marketing strategies and more.'
          horizontalStyle
        />
        <Grid2
          container
          spacing={2}
          alignItems={{ md: "center" }}
          justifyContent={{ sm: "center" }}
        >
          <Grid2 size={{ xs: 12, sm: 7, md: 6 }}>
            <Image src={DISCUSSION} className='img-fluid' alt='Steps Discussion' />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
            <StepList steps={steps} />
          </Grid2>
        </Grid2>
      </Section>
      <CtaSection />
    </>
  );
}
