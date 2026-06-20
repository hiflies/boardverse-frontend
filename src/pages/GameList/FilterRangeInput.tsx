export type MinMaxRange = [number | undefined, number | undefined];
type Props = {
    min: number
    max: number
    step: number
    value: MinMaxRange
    onChange: (value: MinMaxRange) => void
}

export default function FilterRangeInput({min, max, step, value, onChange}: Props) {
    const [minVal, maxVal] = value
    const displayMin = minVal ?? min
    const displayMax = maxVal ?? max

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                <span>{displayMin}</span>
                <span>{displayMax}</span>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span
                        className="text-on-surface-variant font-label-sm text-label-sm w-6 text-right shrink-0">Min</span>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={displayMin}
                        onChange={e => {
                            const v = parseFloat(e.target.value)
                            if (v >= displayMax) {
                                e.preventDefault();
                                return;
                            }
                            onChange([v <= min ? undefined : v, maxVal])
                        }}
                        className="flex-1 accent-secondary cursor-pointer"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <span
                        className="text-on-surface-variant font-label-sm text-label-sm w-6 text-right shrink-0">Max</span>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={displayMax}
                        onChange={e => {
                            const v = parseFloat(e.target.value)
                            if (v <= displayMin) {
                                e.preventDefault();
                                return;
                            }

                            onChange([minVal, v >= max ? undefined : v])
                        }}
                        className="flex-1 accent-secondary cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}
