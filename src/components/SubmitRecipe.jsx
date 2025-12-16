import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import PageContainer from "./PageContainer";

export default function SubmitRecipe({ onAddRecipe }) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddRecipe({
            title,
            img: image || "https://placehold.co/300x200",
            description,
            ingredients,
            steps
        });

        setSubmitted(true);
        setTitle("");
        setImage("");
        setDescription("");
        setIngredients("");
        setSteps("");
    };

    return (
        <PageContainer>
            <h1 className="mb-4">Submit a Recipe</h1>

            {submitted && (
                <Alert variant="success">
                    Your recipe has been submitted!
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="recipeTitle">
                    <Form.Label>Recipe Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter recipe title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="recipeImage">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Paste image link"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="recipeDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Brief description of the recipe"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="recipeIngredients">
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

                <Form.Group className="mb-3" controlId="recipeSteps">
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

                <Button variant="secondary" className="btn-bakery" type="submit">
                    Submit Recipe
                </Button>
            </Form>
        </PageContainer>
    );
}