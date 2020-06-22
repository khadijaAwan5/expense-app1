import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext'

function Child() {
    let {transactions, addTransaction}= useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState("0");
    
    const handleAddition = (event) =>{
        event.preventDefault();
        addTransaction({
          amount:Number(newAmount),
          desc: newDesc
        })

    }
    const getIncome = () => {
      let income= 0;
      for (var i =0; i < transactions.length; i++) {
        if (transactions[i].amount > 0)
        income += transactions[i].amount
      }
      return income;
    }

    const getExpense = () => {
      let expense= 0;
      for (var i =0; i < transactions.length; i++) {
        if (transactions[i].amount < 0)
        expense += transactions[i].amount
      }
      return expense;
    }

    
  
  return (
    <div className="Expense">
      <h2 className="Middle">Expense Tracker</h2>
      
      <h3>YOUR BALANCE <br /> {getIncome()+ getExpense()}</h3>
    
      <div className="Tracker"> 
         <h4>INCOME <br /> {getIncome()}</h4>
         <h4>EXPENSE <br /> {getExpense()}</h4>
        
         </div>
         <h3>Add New Transaction</h3>
         <hr />
                <div className="mango">
         <form className="transaction form" onSubmit={handleAddition}>
             <label>
             Enter Description <br />
             <input type="text" 
             placeholder="Description"
             
             onChange={(ev)=>setDesc(ev.target.value)} required />
            </label>
            <br />
            <label>
             Enter Amount  <br />
             <input type="Number" 
              placeholder="Amount"
             onChange={(ev)=>setAmount(ev.target.value)} required/>
            </label>
            <br />
           
             <input type="Submit"  value="Add Transaction"/>
           
         </form>
                </div>
         
         <h3>HISTORY</h3>
         <hr />
               <div className="banana">
         <ul className="transaction-list">
             {transactions.map((transObj, ind)=>{

                  return(<li key={ind}>
                    <span>{transObj.desc}</span>
                    <span>{transObj.amount}</span>
                  </li> )
            
                  
})}
       
            
          </ul>
                </div>
        
    </div>
  );
}

export default Child;