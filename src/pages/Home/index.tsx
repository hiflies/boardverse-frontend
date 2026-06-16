import Post from "../../components/Post";
import GameLog from "../../components/GameLog";
import CreatePost from "../../components/CreatePost";

export default function HomePage() {
    return (
        <main
            className="flex-1 w-full px-margin-mobile md:px-margin-desktop py-md md:py-lg flex justify-center">
            <div className="w-full max-w-2xl flex flex-col gap-lg">
                <CreatePost/>
                <div className="flex flex-col gap-lg">
                    <Post user={{
                        name: "Marcus Vance",
                        avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZF4DT9-7fR_0LgFpGlP4BoQ43pRapBc45SMaZmjlVQc6kRtK_OWYjW53FCTPDr3Znc4kQ1sRT0oDS2qpylL5cXnQ6rT3QfBSeYHpyZCc9HIdwEKnNPtpeu9kq_Eh2Kbf8fUfeLzQYC9qDJytPWkXNH8kf21KV1D9fYAfIIU-xdKj52mV2LJA-0cyeSsTIflcQ4H-HOnlBEmLM8XjS519mC0jp7mgMWJp8Ri-as_uZGlYIx_2-Y3VRccqtrB9pzO0TWGIVbgObpi0"
                    }}
                          tags={["BrassBirmingham", "ComponentUpgrades"]}
                          time={2}
                          message="Finally got around to unboxing the collector's edition of Brass: Birmingham. The clay poker chips are an absolute game-changer for the tactile experience. Has anyone tried upgrading their other economic euros with similar components?"
                          photoUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9yoHe0JNBhtdwbUWs93_b4td7pV44QOvglHZz6HLpzUXs6hDyDnfdmAYcI4bdZBw0y4tPfCVDRAjMPnaFgcnS8LMPd2WwznZ7tUGIdZRdd7wLxpegiY67GUG_mhJJsLDi4S_wPdEnpvT58aYNMiYbMmRNrKNPCyYPHew6DORWbKm9jlrcGt3NkPY-dFG_GhwLSYxRPSUDQfFohkloWiMv3qTjHpqxPBogp4WmXfq_XcJHv_BG6RTyfBcY23M57i5tFLdJwuX8ek"
                          likeCount={24}
                          commentCount={12}
                    />
                    <Post user={{
                        name: "Marcus Vance",
                        avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZF4DT9-7fR_0LgFpGlP4BoQ43pRapBc45SMaZmjlVQc6kRtK_OWYjW53FCTPDr3Znc4kQ1sRT0oDS2qpylL5cXnQ6rT3QfBSeYHpyZCc9HIdwEKnNPtpeu9kq_Eh2Kbf8fUfeLzQYC9qDJytPWkXNH8kf21KV1D9fYAfIIU-xdKj52mV2LJA-0cyeSsTIflcQ4H-HOnlBEmLM8XjS519mC0jp7mgMWJp8Ri-as_uZGlYIx_2-Y3VRccqtrB9pzO0TWGIVbgObpi0"
                    }}
                          tags={["BrassBirmingham", "ComponentUpgrades"]}
                          time={2}
                          message="Finally got around to unboxing the collector's edition of Brass: Birmingham. The clay poker chips are an absolute game-changer for the tactile experience. Has anyone tried upgrading their other economic euros with similar components?"
                          photoUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9yoHe0JNBhtdwbUWs93_b4td7pV44QOvglHZz6HLpzUXs6hDyDnfdmAYcI4bdZBw0y4tPfCVDRAjMPnaFgcnS8LMPd2WwznZ7tUGIdZRdd7wLxpegiY67GUG_mhJJsLDi4S_wPdEnpvT58aYNMiYbMmRNrKNPCyYPHew6DORWbKm9jlrcGt3NkPY-dFG_GhwLSYxRPSUDQfFohkloWiMv3qTjHpqxPBogp4WmXfq_XcJHv_BG6RTyfBcY23M57i5tFLdJwuX8ek"
                          likeCount={24}
                          commentCount={12}
                          title="Hosted a game"
                    >
                       <GameLog/>
                    </Post>
                    <Post user={{
                        name: "Halime Ucar Turk",
                        avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZF4DT9-7fR_0LgFpGlP4BoQ43pRapBc45SMaZmjlVQc6kRtK_OWYjW53FCTPDr3Znc4kQ1sRT0oDS2qpylL5cXnQ6rT3QfBSeYHpyZCc9HIdwEKnNPtpeu9kq_Eh2Kbf8fUfeLzQYC9qDJytPWkXNH8kf21KV1D9fYAfIIU-xdKj52mV2LJA-0cyeSsTIflcQ4H-HOnlBEmLM8XjS519mC0jp7mgMWJp8Ri-as_uZGlYIx_2-Y3VRccqtrB9pzO0TWGIVbgObpi0"
                    }}
                          tags={["budabenimtagim", "ikincisinideyazmamgerekti", "budadeneme"]}
                          message="bu da boyle bisi oldu, umarim olmasi gerektigi gibi olmustur."
                          photoUrl="oyun.jpg"
                          time={3}
                          likeCount={30}
                          commentCount={11}
                    />
                </div>
                <div className="py-lg flex justify-center text-on-surface-variant">
                <span className="material-symbols-outlined animate-spin"
                      data-icon="progress_activity">progress_activity</span>
                </div>
            </div>
        </main>
    );
}