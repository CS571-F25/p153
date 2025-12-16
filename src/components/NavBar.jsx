import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

export default function NavBar() {
    return (
        <Navbar expand="lg" fixed="top" className="shadow-sm navbar-bakery">
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

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}