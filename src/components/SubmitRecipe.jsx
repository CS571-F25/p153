import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function SubmitRecipe() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // For now, just show a success message
        console.log("Recipe submitted:", { title, image, ingredients, steps });

        setSubmitted(true);

        // Clear fields
        setTitle("");
        setImage("");
        setIngredients("");
        setSteps("");
    };

    return (
        <Container className="my-5" style={{ maxWidth: "700px" }}>
            <h1 className="mb-4">Submit a Recipe</h1>

            {submitted && (
                <Alert variant="success">
                    Your recipe has been submitted!
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Recipe Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter recipe title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Paste image link"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="List ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Steps</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Describe the steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Recipe
                </Button>
            </Form>
        </Container>
    );
}