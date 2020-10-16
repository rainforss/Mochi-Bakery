import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Navbar
        className={
          "d-flex justify-content-around header position-absolute w-100 " +
          (router.pathname === "/"
            ? "nav-main"
            : router.pathname === "/cart"
            ? "nav-cart"
            : "nav-secondary")
        }
        style={{ zIndex: 4 }}
      >
        <Nav>
          <Link href="/contact" passHref>
            <Nav.Link
              className={
                router.pathname === "/contact" ? "active-link" : "internal-link"
              }
            >
              Contact
            </Nav.Link>
          </Link>
        </Nav>

        <Navbar.Brand className="mx-3">
          <Link href="/">
            <a className="logo">Mochi's Bakery</a>
          </Link>
        </Navbar.Brand>

        <Nav>
          <Link href="/products" passHref>
            <Nav.Link
              className={
                router.pathname === "/products"
                  ? "active-link"
                  : "internal-link"
              }
            >
              Products
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
