import PageContainer from "./PageContainer";
import RecipeGrid from "./RecipeGrid";

export default function Recipes({ recipes, onLike }) {
    return (
        <PageContainer>
            <h1 className="mb-4">All Recipes</h1>
            <RecipeGrid recipes={recipes} onLike={onLike} />
        </PageContainer>
    );
}