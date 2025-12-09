import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

const recipes = [
    {
        id: 1,
        title: "Chocolate Chip Cookies",
        img: "https://placehold.co/300x200",
        description: "Classic chewy cookies with gooey chocolate chips."
    },
    {
        id: 2,
        title: "Banana Bread",
        img: "https://placehold.co/300x200",
        description: "Moist banana bread perfect for breakfast or dessert."
    },
    {
        id: 3,
        title: "Lemon Tart",
        img: "https://placehold.co/300x200",
        description: "A bright, tangy tart with a buttery crust."
    },
    {
        id: 4,
        title: "Cinnamon Rolls",
        img: "https://placehold.co/300x200",
        description: "Soft spirals topped with sweet vanilla icing."
    },
];

export default function Recipes() {
    return (
        <Container className="my-5">
            <h1 className="mb-4">All Recipes</h1>
            <Row>
                {recipes.map(r => (
                    <Col md={4} key={r.id} className="mb-4">
                        <RecipeCard
                            title={r.title}
                            img={r.img}
                            description={r.description}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}