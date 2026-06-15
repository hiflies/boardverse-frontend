export default function GameLog(){
    return (
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
    );
}