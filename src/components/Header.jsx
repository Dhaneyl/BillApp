import React from 'react'
import { NewBudget, BudgetControl } from './index.js';

export const Header = ({budget, setBudget, valid, setValid, expenses, setexpenses}) => {
  return (
    <header>
        <h1>Budget planner</h1>
        { valid ? (<BudgetControl budget={budget} expenses={expenses} 
        setBudget={setBudget}  setexpenses = {setexpenses}
          setValid={setValid}
        />)
        :
        (
            <NewBudget 
            budget = {budget}
            setBudget = {setBudget}
            setValid = {setValid}
        />
        )
        }

       
    </header>
  )
}
