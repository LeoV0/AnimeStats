export declare const AnimeStatus: {
    readonly ONGOING: "ONGOING";
    readonly FINISHED: "FINISHED";
    readonly PAUSED: "PAUSED";
};
export type AnimeStatus = (typeof AnimeStatus)[keyof typeof AnimeStatus];
export declare const UserAnimeStatusEnum: {
    readonly WATCHING: "WATCHING";
    readonly COMPLETED: "COMPLETED";
    readonly DROPPED: "DROPPED";
    readonly PLAN_TO_WATCH: "PLAN_TO_WATCH";
};
export type UserAnimeStatusEnum = (typeof UserAnimeStatusEnum)[keyof typeof UserAnimeStatusEnum];
