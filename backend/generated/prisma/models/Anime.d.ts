import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnimeModel = runtime.Types.Result.DefaultSelection<Prisma.$AnimePayload>;
export type AggregateAnime = {
    _count: AnimeCountAggregateOutputType | null;
    _avg: AnimeAvgAggregateOutputType | null;
    _sum: AnimeSumAggregateOutputType | null;
    _min: AnimeMinAggregateOutputType | null;
    _max: AnimeMaxAggregateOutputType | null;
};
export type AnimeAvgAggregateOutputType = {
    id: number | null;
    total_episodes: number | null;
};
export type AnimeSumAggregateOutputType = {
    id: bigint | null;
    total_episodes: number | null;
};
export type AnimeMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    name_japanese: string | null;
    description: string | null;
    image_url: string | null;
    status: $Enums.AnimeStatus | null;
    total_episodes: number | null;
    created_at: Date | null;
};
export type AnimeMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    name_japanese: string | null;
    description: string | null;
    image_url: string | null;
    status: $Enums.AnimeStatus | null;
    total_episodes: number | null;
    created_at: Date | null;
};
export type AnimeCountAggregateOutputType = {
    id: number;
    name: number;
    name_japanese: number;
    description: number;
    image_url: number;
    status: number;
    total_episodes: number;
    created_at: number;
    _all: number;
};
export type AnimeAvgAggregateInputType = {
    id?: true;
    total_episodes?: true;
};
export type AnimeSumAggregateInputType = {
    id?: true;
    total_episodes?: true;
};
export type AnimeMinAggregateInputType = {
    id?: true;
    name?: true;
    name_japanese?: true;
    description?: true;
    image_url?: true;
    status?: true;
    total_episodes?: true;
    created_at?: true;
};
export type AnimeMaxAggregateInputType = {
    id?: true;
    name?: true;
    name_japanese?: true;
    description?: true;
    image_url?: true;
    status?: true;
    total_episodes?: true;
    created_at?: true;
};
export type AnimeCountAggregateInputType = {
    id?: true;
    name?: true;
    name_japanese?: true;
    description?: true;
    image_url?: true;
    status?: true;
    total_episodes?: true;
    created_at?: true;
    _all?: true;
};
export type AnimeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeWhereInput;
    orderBy?: Prisma.AnimeOrderByWithRelationInput | Prisma.AnimeOrderByWithRelationInput[];
    cursor?: Prisma.AnimeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnimeCountAggregateInputType;
    _avg?: AnimeAvgAggregateInputType;
    _sum?: AnimeSumAggregateInputType;
    _min?: AnimeMinAggregateInputType;
    _max?: AnimeMaxAggregateInputType;
};
export type GetAnimeAggregateType<T extends AnimeAggregateArgs> = {
    [P in keyof T & keyof AggregateAnime]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnime[P]> : Prisma.GetScalarType<T[P], AggregateAnime[P]>;
};
export type AnimeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeWhereInput;
    orderBy?: Prisma.AnimeOrderByWithAggregationInput | Prisma.AnimeOrderByWithAggregationInput[];
    by: Prisma.AnimeScalarFieldEnum[] | Prisma.AnimeScalarFieldEnum;
    having?: Prisma.AnimeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnimeCountAggregateInputType | true;
    _avg?: AnimeAvgAggregateInputType;
    _sum?: AnimeSumAggregateInputType;
    _min?: AnimeMinAggregateInputType;
    _max?: AnimeMaxAggregateInputType;
};
export type AnimeGroupByOutputType = {
    id: bigint;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at: Date;
    _count: AnimeCountAggregateOutputType | null;
    _avg: AnimeAvgAggregateOutputType | null;
    _sum: AnimeSumAggregateOutputType | null;
    _min: AnimeMinAggregateOutputType | null;
    _max: AnimeMaxAggregateOutputType | null;
};
type GetAnimeGroupByPayload<T extends AnimeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnimeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnimeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnimeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnimeGroupByOutputType[P]>;
}>>;
export type AnimeWhereInput = {
    AND?: Prisma.AnimeWhereInput | Prisma.AnimeWhereInput[];
    OR?: Prisma.AnimeWhereInput[];
    NOT?: Prisma.AnimeWhereInput | Prisma.AnimeWhereInput[];
    id?: Prisma.BigIntFilter<"Anime"> | bigint | number;
    name?: Prisma.StringFilter<"Anime"> | string;
    name_japanese?: Prisma.StringFilter<"Anime"> | string;
    description?: Prisma.StringFilter<"Anime"> | string;
    image_url?: Prisma.StringFilter<"Anime"> | string;
    status?: Prisma.EnumAnimeStatusFilter<"Anime"> | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFilter<"Anime"> | number;
    created_at?: Prisma.DateTimeFilter<"Anime"> | Date | string;
    episodes?: Prisma.EpisodeListRelationFilter;
    favorites?: Prisma.FavoriteListRelationFilter;
    user_status?: Prisma.User_anime_statusListRelationFilter;
};
export type AnimeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    name_japanese?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total_episodes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    episodes?: Prisma.EpisodeOrderByRelationAggregateInput;
    favorites?: Prisma.FavoriteOrderByRelationAggregateInput;
    user_status?: Prisma.User_anime_statusOrderByRelationAggregateInput;
};
export type AnimeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.AnimeWhereInput | Prisma.AnimeWhereInput[];
    OR?: Prisma.AnimeWhereInput[];
    NOT?: Prisma.AnimeWhereInput | Prisma.AnimeWhereInput[];
    name?: Prisma.StringFilter<"Anime"> | string;
    name_japanese?: Prisma.StringFilter<"Anime"> | string;
    description?: Prisma.StringFilter<"Anime"> | string;
    image_url?: Prisma.StringFilter<"Anime"> | string;
    status?: Prisma.EnumAnimeStatusFilter<"Anime"> | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFilter<"Anime"> | number;
    created_at?: Prisma.DateTimeFilter<"Anime"> | Date | string;
    episodes?: Prisma.EpisodeListRelationFilter;
    favorites?: Prisma.FavoriteListRelationFilter;
    user_status?: Prisma.User_anime_statusListRelationFilter;
}, "id">;
export type AnimeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    name_japanese?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total_episodes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.AnimeCountOrderByAggregateInput;
    _avg?: Prisma.AnimeAvgOrderByAggregateInput;
    _max?: Prisma.AnimeMaxOrderByAggregateInput;
    _min?: Prisma.AnimeMinOrderByAggregateInput;
    _sum?: Prisma.AnimeSumOrderByAggregateInput;
};
export type AnimeScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnimeScalarWhereWithAggregatesInput | Prisma.AnimeScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnimeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnimeScalarWhereWithAggregatesInput | Prisma.AnimeScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Anime"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"Anime"> | string;
    name_japanese?: Prisma.StringWithAggregatesFilter<"Anime"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Anime"> | string;
    image_url?: Prisma.StringWithAggregatesFilter<"Anime"> | string;
    status?: Prisma.EnumAnimeStatusWithAggregatesFilter<"Anime"> | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntWithAggregatesFilter<"Anime"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Anime"> | Date | string;
};
export type AnimeCreateInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
    episodes?: Prisma.EpisodeCreateNestedManyWithoutAnimeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutAnimeInput;
    user_status?: Prisma.User_anime_statusCreateNestedManyWithoutAnimeInput;
};
export type AnimeUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
    episodes?: Prisma.EpisodeUncheckedCreateNestedManyWithoutAnimeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutAnimeInput;
    user_status?: Prisma.User_anime_statusUncheckedCreateNestedManyWithoutAnimeInput;
};
export type AnimeUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    episodes?: Prisma.EpisodeUpdateManyWithoutAnimeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutAnimeNestedInput;
    user_status?: Prisma.User_anime_statusUpdateManyWithoutAnimeNestedInput;
};
export type AnimeUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    episodes?: Prisma.EpisodeUncheckedUpdateManyWithoutAnimeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutAnimeNestedInput;
    user_status?: Prisma.User_anime_statusUncheckedUpdateManyWithoutAnimeNestedInput;
};
export type AnimeCreateManyInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
};
export type AnimeUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnimeUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnimeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    name_japanese?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total_episodes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type AnimeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    total_episodes?: Prisma.SortOrder;
};
export type AnimeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    name_japanese?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total_episodes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type AnimeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    name_japanese?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    total_episodes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type AnimeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    total_episodes?: Prisma.SortOrder;
};
export type AnimeScalarRelationFilter = {
    is?: Prisma.AnimeWhereInput;
    isNot?: Prisma.AnimeWhereInput;
};
export type EnumAnimeStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnimeStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AnimeCreateNestedOneWithoutEpisodesInput = {
    create?: Prisma.XOR<Prisma.AnimeCreateWithoutEpisodesInput, Prisma.AnimeUncheckedCreateWithoutEpisodesInput>;
    connectOrCreate?: Prisma.AnimeCreateOrConnectWithoutEpisodesInput;
    connect?: Prisma.AnimeWhereUniqueInput;
};
export type AnimeUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: Prisma.XOR<Prisma.AnimeCreateWithoutEpisodesInput, Prisma.AnimeUncheckedCreateWithoutEpisodesInput>;
    connectOrCreate?: Prisma.AnimeCreateOrConnectWithoutEpisodesInput;
    upsert?: Prisma.AnimeUpsertWithoutEpisodesInput;
    connect?: Prisma.AnimeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnimeUpdateToOneWithWhereWithoutEpisodesInput, Prisma.AnimeUpdateWithoutEpisodesInput>, Prisma.AnimeUncheckedUpdateWithoutEpisodesInput>;
};
export type AnimeCreateNestedOneWithoutFavoritesInput = {
    create?: Prisma.XOR<Prisma.AnimeCreateWithoutFavoritesInput, Prisma.AnimeUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.AnimeCreateOrConnectWithoutFavoritesInput;
    connect?: Prisma.AnimeWhereUniqueInput;
};
export type AnimeUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: Prisma.XOR<Prisma.AnimeCreateWithoutFavoritesInput, Prisma.AnimeUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.AnimeCreateOrConnectWithoutFavoritesInput;
    upsert?: Prisma.AnimeUpsertWithoutFavoritesInput;
    connect?: Prisma.AnimeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnimeUpdateToOneWithWhereWithoutFavoritesInput, Prisma.AnimeUpdateWithoutFavoritesInput>, Prisma.AnimeUncheckedUpdateWithoutFavoritesInput>;
};
export type AnimeCreateNestedOneWithoutUser_statusInput = {
    create?: Prisma.XOR<Prisma.AnimeCreateWithoutUser_statusInput, Prisma.AnimeUncheckedCreateWithoutUser_statusInput>;
    connectOrCreate?: Prisma.AnimeCreateOrConnectWithoutUser_statusInput;
    connect?: Prisma.AnimeWhereUniqueInput;
};
export type AnimeUpdateOneRequiredWithoutUser_statusNestedInput = {
    create?: Prisma.XOR<Prisma.AnimeCreateWithoutUser_statusInput, Prisma.AnimeUncheckedCreateWithoutUser_statusInput>;
    connectOrCreate?: Prisma.AnimeCreateOrConnectWithoutUser_statusInput;
    upsert?: Prisma.AnimeUpsertWithoutUser_statusInput;
    connect?: Prisma.AnimeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnimeUpdateToOneWithWhereWithoutUser_statusInput, Prisma.AnimeUpdateWithoutUser_statusInput>, Prisma.AnimeUncheckedUpdateWithoutUser_statusInput>;
};
export type AnimeCreateWithoutEpisodesInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutAnimeInput;
    user_status?: Prisma.User_anime_statusCreateNestedManyWithoutAnimeInput;
};
export type AnimeUncheckedCreateWithoutEpisodesInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutAnimeInput;
    user_status?: Prisma.User_anime_statusUncheckedCreateNestedManyWithoutAnimeInput;
};
export type AnimeCreateOrConnectWithoutEpisodesInput = {
    where: Prisma.AnimeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimeCreateWithoutEpisodesInput, Prisma.AnimeUncheckedCreateWithoutEpisodesInput>;
};
export type AnimeUpsertWithoutEpisodesInput = {
    update: Prisma.XOR<Prisma.AnimeUpdateWithoutEpisodesInput, Prisma.AnimeUncheckedUpdateWithoutEpisodesInput>;
    create: Prisma.XOR<Prisma.AnimeCreateWithoutEpisodesInput, Prisma.AnimeUncheckedCreateWithoutEpisodesInput>;
    where?: Prisma.AnimeWhereInput;
};
export type AnimeUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: Prisma.AnimeWhereInput;
    data: Prisma.XOR<Prisma.AnimeUpdateWithoutEpisodesInput, Prisma.AnimeUncheckedUpdateWithoutEpisodesInput>;
};
export type AnimeUpdateWithoutEpisodesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutAnimeNestedInput;
    user_status?: Prisma.User_anime_statusUpdateManyWithoutAnimeNestedInput;
};
export type AnimeUncheckedUpdateWithoutEpisodesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutAnimeNestedInput;
    user_status?: Prisma.User_anime_statusUncheckedUpdateManyWithoutAnimeNestedInput;
};
export type AnimeCreateWithoutFavoritesInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
    episodes?: Prisma.EpisodeCreateNestedManyWithoutAnimeInput;
    user_status?: Prisma.User_anime_statusCreateNestedManyWithoutAnimeInput;
};
export type AnimeUncheckedCreateWithoutFavoritesInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
    episodes?: Prisma.EpisodeUncheckedCreateNestedManyWithoutAnimeInput;
    user_status?: Prisma.User_anime_statusUncheckedCreateNestedManyWithoutAnimeInput;
};
export type AnimeCreateOrConnectWithoutFavoritesInput = {
    where: Prisma.AnimeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimeCreateWithoutFavoritesInput, Prisma.AnimeUncheckedCreateWithoutFavoritesInput>;
};
export type AnimeUpsertWithoutFavoritesInput = {
    update: Prisma.XOR<Prisma.AnimeUpdateWithoutFavoritesInput, Prisma.AnimeUncheckedUpdateWithoutFavoritesInput>;
    create: Prisma.XOR<Prisma.AnimeCreateWithoutFavoritesInput, Prisma.AnimeUncheckedCreateWithoutFavoritesInput>;
    where?: Prisma.AnimeWhereInput;
};
export type AnimeUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: Prisma.AnimeWhereInput;
    data: Prisma.XOR<Prisma.AnimeUpdateWithoutFavoritesInput, Prisma.AnimeUncheckedUpdateWithoutFavoritesInput>;
};
export type AnimeUpdateWithoutFavoritesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    episodes?: Prisma.EpisodeUpdateManyWithoutAnimeNestedInput;
    user_status?: Prisma.User_anime_statusUpdateManyWithoutAnimeNestedInput;
};
export type AnimeUncheckedUpdateWithoutFavoritesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    episodes?: Prisma.EpisodeUncheckedUpdateManyWithoutAnimeNestedInput;
    user_status?: Prisma.User_anime_statusUncheckedUpdateManyWithoutAnimeNestedInput;
};
export type AnimeCreateWithoutUser_statusInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
    episodes?: Prisma.EpisodeCreateNestedManyWithoutAnimeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutAnimeInput;
};
export type AnimeUncheckedCreateWithoutUser_statusInput = {
    id?: bigint | number;
    name: string;
    name_japanese: string;
    description: string;
    image_url: string;
    status: $Enums.AnimeStatus;
    total_episodes: number;
    created_at?: Date | string;
    episodes?: Prisma.EpisodeUncheckedCreateNestedManyWithoutAnimeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutAnimeInput;
};
export type AnimeCreateOrConnectWithoutUser_statusInput = {
    where: Prisma.AnimeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimeCreateWithoutUser_statusInput, Prisma.AnimeUncheckedCreateWithoutUser_statusInput>;
};
export type AnimeUpsertWithoutUser_statusInput = {
    update: Prisma.XOR<Prisma.AnimeUpdateWithoutUser_statusInput, Prisma.AnimeUncheckedUpdateWithoutUser_statusInput>;
    create: Prisma.XOR<Prisma.AnimeCreateWithoutUser_statusInput, Prisma.AnimeUncheckedCreateWithoutUser_statusInput>;
    where?: Prisma.AnimeWhereInput;
};
export type AnimeUpdateToOneWithWhereWithoutUser_statusInput = {
    where?: Prisma.AnimeWhereInput;
    data: Prisma.XOR<Prisma.AnimeUpdateWithoutUser_statusInput, Prisma.AnimeUncheckedUpdateWithoutUser_statusInput>;
};
export type AnimeUpdateWithoutUser_statusInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    episodes?: Prisma.EpisodeUpdateManyWithoutAnimeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutAnimeNestedInput;
};
export type AnimeUncheckedUpdateWithoutUser_statusInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    name_japanese?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image_url?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus;
    total_episodes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    episodes?: Prisma.EpisodeUncheckedUpdateManyWithoutAnimeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutAnimeNestedInput;
};
export type AnimeCountOutputType = {
    episodes: number;
    favorites: number;
    user_status: number;
};
export type AnimeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    episodes?: boolean | AnimeCountOutputTypeCountEpisodesArgs;
    favorites?: boolean | AnimeCountOutputTypeCountFavoritesArgs;
    user_status?: boolean | AnimeCountOutputTypeCountUser_statusArgs;
};
export type AnimeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeCountOutputTypeSelect<ExtArgs> | null;
};
export type AnimeCountOutputTypeCountEpisodesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EpisodeWhereInput;
};
export type AnimeCountOutputTypeCountFavoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteWhereInput;
};
export type AnimeCountOutputTypeCountUser_statusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_anime_statusWhereInput;
};
export type AnimeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    name_japanese?: boolean;
    description?: boolean;
    image_url?: boolean;
    status?: boolean;
    total_episodes?: boolean;
    created_at?: boolean;
    episodes?: boolean | Prisma.Anime$episodesArgs<ExtArgs>;
    favorites?: boolean | Prisma.Anime$favoritesArgs<ExtArgs>;
    user_status?: boolean | Prisma.Anime$user_statusArgs<ExtArgs>;
    _count?: boolean | Prisma.AnimeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["anime"]>;
export type AnimeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    name_japanese?: boolean;
    description?: boolean;
    image_url?: boolean;
    status?: boolean;
    total_episodes?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["anime"]>;
export type AnimeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    name_japanese?: boolean;
    description?: boolean;
    image_url?: boolean;
    status?: boolean;
    total_episodes?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["anime"]>;
export type AnimeSelectScalar = {
    id?: boolean;
    name?: boolean;
    name_japanese?: boolean;
    description?: boolean;
    image_url?: boolean;
    status?: boolean;
    total_episodes?: boolean;
    created_at?: boolean;
};
export type AnimeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "name_japanese" | "description" | "image_url" | "status" | "total_episodes" | "created_at", ExtArgs["result"]["anime"]>;
export type AnimeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    episodes?: boolean | Prisma.Anime$episodesArgs<ExtArgs>;
    favorites?: boolean | Prisma.Anime$favoritesArgs<ExtArgs>;
    user_status?: boolean | Prisma.Anime$user_statusArgs<ExtArgs>;
    _count?: boolean | Prisma.AnimeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AnimeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AnimeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AnimePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Anime";
    objects: {
        episodes: Prisma.$EpisodePayload<ExtArgs>[];
        favorites: Prisma.$FavoritePayload<ExtArgs>[];
        user_status: Prisma.$User_anime_statusPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        name_japanese: string;
        description: string;
        image_url: string;
        status: $Enums.AnimeStatus;
        total_episodes: number;
        created_at: Date;
    }, ExtArgs["result"]["anime"]>;
    composites: {};
};
export type AnimeGetPayload<S extends boolean | null | undefined | AnimeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnimePayload, S>;
export type AnimeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnimeCountAggregateInputType | true;
};
export interface AnimeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Anime'];
        meta: {
            name: 'Anime';
        };
    };
    findUnique<T extends AnimeFindUniqueArgs>(args: Prisma.SelectSubset<T, AnimeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnimeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnimeFindFirstArgs>(args?: Prisma.SelectSubset<T, AnimeFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnimeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnimeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnimeFindManyArgs>(args?: Prisma.SelectSubset<T, AnimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnimeCreateArgs>(args: Prisma.SelectSubset<T, AnimeCreateArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnimeCreateManyArgs>(args?: Prisma.SelectSubset<T, AnimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnimeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnimeDeleteArgs>(args: Prisma.SelectSubset<T, AnimeDeleteArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnimeUpdateArgs>(args: Prisma.SelectSubset<T, AnimeUpdateArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnimeDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnimeUpdateManyArgs>(args: Prisma.SelectSubset<T, AnimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnimeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnimeUpsertArgs>(args: Prisma.SelectSubset<T, AnimeUpsertArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnimeCountArgs>(args?: Prisma.Subset<T, AnimeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnimeCountAggregateOutputType> : number>;
    aggregate<T extends AnimeAggregateArgs>(args: Prisma.Subset<T, AnimeAggregateArgs>): Prisma.PrismaPromise<GetAnimeAggregateType<T>>;
    groupBy<T extends AnimeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnimeGroupByArgs['orderBy'];
    } : {
        orderBy?: AnimeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnimeFieldRefs;
}
export interface Prisma__AnimeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    episodes<T extends Prisma.Anime$episodesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Anime$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favorites<T extends Prisma.Anime$favoritesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Anime$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_status<T extends Prisma.Anime$user_statusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Anime$user_statusArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnimeFieldRefs {
    readonly id: Prisma.FieldRef<"Anime", 'BigInt'>;
    readonly name: Prisma.FieldRef<"Anime", 'String'>;
    readonly name_japanese: Prisma.FieldRef<"Anime", 'String'>;
    readonly description: Prisma.FieldRef<"Anime", 'String'>;
    readonly image_url: Prisma.FieldRef<"Anime", 'String'>;
    readonly status: Prisma.FieldRef<"Anime", 'AnimeStatus'>;
    readonly total_episodes: Prisma.FieldRef<"Anime", 'Int'>;
    readonly created_at: Prisma.FieldRef<"Anime", 'DateTime'>;
}
export type AnimeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    where: Prisma.AnimeWhereUniqueInput;
};
export type AnimeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    where: Prisma.AnimeWhereUniqueInput;
};
export type AnimeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    where?: Prisma.AnimeWhereInput;
    orderBy?: Prisma.AnimeOrderByWithRelationInput | Prisma.AnimeOrderByWithRelationInput[];
    cursor?: Prisma.AnimeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeScalarFieldEnum | Prisma.AnimeScalarFieldEnum[];
};
export type AnimeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    where?: Prisma.AnimeWhereInput;
    orderBy?: Prisma.AnimeOrderByWithRelationInput | Prisma.AnimeOrderByWithRelationInput[];
    cursor?: Prisma.AnimeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeScalarFieldEnum | Prisma.AnimeScalarFieldEnum[];
};
export type AnimeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    where?: Prisma.AnimeWhereInput;
    orderBy?: Prisma.AnimeOrderByWithRelationInput | Prisma.AnimeOrderByWithRelationInput[];
    cursor?: Prisma.AnimeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeScalarFieldEnum | Prisma.AnimeScalarFieldEnum[];
};
export type AnimeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeCreateInput, Prisma.AnimeUncheckedCreateInput>;
};
export type AnimeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnimeCreateManyInput | Prisma.AnimeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnimeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    data: Prisma.AnimeCreateManyInput | Prisma.AnimeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnimeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeUpdateInput, Prisma.AnimeUncheckedUpdateInput>;
    where: Prisma.AnimeWhereUniqueInput;
};
export type AnimeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnimeUpdateManyMutationInput, Prisma.AnimeUncheckedUpdateManyInput>;
    where?: Prisma.AnimeWhereInput;
    limit?: number;
};
export type AnimeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnimeUpdateManyMutationInput, Prisma.AnimeUncheckedUpdateManyInput>;
    where?: Prisma.AnimeWhereInput;
    limit?: number;
};
export type AnimeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    where: Prisma.AnimeWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnimeCreateInput, Prisma.AnimeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnimeUpdateInput, Prisma.AnimeUncheckedUpdateInput>;
};
export type AnimeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
    where: Prisma.AnimeWhereUniqueInput;
};
export type AnimeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeWhereInput;
    limit?: number;
};
export type Anime$episodesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelect<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    include?: Prisma.EpisodeInclude<ExtArgs> | null;
    where?: Prisma.EpisodeWhereInput;
    orderBy?: Prisma.EpisodeOrderByWithRelationInput | Prisma.EpisodeOrderByWithRelationInput[];
    cursor?: Prisma.EpisodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EpisodeScalarFieldEnum | Prisma.EpisodeScalarFieldEnum[];
};
export type Anime$favoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    include?: Prisma.FavoriteInclude<ExtArgs> | null;
    where?: Prisma.FavoriteWhereInput;
    orderBy?: Prisma.FavoriteOrderByWithRelationInput | Prisma.FavoriteOrderByWithRelationInput[];
    cursor?: Prisma.FavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FavoriteScalarFieldEnum | Prisma.FavoriteScalarFieldEnum[];
};
export type Anime$user_statusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelect<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    include?: Prisma.User_anime_statusInclude<ExtArgs> | null;
    where?: Prisma.User_anime_statusWhereInput;
    orderBy?: Prisma.User_anime_statusOrderByWithRelationInput | Prisma.User_anime_statusOrderByWithRelationInput[];
    cursor?: Prisma.User_anime_statusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_anime_statusScalarFieldEnum | Prisma.User_anime_statusScalarFieldEnum[];
};
export type AnimeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeSelect<ExtArgs> | null;
    omit?: Prisma.AnimeOmit<ExtArgs> | null;
    include?: Prisma.AnimeInclude<ExtArgs> | null;
};
export {};
