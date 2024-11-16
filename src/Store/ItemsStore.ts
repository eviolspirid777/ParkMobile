import { atom } from "jotai";
import { RecivedCardDataType } from "../Types/CardType";

export const itemsAtom = atom<RecivedCardDataType>();

export const skipAtom = atom<number>(0);
export const takeAtom = atom<number>(16);