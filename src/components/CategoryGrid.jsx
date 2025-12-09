import { Container, Row, Col, Button } from "react-bootstrap";

const categories = [
    "Breads",
    "Cookies",
    "Cakes",
    "Pastries",
    "Pies",
    "Specialty Desserts"
];

export default function CategoryGrid() {
    return (
        <Container className="my-5">
            <h2 className="mb-4">Browse by Category</h2>
            <Row>
                {categories.map((cat, idx) => (
                    <Col md={4} className="mb-3" key={idx}>
                        <Button variant="outline-secondary" className="w-100 py-3">
                            {cat}
                        </Button>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}