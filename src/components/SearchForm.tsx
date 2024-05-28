import { useCriptoStore } from "../store"
import {currencies} from "../data"
import { useState } from "react";
import { PairProps } from "../types";
import ErrorMessage from "./ErrorMessage";

const SearchForm = () => {

   const cryptoCurrencies = useCriptoStore((state)=> state.crytoCurrencies);
   const fetchData = useCriptoStore((state)=> state.fetchData);

   const [pair,setPair] = useState<PairProps>({
    currency:"",
    criptocurrency:""
   })
   const [error,setError] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]:e.target.value
        })
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(Object.values(pair).includes("")){
            setError("Todos los campo son obligatorios");
            return
        }

        setError("");
        //Consultar la api

        fetchData(pair);
        
   }



  return (
    <form className='form' onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className='field'>
            <label htmlFor="currency">Moneda:</label>
            <select name="currency" id="currency" value={pair.currency} onChange={handleChange}>
                <option value="">-- Seleccione --</option>    

                {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}                    
            </select>
        </div>

        <div className='field'>
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select name="criptocurrency" id="criptocurrency" value={pair.criptocurrency} onChange={handleChange}>
                <option value="">-- Seleccione --</option>    

                {cryptoCurrencies.map(crypto => (
                    <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                ))}   
 
            </select>
        </div>


        <input type="submit" value={"Cotizar"} />
    </form>
  )
}

export default SearchForm
