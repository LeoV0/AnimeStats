import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Anime: "Anime";
    readonly Episode: "Episode";
    readonly Favorite: "Favorite";
    readonly User_episode_progression: "User_episode_progression";
    readonly User_anime_status: "User_anime_status";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AnimeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly name_japanese: "name_japanese";
    readonly description: "description";
    readonly image_url: "image_url";
    readonly status: "status";
    readonly total_episodes: "total_episodes";
    readonly created_at: "created_at";
};
export type AnimeScalarFieldEnum = (typeof AnimeScalarFieldEnum)[keyof typeof AnimeScalarFieldEnum];
export declare const EpisodeScalarFieldEnum: {
    readonly id: "id";
    readonly number: "number";
    readonly title: "title";
    readonly aired_at: "aired_at";
    readonly anime_id: "anime_id";
};
export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum];
export declare const FavoriteScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly anime_id: "anime_id";
};
export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum];
export declare const User_episode_progressionScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly episode_id: "episode_id";
    readonly seen: "seen";
};
export type User_episode_progressionScalarFieldEnum = (typeof User_episode_progressionScalarFieldEnum)[keyof typeof User_episode_progressionScalarFieldEnum];
export declare const User_anime_statusScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly anime_id: "anime_id";
    readonly status: "status";
};
export type User_anime_statusScalarFieldEnum = (typeof User_anime_statusScalarFieldEnum)[keyof typeof User_anime_statusScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
