import {useState} from 'react'
import { Message } from './index';

export const NewBudget = ({budget, setBudget, setValid}) => {
     
    //Validating budget with handleBudget function
    const [message, setmessage] = useState()
    

    const onChange = e => setBudget(Number(e.target.value))
    
    const handleBudget = (e) =>{
        e.preventDefault();
       
        if (!budget || budget < 0){
            setmessage("You should enter a valid budget");
           
            return
        }   
        setmessage('')
        setValid(true)
        
    }
    
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form className='formulario' onSubmit={handleBudget}>
          
           <div className='campo'>
            <label> Define Budget</label>

            <input 
             className='nuevo-presupuesto'
             type="number"
             placeholder = "Add budget"
             value={budget}
             onChange={onChange}
            />
            
            <input type="submit" value="Add"/>
           </div>
          

         {message && <Message tipo="error">{message}</Message>}

        </form>
    </div>
  )
}
