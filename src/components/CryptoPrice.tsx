import { useMemo } from "react";
import { useCriptoStore } from "../store";
import Spinner from "./Spinner";

const CryptoPrice = () => {
  const result = useCriptoStore((state) => state.result);
  const loading = useCriptoStore((state) => state.loading);
  const hasResult = useMemo(
    () => !Object.values(result).includes(""),
    [result]
  );

  return (
    <div className="result-wrapper">
      {loading ? <Spinner />  : hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            <div className="image-container">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="Criptomoneda"
              />
            </div>
            <div className="text-container">
              <p>
                El precio es de: <span>{result.PRICE}</span>
              </p>
              <p>
                Precio más alto del día: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                Precio más bajo del día: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Variación últimas 24 horas:{" "}
                <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Última Actualización: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoPrice;
