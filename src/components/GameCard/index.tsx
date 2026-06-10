type GameCardProps = {
    name: string,
    description: string,
    peopleCount: {min:number, max:number},
    duration: number,
    complexity: number,
}

export default function GameCard({name,description,peopleCount, duration, complexity}: GameCardProps) {
    return (
        <div
            className="bg-surface rounded-xl overflow-hidden border border-outline-variant/20 relative group card-hover transition-all duration-300 flex flex-col">
            <div
                className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
            <div className="linen-texture absolute inset-0 pointer-events-none rounded-xl"></div>
            <div className="h-48 relative overflow-hidden bg-surface-container-lowest">
                <img
                    alt="A high-quality, close-up photograph of a heavy, industrial-themed board game setup on a dark wooden table. The lighting is moody and dramatic, emphasizing the brass and iron visual elements of the game components. The color palette features deep browns, tarnished golds, and rich blacks, creating a gritty yet premium tabletop aesthetic."
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-alt="A high-quality, close-up photograph of a heavy, industrial-themed board game setup on a dark wooden table. The lighting is moody and dramatic, emphasizing the brass and iron visual elements of the game components. The color palette features deep browns, tarnished golds, and rich blacks, creating a gritty yet premium tabletop aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyc6OObXCQ5CWAiUhcHV-NIyE-C257GAuKr_mhqcdUjlziGNWHoOQav_b4t4hZmHuEFZztMccf4XRSy9XujX6K8m_y5IqDyNHTFENVGYIZ4VpdIFhUDOFwaCdcmwRmtzd6bbzoAE45e0S3So0sxY19vVbdP1ScXw2cFE7KuO4tmyWIbrbT3oV-8rcH5mnKnqP2hfqnvDvFzHFLb5E3qs1gCSUs1QXD4TcV0bWWRIJOM7n9eFoLQV8s3rQCTu3CYrKOJJldBHpkoZM"/>
                <div
                    className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm border border-secondary/30 text-secondary font-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">weight</span> {complexity}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-1 z-10">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">{name}</h3>
                <p className="text-on-surface-variant font-body-sm text-sm mb-4 line-clamp-2">{description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
    <span
        className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Network Building</span>
                    <span
                        className="bg-surface-container px-2 py-1 rounded text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider border border-outline-variant/30">Hand Mgmt</span>
                </div>
                <div
                    className="mt-4 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-on-surface-variant text-sm">
    <span className="flex items-center gap-1"><span
        className="material-symbols-outlined text-[16px]">group</span>{peopleCount.min}-{peopleCount.max}</span>
                        <span className="flex items-center gap-1"><span
                            className="material-symbols-outlined text-[16px]">schedule</span> {duration}m</span>
                    </div>
                    <button className="text-primary hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined">bookmark_add</span>
                    </button>
                </div>
            </div>
        </div>
    );
}