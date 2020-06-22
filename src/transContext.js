import React, { createContext,useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransaction= [
   
]

 export const TransactionContext = createContext(initialTransaction);

 export const TransactionProvider = ({children})=> {
    let [State,dispatch] = useReducer(TransactionReducer, initialTransaction);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount,
                desc: transObj.desc 
            },
        })

    }
    return(
        <TransactionContext.Provider value={{
            transactions: State,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}