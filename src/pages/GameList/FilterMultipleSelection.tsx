type FilterMultipleSelectionProps = {
    values: string[];
    selections: string[];
    onSelectionChange(selections: string[]): void;
};
export default function FilterMultipleSelection({values, selections, onSelectionChange}: FilterMultipleSelectionProps) {
    const change = (value: string) => {
        if (selections.includes(value)) {
            onSelectionChange(selections.filter(v => v !== value));
        } else {
            onSelectionChange([...selections, value]);
        }
    };
    return (
        <div className="grid grid-cols-5 gap-2">
            {values.map((value) => (
                <button
                    onClick={() => change(value)}
                    className={`${selections.includes(value) ? 'bg-secondary/20 border-secondary text-secondary ring-1 ring-secondary/50' : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors'} py-2 rounded border font-label-md text-center`}>
                    {value}
                </button>
            ))}
        </div>
    );
}