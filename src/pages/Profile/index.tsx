export default function Profile() {
    return (
        <main className="flex-1 lg:ml-80 w-full">
            <div
                className="lg:hidden flex justify-between items-center h-20 px-margin-mobile w-full bg-background border-b border-outline-variant/10 shadow-sm sticky top-0 z-30">
                <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tight">BoardVerse</h1>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-2xl">notifications</span>
                </button>
            </div>
            <div className="p-margin-mobile md:p-margin-desktop space-y-xl max-w-6xl mx-auto pb-32 md:pb-xl pt-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                    <div className="lg:col-span-8 space-y-xl">
                        <section>
                            <div className="flex items-center justify-between mb-md">
                                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">diamond</span>
                                    Featured Collection
                                </h2>
                                <a className="font-label-md text-label-md text-primary hover:text-surface-tint transition-colors"
                                   href="#">View All</a>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                                <article
                                    className="glass-card texture-overlay rounded-lg overflow-hidden group cursor-pointer relative pb-4 transition-transform hover:-translate-y-1 duration-300">
                                    <div className="aspect-[3/4] overflow-hidden bg-surface-container-lowest relative">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80"></div>
                                        <img alt="Brass: Birmingham Cover"
                                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                             data-alt="A close-up, dramatic shot of a heavy euro-style board game box cover, reminiscent of Brass: Birmingham. The visual features dark, industrial revolution themes with deep browns, blacks, and glowing amber highlights. The aesthetic is premium, tactile, and moody, emphasizing the high-quality cardboard texture and intricate artwork."
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2O8p6uy0Of7pqd9fHYka-EirWcRYodOigs-qPBKAEnz-OZzI-kDpfN_ulQRiBO_KhMtjzM-I_jYnlDF-NXaLQM0Iq4qiRDqTs4W9bCbCJcN23BlXO_q3IEABl9-x2iOZMkfSsAV3ne50ABDmUDvYQN3hLwfMBAmSb3kU5ZvPLrkGR4g9w5qjRgzKaPMNcfcefARv9jntd9KHRp6sGXFE7q4Y1sE3BIsIVdS5Sj1hbPPa8ri_Q4Rg3Ltf54nhDxA-eP2snYINMKU4"/>
                                        <div
                                            className="absolute top-3 right-3 z-20 bg-surface-container px-2 py-1 rounded text-secondary font-label-sm text-label-sm border border-secondary/20 shadow-sm backdrop-blur-sm">
                                            Heavy Euro
                                        </div>
                                    </div>
                                    <div className="relative z-20 px-4 -mt-6">
                                        <h3 className="font-title-lg text-title-lg text-on-surface mb-1 truncate">Brass:
                                            Birmingham</h3>
                                        <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">star</span> 9.8
                                            Rating
                                        </p>
                                    </div>
                                </article>
                                <article
                                    className="glass-card texture-overlay rounded-lg overflow-hidden group cursor-pointer relative pb-4 transition-transform hover:-translate-y-1 duration-300">
                                    <div className="aspect-[3/4] overflow-hidden bg-surface-container-lowest relative">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80"></div>
                                        <img alt="Scythe Cover"
                                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                             data-alt="A stunning, painterly depiction of an alternate-history board game box cover, similar in vibe to Scythe. The artwork features sweeping landscapes at dusk with giant dieselpunk mechs looming in the background. The color palette leans heavily into moody purples, muted greens, and glowing orange accents, maintaining a high-contrast, premium collector's aesthetic."
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpHPjRncanr4Pcje9HLpMxMbV96FKd95djIqRuHKGlz1_9R6D1763rt9TQKGttN7fc_UPtVn0-50Q7idMg9InTuDxfzZVUYV7vNMSb-MH-FXOssMHRQSO6NMkl0AjRAjVBNi957FBMLLsNuBDF0ykrv0ZkG--xdrpvG8OrEsFIRYE-ntCe24LxUcbLiAuOt7yR8YYdzVr5-7z8A2uhkWSEHnMq4KLfMQmzebomLXqsOiYRlCYRIjC27TKmhPcwJMKrg6ZjRt3aEBc"/>
                                        <div
                                            className="absolute top-3 right-3 z-20 bg-surface-container px-2 py-1 rounded text-secondary font-label-sm text-label-sm border border-secondary/20 shadow-sm backdrop-blur-sm">
                                            Engine Builder
                                        </div>
                                    </div>
                                    <div className="relative z-20 px-4 -mt-6">
                                        <h3 className="font-title-lg text-title-lg text-on-surface mb-1 truncate">Scythe</h3>
                                        <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">star</span> 9.5
                                            Rating
                                        </p>
                                    </div>
                                </article>
                                <article
                                    className="glass-card texture-overlay rounded-lg overflow-hidden group cursor-pointer relative pb-4 transition-transform hover:-translate-y-1 duration-300">
                                    <div className="aspect-[3/4] overflow-hidden bg-surface-container-lowest relative">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80"></div>
                                        <img alt="Dune Imperium Cover"
                                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                             data-alt="An evocative, premium board game box cover illustration featuring a harsh desert planet setting with subtle sci-fi elements. The composition is dominated by deep, rich shadows and striking gold/sand tones. The lighting is cinematic, creating a sense of depth and mystery consistent with a high-end, tactile tabletop gaming experience."
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnWVaAUR8Ow8Sh9PNHkVk-x76Lu-a-XnAbQu7TpdRg_QXv1ysfxybE-OuibURqEX0pqhxqpGOOjJ0YnWBt7y--kM7hrDGxlsR2dSAuxVaLW6UVJDJFYXe3D7ORDqUckti5btIAv5j40EuVRxnxKpHVcugF22g0_GAkFmkfQl98l4U8A0HTk25WhfiOVR4g0wpHXpZaLPZDG7hR7VLl4KbdgpcfTBreMJHjnyV_fRziLhwytScTbp9bcaU-zI60LvHZQgsnVghTUpA"/>
                                        <div
                                            className="absolute top-3 right-3 z-20 bg-surface-container px-2 py-1 rounded text-secondary font-label-sm text-label-sm border border-secondary/20 shadow-sm backdrop-blur-sm">
                                            Deck Builder
                                        </div>
                                    </div>
                                    <div className="relative z-20 px-4 -mt-6">
                                        <h3 className="font-title-lg text-title-lg text-on-surface mb-1 truncate">Dune:
                                            Imperium</h3>
                                        <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">star</span> 9.3
                                            Rating
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </section>
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">history</span>
                                Recent Activity
                            </h2>
                            <div className="glass-card texture-overlay rounded-xl p-md md:p-lg relative">
                                <div
                                    className="absolute left-8 md:left-10 top-lg bottom-lg w-px bg-outline-variant/30"></div>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex gap-md group">
                                        <div
                                            className="w-10 h-10 rounded-full bg-surface-container border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1 relative z-10 group-hover:border-primary transition-colors">
                                            <span
                                                className="material-symbols-outlined text-primary text-xl">play_circle</span>
                                        </div>
                                        <div
                                            className="flex-1 bg-surface-container-low/50 p-4 rounded-lg border border-outline-variant/10 hover:border-outline-variant/30 transition-colors">
                                            <p className="font-body-md text-body-md text-on-surface">
                                                Logged a play of <span
                                                className="font-title-lg text-title-lg text-primary">Everdell</span>
                                            </p>
                                            <div className="flex items-center gap-4 mt-2">
                                                <span className="font-label-sm text-label-sm text-on-surface-variant">2h ago</span>
                                                <span
                                                    className="font-label-sm text-label-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded">Score: 78 (Win)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex gap-md group">
                                        <div
                                            className="w-10 h-10 rounded-full bg-surface-container border border-secondary/30 flex items-center justify-center flex-shrink-0 mt-1 relative z-10 group-hover:border-secondary transition-colors">
                                            <span
                                                className="material-symbols-outlined text-secondary text-xl">emoji_events</span>
                                        </div>
                                        <div
                                            className="flex-1 bg-surface-container-low/50 p-4 rounded-lg border border-outline-variant/10 hover:border-outline-variant/30 transition-colors">
                                            <p className="font-body-md text-body-md text-on-surface">
                                                Earned achievement: <span
                                                className="font-title-lg text-title-lg text-secondary">Industrialist</span>
                                            </p>
                                            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">1d
                                                ago</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-md group">
                                        <div
                                            className="w-10 h-10 rounded-full bg-surface-container border border-outline/30 flex items-center justify-center flex-shrink-0 mt-1 relative z-10 group-hover:border-outline transition-colors">
                                            <span
                                                className="material-symbols-outlined text-outline text-xl">favorite</span>
                                        </div>
                                        <div
                                            className="flex-1 bg-surface-container-low/50 p-4 rounded-lg border border-outline-variant/10 hover:border-outline-variant/30 transition-colors">
                                            <p className="font-body-md text-body-md text-on-surface">
                                                Added <span className="font-title-lg text-title-lg text-on-surface">Spirit Island</span> to
                                                wishlist
                                            </p>
                                            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">2d
                                                ago</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="lg:col-span-4 space-y-xl">
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">format_list_numbered</span>
                                Top 5 Games
                            </h2>
                            <div className="glass-card texture-overlay rounded-xl p-md">
                                <ol className="space-y-3">
                                    <li className="flex items-center gap-3 p-2 hover:bg-surface-container rounded transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/20">
                                        <span
                                            className="font-display-lg text-headline-sm text-secondary w-6 text-center">1</span>
                                        <div className="flex-1">
                                            <p className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">Terraforming
                                                Mars</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3 p-2 hover:bg-surface-container rounded transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/20">
                                        <span
                                            className="font-display-lg text-headline-sm text-outline w-6 text-center">2</span>
                                        <div className="flex-1">
                                            <p className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">Brass:
                                                Birmingham</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3 p-2 hover:bg-surface-container rounded transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/20">
                                        <span
                                            className="font-display-lg text-headline-sm text-outline-variant w-6 text-center">3</span>
                                        <div className="flex-1">
                                            <p className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">Ark
                                                Nova</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3 p-2 hover:bg-surface-container rounded transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/20">
                                        <span
                                            className="font-label-md text-label-md text-outline-variant w-6 text-center">4</span>
                                        <div className="flex-1">
                                            <p className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Twilight
                                                Imperium IV</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3 p-2 hover:bg-surface-container rounded transition-colors group cursor-pointer border border-transparent hover:border-outline-variant/20">
                                        <span
                                            className="font-label-md text-label-md text-outline-variant w-6 text-center">5</span>
                                        <div className="flex-1">
                                            <p className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Spirit
                                                Island</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </section>
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">groups</span>
                                Gaming Groups
                            </h2>
                            <div className="space-y-3">
                                <div
                                    className="glass-card texture-overlay rounded-lg p-3 flex items-center gap-3 hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/10">
                                    <div
                                        className="w-12 h-12 rounded bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center overflow-hidden">
                                        <span className="material-symbols-outlined text-primary">chess</span>
                                    </div>
                                    <div>
                                        <p className="font-title-lg text-[16px] text-on-surface leading-tight">The
                                            Strategist Guild</p>
                                        <p className="font-label-sm text-label-sm text-on-surface-variant">142
                                            Members</p>
                                    </div>
                                </div>
                                <div
                                    className="glass-card texture-overlay rounded-lg p-3 flex items-center gap-3 hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/10">
                                    <div
                                        className="w-12 h-12 rounded bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center overflow-hidden">
                                        <span className="material-symbols-outlined text-secondary">diamond</span>
                                    </div>
                                    <div>
                                        <p className="font-title-lg text-[16px] text-on-surface leading-tight">Heavy
                                            Cardboard Society</p>
                                        <p className="font-label-sm text-label-sm text-on-surface-variant">89
                                            Members</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}