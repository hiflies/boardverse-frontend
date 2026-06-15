import type {Category} from "../../types/Category.ts";
// import {useState} from "react";

type FilterCategorySelectionProps = {
    values: Category[];
    selections: Category[];
    onSelectionChange(selectedCategories: Category[]): void;
};

export default function FilterCategorySelection({values, selections, onSelectionChange}:FilterCategorySelectionProps ) {
    // const [showAll, setShowAll] = useState(false);
    const change = (value: Category) => {
        if (selections.includes(value)) {
            onSelectionChange(selections.filter(v => v !== value));
        } else {
            onSelectionChange([...selections, value]);
        }
    };
    return (
        <div className="flex flex-col gap-3">
            {
                values.map((category: Category) => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                        <input
                            checked={selections.includes(category)}
                            onChange={() => change(category)}
                            className="boardverse-checkbox form-checkbox rounded w-5 h-5 border-outline-variant bg-surface-container focus:ring-secondary focus:ring-offset-background text-secondary transition-colors"
                            type="checkbox"/>
                        <span
                            className="text-on-surface-variant group-hover:text-on-surface transition-colors font-body-md">{category.name}</span>
                    </label>
                ))
            }

            {/*{showAll && (*/}
            {/*    <>*/}
            {/*        <label className="flex items-center gap-3 cursor-pointer group">*/}
            {/*            <input*/}
            {/*                className="boardverse-checkbox form-checkbox rounded w-5 h-5 border-outline-variant bg-surface-container focus:ring-secondary focus:ring-offset-background text-secondary transition-colors"*/}
            {/*                type="checkbox"/>*/}
            {/*            <span*/}
            {/*                className="text-on-surface-variant group-hover:text-on-surface transition-colors font-body-md">Cooperative Play</span>*/}
            {/*        </label>*/}
            {/*        <label className="flex items-center gap-3 cursor-pointer group">*/}
            {/*            <input*/}
            {/*                className="boardverse-checkbox form-checkbox rounded w-5 h-5 border-outline-variant bg-surface-container focus:ring-secondary focus:ring-offset-background text-secondary transition-colors"*/}
            {/*                type="checkbox"/>*/}
            {/*            <span*/}
            {/*                className="text-on-surface-variant group-hover:text-on-surface transition-colors font-body-md">Cooperative Play</span>*/}
            {/*        </label>*/}
            {/*        <label className="flex items-center gap-3 cursor-pointer group">*/}
            {/*            <input*/}
            {/*                className="boardverse-checkbox form-checkbox rounded w-5 h-5 border-outline-variant bg-surface-container focus:ring-secondary focus:ring-offset-background text-secondary transition-colors"*/}
            {/*                type="checkbox"/>*/}
            {/*            <span*/}
            {/*                className="text-on-surface-variant group-hover:text-on-surface transition-colors font-body-md">Cooperative Play</span>*/}
            {/*        </label>*/}
            {/*    </>*/}
            {/*)}*/}
            {/*<button*/}
            {/*    onClick={() => setShowAll(!showAll)}*/}
            {/*    className={`text-primary hover:text-secondary text-sm font-label-md text-left mt-1 transition-colors`}>*/}
            {/*    {!showAll ? 'Show 12 more...' : 'Show less'}*/}
            {/*</button>*/}
        </div>
    );
}
