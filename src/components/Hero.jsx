import { Container, Button } from "react-bootstrap";

export default function Hero() {
    return (
        <div className="py-5 hero-bakery text-center">
            <Container>
                <h1 className="display-4 fw-bold">Welcome to Our Baking Book</h1>
                <p className="lead mt-3">
                    Discover delicious recipes and share your favorites with the community!
                </p>
                <Button variant="secondary" size="lg" className="btn-bakery" href="#/recipes">
                    Explore Recipes
                </Button>
            </Container>
        </div>
    );
}
