import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';
import { settingDate } from '../helpers';
import { dictionIcon } from '../hooks/dictionIcon';


export const Expense = ({expen, seteditExpense, deleteExpense }) => {
     const { name, select, amount,date, id} = expen;
     
     const leadingActions = () => ( 
     <LeadingActions>
        <SwipeAction onClick={()=> seteditExpense(expen)}>
            Editar
        </SwipeAction>
     </LeadingActions>)
     const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={()=> deleteExpense(id)} destructive={true}>
            Eliminar
        </SwipeAction>
        </TrailingActions>
     )
  return (
    <SwipeableList>
       <SwipeableListItem 
        leadingActions ={leadingActions()}
        trailingActions={trailingActions()}
       >
        <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <img 
                src={dictionIcon[select]}
                alt="Expenses Icons"
            />
            <div className='descripcion-gasto'>
                <p className='categoria'>{select}</p>
                <p className='nombre-gasto'>{name}</p>
                <p className='fecha-gasto'>
                    Added on: {''}
                    <span>{settingDate(date)}</span>
                </p>
            </div>
        </div>
        <p className='cantidad-gasto'>${amount}</p>
    </div>
    </SwipeableListItem>
    
    </SwipeableList>
    
  )
}
