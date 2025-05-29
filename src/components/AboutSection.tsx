import { IoInfinite, IoOptionsOutline } from "react-icons/io5";
import styled, { createGlobalStyle } from "styled-components";
import Button from "../ui/Button";
import AboutCard from "../ui/AboutCard";
import {
  TbSettings2,
  TbUsers,
  TbChartBar,
  TbTarget,
  TbBuilding,
  TbCertificate,
} from "react-icons/tb";
import {
  PiRocketLight,
  PiHandshake,
  PiLightbulb,
  PiHeart,
  PiUsersThree,
  PiGear,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-brand: #1e88e5;
    --color-brand-light: #64b5f6;
    --color-grey: #6c757d;
    --color-grey-light: #f1f3f5;
    --color-border: #e0e0e0;
    --color-text-dark: #212529;
    --color-light-background: #ffffff;
  }
`;

const StyledAboutSection = styled.section`
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    var(--color-grey-light) 100%
  );
  padding: 8rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-border),
      transparent
    );
  }
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 760px) {
    padding: 0 1rem;
  }
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  gap: 2rem;
  margin: 0 auto 6rem;
  text-align: center;
  position: relative;

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 300;
    color: var(--color-brand);
    line-height: 1.3;
  }

  p {
    font-size: 1.6rem;
    color: var(--color-grey);
    line-height: 1.6;
  }
`;

const StyledLogoBlock = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 1.6rem;
  padding: 1.2rem;
  background: linear-gradient(145deg, #ffffff, var(--color-grey-light));
  box-shadow: 0 4px 20px rgba(30, 136, 229, 0.1);
  border: 1px solid var(--color-border);
  margin-bottom: 1rem;

  .brand-icon {
    color: var(--color-brand);
    font-size: 3.6rem;
  }
`;

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 6rem 0;
  padding: 3rem;
  background: linear-gradient(145deg, #ffffff, var(--color-grey-light));
  border-radius: 2rem;
  box-shadow: 0 4px 20px rgba(30, 136, 229, 0.1);
  border: 1px solid var(--color-border);
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;

  h3 {
    font-size: 3.6rem;
    color: var(--color-brand);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.4rem;
    color: var(--color-grey);
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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

const CardData = [
  {
    icon: TbSettings2,
    heading: "Tailored Solutions",
    content:
      "Custom recruitment strategies designed for your unique business needs and goals.",
  },
  {
    icon: PiRocketLight,
    heading: "Faster Hiring",
    content:
      "Streamlined processes that cut hiring time by 30% while maintaining quality.",
  },
  {
    icon: TbUsers,
    heading: "Access to Top Talent",
    content:
      "Connect with highly qualified candidates across industries and roles.",
  },
  {
    icon: TbChartBar,
    heading: "Data-Driven Approach",
    content: "Make informed decisions with our analytics and market insights.",
  },
];

const statsData = [
  { number: "500+", label: "Companies Served" },
  { number: "10k+", label: "Successful Placements" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "30%", label: "Faster Hiring" },
];

function AboutSection() {
  return (
    <StyledAboutSection>
      <GlobalStyle />
      <Container>
        <StyledTitleWrapper>
          <StyledLogoBlock
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <IoInfinite className="brand-icon" />
          </StyledLogoBlock>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transforming HR Solutions for Modern Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With personalized solutions tailored to your business needs, we
            connect you with the best talent quickly and efficiently, helping
            you build stronger, more effective teams. Our innovative approach
            combines technology with human expertise to deliver exceptional
            results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button>Discover More About Us</Button>
            </Link>
          </motion.div>
        </StyledTitleWrapper>

        <StatsContainer>
          {statsData.map((stat, index) => (
            <StatItem
              key={stat.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </StatItem>
          ))}
        </StatsContainer>

        <StyledCardWrapper>
          {CardData.map((card, index) => (
            <motion.div
              key={card.heading}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <AboutCard {...card} />
            </motion.div>
          ))}
        </StyledCardWrapper>
      </Container>
    </StyledAboutSection>
  );
}

export default AboutSection;
