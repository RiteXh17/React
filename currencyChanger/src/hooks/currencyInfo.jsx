import {useState, useEffect} from "react"
import Dropdown from "./dropdown"
import './currency.css';

function CurrencyInfo (){
    // curl -s https://api.frankfurter.dev/v1/currencies
    // curl -s https://api.frankfurter.dev/v1/latest?base=USD&symbols=INR
   const [currency, setCurrency] = useState([])
   const [amount, setAmount] = useState('1')
   const [fromCurrency, setfromCurrency] = useState("USD")
   const[toCurrency,settoCurrency]= useState("INR")
   const[ConvertedAmount,setConvertedAmount] = useState(null)
   const[ converting ,setConverting] = useState(false)


   const fetchCurrency = async() => {
        try {
            const res = await fetch("https://api.frankfurter.dev/v1/currencies")
            const data = await res.json()
            setCurrency(Object.keys(data))
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        fetchCurrency()
    },[])
    

    const currencyConvert = async() => {
        if(!amount) return
        setConverting(true)
        try {
            const res = await fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${fromCurrency}&symbols=${toCurrency}`)
            const data = await res.json()
            setConvertedAmount(data.rates[toCurrency])
        } catch (error) {
            console.log(error)
        } finally{
            setConverting(false)
        }
        
    }

    const swap = () =>{
            setfromCurrency(toCurrency)
            settoCurrency(fromCurrency  )
    }


    return (
        <>
        <div id="container"> 
        <div className="center" > 
            <div id="heading">
                <h2>Currency Converter </h2>
            </div>
        <div>
            <div id="fromTo">
                <Dropdown  currencies={currency} title="From:" currency={fromCurrency} setCurrency={setfromCurrency}/>
             <div id="button">
                <button onClick={swap}>Swap</button>  
             </div> 
       
                 <Dropdown currencies={currency} title="To:" currency={toCurrency}  setCurrency={settoCurrency}/> 
            </div>
                    </div>
                    <div> 
                    <div id="amount">
                        <label htmlFor="amount">Amount:</label>
                        <input id="amount" value={amount} type="number" onChange={(e)=> setAmount(e.target.value)} />
                    </div>
                    <div id="buttonSubmit">
                        <button id="buttonSubmit" onClick={currencyConvert}>Convert</button>
                    </div>
                     
                     
                    
                    </div>
                    {ConvertedAmount&&(<div id="answer">
                        Converted amount :  {ConvertedAmount}
                    </div>)}
                   
        </div>
      
       
        </div>
    </>
)
}

export default CurrencyInfo 