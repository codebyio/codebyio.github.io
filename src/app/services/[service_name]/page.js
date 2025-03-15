import { notFound } from "next/navigation";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import { services } from "../servicesData";
import Section from "@/components/shared/Section/Section";

export default async function serviceDetail({ params }) {
  const { service_name } = params;
  const serviceData = services.find((service) => service.id === service_name);
  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <HeroBanner title={serviceData.name} alt='Hero Banner' />
      <Section>
        <h3 className='text-center'>{serviceData.description}</h3>
      </Section>
    </>
  );
}
