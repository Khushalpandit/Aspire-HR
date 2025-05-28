import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const StyledNavMenu = styled.ul<{
  direction: "row" | "column";
  gap: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;

type NavMenuProps = {
  gap?: string;
  type: "nav" | "hamburger";
} & React.HTMLAttributes<HTMLUListElement>;

function NavMenu({ gap = "2rem", type, ...props }: NavMenuProps) {
  const direction = type === "nav" ? "row" : "column";

  return (
    <StyledNavMenu direction={direction} gap={gap} {...props}>
      <Dropdown type={type}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Dropdown.NavLink>Home</Dropdown.NavLink>
        </Link>
      </Dropdown>
      <Dropdown type={type}>
        <Dropdown.Toggle>Company</Dropdown.Toggle>
        <Dropdown.List>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>About us</Dropdown.Item>
          </Link>
          <Link
            to="/about#team"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>Our team</Dropdown.Item>
          </Link>
          <Link
            to="/about#pricing"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>Pricing</Dropdown.Item>
          </Link>
          <Link
            to="/about#why-us"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>Why choose us</Dropdown.Item>
          </Link>
          <Link
            to="/about#awards"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>Awards</Dropdown.Item>
          </Link>
          <Link
            to="/about#testimonials"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>Testimonials</Dropdown.Item>
          </Link>
          <Link
            to="/about#faq"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>FAQ</Dropdown.Item>
          </Link>
        </Dropdown.List>
      </Dropdown>
      <Dropdown type={type}>
        <Link
          to="/services"
          style={{
            textDecoration: "none",
            color: "var(--color-brand)",
            fontWeight: "500",
          }}
        >
          <Dropdown.NavLink>Services</Dropdown.NavLink>
        </Link>
      </Dropdown>
      <Dropdown type={type}>
        <Link to="/blog" style={{ textDecoration: "none", color: "inherit" }}>
          <Dropdown.NavLink>Blog</Dropdown.NavLink>
        </Link>
      </Dropdown>
      <Dropdown type={type}>
        <Dropdown.Toggle>More</Dropdown.Toggle>
        <Dropdown.List>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>Profile</Dropdown.Item>
          </Link>
          <Link
            to="/settings"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Dropdown.Item>Settings</Dropdown.Item>
          </Link>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </StyledNavMenu>
  );
}

export default NavMenu;
