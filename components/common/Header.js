import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";

const Header = () => {
  const router = useRouter();
  const [session, loading] = useSession();

  return (
    <>
      <Navbar
        className={
          "d-flex justify-content-around header position-absolute w-100 " +
          (router.pathname === "/"
            ? "nav-main"
            : router.pathname === "/cart" || router.pathname === "/checkout"
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
          {!session && (
            <Nav.Link
              className="internal-link"
              href={`/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </Nav.Link>
          )}
          {session && (
            <>
              <Nav.Link
                className="internal-link"
                href={`/api/auth/signout`}
                onClick={(e) => {
                  signOut();
                }}
              >
                Sign out
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
