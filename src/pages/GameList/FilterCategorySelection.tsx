import type {Category} from "../../types/Category.ts";
import {useState} from "react";

type FilterCategorySelectionProps = {
    values: Category[];
    selections: number[];
    onSelectionChange(selectedIds: number[]): void;
};
const LIMIT = 7;
export default function FilterCategorySelection({values, selections, onSelectionChange}: FilterCategorySelectionProps) {
    const [max, setMax] = useState<number>(LIMIT);
    const toggle = (id: number) => {
        if (selections.includes(id)) {
            onSelectionChange(selections.filter(v => v !== id));
        } else {
            onSelectionChange([...selections, id]);
        }
    };
    return (
        <div className="flex flex-col gap-3">
            {values.slice(0, max).map((category: Category) => (
                <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                        checked={selections.includes(category.id)}
                        onChange={() => toggle(category.id)}
                        className="boardverse-checkbox form-checkbox rounded w-5 h-5 border-outline-variant bg-surface-container focus:ring-secondary focus:ring-offset-background text-secondary transition-colors"
                        type="checkbox"/>
                    <span
                        className="text-on-surface-variant group-hover:text-on-surface transition-colors font-body-md">{category.name}</span>
                </label>
            ))}
            {values.length > LIMIT && (
                <button
                    onClick={() => setMax(Number.isFinite(max) ? Infinity : LIMIT)}
                    className={`text-primary hover:text-secondary text-sm font-label-md text-left mt-1 transition-colors`}>
                    {Number.isFinite(max) ? 'Show more...' : 'Show less'}
                </button>
            )}
        </div>
    );
}
