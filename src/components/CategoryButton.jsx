import { Button } from "react-bootstrap";

export default function CategoryButton({ icon, name }) {
    return (
        <div className="text-center">
        <Button
            variant="secondary"
            className="category-btn btn-bakery"
            aria-label={`Browse ${name}`}
        >
            <span className="category-icon">{icon}</span>
        </Button>
        <div className="mt-2 category-label">{name}</div>
        </div>
    );
    }