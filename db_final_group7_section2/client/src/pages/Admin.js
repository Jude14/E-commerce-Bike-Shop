import '../css/admin.css'
import { useState } from 'react'
import Axios from 'axios'

function App() {
 const [discount,setdiscount]=useState('');
 const [discount_description,setdiscount_description]=useState('')
 const [discount_percentage,setdiscount_percentage]=useState(0);
 const [is_active,setis_active]=useState(0);

 const [product_ID,setproduct_ID]=useState(0)
 const [category_ID, setcategory_ID] = useState(0)
 const [discount_name, setdiscount_name] = useState('')
 const [product_name, setproduct_name] = useState('')
 const [product_description,setproduct_description]= useState('')
 const [price,setprice]=useState('')
 const [img,setimg]=useState('');


 const [productList, setProductList] = useState([])
 const [discountList, setDiscountList] = useState([])
 const [orderList,setOrderList]=useState([])



 const addDiscount = () => {
  Axios.post('http://localhost:3001/creatediscount', {
     discount_name: discount,
     discount_description: discount_description,
     discount_percentage: discount_percentage,
     is_active: is_active,

   }).then(() => {})
 }


 const addProduct = () => {


  Axios.post('http://localhost:3001/createproduct', {
    category_ID: category_ID,
    discount_name: discount_name,
    product_name: product_name,
    product_description: product_description,
    price: price,
    img: img,
  }).then(() => {

  })
 }
 const getDiscounts = () => {
   Axios.get('http://localhost:3001/discounts').then((response) => {
     setDiscountList(response.data)
   })
 }

 const getProducts = () => {
   Axios.get('http://localhost:3001/products').then((response) => {
     setProductList(response.data)
   })
 }
const getOrders = () => {
   Axios.get('http://localhost:3001/orders').then((response) => {
     setOrderList(response.data)
     console.log(orderList[0])
   })
 }


 const updateactive = (discounttoupdate) => {
   Axios.post('http://localhost:3001/updateactive', { is_active: is_active, discount_name: discounttoupdate }).then(
     (response) => {
     }
   )
 }

return (
  <div className='Admin'>
    <div className='information'>
      <h1>ADD DISCOUNT</h1>

      <label>discount</label>
      <input
        type='text'
        onChange={(event) => {
          setdiscount(event.target.value)
        }}
        required
      />
      <label>discount description</label>
      <input
        type='text'
        onChange={(event) => {
          setdiscount_description(event.target.value)
        }}
        required
      />

      <label>discount percentage(from 1 to 100)</label>
      <input
        type='text'
        onChange={(event) => {
          setdiscount_percentage(event.target.value)
        }}
        required
      />

      <label>is active (0 or 1)</label>
      <input
        type='text'
        onChange={(event) => {
          setis_active(event.target.value)
        }}
        required
      />
      <button onClick={addDiscount}>Add Discount</button>

      <div className='employees'>
        <button onClick={getDiscounts}>Show Discounts</button>
        <br />
        <br />
        {discountList.map((val, key) => {
          return (
            <div className='employee'>
              <h1> Discounts </h1>
              <div>
                <h3>discount_name: {val.Discount_Name}</h3>
                <h3>discount_description: {val.Discount_Description}</h3>
                <h3>discount_percentage: {val.Discount_Percentage}</h3>
                <h3>is active: {val.is_active}</h3>
                <input
                  type='text'
                  placeholder='0 or 1'
                  onChange={(event) => {
                    setis_active(event.target.value)
                  }}
                />
                <button
                  onClick={() => {
                    updateactive(val.Discount_Name)
                  }}
                >
                  {' '}
                  Update is_active
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <h1>ADD PRODUCT</h1>
      <label>category_ID:</label>
      <input
        type='text'
        onChange={(event) => {
          setcategory_ID(event.target.value)
        }}
        required
      />

      <label>discount_name (keep empty for no discount):</label>
      <input
        type='text'
        onChange={(event) => {
          setdiscount_name(event.target.value)
        }}
        required
      />

      <label>product_name</label>
      <input
        type='text'
        onChange={(event) => {
          setproduct_name(event.target.value)
        }}
        required
      />

      <label>product_description</label>
      <input
        type='text'
        onChange={(event) => {
          setproduct_description(event.target.value)
        }}
        required
      />

      <label>price:</label>
      <input
        type='text'
        onChange={(event) => {
          setprice(event.target.value)
        }}
        required
      />

      <label>img link</label>
      <input
        type='text'
        onChange={(event) => {
          setimg(event.target.value)
        }}
        required
      />

      <button onClick={addProduct}>Add Product</button>
    </div>
    <div className='employees'>
      <button onClick={getProducts}>Show Products</button>
      <br />
      <br />
      {productList.map((val, key) => {
        return (
          <div className='employee'>
            <h1> PRODUCTS </h1>
            <div>
              <h3>product_ID: {val.Product_ID}</h3>
              <h3>category_ID: {val.Category_ID}</h3>
              <h3>discount_name: {val.Discount_Name}</h3>
              <h3>product_name: {val.Product_Name}</h3>
              <h3>product_description: {val.Product_description}</h3>
              <h3>price: {val.price}</h3>
            </div>
          </div>
        )
      })}
    </div>
    <div className='employees'>
      <button onClick={getOrders}>Show Orders</button>
      <br />
      <br />
      {orderList.map((val, key) => {
        return (
          <div className='employee'>
            <h1> ORDERS </h1>
            <div>
              <h3>orderID: {val.order_ID}</h3>
              <h3>user_id: {val.user_id}</h3>
              <h3>total: {val.total}$</h3>
              <h3>ordered_at: {val.ordered_at}</h3>
              <h3>address_id: {val.address_ID}</h3>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)
}

export default App;
