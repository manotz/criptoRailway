import {z} from "zod";
import { CurrencySchema,CrytoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from "../schema/cripto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CrytoCurrencyResponseSchema>

export type PairProps = z.infer<typeof PairSchema>

export type CriptoPrice = z.infer<typeof CryptoPriceSchema>