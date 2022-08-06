import {useState, useEffect} from 'react'

const Filter = ({filters, setfilters}) => {
  return (
    <div className='filtros sombra contenedor'>
       <form>
          <div className='campo'>
            <label>Filter Expenses</label>
              <select value={filters} onChange={e=>setfilters(e.target.value)}>
                    <option value="">-- All Categories --</option>
                    <option value="saves">Saves</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="hobby">Hobbies</option>
                    <option value="health">Health</option>
                    <option value="subcriptions">Subcriptions</option>
                    <option value="others">Others expenses</option>
              </select>
          </div>
       </form>
      
    </div>
  )
}

export default Filter
