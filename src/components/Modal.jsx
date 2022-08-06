import { useEffect, useState } from 'react';
import { Message } from './index';
import closeTab from '../img/cerrar.svg'


export const Modal = ({setmodal, 
    animation, 
    setanimation, 
    saveExpense,
    editExpense,
    seteditExpense}) => {
    
    const [select, setselect] = useState('');
    const [name, setname] = useState('');
    const [amount, setamount] = useState('');
    const [message, setmessage] = useState();
    const [id, setId] = useState()
    const [date, setdate] = useState()

    useEffect(() => {
      if(Object.keys(editExpense).length > 0){
        setname(editExpense.name)
        setselect(editExpense.select)
        setamount(editExpense.amount)
        setId(editExpense.id)
        setdate(editExpense.date)
 
      }
    }, [])
    
 
 
    const onCloseModal = () =>{
       
        setanimation(false);
        seteditExpense({})

        setTimeout(() => {
            setmodal(false);
        }, 500);
    }

    const handleSubmit = e => {
       e.preventDefault();

       if([select, amount, name].includes('')){
        setmessage('All fields are required');
        
        setTimeout(() => {
            setmessage('');
        }, 3000);
        return
       } 
       saveExpense({select, amount, name, id, date})
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
                src={closeTab}
                alt="Close modal"
                onClick={onCloseModal}
            />
        </div>

        <form className={`formulario ${animation ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
           {message && <Message tipo="error">{message}</Message>}
            <legend>{editExpense.name ? "Edit expense" : "New Expense"}</legend>
            <div className='campo'>
                <label htmlFor='nombre'> Expense name</label>

                <input 
                    id="nombre"
                    type="text"
                    placeholder="Add expense name"
                    value={name}
                    onChange={e=> setname(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor='amount'>Expense Amount</label>

                <input 
                    id="amount"
                    type="number"
                    placeholder="Add expense amount ej. 300"
                    value={amount}
                    onChange={e=> setamount(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor='categorie'> Expense Category </label>
                <select
                id='categorie'
                onChange={e=> setselect(e.target.value)}
                value={select}
                >
                    <option value="">-- Select One --</option>
                    <option value="saves">Saves</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="hobby">Hobbies</option>
                    <option value="health">Health</option>
                    <option value="subcriptions">Subcriptions</option>
                    <option value="others">Others expenses</option>
                    
                </select>
                 
            </div>

            <input 
                type="submit"
                value={editExpense.name ? "Save Changes" : "Add Expense"}
            />
        </form>
    </div>
  )
}
