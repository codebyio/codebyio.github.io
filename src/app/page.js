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
      title: "Discovery & Co-Creation",
      description: `
        <strong>Every great journey begins with a conversation</strong> We start by listening. You bring your goals, vision and challenges–we bring the insights, experience and solutions. It’s about co-creating the foundation of something that matters.
      `,
    },
    {
      title: "Development",
      description: `
        <strong>Watch your ideas take shape, one line of code at a time</strong>
        From website mockups to fully functioning websites, you’ll see your project grow in real time. We believe in transparent progress, consistent communication, and meaningful checkpoints.
      `,
    },
    {
      title: "Delivery & Improvement",
      description: `
        <strong>Going live is just the beginning</strong>
        We don’t deliver and disappear. We launch, we observe, we refine. Whether it’s performance tweaks, adding features or adapting new ideas–we’re in this for the long game. Partners don’t walk away after the delivery, they grow together.
      `,
    },
  ];

  return (
    <>
      <HeroBanner
        title='Your Business Digitalization Partner'
        subtitle='Every idea deserves a website that feels right, functions beautifully, and grows with it.'
        alt='Home Hero Banner'
        video
        href='#'
      />
      <Section position='center'>
        <h3 className='text-center'>
          At CodebyIO, we build custom websites through clean code, clear communication, and
          thoughtful collaboration. No templates, no shortcuts—just digital work shaped around what
          matters to you. Whether you’re starting fresh or scaling up, we’re here to help you build
          something real, purposeful, and ready to grow.
        </h3>
      </Section>
      <Section position='center'>
        <SectionTitle
          title='Our Digitalization Solutions'
          subtitle='We provide a variety of digital solutions that include web design, app development, digital marketing and more'
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
              subtitle='From company profiles to e-commerce, we build websites that feel right and run fast'
              icon={<MdLanguage />}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 250, sm: 300, md: "auto" }}>
            <CtaCard
              title='Website Mockup'
              subtitle='See your website before it’s built—mockups help us align on design and experience'
              icon={<MdDesignServices />}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 250, sm: 300, md: "auto" }}>
            <CtaCard
              title='Tech Consultancy'
              subtitle='From hosting to hiring, we help you make smart decisions that grow with your product'
              icon={<MdGroups />}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 250, sm: 300, md: "auto" }}>
            <CtaCard
              title='One-Stop Solution'
              subtitle='Already have a  live site? We add features, fix bugs, and improve things—no full rebuild needed'
              icon={<FaHandshakeSimple />}
            />
          </Grid2>
        </Grid2>
      </Section>
      <Section>
        <SectionTitle
          title='Your Journey with Us'
          subtitle='Every brief is a beginning—and with thoughtful collaboration, we build what truly works.'
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
