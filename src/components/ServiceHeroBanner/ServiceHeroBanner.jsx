import Image from "next/image";
import Section from "@/components/shared/Section/Section";
import Grid2 from "@mui/material/Grid2";

import classes from "./ServiceHeroBanner.module.css";

const ServiceHeroBanner = ({ title, description, features, image, alt }) => {
  const renderText = (text) => {
    const isPlainText = !/\*{1,2}(.*?)\*{1,2}/.test(text);
    if (isPlainText) {
      return text;
    }

    const parts = text.split(/(\*{1,2}.*?\*{1,2})/g);

    return parts.map((part, idx) => {
      if (/^\*{1,2}(.*?)\*{1,2}$/.test(part)) {
        const boldText = part.replace(/^\*{1,2}(.*?)\*{1,2}$/, "$1");
        return <strong key={`bold-${idx}`}>{boldText}</strong>;
      }

      return part;
    });
  };

  return (
    <Section position='center' heroBanner serviceBanner>
      <Grid2 container alignItems='center'>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <h1 className={classes["title"]}>{renderText(title)}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sint dolorem placeat.
            Ad neque in aut. Asperiores, sint ab. Magnam, quae. Sapiente dolorem alias dolorum eos
            fugiat necessitatibus dolore voluptates!
          </p>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Image src={image} className='img-fluid' alt={alt} />
        </Grid2>
      </Grid2>
    </Section>
  );
};

export default ServiceHeroBanner;
