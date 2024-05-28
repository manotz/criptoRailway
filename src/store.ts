import { create } from "zustand"
import { devtools } from "zustand/middleware";
import { getCryptos, fetchCurrentCrytoPrice } from "./services/CryptoService";
import { CryptoCurrency, PairProps, CriptoPrice } from "./types";

type cryptoStore = {
    crytoCurrencies:CryptoCurrency[],
    result: CriptoPrice,
    loading: boolean,
    fetchCriptos: () => Promise<void>,
    fetchData: (pair : PairProps) => Promise<void>
}


export const useCriptoStore = create<cryptoStore>()( devtools((set) => ({
    crytoCurrencies:[],
    result:{
      IMAGEURL: "",
      PRICE: "",
      HIGHDAY: "",
      LOWDAY: "",
      CHANGEPCT24HOUR:"",
      LASTUPDATE: "",
    },
    fetchCriptos: async () => {
      const crytoCurrencies = await getCryptos();
      set(() => ({
        crytoCurrencies
      }))
    },
    loading:false,
    fetchData: async (pair) => {
         set(() => ({
            loading:true
          }))
         const datos = await fetchCurrentCrytoPrice(pair);

         set(() => ({
            result:datos,
            loading:false
         }))
    }
})))