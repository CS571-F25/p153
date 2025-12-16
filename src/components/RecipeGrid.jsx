import { Row, Col } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes, onLike }) {
    return (
        <Row>
        {recipes.map(recipe => (
            <Col sm={12} md={6} lg={4} key={recipe.id} className="mb-4">
            <RecipeCard
                title={recipe.title}
                img={recipe.img}
                description={recipe.description}
                likes={recipe.likes}
                onLike={() => onLike(recipe.id)}
            />
            </Col>
        ))}
        </Row>
    );
    }