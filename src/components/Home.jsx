import Hero from "./Hero";
import TrendingSection from "./TrendingSection";
import CategoryGrid from "./CategoryGrid";

export default function Home (props) {
    return (
        <div>
            <Hero />
            <TrendingSection />
            <CategoryGrid />
        </div>
    );
}