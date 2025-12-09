import { Card } from "react-bootstrap";

export default function RecipeCard({ title, img, description }) {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}