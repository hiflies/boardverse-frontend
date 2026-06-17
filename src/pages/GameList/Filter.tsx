import FilterSection from "./FilterSection.tsx";
import {useState} from "react";
import FilterMultipleSelection from "./FilterMultipleSelection.tsx";
import FilterCategorySelection from "./FilterCategorySelection.tsx";
import type {Category} from "../../types/Category.ts";
import {useCategories} from "../../hooks/useCategories.ts";

export default function Filter() {
    const {data: allCategories, isLoading, isError, error} = useCategories();
    const [playerCount, setPlayerCount] = useState<string[]>([]);
    const [complexity, setComplexity] = useState<string[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    return (
        <aside className="w-full flex flex-col gap-sm px-sm mt-lg">
            <div className="flex items-center justify-between">
                <h2 className="font-headline-sm text-headline-sm font-semibold text-primary">Filters</h2>
                <button
                    className="text-on-surface-variant hover:text-secondary text-sm font-label-md transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">refresh</span>
                    Clear All
                </button>
            </div>
            <FilterSection title="Category">
                {isLoading && (
                    <p className="text-on-surface-variant font-body-xs text-body-xs">Loading categories...</p>
                )}
                {isError && (
                    <p className="text-error font-body-xs text-body-xs">Failed to load categories: {error.message}</p>
                )}
                {allCategories && allCategories.length > 0 && (
                    <FilterCategorySelection
                        values={allCategories}
                        selections={categories}
                        onSelectionChange={setCategories}
                    />
                )}
            </FilterSection>
            <FilterSection title="Complexity">
                <FilterMultipleSelection
                    values={['1', '2', '3', '4', '5']}
                    selections={complexity}
                    onSelectionChange={setComplexity}/>
            </FilterSection>
            <FilterSection title="Player count">
                <FilterMultipleSelection
                    values={['1', '2', '3', '4', '5+']}
                    selections={playerCount}
                    onSelectionChange={setPlayerCount}/>
            </FilterSection>
        </aside>
    );
}