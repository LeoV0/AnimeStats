import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type User_episode_progressionModel = runtime.Types.Result.DefaultSelection<Prisma.$User_episode_progressionPayload>;
export type AggregateUser_episode_progression = {
    _count: User_episode_progressionCountAggregateOutputType | null;
    _avg: User_episode_progressionAvgAggregateOutputType | null;
    _sum: User_episode_progressionSumAggregateOutputType | null;
    _min: User_episode_progressionMinAggregateOutputType | null;
    _max: User_episode_progressionMaxAggregateOutputType | null;
};
export type User_episode_progressionAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    episode_id: number | null;
};
export type User_episode_progressionSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    episode_id: bigint | null;
};
export type User_episode_progressionMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    episode_id: bigint | null;
    seen: boolean | null;
};
export type User_episode_progressionMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    episode_id: bigint | null;
    seen: boolean | null;
};
export type User_episode_progressionCountAggregateOutputType = {
    id: number;
    user_id: number;
    episode_id: number;
    seen: number;
    _all: number;
};
export type User_episode_progressionAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    episode_id?: true;
};
export type User_episode_progressionSumAggregateInputType = {
    id?: true;
    user_id?: true;
    episode_id?: true;
};
export type User_episode_progressionMinAggregateInputType = {
    id?: true;
    user_id?: true;
    episode_id?: true;
    seen?: true;
};
export type User_episode_progressionMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    episode_id?: true;
    seen?: true;
};
export type User_episode_progressionCountAggregateInputType = {
    id?: true;
    user_id?: true;
    episode_id?: true;
    seen?: true;
    _all?: true;
};
export type User_episode_progressionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_episode_progressionWhereInput;
    orderBy?: Prisma.User_episode_progressionOrderByWithRelationInput | Prisma.User_episode_progressionOrderByWithRelationInput[];
    cursor?: Prisma.User_episode_progressionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_episode_progressionCountAggregateInputType;
    _avg?: User_episode_progressionAvgAggregateInputType;
    _sum?: User_episode_progressionSumAggregateInputType;
    _min?: User_episode_progressionMinAggregateInputType;
    _max?: User_episode_progressionMaxAggregateInputType;
};
export type GetUser_episode_progressionAggregateType<T extends User_episode_progressionAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_episode_progression]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_episode_progression[P]> : Prisma.GetScalarType<T[P], AggregateUser_episode_progression[P]>;
};
export type User_episode_progressionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_episode_progressionWhereInput;
    orderBy?: Prisma.User_episode_progressionOrderByWithAggregationInput | Prisma.User_episode_progressionOrderByWithAggregationInput[];
    by: Prisma.User_episode_progressionScalarFieldEnum[] | Prisma.User_episode_progressionScalarFieldEnum;
    having?: Prisma.User_episode_progressionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_episode_progressionCountAggregateInputType | true;
    _avg?: User_episode_progressionAvgAggregateInputType;
    _sum?: User_episode_progressionSumAggregateInputType;
    _min?: User_episode_progressionMinAggregateInputType;
    _max?: User_episode_progressionMaxAggregateInputType;
};
export type User_episode_progressionGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    episode_id: bigint;
    seen: boolean;
    _count: User_episode_progressionCountAggregateOutputType | null;
    _avg: User_episode_progressionAvgAggregateOutputType | null;
    _sum: User_episode_progressionSumAggregateOutputType | null;
    _min: User_episode_progressionMinAggregateOutputType | null;
    _max: User_episode_progressionMaxAggregateOutputType | null;
};
type GetUser_episode_progressionGroupByPayload<T extends User_episode_progressionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_episode_progressionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_episode_progressionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_episode_progressionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_episode_progressionGroupByOutputType[P]>;
}>>;
export type User_episode_progressionWhereInput = {
    AND?: Prisma.User_episode_progressionWhereInput | Prisma.User_episode_progressionWhereInput[];
    OR?: Prisma.User_episode_progressionWhereInput[];
    NOT?: Prisma.User_episode_progressionWhereInput | Prisma.User_episode_progressionWhereInput[];
    id?: Prisma.BigIntFilter<"User_episode_progression"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"User_episode_progression"> | bigint | number;
    episode_id?: Prisma.BigIntFilter<"User_episode_progression"> | bigint | number;
    seen?: Prisma.BoolFilter<"User_episode_progression"> | boolean;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    episode?: Prisma.XOR<Prisma.EpisodeScalarRelationFilter, Prisma.EpisodeWhereInput>;
};
export type User_episode_progressionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    episode_id?: Prisma.SortOrder;
    seen?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    episode?: Prisma.EpisodeOrderByWithRelationInput;
};
export type User_episode_progressionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.User_episode_progressionWhereInput | Prisma.User_episode_progressionWhereInput[];
    OR?: Prisma.User_episode_progressionWhereInput[];
    NOT?: Prisma.User_episode_progressionWhereInput | Prisma.User_episode_progressionWhereInput[];
    user_id?: Prisma.BigIntFilter<"User_episode_progression"> | bigint | number;
    episode_id?: Prisma.BigIntFilter<"User_episode_progression"> | bigint | number;
    seen?: Prisma.BoolFilter<"User_episode_progression"> | boolean;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    episode?: Prisma.XOR<Prisma.EpisodeScalarRelationFilter, Prisma.EpisodeWhereInput>;
}, "id">;
export type User_episode_progressionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    episode_id?: Prisma.SortOrder;
    seen?: Prisma.SortOrder;
    _count?: Prisma.User_episode_progressionCountOrderByAggregateInput;
    _avg?: Prisma.User_episode_progressionAvgOrderByAggregateInput;
    _max?: Prisma.User_episode_progressionMaxOrderByAggregateInput;
    _min?: Prisma.User_episode_progressionMinOrderByAggregateInput;
    _sum?: Prisma.User_episode_progressionSumOrderByAggregateInput;
};
export type User_episode_progressionScalarWhereWithAggregatesInput = {
    AND?: Prisma.User_episode_progressionScalarWhereWithAggregatesInput | Prisma.User_episode_progressionScalarWhereWithAggregatesInput[];
    OR?: Prisma.User_episode_progressionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.User_episode_progressionScalarWhereWithAggregatesInput | Prisma.User_episode_progressionScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"User_episode_progression"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"User_episode_progression"> | bigint | number;
    episode_id?: Prisma.BigIntWithAggregatesFilter<"User_episode_progression"> | bigint | number;
    seen?: Prisma.BoolWithAggregatesFilter<"User_episode_progression"> | boolean;
};
export type User_episode_progressionCreateInput = {
    id?: bigint | number;
    seen: boolean;
    user: Prisma.UserCreateNestedOneWithoutEpisode_progressionInput;
    episode: Prisma.EpisodeCreateNestedOneWithoutUser_progressionInput;
};
export type User_episode_progressionUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    episode_id: bigint | number;
    seen: boolean;
};
export type User_episode_progressionUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutEpisode_progressionNestedInput;
    episode?: Prisma.EpisodeUpdateOneRequiredWithoutUser_progressionNestedInput;
};
export type User_episode_progressionUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    episode_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type User_episode_progressionCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    episode_id: bigint | number;
    seen: boolean;
};
export type User_episode_progressionUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type User_episode_progressionUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    episode_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type User_episode_progressionListRelationFilter = {
    every?: Prisma.User_episode_progressionWhereInput;
    some?: Prisma.User_episode_progressionWhereInput;
    none?: Prisma.User_episode_progressionWhereInput;
};
export type User_episode_progressionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type User_episode_progressionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    episode_id?: Prisma.SortOrder;
    seen?: Prisma.SortOrder;
};
export type User_episode_progressionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    episode_id?: Prisma.SortOrder;
};
export type User_episode_progressionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    episode_id?: Prisma.SortOrder;
    seen?: Prisma.SortOrder;
};
export type User_episode_progressionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    episode_id?: Prisma.SortOrder;
    seen?: Prisma.SortOrder;
};
export type User_episode_progressionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    episode_id?: Prisma.SortOrder;
};
export type User_episode_progressionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutUserInput, Prisma.User_episode_progressionUncheckedCreateWithoutUserInput> | Prisma.User_episode_progressionCreateWithoutUserInput[] | Prisma.User_episode_progressionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_episode_progressionCreateOrConnectWithoutUserInput | Prisma.User_episode_progressionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.User_episode_progressionCreateManyUserInputEnvelope;
    connect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
};
export type User_episode_progressionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutUserInput, Prisma.User_episode_progressionUncheckedCreateWithoutUserInput> | Prisma.User_episode_progressionCreateWithoutUserInput[] | Prisma.User_episode_progressionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_episode_progressionCreateOrConnectWithoutUserInput | Prisma.User_episode_progressionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.User_episode_progressionCreateManyUserInputEnvelope;
    connect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
};
export type User_episode_progressionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutUserInput, Prisma.User_episode_progressionUncheckedCreateWithoutUserInput> | Prisma.User_episode_progressionCreateWithoutUserInput[] | Prisma.User_episode_progressionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_episode_progressionCreateOrConnectWithoutUserInput | Prisma.User_episode_progressionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.User_episode_progressionUpsertWithWhereUniqueWithoutUserInput | Prisma.User_episode_progressionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.User_episode_progressionCreateManyUserInputEnvelope;
    set?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    disconnect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    delete?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    connect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    update?: Prisma.User_episode_progressionUpdateWithWhereUniqueWithoutUserInput | Prisma.User_episode_progressionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.User_episode_progressionUpdateManyWithWhereWithoutUserInput | Prisma.User_episode_progressionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.User_episode_progressionScalarWhereInput | Prisma.User_episode_progressionScalarWhereInput[];
};
export type User_episode_progressionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutUserInput, Prisma.User_episode_progressionUncheckedCreateWithoutUserInput> | Prisma.User_episode_progressionCreateWithoutUserInput[] | Prisma.User_episode_progressionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_episode_progressionCreateOrConnectWithoutUserInput | Prisma.User_episode_progressionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.User_episode_progressionUpsertWithWhereUniqueWithoutUserInput | Prisma.User_episode_progressionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.User_episode_progressionCreateManyUserInputEnvelope;
    set?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    disconnect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    delete?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    connect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    update?: Prisma.User_episode_progressionUpdateWithWhereUniqueWithoutUserInput | Prisma.User_episode_progressionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.User_episode_progressionUpdateManyWithWhereWithoutUserInput | Prisma.User_episode_progressionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.User_episode_progressionScalarWhereInput | Prisma.User_episode_progressionScalarWhereInput[];
};
export type User_episode_progressionCreateNestedManyWithoutEpisodeInput = {
    create?: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutEpisodeInput, Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput> | Prisma.User_episode_progressionCreateWithoutEpisodeInput[] | Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput[];
    connectOrCreate?: Prisma.User_episode_progressionCreateOrConnectWithoutEpisodeInput | Prisma.User_episode_progressionCreateOrConnectWithoutEpisodeInput[];
    createMany?: Prisma.User_episode_progressionCreateManyEpisodeInputEnvelope;
    connect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
};
export type User_episode_progressionUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutEpisodeInput, Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput> | Prisma.User_episode_progressionCreateWithoutEpisodeInput[] | Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput[];
    connectOrCreate?: Prisma.User_episode_progressionCreateOrConnectWithoutEpisodeInput | Prisma.User_episode_progressionCreateOrConnectWithoutEpisodeInput[];
    createMany?: Prisma.User_episode_progressionCreateManyEpisodeInputEnvelope;
    connect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
};
export type User_episode_progressionUpdateManyWithoutEpisodeNestedInput = {
    create?: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutEpisodeInput, Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput> | Prisma.User_episode_progressionCreateWithoutEpisodeInput[] | Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput[];
    connectOrCreate?: Prisma.User_episode_progressionCreateOrConnectWithoutEpisodeInput | Prisma.User_episode_progressionCreateOrConnectWithoutEpisodeInput[];
    upsert?: Prisma.User_episode_progressionUpsertWithWhereUniqueWithoutEpisodeInput | Prisma.User_episode_progressionUpsertWithWhereUniqueWithoutEpisodeInput[];
    createMany?: Prisma.User_episode_progressionCreateManyEpisodeInputEnvelope;
    set?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    disconnect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    delete?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    connect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    update?: Prisma.User_episode_progressionUpdateWithWhereUniqueWithoutEpisodeInput | Prisma.User_episode_progressionUpdateWithWhereUniqueWithoutEpisodeInput[];
    updateMany?: Prisma.User_episode_progressionUpdateManyWithWhereWithoutEpisodeInput | Prisma.User_episode_progressionUpdateManyWithWhereWithoutEpisodeInput[];
    deleteMany?: Prisma.User_episode_progressionScalarWhereInput | Prisma.User_episode_progressionScalarWhereInput[];
};
export type User_episode_progressionUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutEpisodeInput, Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput> | Prisma.User_episode_progressionCreateWithoutEpisodeInput[] | Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput[];
    connectOrCreate?: Prisma.User_episode_progressionCreateOrConnectWithoutEpisodeInput | Prisma.User_episode_progressionCreateOrConnectWithoutEpisodeInput[];
    upsert?: Prisma.User_episode_progressionUpsertWithWhereUniqueWithoutEpisodeInput | Prisma.User_episode_progressionUpsertWithWhereUniqueWithoutEpisodeInput[];
    createMany?: Prisma.User_episode_progressionCreateManyEpisodeInputEnvelope;
    set?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    disconnect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    delete?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    connect?: Prisma.User_episode_progressionWhereUniqueInput | Prisma.User_episode_progressionWhereUniqueInput[];
    update?: Prisma.User_episode_progressionUpdateWithWhereUniqueWithoutEpisodeInput | Prisma.User_episode_progressionUpdateWithWhereUniqueWithoutEpisodeInput[];
    updateMany?: Prisma.User_episode_progressionUpdateManyWithWhereWithoutEpisodeInput | Prisma.User_episode_progressionUpdateManyWithWhereWithoutEpisodeInput[];
    deleteMany?: Prisma.User_episode_progressionScalarWhereInput | Prisma.User_episode_progressionScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type User_episode_progressionCreateWithoutUserInput = {
    id?: bigint | number;
    seen: boolean;
    episode: Prisma.EpisodeCreateNestedOneWithoutUser_progressionInput;
};
export type User_episode_progressionUncheckedCreateWithoutUserInput = {
    id?: bigint | number;
    episode_id: bigint | number;
    seen: boolean;
};
export type User_episode_progressionCreateOrConnectWithoutUserInput = {
    where: Prisma.User_episode_progressionWhereUniqueInput;
    create: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutUserInput, Prisma.User_episode_progressionUncheckedCreateWithoutUserInput>;
};
export type User_episode_progressionCreateManyUserInputEnvelope = {
    data: Prisma.User_episode_progressionCreateManyUserInput | Prisma.User_episode_progressionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type User_episode_progressionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.User_episode_progressionWhereUniqueInput;
    update: Prisma.XOR<Prisma.User_episode_progressionUpdateWithoutUserInput, Prisma.User_episode_progressionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutUserInput, Prisma.User_episode_progressionUncheckedCreateWithoutUserInput>;
};
export type User_episode_progressionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.User_episode_progressionWhereUniqueInput;
    data: Prisma.XOR<Prisma.User_episode_progressionUpdateWithoutUserInput, Prisma.User_episode_progressionUncheckedUpdateWithoutUserInput>;
};
export type User_episode_progressionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.User_episode_progressionScalarWhereInput;
    data: Prisma.XOR<Prisma.User_episode_progressionUpdateManyMutationInput, Prisma.User_episode_progressionUncheckedUpdateManyWithoutUserInput>;
};
export type User_episode_progressionScalarWhereInput = {
    AND?: Prisma.User_episode_progressionScalarWhereInput | Prisma.User_episode_progressionScalarWhereInput[];
    OR?: Prisma.User_episode_progressionScalarWhereInput[];
    NOT?: Prisma.User_episode_progressionScalarWhereInput | Prisma.User_episode_progressionScalarWhereInput[];
    id?: Prisma.BigIntFilter<"User_episode_progression"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"User_episode_progression"> | bigint | number;
    episode_id?: Prisma.BigIntFilter<"User_episode_progression"> | bigint | number;
    seen?: Prisma.BoolFilter<"User_episode_progression"> | boolean;
};
export type User_episode_progressionCreateWithoutEpisodeInput = {
    id?: bigint | number;
    seen: boolean;
    user: Prisma.UserCreateNestedOneWithoutEpisode_progressionInput;
};
export type User_episode_progressionUncheckedCreateWithoutEpisodeInput = {
    id?: bigint | number;
    user_id: bigint | number;
    seen: boolean;
};
export type User_episode_progressionCreateOrConnectWithoutEpisodeInput = {
    where: Prisma.User_episode_progressionWhereUniqueInput;
    create: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutEpisodeInput, Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput>;
};
export type User_episode_progressionCreateManyEpisodeInputEnvelope = {
    data: Prisma.User_episode_progressionCreateManyEpisodeInput | Prisma.User_episode_progressionCreateManyEpisodeInput[];
    skipDuplicates?: boolean;
};
export type User_episode_progressionUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: Prisma.User_episode_progressionWhereUniqueInput;
    update: Prisma.XOR<Prisma.User_episode_progressionUpdateWithoutEpisodeInput, Prisma.User_episode_progressionUncheckedUpdateWithoutEpisodeInput>;
    create: Prisma.XOR<Prisma.User_episode_progressionCreateWithoutEpisodeInput, Prisma.User_episode_progressionUncheckedCreateWithoutEpisodeInput>;
};
export type User_episode_progressionUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: Prisma.User_episode_progressionWhereUniqueInput;
    data: Prisma.XOR<Prisma.User_episode_progressionUpdateWithoutEpisodeInput, Prisma.User_episode_progressionUncheckedUpdateWithoutEpisodeInput>;
};
export type User_episode_progressionUpdateManyWithWhereWithoutEpisodeInput = {
    where: Prisma.User_episode_progressionScalarWhereInput;
    data: Prisma.XOR<Prisma.User_episode_progressionUpdateManyMutationInput, Prisma.User_episode_progressionUncheckedUpdateManyWithoutEpisodeInput>;
};
export type User_episode_progressionCreateManyUserInput = {
    id?: bigint | number;
    episode_id: bigint | number;
    seen: boolean;
};
export type User_episode_progressionUpdateWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    episode?: Prisma.EpisodeUpdateOneRequiredWithoutUser_progressionNestedInput;
};
export type User_episode_progressionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    episode_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type User_episode_progressionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    episode_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type User_episode_progressionCreateManyEpisodeInput = {
    id?: bigint | number;
    user_id: bigint | number;
    seen: boolean;
};
export type User_episode_progressionUpdateWithoutEpisodeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutEpisode_progressionNestedInput;
};
export type User_episode_progressionUncheckedUpdateWithoutEpisodeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type User_episode_progressionUncheckedUpdateManyWithoutEpisodeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type User_episode_progressionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    episode_id?: boolean;
    seen?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    episode?: boolean | Prisma.EpisodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_episode_progression"]>;
export type User_episode_progressionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    episode_id?: boolean;
    seen?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    episode?: boolean | Prisma.EpisodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_episode_progression"]>;
export type User_episode_progressionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    episode_id?: boolean;
    seen?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    episode?: boolean | Prisma.EpisodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_episode_progression"]>;
export type User_episode_progressionSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    episode_id?: boolean;
    seen?: boolean;
};
export type User_episode_progressionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "episode_id" | "seen", ExtArgs["result"]["user_episode_progression"]>;
export type User_episode_progressionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    episode?: boolean | Prisma.EpisodeDefaultArgs<ExtArgs>;
};
export type User_episode_progressionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    episode?: boolean | Prisma.EpisodeDefaultArgs<ExtArgs>;
};
export type User_episode_progressionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    episode?: boolean | Prisma.EpisodeDefaultArgs<ExtArgs>;
};
export type $User_episode_progressionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User_episode_progression";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        episode: Prisma.$EpisodePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        episode_id: bigint;
        seen: boolean;
    }, ExtArgs["result"]["user_episode_progression"]>;
    composites: {};
};
export type User_episode_progressionGetPayload<S extends boolean | null | undefined | User_episode_progressionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload, S>;
export type User_episode_progressionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<User_episode_progressionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_episode_progressionCountAggregateInputType | true;
};
export interface User_episode_progressionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User_episode_progression'];
        meta: {
            name: 'User_episode_progression';
        };
    };
    findUnique<T extends User_episode_progressionFindUniqueArgs>(args: Prisma.SelectSubset<T, User_episode_progressionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__User_episode_progressionClient<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends User_episode_progressionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, User_episode_progressionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__User_episode_progressionClient<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends User_episode_progressionFindFirstArgs>(args?: Prisma.SelectSubset<T, User_episode_progressionFindFirstArgs<ExtArgs>>): Prisma.Prisma__User_episode_progressionClient<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends User_episode_progressionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, User_episode_progressionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__User_episode_progressionClient<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends User_episode_progressionFindManyArgs>(args?: Prisma.SelectSubset<T, User_episode_progressionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends User_episode_progressionCreateArgs>(args: Prisma.SelectSubset<T, User_episode_progressionCreateArgs<ExtArgs>>): Prisma.Prisma__User_episode_progressionClient<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends User_episode_progressionCreateManyArgs>(args?: Prisma.SelectSubset<T, User_episode_progressionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends User_episode_progressionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, User_episode_progressionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends User_episode_progressionDeleteArgs>(args: Prisma.SelectSubset<T, User_episode_progressionDeleteArgs<ExtArgs>>): Prisma.Prisma__User_episode_progressionClient<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends User_episode_progressionUpdateArgs>(args: Prisma.SelectSubset<T, User_episode_progressionUpdateArgs<ExtArgs>>): Prisma.Prisma__User_episode_progressionClient<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends User_episode_progressionDeleteManyArgs>(args?: Prisma.SelectSubset<T, User_episode_progressionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends User_episode_progressionUpdateManyArgs>(args: Prisma.SelectSubset<T, User_episode_progressionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends User_episode_progressionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, User_episode_progressionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends User_episode_progressionUpsertArgs>(args: Prisma.SelectSubset<T, User_episode_progressionUpsertArgs<ExtArgs>>): Prisma.Prisma__User_episode_progressionClient<runtime.Types.Result.GetResult<Prisma.$User_episode_progressionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends User_episode_progressionCountArgs>(args?: Prisma.Subset<T, User_episode_progressionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_episode_progressionCountAggregateOutputType> : number>;
    aggregate<T extends User_episode_progressionAggregateArgs>(args: Prisma.Subset<T, User_episode_progressionAggregateArgs>): Prisma.PrismaPromise<GetUser_episode_progressionAggregateType<T>>;
    groupBy<T extends User_episode_progressionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: User_episode_progressionGroupByArgs['orderBy'];
    } : {
        orderBy?: User_episode_progressionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, User_episode_progressionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_episode_progressionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: User_episode_progressionFieldRefs;
}
export interface Prisma__User_episode_progressionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    episode<T extends Prisma.EpisodeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EpisodeDefaultArgs<ExtArgs>>): Prisma.Prisma__EpisodeClient<runtime.Types.Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface User_episode_progressionFieldRefs {
    readonly id: Prisma.FieldRef<"User_episode_progression", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"User_episode_progression", 'BigInt'>;
    readonly episode_id: Prisma.FieldRef<"User_episode_progression", 'BigInt'>;
    readonly seen: Prisma.FieldRef<"User_episode_progression", 'Boolean'>;
}
export type User_episode_progressionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelect<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    include?: Prisma.User_episode_progressionInclude<ExtArgs> | null;
    where: Prisma.User_episode_progressionWhereUniqueInput;
};
export type User_episode_progressionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelect<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    include?: Prisma.User_episode_progressionInclude<ExtArgs> | null;
    where: Prisma.User_episode_progressionWhereUniqueInput;
};
export type User_episode_progressionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User_episode_progressionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User_episode_progressionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User_episode_progressionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelect<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    include?: Prisma.User_episode_progressionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.User_episode_progressionCreateInput, Prisma.User_episode_progressionUncheckedCreateInput>;
};
export type User_episode_progressionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.User_episode_progressionCreateManyInput | Prisma.User_episode_progressionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type User_episode_progressionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    data: Prisma.User_episode_progressionCreateManyInput | Prisma.User_episode_progressionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.User_episode_progressionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type User_episode_progressionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelect<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    include?: Prisma.User_episode_progressionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.User_episode_progressionUpdateInput, Prisma.User_episode_progressionUncheckedUpdateInput>;
    where: Prisma.User_episode_progressionWhereUniqueInput;
};
export type User_episode_progressionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.User_episode_progressionUpdateManyMutationInput, Prisma.User_episode_progressionUncheckedUpdateManyInput>;
    where?: Prisma.User_episode_progressionWhereInput;
    limit?: number;
};
export type User_episode_progressionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.User_episode_progressionUpdateManyMutationInput, Prisma.User_episode_progressionUncheckedUpdateManyInput>;
    where?: Prisma.User_episode_progressionWhereInput;
    limit?: number;
    include?: Prisma.User_episode_progressionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type User_episode_progressionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelect<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    include?: Prisma.User_episode_progressionInclude<ExtArgs> | null;
    where: Prisma.User_episode_progressionWhereUniqueInput;
    create: Prisma.XOR<Prisma.User_episode_progressionCreateInput, Prisma.User_episode_progressionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.User_episode_progressionUpdateInput, Prisma.User_episode_progressionUncheckedUpdateInput>;
};
export type User_episode_progressionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelect<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    include?: Prisma.User_episode_progressionInclude<ExtArgs> | null;
    where: Prisma.User_episode_progressionWhereUniqueInput;
};
export type User_episode_progressionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_episode_progressionWhereInput;
    limit?: number;
};
export type User_episode_progressionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_episode_progressionSelect<ExtArgs> | null;
    omit?: Prisma.User_episode_progressionOmit<ExtArgs> | null;
    include?: Prisma.User_episode_progressionInclude<ExtArgs> | null;
};
export {};
