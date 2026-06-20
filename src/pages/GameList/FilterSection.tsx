import {type PropsWithChildren, useState} from "react";

type FilterSectionProps = {
    title: string;
    defaultHidden?: boolean;
};

export default function FilterSection({title, defaultHidden, children}: PropsWithChildren<FilterSectionProps>) {
    const [hidden, setHidden] = useState(defaultHidden ?? false);

    return (
        <div className="flex flex-col gap-4 border-t border-outline-variant/10 pt-sm">
            <h3 className="font-title-lg text-title-lg text-on-surface flex items-center justify-between cursor-pointer group">
                {title}
                <span
                    onClick={() => setHidden(!hidden)}
                    className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                    {!hidden ? 'expand_less' : 'expand_more'}
                </span>
            </h3>
            <div
                className={`overflow-y-hidden transition-all duration-300 ${hidden ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'}`}>
                {children}
            </div>
        </div>
    );
}
