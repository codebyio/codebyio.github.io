import Image from "next/image";
import Grid2 from "@mui/material/Grid2";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CtaCard from "@/components/shared/CtaCard/CtaCard";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import Section from "@/components/shared/Section/Section";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import StepList from "@/components/shared/StepList/StepList";

import { MdGroups, MdDesignServices, MdLanguage } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import DISCUSSION from "../../public/assets/images/DISCUSSION.png";
import FaqList from "@/components/shared/FaqList/FaqList";

export default function Home() {
  const steps = [
    {
      title: "Discovery & Co-Creation",
      description: `
        <strong>Every great journey begins with a conversation</strong>
        We start by listening. You bring your goals, vision and challenges. We bring insights, experience and solutions. It’s about co-creating the foundation of something that matters.
      `,
    },
    {
      title: "Development",
      description: `
        <strong>This is where structure takes shape</strong>
        At this stage, we’re hands-on as we build, test and refine with care. We believe in transparent progress, consistent communication, and meaningful checkpoints.
      `,
    },
    {
      title: "Delivery & Improvement",
      description: `
        <strong>Delivery is more than handing things over, it’s a shared milestone</strong>
        Whether it’s launching your website, finalizing a mockup, or handing off a roadmap, we make sure it’s solid, aligned, and ready to perform. After that, we remain within reach for support, improvements, or the next step when you're ready.
      `,
    },
  ];

  const faqList = [
    {
      question: "How do I know if CodebyIO is the right fit for my project?",
      answer:
        "We’re the right partner if you’re looking to digitalize your business. Whether it’s building a website, an app, e-commerce platform, designing mockups, or setting up the right tech foundation. We help you to do it right from the start.",
    },
    {
      question: "Do I need to know exactly what I want before reaching out?",
      answer:
        "Not at all – that’s part of our job. If you are unsure where to start or what makes the most sense technically, we’ll walk through it with you and help define a direction that fits your business.",
    },
    {
      question: "What’s your process like – and is the initial consultation free?",
      answer:
        "We usually start with a light call or chat to understand your goals and challenges. No pitch, just clarity. Yes, it’s free of charge! We start by listening, not pitching.",
    },
    {
      question: "I already have a website. Can you help me improve it?",
      answer:
        "Absolutely. Whether you’re looking to improve your website, add new features or fix what’s not working, we’ll step in with focused support where it matters most.",
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
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 300, md: "auto" }}>
            <CtaCard
              title='Website Development'
              subtitle='From company profiles to e-commerce, we build websites that feel right and run fast'
              icon={<MdLanguage />}
              href='/services/website-development'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 300, md: "auto" }}>
            <CtaCard
              title='Website Mockup'
              subtitle='See your website before it’s built. Mockups help us align on design and experience'
              icon={<MdDesignServices />}
              href='/services/website-mockup'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 300, md: "auto" }}>
            <CtaCard
              title='Tech Consultancy'
              subtitle='From hosting to hiring, we help you make smart decisions that grow with your product'
              icon={<MdGroups />}
              href='/services/tech-consultancy'
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }} minWidth={{ xs: 300, md: "auto" }}>
            <CtaCard
              title='One-Stop Solution'
              subtitle='Already have a  live site? We add features, fix bugs, and improve things, no full rebuild needed'
              icon={<FaHandshakeSimple />}
              href='/services/onestop-solution'
            />
          </Grid2>
        </Grid2>
      </Section>
      <Section fillBg>
        <SectionTitle
          title='Your Journey with Us'
          subtitle='Every brief is a beginning—and with thoughtful collaboration, we build what truly works.'
          horizontalStyle
          inverted
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
            <StepList steps={steps} inverted />
          </Grid2>
        </Grid2>
      </Section>
      <Section position='center'>
        <SectionTitle title='General - Frequently Asked Question (FAQ)' />
        <Grid2
          container
          spacing={2}
          alignItems={{ xs: "center" }}
          justifyContent={{ xs: "center" }}
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
            <FaqList faqList={faqList} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 7, md: 6 }}>
            <Image src={DISCUSSION} className='img-fluid' alt='Steps Discussion' />
          </Grid2>
        </Grid2>
      </Section>
      <CtaSection />
    </>
  );
}
