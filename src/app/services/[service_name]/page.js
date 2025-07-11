import { notFound } from "next/navigation";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/shared/Section/Section";
import Grid2 from "@mui/material/Grid2";
import CtaSection from "@/components/shared/CtaSection/CtaSection";

import { services } from "../servicesData";

export default async function serviceDetail({ params }) {
  const { service_name } = params;
  const serviceData = services.find((service) => service.id === service_name);
  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <HeroBanner title={serviceData.name} img={serviceData.image} alt='Hero Banner' />
      <Section>
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
      <CtaSection />
    </>
  );
}
