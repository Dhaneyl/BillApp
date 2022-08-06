import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import {ExpenseList, Header, Modal} from './components/index';
import {generarId} from './helpers';
import BillIcon from './img/nuevo-gasto.svg';




function App() {
 
  //Presupuesto
  const [budget, setBudget] = useState(Number(localStorage.getItem('Budget') )?? 0)
  //Confirmar si el presupuesto es valido
  const [valid, setValid] = useState(false)
  //Ventana que se presenta cuando vamos a agregar un gasto
  const [modal, setmodal] = useState(false)
  //Efectos del modal
  const [animation, setanimation] = useState(false)
  //gastos
  const [expenses, setexpenses] = useState(
       localStorage.getItem('Expenses') ? JSON.parse(localStorage.getItem('Expenses')) : []
    )
  //editar gastos
  const [editExpense, seteditExpense] = useState({})
  //Filters State
  const [filters, setfilters] = useState('')
  //Set filtered expenses
  const [filterExpense, setfilterExpense] = useState([])
  //useEffect para cuando editgastos sea true, se presente modal por pantalla.

  useEffect(() => {
    if(Object.keys(editExpense).length > 0){
     setmodal(true)

     setTimeout(() => {
      setanimation(true)
    }, 400);
    }
  }, [editExpense])
  
  //to edit expense with the old info
  const handleBill = ()=> {
    setmodal(true)
    seteditExpense({})

    setTimeout(() => {
      setanimation(true)
    }, 400);
 }
//to save the new expenses
 const saveExpense = expense => {
  //to save edited expenses
  if(expense.id){
    const updatexpenses = expenses.map(expenseState => expenseState.id ===
      expense.id ? expense : expenseState)
      setexpenses(updatexpenses)
      seteditExpense({})

  } else{
    //to add and save new expenses
    expense.id = generarId()
    expense.date = Date.now();
    setexpenses([...expenses, expense])
  }
  

  setTimeout(() => {
      setmodal(false);
  }, 500);
 }
//For deleting id
 const deleteExpense = id =>{
  const updatexpenses = expenses.filter(expense => expense.id !== id)
  setexpenses(updatexpenses);
 }

 //localstorage for budget

 useEffect(() => {
   localStorage.setItem('Budget', budget ?? 0)
 }, [budget])

 //localstorage for expenses
 useEffect(() => {
  localStorage.setItem('Expenses', JSON.stringify(expenses) ?? [])
}, [expenses])

 //condition localstorage for not showing the first screen if there's a budget
 useEffect(() => {
   const budgetLS = Number(localStorage.getItem('Budget')) ?? 0;
   
   if(budgetLS > 0){
    setValid(true)
   }
 }, [])

 //filter use effect
 useEffect(() => {
   if(filters){
     const expenseFiltered = expenses.filter( 
      expen=> expen.select === filters)
      setfilterExpense(expenseFiltered);
   }
 }, [filters])
 
 
 

  return (
    <div className={modal ?  'fijar' : ""}>
      <Header 
      budget = {budget}
      setBudget = {setBudget}
      valid = {valid}
      setValid = {setValid}
      expenses={expenses}
      setexpenses = {setexpenses}

      />
       { valid && (
        <>
          <main>
            <Filter filters={filters} setfilters={ setfilters}/>
            <ExpenseList expenses={expenses} seteditExpense={seteditExpense} 
            deleteExpense ={deleteExpense} filterExpense={filterExpense}
            filters={filters}
            />
          </main>

          <div className='nuevo-gasto'>
          <img 
          src={BillIcon}
          alt="Bill icon"
          onClick={handleBill}
          />
          </div>
        </> 
       )}
      
      {modal && <Modal 
      setmodal={setmodal} animation={animation} 
      setanimation={setanimation} saveExpense={saveExpense}
      editExpense={editExpense} seteditExpense={seteditExpense}
      />}
    </div>
  )
}

export default App
