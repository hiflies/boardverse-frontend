import {Link as TanstackLink, type LinkComponent} from '@tanstack/react-router';

const Link: LinkComponent<'a'> = (props) => {
    return (
        <TanstackLink
            activeProps={{
                className: "mx-sm mt-1 flex items-center gap-sm px-sm py-xs text-primary bg-primary-container rounded-lg font-bold scale-98 transition-transform font-label-md text-label-md"
            }}
            inactiveProps={{
                className: "mx-sm mt-1 flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 scale-98 transition-transform font-label-md text-label-md rounded-lg"
            }}
            {...props}/>
    );
};

export default Link;
