import { Hero } from "@modules/Hero";
import { Advertisement } from "@modules/Advertisement";
import { Header } from "@modules/Header";
import { Offers } from "@modules/Offers";
import { Diet } from "@modules/Diet";
import { Premium } from "@modules/Premium/";
import { AboutService } from "@modules/AboutService";
import { Information } from "@modules/Information";
import { Delivery } from "@modules/Delivery";
import { Questions } from "@modules/Questions";
import { Footer } from "@modules/Footer";
import styled from "styled-components";
import { Colors } from "@shared/styles/Colors";
import { Consultation } from "@modules/Consultation";
import { Trial } from "@modules/Trial";
import { Subscription } from "@modules/Subscription";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const Root = styled.div`
  background-color: ${Colors.background.primary};
  max-width: 1500px;
  margin: 0 auto;
`;
const AnimatedSection = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <Root>
      <Advertisement />
      <AnimatedSection>
        <Header />
      </AnimatedSection>

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Offers />
      </AnimatedSection>

      <AnimatedSection>
        <Diet />
      </AnimatedSection>

      <AnimatedSection>
        <Premium />
      </AnimatedSection>

      <AnimatedSection>
        <AboutService />
      </AnimatedSection>

      <AnimatedSection>
        <Information />
      </AnimatedSection>

      <AnimatedSection>
        <Delivery />
      </AnimatedSection>

      <AnimatedSection>
        <Questions />
      </AnimatedSection>

      <AnimatedSection>
        <Consultation />
      </AnimatedSection>

      <AnimatedSection>
        <Trial />
      </AnimatedSection>

      <AnimatedSection>
        <Subscription />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </Root>
  );
};

export { Home };
