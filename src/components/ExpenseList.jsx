import React from 'react'
import { Expense } from './Expense';

export const ExpenseList = ({expenses, seteditExpense, deleteExpense, filters, filterExpense }) => {
  return (

    <div className='Listado-gastos contenedor'>
    
    
     {
      filters ? (
        <>
        <h2>{filterExpense.length ? 'Expenses' : "There's not expenses in this category yet."}</h2>
        {filterExpense.map(expen => (
        <Expense key={expen.id} expen={expen} 
        seteditExpense={seteditExpense} deleteExpense={deleteExpense }/>
        
        ))}
        </>
        
      ) 
      :
      <>
      <h2>{expenses.length ? 'Expenses' : "There's not expenses yet."}</h2>
        {
        expenses.map(expen => (
        <Expense key={expen.id} expen={expen} 
        seteditExpense={seteditExpense} 
        deleteExpense ={deleteExpense }/>
        
       ))
        }
      </>
      }
     
    </div>
  )
}

