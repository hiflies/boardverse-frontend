import FilterSection from "./FilterSection.tsx";
import FilterMultipleSelection from "./FilterMultipleSelection.tsx";
import FilterCategorySelection from "./FilterCategorySelection.tsx";
import FilterRangeInput, {type MinMaxRange} from "./FilterRangeInput.tsx";
import {useCategories} from "../../hooks/useCategories.ts";
import {gameListRoute} from "../../router.tsx";
import {useState} from "react";
import useDebounce from "../../hooks/useDebounce.ts";
import {useSearch} from "@tanstack/react-router";

export default function Filter() {
    const {data: allCategories, isLoading, isError, error} = useCategories();
    const search = useSearch({shouldThrow: false, from: gameListRoute.id});
    const navigate = gameListRoute.useNavigate();
    const [complexity, setComplexity] = useState<MinMaxRange>([search?.minComplexity, search?.maxComplexity])
    const [rating, setRating] = useState<MinMaxRange>([search?.minRating, search?.maxRating])

    useDebounce(() => {
        if (complexity[0] == undefined && complexity[1] == undefined && rating[0] == undefined && rating[1] == undefined) {
            return;
        }

        navigate({
            search: prev => ({
                ...prev,
                minComplexity: complexity[0],
                maxComplexity: complexity[1],
                minRating: rating[0],
                maxRating: rating[1],
            })
        })
    }, 500, [complexity, rating])

    const update = (patch: Partial<typeof search>) => {
        navigate({search: prev => ({...prev, ...patch})})
    }

    const clearAll = () => {
        navigate({});
        setComplexity([undefined, undefined]);
        setRating([undefined, undefined]);
    }

    const selectedPlayerCount = search?.playerCount != null ? [String(search.playerCount === 5 ? '5+' : search.playerCount)] : []

    return (
        <aside className="w-full flex flex-col gap-sm px-sm mt-lg">
            <div className="flex items-center justify-between">
                <h2 className="font-headline-sm text-headline-sm font-semibold text-primary">Filters</h2>
                <button
                    onClick={clearAll}
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
                        selections={search?.categories ?? []}
                        onSelectionChange={ids => update({categories: ids.length > 0 ? ids : undefined})}
                    />
                )}
            </FilterSection>

            <FilterSection title="Complexity" defaultHidden={true}>
                <FilterRangeInput
                    min={0}
                    max={5}
                    step={0.1}
                    value={complexity}
                    onChange={setComplexity}
                />
            </FilterSection>

            <FilterSection title="Player count" defaultHidden={true}>
                <FilterMultipleSelection
                    maxSelection={1}
                    values={['1', '2', '3', '4', '5+']}
                    selections={selectedPlayerCount}
                    onSelectionChange={vals => {
                        const v = vals[0]
                        update({playerCount: v == null ? undefined : v === '5+' ? 5 : parseInt(v)})
                    }}
                />
            </FilterSection>

            <FilterSection title="Rating" defaultHidden={true}>
                <FilterRangeInput
                    min={0}
                    max={10}
                    step={0.1}
                    value={rating}
                    onChange={setRating}
                />
            </FilterSection>
        </aside>
    );
}
