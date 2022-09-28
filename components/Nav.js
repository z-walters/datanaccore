import Link from "next/link";
import styles from "../styles/Nav.module.css";
import router, { useRouter } from "next/router";
import { Link as ChakraLink } from "@chakra-ui/react";

const page_routes = [
  "home",
  "about",
  "blog",
  "contact-us",
  "login",
  "register",
];

const HighlightedLink = ({ page }) => {
  const use_router = useRouter();
  const href = "/" + (page == "home" ? "" : page);
  const isActive = use_router.asPath === href;

  return (
    <Link href={href} router={router} passHref>
      <ChakraLink
        className={`${styles.link} ${isActive ? styles.highlightedLink : ""}`}
      >
        {page.replace("-", " ")}
      </ChakraLink>
    </Link>
  );
};

const Nav = () => {
  return (
    <nav>
      {page_routes.map((page, i) => {
        return <HighlightedLink key={"nav-" + i} page={page} />;
      })}
    </nav>
  );
};

export default Nav;
