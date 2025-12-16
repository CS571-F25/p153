import { Card, Button } from "react-bootstrap";

export default function RecipeCard({ title, img, description, likes, onLike }) {
return (
    <Card className="h-100 shadow-sm card-bakery">
        <Card.Img
        variant="top"
        src={img}
        alt={`Image of ${title}`}
        />
        <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Button
            variant="secondary"
            className="mt-auto btn-bakery"
            onClick={onLike}
            aria-label={`Like ${title}`}
        >
            Like ({likes})
        </Button>
        </Card.Body>
    </Card>
    );
}
