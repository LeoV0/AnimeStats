import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type User_anime_statusModel = runtime.Types.Result.DefaultSelection<Prisma.$User_anime_statusPayload>;
export type AggregateUser_anime_status = {
    _count: User_anime_statusCountAggregateOutputType | null;
    _avg: User_anime_statusAvgAggregateOutputType | null;
    _sum: User_anime_statusSumAggregateOutputType | null;
    _min: User_anime_statusMinAggregateOutputType | null;
    _max: User_anime_statusMaxAggregateOutputType | null;
};
export type User_anime_statusAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    anime_id: number | null;
};
export type User_anime_statusSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    anime_id: bigint | null;
};
export type User_anime_statusMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    anime_id: bigint | null;
    status: $Enums.UserAnimeStatusEnum | null;
};
export type User_anime_statusMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    anime_id: bigint | null;
    status: $Enums.UserAnimeStatusEnum | null;
};
export type User_anime_statusCountAggregateOutputType = {
    id: number;
    user_id: number;
    anime_id: number;
    status: number;
    _all: number;
};
export type User_anime_statusAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    anime_id?: true;
};
export type User_anime_statusSumAggregateInputType = {
    id?: true;
    user_id?: true;
    anime_id?: true;
};
export type User_anime_statusMinAggregateInputType = {
    id?: true;
    user_id?: true;
    anime_id?: true;
    status?: true;
};
export type User_anime_statusMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    anime_id?: true;
    status?: true;
};
export type User_anime_statusCountAggregateInputType = {
    id?: true;
    user_id?: true;
    anime_id?: true;
    status?: true;
    _all?: true;
};
export type User_anime_statusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_anime_statusWhereInput;
    orderBy?: Prisma.User_anime_statusOrderByWithRelationInput | Prisma.User_anime_statusOrderByWithRelationInput[];
    cursor?: Prisma.User_anime_statusWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_anime_statusCountAggregateInputType;
    _avg?: User_anime_statusAvgAggregateInputType;
    _sum?: User_anime_statusSumAggregateInputType;
    _min?: User_anime_statusMinAggregateInputType;
    _max?: User_anime_statusMaxAggregateInputType;
};
export type GetUser_anime_statusAggregateType<T extends User_anime_statusAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_anime_status]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_anime_status[P]> : Prisma.GetScalarType<T[P], AggregateUser_anime_status[P]>;
};
export type User_anime_statusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_anime_statusWhereInput;
    orderBy?: Prisma.User_anime_statusOrderByWithAggregationInput | Prisma.User_anime_statusOrderByWithAggregationInput[];
    by: Prisma.User_anime_statusScalarFieldEnum[] | Prisma.User_anime_statusScalarFieldEnum;
    having?: Prisma.User_anime_statusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_anime_statusCountAggregateInputType | true;
    _avg?: User_anime_statusAvgAggregateInputType;
    _sum?: User_anime_statusSumAggregateInputType;
    _min?: User_anime_statusMinAggregateInputType;
    _max?: User_anime_statusMaxAggregateInputType;
};
export type User_anime_statusGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    anime_id: bigint;
    status: $Enums.UserAnimeStatusEnum;
    _count: User_anime_statusCountAggregateOutputType | null;
    _avg: User_anime_statusAvgAggregateOutputType | null;
    _sum: User_anime_statusSumAggregateOutputType | null;
    _min: User_anime_statusMinAggregateOutputType | null;
    _max: User_anime_statusMaxAggregateOutputType | null;
};
type GetUser_anime_statusGroupByPayload<T extends User_anime_statusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_anime_statusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_anime_statusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_anime_statusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_anime_statusGroupByOutputType[P]>;
}>>;
export type User_anime_statusWhereInput = {
    AND?: Prisma.User_anime_statusWhereInput | Prisma.User_anime_statusWhereInput[];
    OR?: Prisma.User_anime_statusWhereInput[];
    NOT?: Prisma.User_anime_statusWhereInput | Prisma.User_anime_statusWhereInput[];
    id?: Prisma.BigIntFilter<"User_anime_status"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"User_anime_status"> | bigint | number;
    anime_id?: Prisma.BigIntFilter<"User_anime_status"> | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFilter<"User_anime_status"> | $Enums.UserAnimeStatusEnum;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    anime?: Prisma.XOR<Prisma.AnimeScalarRelationFilter, Prisma.AnimeWhereInput>;
};
export type User_anime_statusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    anime?: Prisma.AnimeOrderByWithRelationInput;
};
export type User_anime_statusWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.User_anime_statusWhereInput | Prisma.User_anime_statusWhereInput[];
    OR?: Prisma.User_anime_statusWhereInput[];
    NOT?: Prisma.User_anime_statusWhereInput | Prisma.User_anime_statusWhereInput[];
    user_id?: Prisma.BigIntFilter<"User_anime_status"> | bigint | number;
    anime_id?: Prisma.BigIntFilter<"User_anime_status"> | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFilter<"User_anime_status"> | $Enums.UserAnimeStatusEnum;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    anime?: Prisma.XOR<Prisma.AnimeScalarRelationFilter, Prisma.AnimeWhereInput>;
}, "id">;
export type User_anime_statusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.User_anime_statusCountOrderByAggregateInput;
    _avg?: Prisma.User_anime_statusAvgOrderByAggregateInput;
    _max?: Prisma.User_anime_statusMaxOrderByAggregateInput;
    _min?: Prisma.User_anime_statusMinOrderByAggregateInput;
    _sum?: Prisma.User_anime_statusSumOrderByAggregateInput;
};
export type User_anime_statusScalarWhereWithAggregatesInput = {
    AND?: Prisma.User_anime_statusScalarWhereWithAggregatesInput | Prisma.User_anime_statusScalarWhereWithAggregatesInput[];
    OR?: Prisma.User_anime_statusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.User_anime_statusScalarWhereWithAggregatesInput | Prisma.User_anime_statusScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"User_anime_status"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"User_anime_status"> | bigint | number;
    anime_id?: Prisma.BigIntWithAggregatesFilter<"User_anime_status"> | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumWithAggregatesFilter<"User_anime_status"> | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusCreateInput = {
    id?: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
    user: Prisma.UserCreateNestedOneWithoutAnime_statusInput;
    anime: Prisma.AnimeCreateNestedOneWithoutUser_statusInput;
};
export type User_anime_statusUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    anime_id: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
    user?: Prisma.UserUpdateOneRequiredWithoutAnime_statusNestedInput;
    anime?: Prisma.AnimeUpdateOneRequiredWithoutUser_statusNestedInput;
};
export type User_anime_statusUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    anime_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    anime_id: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    anime_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusListRelationFilter = {
    every?: Prisma.User_anime_statusWhereInput;
    some?: Prisma.User_anime_statusWhereInput;
    none?: Prisma.User_anime_statusWhereInput;
};
export type User_anime_statusOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type User_anime_statusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type User_anime_statusAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
};
export type User_anime_statusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type User_anime_statusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type User_anime_statusSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    anime_id?: Prisma.SortOrder;
};
export type User_anime_statusCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.User_anime_statusCreateWithoutUserInput, Prisma.User_anime_statusUncheckedCreateWithoutUserInput> | Prisma.User_anime_statusCreateWithoutUserInput[] | Prisma.User_anime_statusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_anime_statusCreateOrConnectWithoutUserInput | Prisma.User_anime_statusCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.User_anime_statusCreateManyUserInputEnvelope;
    connect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
};
export type User_anime_statusUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.User_anime_statusCreateWithoutUserInput, Prisma.User_anime_statusUncheckedCreateWithoutUserInput> | Prisma.User_anime_statusCreateWithoutUserInput[] | Prisma.User_anime_statusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_anime_statusCreateOrConnectWithoutUserInput | Prisma.User_anime_statusCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.User_anime_statusCreateManyUserInputEnvelope;
    connect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
};
export type User_anime_statusUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.User_anime_statusCreateWithoutUserInput, Prisma.User_anime_statusUncheckedCreateWithoutUserInput> | Prisma.User_anime_statusCreateWithoutUserInput[] | Prisma.User_anime_statusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_anime_statusCreateOrConnectWithoutUserInput | Prisma.User_anime_statusCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.User_anime_statusUpsertWithWhereUniqueWithoutUserInput | Prisma.User_anime_statusUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.User_anime_statusCreateManyUserInputEnvelope;
    set?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    disconnect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    delete?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    connect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    update?: Prisma.User_anime_statusUpdateWithWhereUniqueWithoutUserInput | Prisma.User_anime_statusUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.User_anime_statusUpdateManyWithWhereWithoutUserInput | Prisma.User_anime_statusUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.User_anime_statusScalarWhereInput | Prisma.User_anime_statusScalarWhereInput[];
};
export type User_anime_statusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.User_anime_statusCreateWithoutUserInput, Prisma.User_anime_statusUncheckedCreateWithoutUserInput> | Prisma.User_anime_statusCreateWithoutUserInput[] | Prisma.User_anime_statusUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.User_anime_statusCreateOrConnectWithoutUserInput | Prisma.User_anime_statusCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.User_anime_statusUpsertWithWhereUniqueWithoutUserInput | Prisma.User_anime_statusUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.User_anime_statusCreateManyUserInputEnvelope;
    set?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    disconnect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    delete?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    connect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    update?: Prisma.User_anime_statusUpdateWithWhereUniqueWithoutUserInput | Prisma.User_anime_statusUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.User_anime_statusUpdateManyWithWhereWithoutUserInput | Prisma.User_anime_statusUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.User_anime_statusScalarWhereInput | Prisma.User_anime_statusScalarWhereInput[];
};
export type User_anime_statusCreateNestedManyWithoutAnimeInput = {
    create?: Prisma.XOR<Prisma.User_anime_statusCreateWithoutAnimeInput, Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput> | Prisma.User_anime_statusCreateWithoutAnimeInput[] | Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput[];
    connectOrCreate?: Prisma.User_anime_statusCreateOrConnectWithoutAnimeInput | Prisma.User_anime_statusCreateOrConnectWithoutAnimeInput[];
    createMany?: Prisma.User_anime_statusCreateManyAnimeInputEnvelope;
    connect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
};
export type User_anime_statusUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: Prisma.XOR<Prisma.User_anime_statusCreateWithoutAnimeInput, Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput> | Prisma.User_anime_statusCreateWithoutAnimeInput[] | Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput[];
    connectOrCreate?: Prisma.User_anime_statusCreateOrConnectWithoutAnimeInput | Prisma.User_anime_statusCreateOrConnectWithoutAnimeInput[];
    createMany?: Prisma.User_anime_statusCreateManyAnimeInputEnvelope;
    connect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
};
export type User_anime_statusUpdateManyWithoutAnimeNestedInput = {
    create?: Prisma.XOR<Prisma.User_anime_statusCreateWithoutAnimeInput, Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput> | Prisma.User_anime_statusCreateWithoutAnimeInput[] | Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput[];
    connectOrCreate?: Prisma.User_anime_statusCreateOrConnectWithoutAnimeInput | Prisma.User_anime_statusCreateOrConnectWithoutAnimeInput[];
    upsert?: Prisma.User_anime_statusUpsertWithWhereUniqueWithoutAnimeInput | Prisma.User_anime_statusUpsertWithWhereUniqueWithoutAnimeInput[];
    createMany?: Prisma.User_anime_statusCreateManyAnimeInputEnvelope;
    set?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    disconnect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    delete?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    connect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    update?: Prisma.User_anime_statusUpdateWithWhereUniqueWithoutAnimeInput | Prisma.User_anime_statusUpdateWithWhereUniqueWithoutAnimeInput[];
    updateMany?: Prisma.User_anime_statusUpdateManyWithWhereWithoutAnimeInput | Prisma.User_anime_statusUpdateManyWithWhereWithoutAnimeInput[];
    deleteMany?: Prisma.User_anime_statusScalarWhereInput | Prisma.User_anime_statusScalarWhereInput[];
};
export type User_anime_statusUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: Prisma.XOR<Prisma.User_anime_statusCreateWithoutAnimeInput, Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput> | Prisma.User_anime_statusCreateWithoutAnimeInput[] | Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput[];
    connectOrCreate?: Prisma.User_anime_statusCreateOrConnectWithoutAnimeInput | Prisma.User_anime_statusCreateOrConnectWithoutAnimeInput[];
    upsert?: Prisma.User_anime_statusUpsertWithWhereUniqueWithoutAnimeInput | Prisma.User_anime_statusUpsertWithWhereUniqueWithoutAnimeInput[];
    createMany?: Prisma.User_anime_statusCreateManyAnimeInputEnvelope;
    set?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    disconnect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    delete?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    connect?: Prisma.User_anime_statusWhereUniqueInput | Prisma.User_anime_statusWhereUniqueInput[];
    update?: Prisma.User_anime_statusUpdateWithWhereUniqueWithoutAnimeInput | Prisma.User_anime_statusUpdateWithWhereUniqueWithoutAnimeInput[];
    updateMany?: Prisma.User_anime_statusUpdateManyWithWhereWithoutAnimeInput | Prisma.User_anime_statusUpdateManyWithWhereWithoutAnimeInput[];
    deleteMany?: Prisma.User_anime_statusScalarWhereInput | Prisma.User_anime_statusScalarWhereInput[];
};
export type EnumUserAnimeStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusCreateWithoutUserInput = {
    id?: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
    anime: Prisma.AnimeCreateNestedOneWithoutUser_statusInput;
};
export type User_anime_statusUncheckedCreateWithoutUserInput = {
    id?: bigint | number;
    anime_id: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusCreateOrConnectWithoutUserInput = {
    where: Prisma.User_anime_statusWhereUniqueInput;
    create: Prisma.XOR<Prisma.User_anime_statusCreateWithoutUserInput, Prisma.User_anime_statusUncheckedCreateWithoutUserInput>;
};
export type User_anime_statusCreateManyUserInputEnvelope = {
    data: Prisma.User_anime_statusCreateManyUserInput | Prisma.User_anime_statusCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type User_anime_statusUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.User_anime_statusWhereUniqueInput;
    update: Prisma.XOR<Prisma.User_anime_statusUpdateWithoutUserInput, Prisma.User_anime_statusUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.User_anime_statusCreateWithoutUserInput, Prisma.User_anime_statusUncheckedCreateWithoutUserInput>;
};
export type User_anime_statusUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.User_anime_statusWhereUniqueInput;
    data: Prisma.XOR<Prisma.User_anime_statusUpdateWithoutUserInput, Prisma.User_anime_statusUncheckedUpdateWithoutUserInput>;
};
export type User_anime_statusUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.User_anime_statusScalarWhereInput;
    data: Prisma.XOR<Prisma.User_anime_statusUpdateManyMutationInput, Prisma.User_anime_statusUncheckedUpdateManyWithoutUserInput>;
};
export type User_anime_statusScalarWhereInput = {
    AND?: Prisma.User_anime_statusScalarWhereInput | Prisma.User_anime_statusScalarWhereInput[];
    OR?: Prisma.User_anime_statusScalarWhereInput[];
    NOT?: Prisma.User_anime_statusScalarWhereInput | Prisma.User_anime_statusScalarWhereInput[];
    id?: Prisma.BigIntFilter<"User_anime_status"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"User_anime_status"> | bigint | number;
    anime_id?: Prisma.BigIntFilter<"User_anime_status"> | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFilter<"User_anime_status"> | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusCreateWithoutAnimeInput = {
    id?: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
    user: Prisma.UserCreateNestedOneWithoutAnime_statusInput;
};
export type User_anime_statusUncheckedCreateWithoutAnimeInput = {
    id?: bigint | number;
    user_id: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusCreateOrConnectWithoutAnimeInput = {
    where: Prisma.User_anime_statusWhereUniqueInput;
    create: Prisma.XOR<Prisma.User_anime_statusCreateWithoutAnimeInput, Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput>;
};
export type User_anime_statusCreateManyAnimeInputEnvelope = {
    data: Prisma.User_anime_statusCreateManyAnimeInput | Prisma.User_anime_statusCreateManyAnimeInput[];
    skipDuplicates?: boolean;
};
export type User_anime_statusUpsertWithWhereUniqueWithoutAnimeInput = {
    where: Prisma.User_anime_statusWhereUniqueInput;
    update: Prisma.XOR<Prisma.User_anime_statusUpdateWithoutAnimeInput, Prisma.User_anime_statusUncheckedUpdateWithoutAnimeInput>;
    create: Prisma.XOR<Prisma.User_anime_statusCreateWithoutAnimeInput, Prisma.User_anime_statusUncheckedCreateWithoutAnimeInput>;
};
export type User_anime_statusUpdateWithWhereUniqueWithoutAnimeInput = {
    where: Prisma.User_anime_statusWhereUniqueInput;
    data: Prisma.XOR<Prisma.User_anime_statusUpdateWithoutAnimeInput, Prisma.User_anime_statusUncheckedUpdateWithoutAnimeInput>;
};
export type User_anime_statusUpdateManyWithWhereWithoutAnimeInput = {
    where: Prisma.User_anime_statusScalarWhereInput;
    data: Prisma.XOR<Prisma.User_anime_statusUpdateManyMutationInput, Prisma.User_anime_statusUncheckedUpdateManyWithoutAnimeInput>;
};
export type User_anime_statusCreateManyUserInput = {
    id?: bigint | number;
    anime_id: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusUpdateWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
    anime?: Prisma.AnimeUpdateOneRequiredWithoutUser_statusNestedInput;
};
export type User_anime_statusUncheckedUpdateWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    anime_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    anime_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusCreateManyAnimeInput = {
    id?: bigint | number;
    user_id: bigint | number;
    status: $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusUpdateWithoutAnimeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
    user?: Prisma.UserUpdateOneRequiredWithoutAnime_statusNestedInput;
};
export type User_anime_statusUncheckedUpdateWithoutAnimeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusUncheckedUpdateManyWithoutAnimeInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumUserAnimeStatusEnumFieldUpdateOperationsInput | $Enums.UserAnimeStatusEnum;
};
export type User_anime_statusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    anime_id?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_anime_status"]>;
export type User_anime_statusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    anime_id?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_anime_status"]>;
export type User_anime_statusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    anime_id?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_anime_status"]>;
export type User_anime_statusSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    anime_id?: boolean;
    status?: boolean;
};
export type User_anime_statusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "anime_id" | "status", ExtArgs["result"]["user_anime_status"]>;
export type User_anime_statusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
};
export type User_anime_statusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
};
export type User_anime_statusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    anime?: boolean | Prisma.AnimeDefaultArgs<ExtArgs>;
};
export type $User_anime_statusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User_anime_status";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        anime: Prisma.$AnimePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        anime_id: bigint;
        status: $Enums.UserAnimeStatusEnum;
    }, ExtArgs["result"]["user_anime_status"]>;
    composites: {};
};
export type User_anime_statusGetPayload<S extends boolean | null | undefined | User_anime_statusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload, S>;
export type User_anime_statusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<User_anime_statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_anime_statusCountAggregateInputType | true;
};
export interface User_anime_statusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User_anime_status'];
        meta: {
            name: 'User_anime_status';
        };
    };
    findUnique<T extends User_anime_statusFindUniqueArgs>(args: Prisma.SelectSubset<T, User_anime_statusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__User_anime_statusClient<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends User_anime_statusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, User_anime_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__User_anime_statusClient<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends User_anime_statusFindFirstArgs>(args?: Prisma.SelectSubset<T, User_anime_statusFindFirstArgs<ExtArgs>>): Prisma.Prisma__User_anime_statusClient<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends User_anime_statusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, User_anime_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__User_anime_statusClient<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends User_anime_statusFindManyArgs>(args?: Prisma.SelectSubset<T, User_anime_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends User_anime_statusCreateArgs>(args: Prisma.SelectSubset<T, User_anime_statusCreateArgs<ExtArgs>>): Prisma.Prisma__User_anime_statusClient<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends User_anime_statusCreateManyArgs>(args?: Prisma.SelectSubset<T, User_anime_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends User_anime_statusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, User_anime_statusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends User_anime_statusDeleteArgs>(args: Prisma.SelectSubset<T, User_anime_statusDeleteArgs<ExtArgs>>): Prisma.Prisma__User_anime_statusClient<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends User_anime_statusUpdateArgs>(args: Prisma.SelectSubset<T, User_anime_statusUpdateArgs<ExtArgs>>): Prisma.Prisma__User_anime_statusClient<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends User_anime_statusDeleteManyArgs>(args?: Prisma.SelectSubset<T, User_anime_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends User_anime_statusUpdateManyArgs>(args: Prisma.SelectSubset<T, User_anime_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends User_anime_statusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, User_anime_statusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends User_anime_statusUpsertArgs>(args: Prisma.SelectSubset<T, User_anime_statusUpsertArgs<ExtArgs>>): Prisma.Prisma__User_anime_statusClient<runtime.Types.Result.GetResult<Prisma.$User_anime_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends User_anime_statusCountArgs>(args?: Prisma.Subset<T, User_anime_statusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_anime_statusCountAggregateOutputType> : number>;
    aggregate<T extends User_anime_statusAggregateArgs>(args: Prisma.Subset<T, User_anime_statusAggregateArgs>): Prisma.PrismaPromise<GetUser_anime_statusAggregateType<T>>;
    groupBy<T extends User_anime_statusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: User_anime_statusGroupByArgs['orderBy'];
    } : {
        orderBy?: User_anime_statusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, User_anime_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_anime_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: User_anime_statusFieldRefs;
}
export interface Prisma__User_anime_statusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    anime<T extends Prisma.AnimeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnimeDefaultArgs<ExtArgs>>): Prisma.Prisma__AnimeClient<runtime.Types.Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface User_anime_statusFieldRefs {
    readonly id: Prisma.FieldRef<"User_anime_status", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"User_anime_status", 'BigInt'>;
    readonly anime_id: Prisma.FieldRef<"User_anime_status", 'BigInt'>;
    readonly status: Prisma.FieldRef<"User_anime_status", 'UserAnimeStatusEnum'>;
}
export type User_anime_statusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelect<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    include?: Prisma.User_anime_statusInclude<ExtArgs> | null;
    where: Prisma.User_anime_statusWhereUniqueInput;
};
export type User_anime_statusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelect<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    include?: Prisma.User_anime_statusInclude<ExtArgs> | null;
    where: Prisma.User_anime_statusWhereUniqueInput;
};
export type User_anime_statusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User_anime_statusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User_anime_statusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User_anime_statusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelect<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    include?: Prisma.User_anime_statusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.User_anime_statusCreateInput, Prisma.User_anime_statusUncheckedCreateInput>;
};
export type User_anime_statusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.User_anime_statusCreateManyInput | Prisma.User_anime_statusCreateManyInput[];
    skipDuplicates?: boolean;
};
export type User_anime_statusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    data: Prisma.User_anime_statusCreateManyInput | Prisma.User_anime_statusCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.User_anime_statusIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type User_anime_statusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelect<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    include?: Prisma.User_anime_statusInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.User_anime_statusUpdateInput, Prisma.User_anime_statusUncheckedUpdateInput>;
    where: Prisma.User_anime_statusWhereUniqueInput;
};
export type User_anime_statusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.User_anime_statusUpdateManyMutationInput, Prisma.User_anime_statusUncheckedUpdateManyInput>;
    where?: Prisma.User_anime_statusWhereInput;
    limit?: number;
};
export type User_anime_statusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.User_anime_statusUpdateManyMutationInput, Prisma.User_anime_statusUncheckedUpdateManyInput>;
    where?: Prisma.User_anime_statusWhereInput;
    limit?: number;
    include?: Prisma.User_anime_statusIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type User_anime_statusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelect<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    include?: Prisma.User_anime_statusInclude<ExtArgs> | null;
    where: Prisma.User_anime_statusWhereUniqueInput;
    create: Prisma.XOR<Prisma.User_anime_statusCreateInput, Prisma.User_anime_statusUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.User_anime_statusUpdateInput, Prisma.User_anime_statusUncheckedUpdateInput>;
};
export type User_anime_statusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelect<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    include?: Prisma.User_anime_statusInclude<ExtArgs> | null;
    where: Prisma.User_anime_statusWhereUniqueInput;
};
export type User_anime_statusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.User_anime_statusWhereInput;
    limit?: number;
};
export type User_anime_statusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.User_anime_statusSelect<ExtArgs> | null;
    omit?: Prisma.User_anime_statusOmit<ExtArgs> | null;
    include?: Prisma.User_anime_statusInclude<ExtArgs> | null;
};
export {};
