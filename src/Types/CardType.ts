export type CardType = {
    image: string,
    tag: string,
    price: string
}

export type FullCardType = CardType & {gurantee: boolean};
