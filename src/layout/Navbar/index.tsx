export default function Navbar() {
    return (
        <header
            className="w-full flex justify-between items-center px-md py-xs mx-auto shadow-sm docked full-width top-0">
            <div className="flex-1 items-center gap-sm">
            </div>
            <div className="hidden w-full max-w-sm md:flex mx-md">
                <div className="relative w-full group">
              <span
                  className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors"
                  data-icon="search">search</span>
                    <input
                        className="w-full bg-surface-container-low text-on-surface border-b border-surface-variant focus:border-secondary pl-10 pr-4 py-2 rounded-t-DEFAULT focus:outline-none focus:ring-0 transition-colors font-body-md text-body-md placeholder:text-on-surface-variant/50"
                        placeholder="Search games, players, groups..." type="text"/>
                </div>
            </div>
            <div className="flex flex-1 flex-row-reverse items-center gap-sm md:gap-md">
                <button
                    className="active:scale-95 transition-transform shrink-0 rounded-full overflow-hidden border-2 border-transparent hover:border-secondary transition-colors">
                    <img alt="User Profile Avatar" className="w-8 h-8 md:w-10 md:h-10 object-cover"
                         data-alt="A close-up portrait of a thoughtful tabletop gamer in a dimly lit, cozy room. The lighting is warm and cinematic, reflecting the high-end hobbyist aesthetic of BoardVerse, with deep shadow contrasts."
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xtCa-0e9L88xXOKSIHudImEOXgo7T0KwUb7yMUdGnXY8ITUmhIK_kw-9mbb7tWZoSQM_cERt8Ma_XoBMY_xqEQ9o72oGyFT7DSod0Olnt30zhSfCsmv9EBGbh9vdrDfdAEGnHq8XkR9wF_8-x_h14wmMsoedrfdE8oaxsQZg4oaMc2q75u_uCJtrv6saNcK3FL9rEaFNWfSW0YhfjZg0p9DNyE9h_k4NUZxjhfN6UJMzad4oJKRuKtuV0heLrxHv_I0XXdk3-FE"/>
                </button>
                <button
                    className="relative p-2 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 active:scale-95 rounded-full hover:bg-surface-variant">
                    <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
                </button>
                <button
                    className="hidden md:flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-on-primary-fixed hover:text-primary-fixed transition-all border border-transparent hover:border-primary-fixed/20 shadow-sm active:scale-95">
                    <span className="material-symbols-outlined text-[18px]" data-icon="add_box">add_box</span>
                    Create Post
                </button>
            </div>
        </header>
    );
}