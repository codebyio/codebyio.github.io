"use client";

import { useState } from "react";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./FaqList.module.css";

const FaqList = ({ faqList }) => {
  const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const renderAnswer = (text, links = []) => {
    const isPlainText = !/{{(.*?)}}/.test(text);
    if (isPlainText || links.length === 0) {
      return text; // return as plain string, no wrapping span
    }

    const parts = text.split(/({{.*?}})/g);

    return parts.map((part, idx) => {
      const match = part.match(/{{(.*?)}}/);
      if (match) {
        const key = match[1];
        const link = links.find((l) => l.key === key);
        if (link) {
          return (
            <Link key={idx} href={link.href}>
              {link.text}
            </Link>
          );
        }
        return null;
      }

      // part = plain string → return as-is (no span)
      return part;
    });
  };

  return (
    <>
      {faqList && faqList.length > 0 && (
        <ul className={classes["faq"]}>
          {faqList.map((faq, index) => {
            return (
              <Accordion
                disableGutters
                expanded={expanded === `faq${index}`}
                onChange={handleChange(`faq${index}`)}
                className={`${classes["accordion"]} ${
                  expanded === `faq${index}` && classes["expanded"]
                }`}
                component='li'
              >
                <AccordionSummary
                  expandIcon={<MdKeyboardArrowDown fontSize='1.5rem' color='1a3358' />}
                  className={classes["accordion-summary"]}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails className={classes["accordion-detail"]}>
                  {renderAnswer(faq.answer, faq.links)}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default FaqList;
