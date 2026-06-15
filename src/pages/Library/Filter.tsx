import FilterSection from "./FilterSection.tsx";
import {useState} from "react";
import FilterMultipleSelection from "./FilterMultipleSelection.tsx";
import FilterCategorySelection from "./FilterCategorySelection.tsx";

export default function Filter() {
    const [playerCount, setPlayerCount] = useState<string[]>([]);
    const [complexity, setComplexity] = useState<string[]>([]);
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
                <FilterCategorySelection values={[]} selections={[]} onSelectionChange={() => null}/>
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