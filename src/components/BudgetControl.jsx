import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const BudgetControl = ({budget, expenses, setBudget,setexpenses, setValid})=> {
    const [available, setavailable] = useState(0);
    const [spent, setspent] = useState(0)
    const [percentage, setpercentage] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce( (total, expend)=> expend.amount + total, 0 )
        const able = budget - totalSpent
        //Calculate the percentage 
        //you can put totalspent instead of able and will start with 100.
        const newPercentage = (((budget - able) / budget ) * 100).toFixed(2)
        
        setspent(totalSpent)
        setavailable(able)
        setTimeout(() => {
          setpercentage(newPercentage);
        }, 1500);
        
    }, [expenses])

    // useEffect(() => {
    //   const able = budget - spent;
    //   setavailable(able);
      
    // }, [spent])

    const amountV = (amount) =>{
      return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          
        })
    }
    
    const handleResetApp = () =>{
      const result = confirm ("Are you sure you want to reset Budget and Expenses?")
      if(result){
        setBudget(0);
        setexpenses([]);
        setValid(false)
      } 
    }
   
    
        
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
        <CircularProgressbar value={percentage} text={`${percentage}%`}
          styles={buildStyles({
            pathColor: percentage > 100 ? "#f54141": "#63b1c3",
            textColor: percentage > 100 ? "#f54141": "#63b1c3",
          })}
         />
        </div>
        <div className='contenido-presupuesto'>
            <button className='reset-app' type='button' onClick={handleResetApp}>Reset App</button>
            <p>
             <span> Budget: </span> {amountV(budget)}
            </p>
            <p className={`${available <0 ? 'negativo' : '' }`}>
             <span> Available: </span> {amountV(available)}
            </p>
            <p>
             <span> Spent: </span> {amountV(spent)}
            </p>
        </div>
    </div>
  )
}
