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
  Assignment,
  School,
  People,
  AccountBalance,
  WorkOutline,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import AboutCard from "../ui/AboutCard";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
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
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.6)
  );
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 20px rgba(30, 136, 229, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(30, 136, 229, 0.15);
    border-color: var(--color-brand-light);
  }
`;

const IconBox = styled.div`
  font-size: 3rem;
  color: var(--color-brand);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  background: linear-gradient(145deg, #ffffff, var(--color-grey-light));
  border-radius: 1.2rem;
  width: fit-content;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 15px rgba(30, 136, 229, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-brand);
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey);
  line-height: 1.6;
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
    title: "Integrity",
    description:
      "We operate with transparency and uphold the highest ethical standards in everything we do.",
  },
  {
    icon: <Group />,
    title: "Partnership",
    description:
      "We believe in long-term relationships, working hand-in-hand with clients to achieve shared goals.",
  },
  {
    icon: <EmojiEvents />,
    title: "Innovation",
    description:
      "We embrace change and technology to continuously improve HR solutions.",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: <ScreenShare />,
    title: "Empathy",
    description:
      "We value the human side of HR, putting people at the center of every decision.",
  },
  {
    icon: <Person />,
    title: "Talent Acquisition & Staffing",
    description:
      "Expert recruitment services to find the perfect match for your organization.",
  },
  {
    icon: <Lightbulb />,
    title: "HR Solutions",
    description:
      "Comprehensive HR services including policy advisory, training, engagement, and payroll management.",
  },
];

// Animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
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
  <Card
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    custom={index}
  >
    <IconBox>{feature.icon}</IconBox>
    <CardTitle>{feature.title}</CardTitle>
    <CardDesc>{feature.description}</CardDesc>
  </Card>
);

const ServicesSection = styled.section`
  width: 100%;
  padding: 4rem 2rem 8rem;
  background-color: var(--color-light-background);
  border-top: 1px solid var(--color-grey-light);

  @media (max-width: 760px) {
    padding: 2rem 1rem 4rem;
  }
`;

const ServicesContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  justify-content: center;
  margin-top: 2rem;
`;

const ServicesDescription = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.6rem;
  color: var(--color-grey);
  line-height: 1.6;
`;

type ServiceItem = {
  icon: React.ElementType;
  heading: string;
  content: string;
};

const servicesData: ServiceItem[] = [
  {
    icon: Business,
    heading: "Talent Acquisition & Staffing",
    content:
      "Expert recruitment services to find the perfect match for your organization's needs.",
  },
  {
    icon: Assignment,
    heading: "HR Policy & Compliance",
    content:
      "Stay compliant with comprehensive HR policy development and regulatory guidance.",
  },
  {
    icon: School,
    heading: "Leadership Development",
    content:
      "Build strong leaders through targeted training and development programs.",
  },
  {
    icon: People,
    heading: "Employee Engagement",
    content:
      "Create a positive workplace culture with effective engagement strategies.",
  },
  {
    icon: AccountBalance,
    heading: "Payroll & Workforce Management",
    content:
      "Streamline your payroll processes and optimize workforce management.",
  },
  {
    icon: WorkOutline,
    heading: "Project-based Hiring",
    content:
      "Flexible staffing solutions for project-specific needs with skilled professionals on demand.",
  },
];

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
              Comprehensive HR Solutions for Your Business
            </StyledHeading>
            <StyledParagraph>
              Whether you're scaling a startup or refining enterprise HR,
              Aspire's experts bring deep insight and practical tools to
              navigate your challenges.
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
            minHeight="400px"
          >
            <TitleBox>
              <StyledLabel>Our Core Values</StyledLabel>
              <Heading>
                Building Trust Through <br />
                <span style={{ fontWeight: "500" }}>Excellence</span>
              </Heading>
              <Subtext>
                Our commitment to integrity, partnership, innovation, and
                empathy drives everything we do.
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

      {/* Services Section */}
      <ServicesSection>
        <ServicesContainer>
          <StyledTitleWrapper>
            <div>
              <StyledTag>What We Offer</StyledTag>
            </div>
            <StyledHeading>Comprehensive HR Services</StyledHeading>
            <ServicesDescription>
              Whether you're scaling a startup or refining enterprise HR,
              Aspire's experts bring deep insight and practical tools to
              navigate your challenges. Our comprehensive suite of services is
              designed to support your business at every stage of growth.
            </ServicesDescription>
          </StyledTitleWrapper>

          <ServicesGrid>
            {servicesData.map((service, index) => (
              <AboutCard
                key={index}
                icon={service.icon}
                heading={service.heading}
                content={service.content}
              />
            ))}
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>
    </>
  );
}
