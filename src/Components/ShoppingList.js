import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { FetchShoppingList, RemoveItem } from '../Redux/Action';
import { toast } from 'react-toastify';
import {  Link } from 'react-router-dom';




const ShoppingList = (props) => {
    useEffect(() => {
        props.loaduster();
    }, [])

    // const handleDelete = (code) =>{
    //     if(window.confirm('Do you want top delete')){
    //         props.removeItem(code)
    //         props.loaduster();
    //         toast.success('Item Deleted successfully')
    //     }
    // }

    const handleDelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
             props.removeItem(code);
             props.loaduster();
             toast.success('Item removed successfully.')
        }
    }

    return (
        props.item.loading ? <div><h2>Loading...</h2></div> :
            props.item.errorMessage ? <div><h2>{props.item.errorMessage}</h2></div> :
                <div className='container'>
                    <h2>My Shopping List</h2>
                    <Link to={'/item/add'} className='btn btn-success my-3 item-header'>Add Item [+]</Link>
                    <table className='table table-striped table-hover '>
                        <thead className='bg-dark'>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Category</th>
                                <th>Priority</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                props.item.ShoppingList && props.item.ShoppingList.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.item}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.unit}</td>
                                        <td>{item.category}</td>
                                        <td>{item.priority}</td>
                                        <td  >
                                            <div class="btn-group">
                                            <Link to={'/item/edit/' + item.id}  className='btn btn-sm btn-info'>Edit</Link>
                                            <button onClick={() => { handleDelete(item.id) }} className='btn btn-sm btn-danger'>Delete</button>
                                            <button className='btn btn-sm btn-secondary'>Purchased</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>



    )
}

const mapStateToProp = (state) => {
    return {
        item: state.item,
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        loaduster: () => dispatch(FetchShoppingList()),

        removeItem:(code)=>dispatch(RemoveItem(code))
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(ShoppingList);