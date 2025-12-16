import Hero from "./Hero";
import TrendingSection from "./TrendingSection";
import CategoryGrid from "./CategoryGrid";

export default function Home ({ recipes, onLike }) {
    return (
        <div>
            <Hero />
            <CategoryGrid />
            <TrendingSection recipes={recipes} onLike={onLike} />
        </div>
    );
}