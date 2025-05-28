import React from "react";
import { Box, Container, Grid, Typography, Paper, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const Section = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-white)",
  padding: theme.spacing(12, 2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "3.6rem",
  fontWeight: 700,
  color: "var(--color-brand)",
  fontFamily: "var(--font-primary)",
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  color: "var(--color-grey)",
  fontFamily: "var(--font-secondary)",
  textAlign: "center",
  marginBottom: theme.spacing(8),
}));

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  background: "linear-gradient(135deg, #ffffff, var(--color-grey-light))",
  borderRadius: "var(--radius-lg)",
  boxShadow: "var(--shadow-md)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "var(--shadow-lg)",
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  color: "var(--color-grey)",
  lineHeight: 1.8,
  fontFamily: "var(--font-secondary)",
  marginBottom: theme.spacing(3),
}));

const ValueItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderLeft: `4px solid var(--color-brand-light)`,
  backgroundColor: "var(--color-grey-light)",
  borderRadius: "var(--radius-sm)",
  marginBottom: theme.spacing(2),
}));

const MotionCard = motion(StyledCard);

export default function About() {
  return (
    <Section>
      <Container>
        <Title>About Aspire HR Consultancy</Title>
        <Subtitle>
          Driven by passion, defined by people – we empower businesses through
          strategic human capital solutions.
        </Subtitle>

        <Grid container spacing={6} mb={10}>
          <Grid item xs={12} md={6}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h5"
                component="h3"
                color="var(--color-brand)"
                mb={2}
                fontWeight={600}
              >
                Our Mission
              </Typography>
              <Paragraph>
                To transform the HR landscape by delivering innovative, ethical,
                and impactful human resource solutions that help businesses
                thrive and individuals reach their potential.
              </Paragraph>
              <Paragraph>
                At Aspire, we don’t just fill roles — we craft futures for
                organizations and their people.
              </Paragraph>
            </MotionCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                component="h3"
                color="var(--color-brand)"
                mb={2}
                fontWeight={600}
              >
                Our Vision
              </Typography>
              <Paragraph>
                To be the leading HR consultancy recognized for reshaping the
                future of work through people-first practices, technology-driven
                hiring, and sustainable workforce development.
              </Paragraph>
              <Paragraph>
                Aspire is committed to building a workforce that’s inclusive,
                agile, and future-ready.
              </Paragraph>
            </MotionCard>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 8 }} />

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h3"
              mb={3}
              color="var(--color-brand)"
              fontWeight={600}
            >
              Our Core Values
            </Typography>
            <ValueItem>
              <Paragraph>
                <strong>Integrity:</strong> We operate with transparency and
                uphold the highest ethical standards in everything we do.
              </Paragraph>
            </ValueItem>
            <ValueItem>
              <Paragraph>
                <strong>Partnership:</strong> We believe in long-term
                relationships, working hand-in-hand with clients to achieve
                shared goals.
              </Paragraph>
            </ValueItem>
            <ValueItem>
              <Paragraph>
                <strong>Innovation:</strong> We embrace change and technology to
                continuously improve HR solutions.
              </Paragraph>
            </ValueItem>
            <ValueItem>
              <Paragraph>
                <strong>Empathy:</strong> We value the human side of HR, putting
                people at the center of every decision.
              </Paragraph>
            </ValueItem>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h3"
              mb={3}
              color="var(--color-brand)"
              fontWeight={600}
            >
              Our Services
            </Typography>
            <Paragraph>
              ✅ Talent Acquisition & Staffing
              <br />
              ✅ HR Policy & Compliance Advisory
              <br />
              ✅ Leadership Development & Training
              <br />
              ✅ Employee Engagement Strategies
              <br />
              ✅ Payroll & Workforce Management
            </Paragraph>
            <Paragraph>
              Whether you're scaling a startup or refining enterprise HR,
              Aspire’s experts bring deep insight and practical tools to
              navigate your challenges.
            </Paragraph>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
