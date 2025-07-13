import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/currencyInfo";
import "./App.css";
function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (amount && currencyInfo[to]) {
      setConvertedAmount((Number(amount) * currencyInfo[to]).toFixed(2));
    } else {
      setConvertedAmount("");
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/041/053/482/non_2x/abstract-dark-background-with-shapes-gradient-blue-smooth-liquid-color-design-template-good-for-modern-website-wallpaper-cover-design-vector.jpg')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-200 rounded-xl p-6 backdrop-blur-sm bg-white/40 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              placeholder="Enter Amount"
            />
          </div>
          <div className="relative w-full my-4 flex justify-center">
            <button
              type="button"
              className="border-2 border-white rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 transition"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisabled
              placeholder="Converted Amount"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition outline-none"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
