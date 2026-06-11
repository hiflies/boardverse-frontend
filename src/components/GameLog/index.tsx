export default function GameLog(){
    return (
        <article
            className="bg-surface rounded-xl border border-secondary/20 shadow-[0_4px_24px_rgba(238,190,1,0.05)] relative group transition-all duration-300">
            <div className="absolute inset-0 texture-overlay pointer-events-none rounded-xl"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary rounded-l-xl"></div>
            <div className="p-md relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30">
                            <img alt="Host Avatar" className="w-full h-full object-cover"
                                 data-alt="A portrait of a female board game host smiling slightly. Dark background with subtle purple rim lighting to match the BoardVerse dark mode aesthetic. Premium and inviting tone."
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZF4DT9-7fR_0LgFpGlP4BoQ43pRapBc45SMaZmjlVQc6kRtK_OWYjW53FCTPDr3Znc4kQ1sRT0oDS2qpylL5cXnQ6rT3QfBSeYHpyZCc9HIdwEKnNPtpeu9kq_Eh2Kbf8fUfeLzQYC9qDJytPWkXNH8kf21KV1D9fYAfIIU-xdKj52mV2LJA-0cyeSsTIflcQ4H-HOnlBEmLM8XjS519mC0jp7mgMWJp8Ri-as_uZGlYIx_2-Y3VRccqtrB9pzO0TWGIVbgObpi0"/>
                        </div>
                        <div>
                            <h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
                                Sarah Jenkins
                            </h3>
                            <p className="font-body-md text-[13px] text-secondary flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]"
                                  data-icon="sports_esports">sports_esports</span>
                                Hosted a Game
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 mb-4 grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Twilight
                            Imperium: 4th
                            Edition</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Looking for
                            2 more fearless
                            leaders to conquer the galaxy. Expecting a full 8-hour session.</p>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                        <div
                            className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary-fixed"
                                data-icon="calendar_month">calendar_month</span>
                        </div>
                        <div>
                            <p className="font-label-sm text-label-sm uppercase opacity-70">When</p>
                            <p className="font-label-md text-label-md text-on-surface">Sat, Nov 12 •
                                10:00 AM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                        <div
                            className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary-fixed"
                                                      data-icon="history_2">history_2</span>
                        </div>
                        <div>
                            <p className="font-label-sm text-label-sm uppercase opacity-70">Duration</p>
                            <p className="font-label-md text-label-md text-on-surface">3
                                Hours</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                        <div
                            className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary-fixed"
                                                      data-icon="group">group</span>
                        </div>
                        <div>
                            <p className="font-label-sm text-label-sm uppercase opacity-70">Players</p>
                            <p className="font-label-md text-label-md text-on-surface">@Halime, @Ahmet</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-secondary text-on-secondary font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:bg-secondary-fixed transition-colors shadow-sm active:scale-95 flex items-center gap-2 font-bold">
                        Request to Join
                        <span className="material-symbols-outlined text-[18px]"
                              data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </div>
            </div>
        </article>
    );
}