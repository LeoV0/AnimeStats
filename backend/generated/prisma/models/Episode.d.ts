import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EpisodeModel = runtime.Types.Result.DefaultSelection<Prisma.$EpisodePayload>;
export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null;
    _avg: EpisodeAvgAggregateOutputType | null;
    _sum: EpisodeSumAggregateOutputType | null;
    _min: EpisodeMinAggregateOutputType | null;
    _max: EpisodeMaxAggregateOutputType | null;
};
export type EpisodeAvgAggregateOutputType = {
    id: number | null;
    number: number | null;
    anime_id: number | null;
};
export type EpisodeSumAggregateOutputType = {
    id: bigint | null;
    number: number | null;
    anime_id: bigint | null;
};
export type EpisodeMinAggregateOutputType = {
    id: bigint | null;
    number: number | null;
    title: string | null;
    aired_at: Date | null;
    anime_id: bigint | null;
};
export type EpisodeMaxAggregateOutputType = {
    id: bigint | null;
    number: number | null;
    title: string | null;
    aired_at: Date | null;
    anime_id: bigint | null;
};
export type EpisodeCountAggregateOutputType = {
    id: number;
    number: number;
    title: number;
    aired_at: number;
    anime_id: number;
    _all: number;
};
export type EpisodeAvgAggregateInputType = {
    id?: true;
    number?: true;
    anime_id?: true;
};
export type EpisodeSumAggregateInputType = {
    id?: true;
    number?: true;
    anime_id?: true;
};
export type EpisodeMinAggregateInputType = {
    id?: true;
    number?: true;
    title?: true;
    aired_at?: true;
    anime_id?: true;
};
export type EpisodeMaxAggregateInputType = {
    id?: true;
    number?: true;
    title?: true;
    aired_at?: true;
    anime_id?: true;
};
export type EpisodeCountAggregateInputType = {
    id?: true;
    number?: true;
    title?: true;
    aired_at?: true;
    anime_id?: true;
    _all?: true;
};
export type EpisodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EpisodeWhereInput;
    orderBy?: Prisma.EpisodeOrderByWithRelationInput | Prisma.EpisodeOrderByWithRelationInput[];
    cursor?: Prisma.EpisodeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EpisodeCountAggregateInputType;
    _avg?: EpisodeAvgAggregateInputType;
    _sum?: EpisodeSumAggregateInputType;
    _min?: EpisodeMinAggregateInputType;
    _max?: EpisodeMaxAggregateInputType;
};
export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
    [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEpisode[P]> : Prisma.GetScalarType<T[P], AggregateEpisode[P]>;
};
export type EpisodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EpisodeWhereInput;
    orderBy?: Prisma.EpisodeOrderByWithAggregationInput | Prisma.EpisodeOrderByWithAggregationInput[];
    by: Prisma.EpisodeScalarFieldEnum[] | Prisma.EpisodeScalarFieldEnum;
    having?: Prisma.EpisodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EpisodeCountAggregateInputType | true;
    _avg?: EpisodeAvgAggregateInputType;
    _sum?: EpisodeSumAggregateInputType;
    _min?: EpisodeMinAggregateInputType;
    _max?: EpisodeMaxAggregateInputType;
};
export type EpisodeGroupByOutputType = {
    id: bigint;
    number: number;
    title: string;
    aired_at: Date | null;
    anime_id: bigint;
    _count: EpisodeCountAggregateOutputType | null;
    _avg: EpisodeAvgAggregateOutputType | null;
    _sum: EpisodeSumAggregateOutputType | null;
    _min: EpisodeMinAggregateOutputType | null;
    _max: EpisodeMaxAggregateOutputType | null;
};
type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EpisodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EpisodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EpisodeGroupByOutputType[P]>;
}>>;
export type EpisodeWhereInput = {
    AND?: Prisma.EpisodeWhereInput | Prisma.EpisodeWhereInput[];
    OR?: Prisma.EpisodeWhereInput[];
    NOT?: Prisma.EpisodeWhereInput | Prisma.EpisodeWhereInput[];
    id?: Prisma.BigIntFilter<"Episode"> | bigint | number;
    number?: Prisma.IntFilter<"Episode"> | number;
    title?: Prisma.StringFilter<"Episode"> | string;
    aired_at?: Prisma.DateTimeNullableFilter<"Episode"> | Date | string | null;
    anime_id?: Prisma.BigIntFilter<"Episode"> | bigint | number;
    anime?: Prisma.XOR<Prisma.AnimeScalarRelationFilter, Prisma.AnimeWhereInput>;
    user_progression?: Prisma.User_episode_progressionListRelationFilter;
};
export type EpisodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    aired_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    anime?: Prisma.AnimeOrderByWithRelationInput;
    user_progression?: Prisma.User_episode_progressionOrderByRelationAggregateInput;
};
export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.EpisodeWhereInput | Prisma.EpisodeWhereInput[];
    OR?: Prisma.EpisodeWhereInput[];
    NOT?: Prisma.EpisodeWhereInput | Prisma.EpisodeWhereInput[];
    number?: Prisma.IntFilter<"Episode"> | number;
    title?: Prisma.StringFilter<"Episode"> | string;
    aired_at?: Prisma.DateTimeNullableFilter<"Episode"> | Date | string | null;
    anime_id?: Prisma.BigIntFilter<"Episode"> | bigint | number;
    anime?: Prisma.XOR<Prisma.AnimeScalarRelationFilter, Prisma.AnimeWhereInput>;
    user_progression?: Prisma.User_episode_progressionListRelationFilter;
}, "id">;
export type EpisodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    aired_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    _count?: Prisma.EpisodeCountOrderByAggregateInput;
    _avg?: Prisma.EpisodeAvgOrderByAggregateInput;
    _max?: Prisma.EpisodeMaxOrderByAggregateInput;
    _min?: Prisma.EpisodeMinOrderByAggregateInput;
    _sum?: Prisma.EpisodeSumOrderByAggregateInput;
};
export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.EpisodeScalarWhereWithAggregatesInput | Prisma.EpisodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.EpisodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EpisodeScalarWhereWithAggregatesInput | Prisma.EpisodeScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Episode"> | bigint | number;
    number?: Prisma.IntWithAggregatesFilter<"Episode"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Episode"> | string;
    aired_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Episode"> | Date | string | null;
    anime_id?: Prisma.BigIntWithAggregatesFilter<"Episode"> | bigint | number;
};
export type EpisodeCreateInput = {
    id?: bigint | number;
    number: number;
    title: string;
    aired_at?: Date | string | null;
    anime: Prisma.AnimeCreateNestedOneWithoutEpisodesInput;
    user_progression?: Prisma.User_episode_progressionCreateNestedManyWithoutEpisodeInput;
};
export type EpisodeUncheckedCreateInput = {
    id?: bigint | number;
    number: number;
    title: string;
    aired_at?: Date | string | null;
    anime_id: bigint | number;
    user_progression?: Prisma.User_episode_progressionUncheckedCreateNestedManyWithoutEpisodeInput;
};
export type EpisodeUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    anime?: Prisma.AnimeUpdateOneRequiredWithoutEpisodesNestedInput;
    user_progression?: Prisma.User_episode_progressionUpdateManyWithoutEpisodeNestedInput;
};
export type EpisodeUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    anime_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_progression?: Prisma.User_episode_progressionUncheckedUpdateManyWithoutEpisodeNestedInput;
};
export type EpisodeCreateManyInput = {
    id?: bigint | number;
    number: number;
    title: string;
    aired_at?: Date | string | null;
    anime_id: bigint | number;
};
export type EpisodeUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EpisodeUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    anime_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type EpisodeListRelationFilter = {
    every?: Prisma.EpisodeWhereInput;
    some?: Prisma.EpisodeWhereInput;
    none?: Prisma.EpisodeWhereInput;
};
export type EpisodeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EpisodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    aired_at?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
};
export type EpisodeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
};
export type EpisodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    aired_at?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
};
export type EpisodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    aired_at?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
};
export type EpisodeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
};
export type EpisodeScalarRelationFilter = {
    is?: Prisma.EpisodeWhereInput;
    isNot?: Prisma.EpisodeWhereInput;
};
export type EpisodeCreateNestedManyWithoutAnimeInput = {
    create?: Prisma.XOR<Prisma.EpisodeCreateWithoutAnimeInput, Prisma.EpisodeUncheckedCreateWithoutAnimeInput> | Prisma.EpisodeCreateWithoutAnimeInput[] | Prisma.EpisodeUncheckedCreateWithoutAnimeInput[];
    connectOrCreate?: Prisma.EpisodeCreateOrConnectWithoutAnimeInput | Prisma.EpisodeCreateOrConnectWithoutAnimeInput[];
    createMany?: Prisma.EpisodeCreateManyAnimeInputEnvelope;
    connect?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
};
export type EpisodeUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: Prisma.XOR<Prisma.EpisodeCreateWithoutAnimeInput, Prisma.EpisodeUncheckedCreateWithoutAnimeInput> | Prisma.EpisodeCreateWithoutAnimeInput[] | Prisma.EpisodeUncheckedCreateWithoutAnimeInput[];
    connectOrCreate?: Prisma.EpisodeCreateOrConnectWithoutAnimeInput | Prisma.EpisodeCreateOrConnectWithoutAnimeInput[];
    createMany?: Prisma.EpisodeCreateManyAnimeInputEnvelope;
    connect?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
};
export type EpisodeUpdateManyWithoutAnimeNestedInput = {
    create?: Prisma.XOR<Prisma.EpisodeCreateWithoutAnimeInput, Prisma.EpisodeUncheckedCreateWithoutAnimeInput> | Prisma.EpisodeCreateWithoutAnimeInput[] | Prisma.EpisodeUncheckedCreateWithoutAnimeInput[];
    connectOrCreate?: Prisma.EpisodeCreateOrConnectWithoutAnimeInput | Prisma.EpisodeCreateOrConnectWithoutAnimeInput[];
    upsert?: Prisma.EpisodeUpsertWithWhereUniqueWithoutAnimeInput | Prisma.EpisodeUpsertWithWhereUniqueWithoutAnimeInput[];
    createMany?: Prisma.EpisodeCreateManyAnimeInputEnvelope;
    set?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
    disconnect?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
    delete?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
    connect?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
    update?: Prisma.EpisodeUpdateWithWhereUniqueWithoutAnimeInput | Prisma.EpisodeUpdateWithWhereUniqueWithoutAnimeInput[];
    updateMany?: Prisma.EpisodeUpdateManyWithWhereWithoutAnimeInput | Prisma.EpisodeUpdateManyWithWhereWithoutAnimeInput[];
    deleteMany?: Prisma.EpisodeScalarWhereInput | Prisma.EpisodeScalarWhereInput[];
};
export type EpisodeUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: Prisma.XOR<Prisma.EpisodeCreateWithoutAnimeInput, Prisma.EpisodeUncheckedCreateWithoutAnimeInput> | Prisma.EpisodeCreateWithoutAnimeInput[] | Prisma.EpisodeUncheckedCreateWithoutAnimeInput[];
    connectOrCreate?: Prisma.EpisodeCreateOrConnectWithoutAnimeInput | Prisma.EpisodeCreateOrConnectWithoutAnimeInput[];
    upsert?: Prisma.EpisodeUpsertWithWhereUniqueWithoutAnimeInput | Prisma.EpisodeUpsertWithWhereUniqueWithoutAnimeInput[];
    createMany?: Prisma.EpisodeCreateManyAnimeInputEnvelope;
    set?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
    disconnect?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
    delete?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
    connect?: Prisma.EpisodeWhereUniqueInput | Prisma.EpisodeWhereUniqueInput[];
    update?: Prisma.EpisodeUpdateWithWhereUniqueWithoutAnimeInput | Prisma.EpisodeUpdateWithWhereUniqueWithoutAnimeInput[];
    updateMany?: Prisma.EpisodeUpdateManyWithWhereWithoutAnimeInput | Prisma.EpisodeUpdateManyWithWhereWithoutAnimeInput[];
    deleteMany?: Prisma.EpisodeScalarWhereInput | Prisma.EpisodeScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EpisodeCreateNestedOneWithoutUser_progressionInput = {
    create?: Prisma.XOR<Prisma.EpisodeCreateWithoutUser_progressionInput, Prisma.EpisodeUncheckedCreateWithoutUser_progressionInput>;
    connectOrCreate?: Prisma.EpisodeCreateOrConnectWithoutUser_progressionInput;
    connect?: Prisma.EpisodeWhereUniqueInput;
};
export type EpisodeUpdateOneRequiredWithoutUser_progressionNestedInput = {
    create?: Prisma.XOR<Prisma.EpisodeCreateWithoutUser_progressionInput, Prisma.EpisodeUncheckedCreateWithoutUser_progressionInput>;
    connectOrCreate?: Prisma.EpisodeCreateOrConnectWithoutUser_progressionInput;
    upsert?: Prisma.EpisodeUpsertWithoutUser_progressionInput;
    connect?: Prisma.EpisodeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EpisodeUpdateToOneWithWhereWithoutUser_progressionInput, Prisma.EpisodeUpdateWithoutUser_progressionInput>, Prisma.EpisodeUncheckedUpdateWithoutUser_progressionInput>;
};
export type EpisodeCreateWithoutAnimeInput = {
    id?: bigint | number;
    number: number;
    title: string;
    aired_at?: Date | string | null;
    user_progression?: Prisma.User_episode_progressionCreateNestedManyWithoutEpisodeInput;
};
export type EpisodeUncheckedCreateWithoutAnimeInput = {
    id?: bigint | number;
    number: number;
    title: string;
    aired_at?: Date | string | null;
    user_progression?: Prisma.User_episode_progressionUncheckedCreateNestedManyWithoutEpisodeInput;
};
export type EpisodeCreateOrConnectWithoutAnimeInput = {
    where: Prisma.EpisodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EpisodeCreateWithoutAnimeInput, Prisma.EpisodeUncheckedCreateWithoutAnimeInput>;
};
export type EpisodeCreateManyAnimeInputEnvelope = {
    data: Prisma.EpisodeCreateManyAnimeInput | Prisma.EpisodeCreateManyAnimeInput[];
    skipDuplicates?: boolean;
};
export type EpisodeUpsertWithWhereUniqueWithoutAnimeInput = {
    where: Prisma.EpisodeWhereUniqueInput;
    update: Prisma.XOR<Prisma.EpisodeUpdateWithoutAnimeInput, Prisma.EpisodeUncheckedUpdateWithoutAnimeInput>;
    create: Prisma.XOR<Prisma.EpisodeCreateWithoutAnimeInput, Prisma.EpisodeUncheckedCreateWithoutAnimeInput>;
};
export type EpisodeUpdateWithWhereUniqueWithoutAnimeInput = {
    where: Prisma.EpisodeWhereUniqueInput;
    data: Prisma.XOR<Prisma.EpisodeUpdateWithoutAnimeInput, Prisma.EpisodeUncheckedUpdateWithoutAnimeInput>;
};
export type EpisodeUpdateManyWithWhereWithoutAnimeInput = {
    where: Prisma.EpisodeScalarWhereInput;
    data: Prisma.XOR<Prisma.EpisodeUpdateManyMutationInput, Prisma.EpisodeUncheckedUpdateManyWithoutAnimeInput>;
};
export type EpisodeScalarWhereInput = {
    AND?: Prisma.EpisodeScalarWhereInput | Prisma.EpisodeScalarWhereInput[];
    OR?: Prisma.EpisodeScalarWhereInput[];
    NOT?: Prisma.EpisodeScalarWhereInput | Prisma.EpisodeScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Episode"> | bigint | number;
    number?: Prisma.IntFilter<"Episode"> | number;
    title?: Prisma.StringFilter<"Episode"> | string;
    aired_at?: Prisma.DateTimeNullableFilter<"Episode"> | Date | string | null;
    anime_id?: Prisma.BigIntFilter<"Episode"> | bigint | number;
};
export type EpisodeCreateWithoutUser_progressionInput = {
    id?: bigint | number;
    number: number;
    title: string;
    aired_at?: Date | string | null;
    anime: Prisma.AnimeCreateNestedOneWithoutEpisodesInput;
};
export type EpisodeUncheckedCreateWithoutUser_progressionInput = {
    id?: bigint | number;
    number: number;
    title: string;
    aired_at?: Date | string | null;
    anime_id: bigint | number;
};
export type EpisodeCreateOrConnectWithoutUser_progressionInput = {
    where: Prisma.EpisodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EpisodeCreateWithoutUser_progressionInput, Prisma.EpisodeUncheckedCreateWithoutUser_progressionInput>;
};
export type EpisodeUpsertWithoutUser_progressionInput = {
    update: Prisma.XOR<Prisma.EpisodeUpdateWithoutUser_progressionInput, Prisma.EpisodeUncheckedUpdateWithoutUser_progressionInput>;
    create: Prisma.XOR<Prisma.EpisodeCreateWithoutUser_progressionInput, Prisma.EpisodeUncheckedCreateWithoutUser_progressionInput>;
    where?: Prisma.EpisodeWhereInput;
};
export type EpisodeUpdateToOneWithWhereWithoutUser_progressionInput = {
    where?: Prisma.EpisodeWhereInput;
    data: Prisma.XOR<Prisma.EpisodeUpdateWithoutUser_progressionInput, Prisma.EpisodeUncheckedUpdateWithoutUser_progressionInput>;
};
export type EpisodeUpdateWithoutUser_progressionInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    anime?: Prisma.AnimeUpdateOneRequiredWithoutEpisodesNestedInput;
};
export type EpisodeUncheckedUpdateWithoutUser_progressionInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    anime_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type EpisodeCreateManyAnimeInput = {
    id?: bigint | number;
    number: number;
    title: string;
    aired_at?: Date | string | null;
};
export type EpisodeUpdateWithoutAnimeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_progression?: Prisma.User_episode_progressionUpdateManyWithoutEpisodeNestedInput;
};
export type EpisodeUncheckedUpdateWithoutAnimeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_progression?: Prisma.User_episode_progressionUncheckedUpdateManyWithoutEpisodeNestedInput;
};
export type EpisodeUncheckedUpdateManyWithoutAnimeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    aired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EpisodeCountOutputType = {
    user_progression: number;
};
export type EpisodeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user_progression?: boolean | EpisodeCountOutputTypeCountUser_progressionArgs;
};
export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeCountOutputTypeSelect<ExtArgs> | null;
};
export type EpisodeCountOutputTypeCountUser_progressionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_episode_progressionWhereInput;
};
export type EpisodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    title?: boolean;
    aired_at?: boolean;
    anime_id?: boolean;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
    user_progression?: boolean | Prisma.Episode$user_progressionArgs<ExtArgs>;
    _count?: boolean | Prisma.EpisodeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["episode"]>;
export type EpisodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    title?: boolean;
    aired_at?: boolean;
    anime_id?: boolean;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["episode"]>;
export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    title?: boolean;
    aired_at?: boolean;
    anime_id?: boolean;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["episode"]>;
export type EpisodeSelectScalar = {
    id?: boolean;
    number?: boolean;
    title?: boolean;
    aired_at?: boolean;
    anime_id?: boolean;
};
export type EpisodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "number" | "title" | "aired_at" | "anime_id", ExtArgs["result"]["episode"]>;
export type EpisodeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
    user_progression?: boolean | Prisma.Episode$user_progressionArgs<ExtArgs>;
    _count?: boolean | Prisma.EpisodeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
};
export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
};
export type $EpisodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Episode";
    objects: {
        anime: Prisma.$AnimePayload<ExtArgs>;
        user_progression: Prisma.$User_episode_progressionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        number: number;
        title: string;
        aired_at: Date | null;
        anime_id: bigint;
    }, ExtArgs["result"]["episode"]>;
    composites: {};
};
export type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EpisodePayload, S>;
export type EpisodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EpisodeCountAggregateInputType | true;
};
export interface EpisodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Episode'];
        meta: {
            name: 'Episode';
        };
    };
    findUnique<T extends EpisodeFindUniqueArgs>(args: Prisma.SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EpisodeFindFirstArgs>(args?: Prisma.SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EpisodeFindManyArgs>(args?: Prisma.SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EpisodeCreateArgs>(args: Prisma.SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EpisodeCreateManyArgs>(args?: Prisma.SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EpisodeDeleteArgs>(args: Prisma.SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EpisodeUpdateArgs>(args: Prisma.SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EpisodeUpdateManyArgs>(args: Prisma.SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EpisodeUpsertArgs>(args: Prisma.SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EpisodeCountArgs>(args?: Prisma.Subset<T, EpisodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EpisodeCountAggregateOutputType> : number>;
    aggregate<T extends EpisodeAggregateArgs>(args: Prisma.Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>;
    groupBy<T extends EpisodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EpisodeGroupByArgs['orderBy'];
    } : {
        orderBy?: EpisodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EpisodeFieldRefs;
}
export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    anime<T extends Prisma.AnimeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnimeDefaultArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user_progression<T extends Prisma.Episode$user_progressionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Episode$user_progressionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EpisodeFieldRefs {
    readonly id: Prisma.FieldRef<"Episode", 'BigInt'>;
    readonly number: Prisma.FieldRef<"Episode", 'Int'>;
    readonly title: Prisma.FieldRef<"Episode", 'String'>;
    readonly aired_at: Prisma.FieldRef<"Episode", 'DateTime'>;
    readonly anime_id: Prisma.FieldRef<"Episode", 'BigInt'>;
}
export type EpisodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelect<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    include?: Prisma.EpisodeInclude<ExtArgs> | null;
    where: Prisma.EpisodeWhereUniqueInput;
};
export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelect<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    include?: Prisma.EpisodeInclude<ExtArgs> | null;
    where: Prisma.EpisodeWhereUniqueInput;
};
export type EpisodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EpisodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EpisodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EpisodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelect<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    include?: Prisma.EpisodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EpisodeCreateInput, Prisma.EpisodeUncheckedCreateInput>;
};
export type EpisodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EpisodeCreateManyInput | Prisma.EpisodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EpisodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    data: Prisma.EpisodeCreateManyInput | Prisma.EpisodeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EpisodeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EpisodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelect<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    include?: Prisma.EpisodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EpisodeUpdateInput, Prisma.EpisodeUncheckedUpdateInput>;
    where: Prisma.EpisodeWhereUniqueInput;
};
export type EpisodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EpisodeUpdateManyMutationInput, Prisma.EpisodeUncheckedUpdateManyInput>;
    where?: Prisma.EpisodeWhereInput;
    limit?: number;
};
export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EpisodeUpdateManyMutationInput, Prisma.EpisodeUncheckedUpdateManyInput>;
    where?: Prisma.EpisodeWhereInput;
    limit?: number;
    include?: Prisma.EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EpisodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelect<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    include?: Prisma.EpisodeInclude<ExtArgs> | null;
    where: Prisma.EpisodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EpisodeCreateInput, Prisma.EpisodeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EpisodeUpdateInput, Prisma.EpisodeUncheckedUpdateInput>;
};
export type EpisodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelect<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    include?: Prisma.EpisodeInclude<ExtArgs> | null;
    where: Prisma.EpisodeWhereUniqueInput;
};
export type EpisodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EpisodeWhereInput;
    limit?: number;
};
export type Episode$user_progressionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelect<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    include?: Prisma.User_episode_progressionInclude<ExtArgs> | null;
    where?: Prisma.User_episode_progressionWhereInput;
    orderBy?: Prisma.User_episode_progressionOrderByWithRelationInput | Prisma.User_episode_progressionOrderByWithRelationInput[];
    cursor?: Prisma.User_episode_progressionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_episode_progressionScalarFieldEnum | Prisma.User_episode_progressionScalarFieldEnum[];
};
export type EpisodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EpisodeSelect<ExtArgs> | null;
    omit?: Prisma.EpisodeOmit<ExtArgs> | null;
    include?: Prisma.EpisodeInclude<ExtArgs> | null;
};
export {};
