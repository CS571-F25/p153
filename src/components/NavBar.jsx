import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">Our Baking Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/recipes">
                            Recipes
                        </Nav.Link>

                        <Nav.Link as={Link} to="/submit">
                            Submit Recipe
                        </Nav.Link>

                        <Nav.Link as={Link} to="/about">
                            About Us
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}