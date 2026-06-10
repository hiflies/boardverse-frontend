import Post from "../../components/Post";

export default function HomePage() {
    return (
        <main
            className="flex-1 w-full px-margin-mobile md:px-margin-desktop py-md md:py-lg flex justify-center">
            <div className="w-full max-w-2xl flex flex-col gap-lg">
                <section
                    className="bg-surface rounded-xl border border-primary/10 shadow-[0_8px_32px_rgba(18,5,28,0.4)] relative group">
                    <div className="absolute inset-0 texture-overlay pointer-events-none"></div>
                    <div
                        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                    <div
                        className="flex border-b border-surface-variant relative z-10 bg-surface-container-low">
                        <button
                            className="flex-1 py-3 px-4 font-label-md text-label-md text-secondary border-b-2 border-secondary bg-surface-variant/30 transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
                            Discuss
                        </button>
                        <button
                            className="flex-1 py-3 px-4 font-label-md text-label-md text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant/20 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]"
                          data-icon="sports_esports">sports_esports</span>
                            Play
                        </button>
                        <button
                            className="flex-1 py-3 px-4 font-label-md text-label-md text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant/20 transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]"
                                          data-icon="sync_alt">sync_alt</span>
                            Trade
                        </button>
                    </div>
                    <div className="p-md relative z-10 flex flex-col gap-md">
                        <div className="flex gap-sm items-start">
                            <img alt="Avatar"
                                 className="w-10 h-10 rounded-full object-cover shrink-0 border border-surface-variant"
                                 data-alt="User avatar matching the top nav, depicting a thoughtful gamer in warm cinematic lighting, consistent with the premium BoardVerse aesthetic."
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9m95bEOlG85BWnX6KCh1L0knUp9s5D6WVT3NdMnjt3Pqs-sveBHtskxvdcFshmz25z4DV76vQ5SpmPDrczz2uSOjUa-OZk-AP08HoG7qUsVep-uRewYF8Umk55SMxMQNfTQERPFjd_eZqij-rogXnRY0KN4usDBmEOl-AYW5QhzVE0xWo2Pyj--OTTQaC0AZsLfiNs2V4N2MNEQlx8Fnp1INLivV5c3lPYdcu6jUjwCsjerjVLAf0a1NIoOjv8SjKNALBNgd5aYY"/>
                            <div className="flex-1">
                      <textarea
                          className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md border-0 border-b border-surface-variant focus:border-secondary focus:ring-0 resize-none p-3 rounded-t-DEFAULT placeholder:text-on-surface-variant/40 transition-colors"
                          placeholder="Share your latest tabletop thoughts, strategies, or questions..."
                          rows={3}></textarea>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pl-14">
                            <div className="flex gap-2">
                                <button
                                    className="p-2 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-variant transition-colors"
                                    title="Add Image">
                                    <span className="material-symbols-outlined" data-icon="image">image</span>
                                </button>
                                <button
                                    className="p-2 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-variant transition-colors"
                                    title="Tag Game">
                                            <span className="material-symbols-outlined"
                                                  data-icon="extension">extension</span>
                                </button>
                            </div>
                            <button
                                className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:bg-on-primary-fixed hover:text-primary-fixed transition-all border border-transparent hover:border-primary-fixed/20 shadow-sm active:scale-95 flex items-center gap-2">
                                Post
                                <span className="material-symbols-outlined text-[16px]"
                                      data-icon="send">send</span>
                            </button>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col gap-lg">
                    <Post user={{name:"Marcus Vance", role:"User", avatarUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuCZF4DT9-7fR_0LgFpGlP4BoQ43pRapBc45SMaZmjlVQc6kRtK_OWYjW53FCTPDr3Znc4kQ1sRT0oDS2qpylL5cXnQ6rT3QfBSeYHpyZCc9HIdwEKnNPtpeu9kq_Eh2Kbf8fUfeLzQYC9qDJytPWkXNH8kf21KV1D9fYAfIIU-xdKj52mV2LJA-0cyeSsTIflcQ4H-HOnlBEmLM8XjS519mC0jp7mgMWJp8Ri-as_uZGlYIx_2-Y3VRccqtrB9pzO0TWGIVbgObpi0"}}
                          time={2}
                          message="Finally got around to unboxing the collector's edition of Brass: Birmingham. The clay poker chips are an absolute game-changer for the tactile experience. Has anyone tried upgrading their other economic euros with similar components?"
                          photoUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9yoHe0JNBhtdwbUWs93_b4td7pV44QOvglHZz6HLpzUXs6hDyDnfdmAYcI4bdZBw0y4tPfCVDRAjMPnaFgcnS8LMPd2WwznZ7tUGIdZRdd7wLxpegiY67GUG_mhJJsLDi4S_wPdEnpvT58aYNMiYbMmRNrKNPCyYPHew6DORWbKm9jlrcGt3NkPY-dFG_GhwLSYxRPSUDQfFohkloWiMv3qTjHpqxPBogp4WmXfq_XcJHv_BG6RTyfBcY23M57i5tFLdJwuX8ek"
                          likeCount={24}
                          commentCount={12}
                    />
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
                                            Hosting a Game
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
                                                      data-icon="group">group</span>
                                    </div>
                                    <div>
                                        <p className="font-label-sm text-label-sm uppercase opacity-70">Players</p>
                                        <p className="font-label-md text-label-md text-on-surface">4 / 6
                                            Filled</p>
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
                    <Post user={{name:"Halime Ucar Turk", role:"Admin", avatarUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuCZF4DT9-7fR_0LgFpGlP4BoQ43pRapBc45SMaZmjlVQc6kRtK_OWYjW53FCTPDr3Znc4kQ1sRT0oDS2qpylL5cXnQ6rT3QfBSeYHpyZCc9HIdwEKnNPtpeu9kq_Eh2Kbf8fUfeLzQYC9qDJytPWkXNH8kf21KV1D9fYAfIIU-xdKj52mV2LJA-0cyeSsTIflcQ4H-HOnlBEmLM8XjS519mC0jp7mgMWJp8Ri-as_uZGlYIx_2-Y3VRccqtrB9pzO0TWGIVbgObpi0"}}
                          message="bu da boyle bisi oldu, umarim olmasi gerektigi gibi olmustur."
                          photoUrl="oyun.jpg"
                          time={3}
                          likeCount={30}
                          commentCount={11}
                    />
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
                                            Hosting a Game
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
                                                      data-icon="group">group</span>
                                    </div>
                                    <div>
                                        <p className="font-label-sm text-label-sm uppercase opacity-70">Players</p>
                                        <p className="font-label-md text-label-md text-on-surface">4 / 6
                                            Filled</p>
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
                </div>
                <div className="py-lg flex justify-center text-on-surface-variant">
                <span className="material-symbols-outlined animate-spin"
                      data-icon="progress_activity">progress_activity</span>
                </div>
            </div>
        </main>
    );
}