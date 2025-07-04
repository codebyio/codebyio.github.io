import { notFound } from "next/navigation";

import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/shared/Section/Section";
import FolderCard from "@/components/shared/FolderCard/FolderCard";
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
      <Section>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <FolderCard />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <FolderCard />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <FolderCard />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <FolderCard />
          </Grid2>
        </Grid2>
      </Section>
      <Section fullscreen></Section>
      <CtaSection />
    </>
  );
}
