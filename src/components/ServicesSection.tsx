"use client";

import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Box } from "@mui/material";
import {
  Business,
  Lightbulb,
  ScreenShare,
  EmojiEvents,
  Group,
  Person,
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Global Styles
const GlobalStyle = createGlobalStyle`
  :root {
    --color-brand: #1e88e5;
    --color-grey: #6c757d;
    --color-grey-light: #f1f3f5;
    --color-border: #e0e0e0;
    --color-text-dark: #212529;
    --color-light-background: #ffffff;
  }
`;

// Header Styles
const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8rem 2rem 4rem;

  @media (max-width: 760px) {
    padding: 4rem 1rem 2rem;
  }
`;

const StyledServicesSection = styled.div`
  min-width: 850px;
  max-width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 900px) {
    min-width: 100%;
    padding: 0 1rem;
  }
`;

const StyledTitleWrapper = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto 4rem;
  text-align: center;
`;

const StyledTag = styled.span`
  background-color: var(--color-grey-light);
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  color: var(--color-brand);
  font-size: 1.4rem;
`;

const StyledHeading = styled.h1`
  font-weight: 300;
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 1.3;
  color: var(--color-brand);
`;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey);
`;

// Features Section Styles
const Section = styled.section`
  width: 100%;
  padding: 0 2rem 8rem;
  background-color: var(--color-light-background);

  @media (max-width: 760px) {
    padding: 0 1rem 4rem;
  }
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TitleBox = styled.div`
  text-align: center;
`;

const StyledLabel = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 50px;
  background-color: var(--color-grey-light);
  color: var(--color-brand);
  margin-bottom: 1.6rem;
`;

const Heading = styled.h2`
  font-weight: 300;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1.2;
  color: var(--color-brand);
  margin-bottom: 1rem;
`;

const Subtext = styled.p`
  max-width: 30ch;
  margin: 0 auto;
  font-size: 1.6rem;
  color: var(--color-grey);
`;

const Card = styled(motion.div)`
  padding: 2.4rem;
  border-radius: 2rem;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.6),
    rgba(30, 136, 229, 0.1)
  );
  border: 1px solid var(--color-border);
  box-shadow: 0px 10px 20px rgba(30, 136, 229, 0.1);
  backdrop-filter: blur(8px);
`;

const IconBox = styled.div`
  font-size: 3rem;
  color: var(--color-brand);
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey);
`;

// Feature Data
type FeatureItem = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const leftFeatures: FeatureItem[] = [
  {
    icon: <Business />,
    title: "Taught by Professionals",
    description:
      "Learn directly from top engineers and founders with real-world experience.",
  },
  {
    icon: <Group />,
    title: "Coding Hostels",
    description:
      "Join virtual hostels to study, collaborate, and vibe with fellow learners.",
  },
  {
    icon: <EmojiEvents />,
    title: "Bounties",
    description:
      "Win rewards for solving challenges, contributing to projects, and helping peers.",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: <ScreenShare />,
    title: "Revision Classes",
    description:
      "Stay sharp with weekly revision sessions and topic refreshers.",
  },
  {
    icon: <Person />,
    title: "Peer Code Reviews",
    description:
      "Improve faster with feedback from mentors and batchmates on your actual code.",
  },
  {
    icon: <Lightbulb />,
    title: "Leet Lab",
    description:
      "Ace coding interviews with daily DSA problems, contests, and tracking.",
  },
];

// Animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Feature Card Component
const FeatureCard = ({
  feature,
  index,
}: {
  feature: FeatureItem;
  index: number;
}) => (
  <Card variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index}>
    <IconBox>{feature.icon}</IconBox>
    <CardTitle>{feature.title}</CardTitle>
    <CardDesc>{feature.description}</CardDesc>
  </Card>
);

// Main Component
export default function Feature3() {
  return (
    <>
      <GlobalStyle />

      {/* Services Header */}
      <StyledHeaderWrapper>
        <StyledServicesSection>
          <StyledTitleWrapper>
            <div>
              <StyledTag>Our Services</StyledTag>
            </div>
            <StyledHeading>
              Platform that matches businesses with top-tier talent.
            </StyledHeading>
            <StyledParagraph>
              Our tailored approach integrates seamlessly with your existing
              systems, ensuring a smooth experience from start to finish.
            </StyledParagraph>
          </StyledTitleWrapper>
        </StyledServicesSection>
      </StyledHeaderWrapper>

      {/* Feature Grid */}
      <Section id="features">
        <Container>
          {/* Left Column */}
          <FeatureColumn>
            {leftFeatures.map((feature, idx) => (
              <FeatureCard key={`left-${idx}`} feature={feature} index={idx} />
            ))}
          </FeatureColumn>

          {/* Center Column */}
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <TitleBox>
              <StyledLabel>Features</StyledLabel>
              <Heading>
                Key Benefits of <br />
                <span style={{ fontWeight: "500" }}>Cohorts</span>
              </Heading>
              <Subtext>
                Cohorts are the best way to learn because you finish the course in a timely manner.
              </Subtext>
            </TitleBox>
          </Box>

          {/* Right Column */}
          <FeatureColumn>
            {rightFeatures.map((feature, idx) => (
              <FeatureCard key={`right-${idx}`} feature={feature} index={idx} />
            ))}
          </FeatureColumn>
        </Container>
      </Section>
    </>
  );
}
