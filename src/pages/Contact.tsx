import { useState, ChangeEvent, FormEvent, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  alpha,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BusinessIcon from "@mui/icons-material/Business";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  inquiryType?: string;
  message?: string;
}

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as keyof FormData]: value as string,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.inquiryType.trim()) {
      newErrors.inquiryType = "Inquiry type is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const currentForm = form.current;

      if (currentForm) {
        emailjs
          .sendForm(
            "service_mr76wg5", // Replaced with your Service ID
            "YOUR_TEMPLATE_ID", // Replace with your Template ID
            currentForm,
            "Tj3YXtbZ5xkMLkZAj" // Replaced with your Public Key
          )
          .then(
            () => {
              alert(
                "Thank you for your inquiry. Our HR team will contact you shortly."
              );
              currentForm.reset();
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                inquiryType: "",
                message: "",
              });
            },
            (error) => {
              console.error("EmailJS Error:", error);
              alert("Something went wrong! Failed to send email.");
            }
          );
      } else {
        alert("Form reference not available. Cannot send email.");
      }
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfoItems = [
    {
      icon: <BusinessIcon sx={{ fontSize: 28, color: "#ffffff" }} />,
      title: "HR Department",
      details: ["Aspire HR Solutions", "123 Business Park, Suite 400"],
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 28, color: "#ffffff" }} />,
      title: "HR Support Line",
      details: ["+1 (555) 123-4567", "For urgent HR matters"],
    },
    {
      icon: <EmailIcon sx={{ fontSize: 28, color: "#ffffff" }} />,
      title: "HR Email",
      details: ["hr@aspirehr.com", "For general inquiries"],
    },
    {
      icon: <AccessTimeFilledIcon sx={{ fontSize: 28, color: "#ffffff" }} />,
      title: "HR Support Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM EST",
        "Saturday: 9:00 AM - 1:00 PM EST",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          bgcolor: "var(--color-brand)",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container
          maxWidth="xl"
          disableGutters={true}
          sx={{ px: { xs: 2, md: 4 } }}
        >
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "white" }}
          >
            Contact Our HR Team
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              color: "white",
            }}
          >
            Get in touch with our HR professionals for recruitment, employee
            relations, or any HR-related inquiries.
          </Typography>
        </Container>
      </Box>

      {/* Contact Info and Form Section */}
      <Container
        maxWidth="xl"
        disableGutters={true}
        sx={{ py: 8, px: { xs: 2, md: 4 } }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              position: "relative",
              display: "inline-block",
              pb: 2,
              mb: 3,
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "3px",
                bgcolor: "primary.main",
              },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 5,
              color: "text.secondary",
            }}
          >
            Whether you're looking to hire talent, seeking HR services, or have
            questions about our solutions, our team is here to help. Reach out
            to us using any of the contact methods below or fill out the form.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: theme.spacing(6),
            justifyContent: "center",
          }}
        >
          {/* Contact Information */}
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              maxWidth: "450px",
              mx: "auto",
            }}
          >
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  bgcolor: "var(--color-brand)",
                  color: "white",
                  py: 3,
                  px: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#ffffff" }}
                >
                  HR Contact Information
                </Typography>
              </Box>

              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(3),
                  }}
                >
                  {contactInfoItems.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: isMobile ? "center" : "center",
                        flexDirection: isMobile ? "column" : "row",
                        textAlign: isMobile ? "center" : "left",
                        p: 2,
                        borderRadius: 2,
                        bgcolor: theme.palette.grey[50],
                        transition: "0.3s",
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                          transform: "translateY(-4px)",
                          bgcolor: alpha(theme.palette.grey[100], 0.5),
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mr: isMobile ? 0 : 3,
                          mb: isMobile ? 2 : 0,
                          bgcolor: "var(--color-brand)",
                          width: 55,
                          height: 55,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                          mx: isMobile ? "auto" : 1,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          gutterBottom
                          sx={{ color: theme.palette.text.primary }}
                        >
                          {item.title}
                        </Typography>
                        {item.details.map((detail, detailIndex) => (
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            key={detailIndex}
                          >
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Contact Form */}
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  bgcolor: "var(--color-brand)",
                  color: "white",
                  py: 3,
                  px: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#ffffff" }}
                >
                  Send Us Your HR Inquiry
                </Typography>
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  style={{ marginTop: theme.spacing(2) }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: theme.spacing(3),
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: theme.spacing(3),
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        required
                      />
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: theme.spacing(3),
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        required
                      />
                      <TextField
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        error={!!errors.company}
                        helperText={errors.company}
                        required
                      />
                    </Box>
                    <Box sx={{ marginTop: theme.spacing(2) }}>
                      <Select
                        fullWidth
                        label="Inquiry Type"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        error={!!errors.inquiryType}
                        required
                        displayEmpty
                        inputProps={{ "aria-label": "Inquiry Type" }}
                        sx={{
                          ".MuiSelect-select": {
                            paddingTop: "10px",
                            paddingBottom: "10px",
                          },
                        }}
                      >
                        <MenuItem value="" disabled>
                          Select an inquiry type
                        </MenuItem>
                        <MenuItem value="recruitment">
                          Recruitment Services
                        </MenuItem>
                        <MenuItem value="consulting">HR Consulting</MenuItem>
                        <MenuItem value="training">
                          Training & Development
                        </MenuItem>
                        <MenuItem value="compliance">HR Compliance</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                      {!!errors.inquiryType && (
                        <Typography variant="caption" color="error">
                          {errors.inquiryType}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        required
                      />
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          px: 5,
                          py: 1.5,
                          borderRadius: 2,
                          bgcolor: "var(--color-brand)",
                          "&:hover": {
                            bgcolor: "var(--color-brand)",
                            opacity: 0.9,
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>

      {/* Snackbar for form submission message */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
