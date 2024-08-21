import { MAKE_REQUEST, FAIL_REQUEST, GET_SHOPPING_LIST, DELETE_ITEM, ADD_ITEM, UPDATE_ITEM, GET_USER_OBJECT } from './ActionType';
import axios from 'axios';
import { toast } from 'react-toastify';


export const makeRequest  = () =>{
    return{
        type: MAKE_REQUEST
    }
}

export const failRequest  = (err) =>{
    return{
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getShoppingList  = (data) =>{
    return{
        type: GET_SHOPPING_LIST,
        payload: data
    }
}

export const deleteItem=()=>{
    return{
        type:DELETE_ITEM
    }
}

export const addItem=()=>{
    return{
        type:ADD_ITEM
    }
}

export const updateItem=()=>{
    return{
        type:UPDATE_ITEM
    }
}

export const getItemObject=(data)=>{
    return{
        type:GET_USER_OBJECT,
        payload: data
    }
}




export const FetchShoppingList=()=>{
    return (dispatch)=> {
        dispatch(makeRequest());
        // setTimeout(() =>{
            axios.get('http://localhost:8000/shoppingList').then(res=>{
                const shoppingList=res.data;
                dispatch(getShoppingList(shoppingList))
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })

        // }, 2000);
        
    }
}

export const RemoveItem=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.delete('http://localhost:8000/shoppingList/'+code).then(res=>{
            dispatch(deleteItem());
            dispatch(FetchShoppingList())
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}


export const FunctionAddItem=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.post('http://localhost:8000/shoppingList',data).then(res=>{
            dispatch(addItem());
            // dispatch(FetchShoppingList())
            toast.success('Item added successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}


export const FunctionUpdateItem=(data, code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.put('http://localhost:8000/shoppingList'+code,data).then(res=>{
            dispatch(updateItem());
            // dispatch(FetchShoppingList())
            toast.success('Item Updated successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FetchUserObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:8000/shoppingList/'+code).then(res=>{
            const shoppinglist=res.data;
            dispatch(getItemObject(shoppinglist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
