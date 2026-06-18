import {useProfile} from "../../hooks/useProfile.ts";
import ProfilePhoto from "../ProfilePhoto";

export default function CreatePost() {
    const {data: user} = useProfile();

    return (
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
                    <ProfilePhoto
                         className="w-10 h-10 rounded-full object-cover shrink-0 border border-surface-variant"
                         src={user?.avatarUrl}/>
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
    // <section
    //         className="bg-surface rounded-xl border border-primary/10 shadow-[0_8px_32px_rgba(18,5,28,0.4)] relative group">
    //         <div className="absolute inset-0 texture-overlay pointer-events-none"></div>
    //         <div
    //             className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    //         <div
    //             className="flex border-b border-surface-variant relative z-10 bg-surface-container-low">
    //             <button
    //                 className="flex-1 py-3 px-4 font-label-md text-label-md text-secondary border-b-2 border-secondary bg-surface-variant/30 transition-colors flex items-center justify-center gap-2">
    //                 <span className="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
    //                 Discuss
    //             </button>
    //             <button
    //                 className="flex-1 py-3 px-4 font-label-md text-label-md text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant/20 transition-colors flex items-center justify-center gap-2">
    //                 <span className="material-symbols-outlined text-[18px]"
    //                       data-icon="sports_esports">sports_esports</span>
    //                 Play
    //             </button>
    //             <button
    //                 className="flex-1 py-3 px-4 font-label-md text-label-md text-on-surface-variant hover:text-primary-fixed hover:bg-surface-variant/20 transition-colors flex items-center justify-center gap-2">
    //                                 <span className="material-symbols-outlined text-[18px]"
    //                                       data-icon="sync_alt">sync_alt</span>
    //                 Trade
    //             </button>
    //         </div>
    //         <div className="p-md relative z-10 flex flex-col gap-md">
    //             <div className="flex gap-sm items-start">
    //                 <img alt="Avatar"
    //                      className="w-10 h-10 rounded-full object-cover shrink-0 border border-surface-variant"
    //                      data-alt="User avatar matching the top nav, depicting a thoughtful gamer in warm cinematic lighting, consistent with the premium BoardVerse aesthetic."
    //                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9m95bEOlG85BWnX6KCh1L0knUp9s5D6WVT3NdMnjt3Pqs-sveBHtskxvdcFshmz25z4DV76vQ5SpmPDrczz2uSOjUa-OZk-AP08HoG7qUsVep-uRewYF8Umk55SMxMQNfTQERPFjd_eZqij-rogXnRY0KN4usDBmEOl-AYW5QhzVE0xWo2Pyj--OTTQaC0AZsLfiNs2V4N2MNEQlx8Fnp1INLivV5c3lPYdcu6jUjwCsjerjVLAf0a1NIoOjv8SjKNALBNgd5aYY"/>
    //                 <div className="flex-1">
    //                   <textarea
    //                       className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md border-0 border-b border-surface-variant focus:border-secondary focus:ring-0 resize-none p-3 rounded-t-DEFAULT placeholder:text-on-surface-variant/40 transition-colors"
    //                       placeholder="Share your latest tabletop thoughts, strategies, or questions..."
    //                       rows={3}></textarea>
    //                 </div>
    //             </div>
    //             <div className="flex justify-between items-center pl-14">
    //                 <div className="flex gap-2">
    //                     <button
    //                         className="p-2 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-variant transition-colors"
    //                         title="Add Image">
    //                         <span className="material-symbols-outlined" data-icon="image">image</span>
    //                     </button>
    //                     <button
    //                         className="p-2 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-variant transition-colors"
    //                         title="Tag Game">
    //                                         <span className="material-symbols-outlined"
    //                                               data-icon="extension">extension</span>
    //                     </button>
    //                 </div>
    //                 <button
    //                     className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2 rounded-DEFAULT hover:bg-on-primary-fixed hover:text-primary-fixed transition-all border border-transparent hover:border-primary-fixed/20 shadow-sm active:scale-95 flex items-center gap-2">
    //                     Post
    //                     <span className="material-symbols-outlined text-[16px]"
    //                           data-icon="send">send</span>
    //                 </button>
    //             </div>
    //         </div>
    //     </section>
    );
}