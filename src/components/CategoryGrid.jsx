import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryButton from "./CategoryButton";

const categories = [
    { name: "Breads", icon: "🍞" },
    { name: "Cookies", icon: "🍪" },
    { name: "Cakes", icon: "🎂" },
    { name: "Pastries", icon: "🥐" },
    { name: "Pies", icon: "🥧" },
    { name: "Specialty Desserts", icon: "🧁" }
];

export default function CategoryGrid() {
    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center">Browse by Category</h2>
            <Row className="justify-content-center">
                {categories.map(cat => (
                    <Col key={cat.name} xs={6} sm={4} md={2} className="mb-4">
                        <CategoryButton icon={cat.icon} name={cat.name} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}