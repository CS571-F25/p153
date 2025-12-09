import { Container, Row, Col, Card } from "react-bootstrap";

const trendingRecipes = [
    { id: 1, title: "Chocolate Chip Cookies", img: "" },
    { id: 2, title: "Sourdough Bread", img: "" },
    { id: 3, title: "Strawberry Cake", img: "" },
];

export default function TrendingSection() {
    return (
        <Container className="my-5">
            <h2 className="mb-4">Trending Recipes</h2>
            <Row>
                {trendingRecipes.map(recipe => (
                    <Col md={4} key={recipe.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={recipe.img} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}