import {} from 'react'
import './currency.css';

const Dropdown = ({
    currencies,
    currency,
    setCurrency,
    title=""

}) => {
  return (
    <div>
         <label htmlFor="{title}">{title}</label>
         <div id="drop">
            <select value={currency} onChange= {(e)=> setCurrency(e.target.value)}name="" id="drop">
                {currencies?.map((currency)=> {
                    return <option value={currency} key={currency}>{currency}</option>
                })}

            </select>
         </div>
    </div>
  )
}

export default Dropdown