import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FetchUserObj, FunctionUpdateItem } from '../Redux/Action';

const Update = () => {
  const [id, setId] = useState(0)
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const itemObject=useSelector((state)=>state.item.itemObject)

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemObject = { id, item, quantity, unit, category, priority };
    dispatch(FunctionUpdateItem(itemObject));
    console.log(itemObject);
    navigate('/shoppingList')
  }

  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, [])

  useEffect(() => {
    if(itemObject){
      setId(itemObject.id);
    }
  }, [itemObject])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h2>Edit Item *</h2>
        <form class="row g-3" onSubmit={handleSubmit}>
          <div class="col-md-6">
            <label class="form-label">Item</label>
            <input value={item} onChange={(e) => setItem(e.target.value)} type="text" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Quantity</label>
            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" class="form-control" required />
          </div>
          <div class="col-md-4">
            <label class="form-label">Unit</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)} class="form-select" required>
              <option selected>Choose units...</option>
              <option value="pack">Pack</option>
              <option value="bag">Bags</option>
              <option value="liters">Liters</option>
              <option value="kg">Kg</option>
              <option value="units">Units</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} class="form-select" required>
              <option selected>Choose Category...</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="dairy">Dairy</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label">Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} class="form-select" required>
              <option selected>Choose priority...</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div class="col-8">
            <label class="form-label">Image</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Item Id</label>
            <input value={id} disabled='disabled' class="form-control" />
          </div>

          <div class="col-12 d-flex justify-content-center">
            <div class="btn-group">
              <button type="submit" class="btn btn-info">Update</button>
              <Link to={'/shoppingList'} class="btn btn-dark">Back</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Update 