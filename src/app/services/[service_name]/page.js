import { notFound } from "next/navigation";

import Section from "@/components/shared/Section/Section";
import Grid2 from "@mui/material/Grid2";
import CtaSection from "@/components/shared/CtaSection/CtaSection";

import { services } from "../servicesData";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import FaqList from "@/components/shared/FaqList/FaqList";

import DISCUSSION from "../../../../public/assets/images/DISCUSSION.png";
import ServiceHeroBanner from "@/components/ServiceHeroBanner/ServiceHeroBanner";

export default async function serviceDetail({ params }) {
  const { service_name } = params;
  const serviceData = services.find((service) => service.id === service_name);
  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <ServiceHeroBanner
        title={"Percepat sales dan layanan online dengan *Website Development*"}
        image={DISCUSSION}
        alt='Discussion'
      />
      <Section fillBg>
        <h3 className='text-center'>{serviceData.description}</h3>
      </Section>
      {serviceData.id == "website-development" && (
        <>
          <Section>
            <Grid2></Grid2>
          </Section>
        </>
      )}
      {serviceData.id == "website-mockup" && <>mockup</>}
      {serviceData.id == "tech-consultancy" && <>tech consultancy</>}
      {serviceData.id == "onestop-solution" && <>one stop</>}
      <Section position='center'>
        <SectionTitle title={serviceData.faqTitle} />
        <FaqList faqList={serviceData.faqList} />
      </Section>
      <CtaSection />
    </>
  );
}
