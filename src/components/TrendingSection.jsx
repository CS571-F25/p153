import PageContainer from "./PageContainer";
import RecipeGrid from "./RecipeGrid";

export default function TrendingSection({ recipes, onLike }) {
    const trending = [...recipes].sort((a, b) => b.likes - a.likes).slice(0, 3);

    return (
        <PageContainer>
            <h2 className="mb-4 text-center">Trending Recipes</h2>
            <RecipeGrid recipes={trending} onLike={onLike} />
        </PageContainer>
    );
}
