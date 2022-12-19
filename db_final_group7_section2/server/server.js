const express = require('express') 
const app = express()
const mysql = require('mysql')

const bcrypt = require('bcrypt')
const saltRounds = 10

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const cors = require('cors')
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
) 

app.use(
  session({
    key: 'userId',
    secret: 'Jude',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24, 
    },
  })
)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json()) //probably standard too, just to parse json

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'project',
})
app.post('/register', (req, res) => {
  const email = req.body.email
  const pass = req.body.pass
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const userName = req.body.userName
  const Phone = req.body.Phone
  bcrypt.hash(pass, saltRounds, (err, hash) => {
    if (err) {
      //console.log(err)
    }
    db.query(
      'INSERT INTO user (email,passcode,first_name,last_name,phone,username,created_AT) VALUES (?,?,?,?,?,?,CURRENT_DATE())',
      [email, hash, first_name, last_name, Phone, userName],
      (err, result) => {
        if (err) {
          //console.log(err)
        } else {
          res.send('values Inserted') 
        }
      }
    )
  })
})
app.post('/registerAdd', (req, res) => {
  const governate = req.body.governate
  const city = req.body.city
  const floorNB = req.body.floorNB
  const phone = req.body.PhoneHome
  const address_line1 = req.body.address_line1

  db.query(
    'INSERT INTO user_address (user_ID,governate,city,floorNB,phone,address_line1,type) VALUES ((select max(user_ID) from user),?,?,?,?,?,("Home"))',
    [governate, city, floorNB, phone, address_line1],
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send('values Inserted') 
      }
    }
  )
})
  app.post('/registerAdd2', (req, res) => {
    const governate2 = req.body.governate2
    const city2 = req.body.city2
    const floorNB2 = req.body.floorNB2
    const phone2 = req.body.PhoneWork
    const address_line12 = req.body.address_line12

    db.query(
      'INSERT INTO user_address (user_ID,governate,city,floorNB,phone,address_line1,type) VALUES ((select max(user_ID) from user),?,?,?,?,?,("Work"))',
      [governate2, city2, floorNB2, phone2, address_line12],
      (err, result) => {
        if (err) {
          //console.log(err)
        } else {
          res.send('values Inserted')
        }
      }
    )
  })

app.post('/addcart', (req, res) => {
    db.query(
      'INSERT INTO cart (total,created_AT) VALUES (?,CURRENT_DATE())',//jude add 17
      [0],
      (err, result) => {
        if (err) {
          //console.log(err)
        } else {
          res.send('cart Inserted') 
        }
      }
    )
  })


app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user })
  } else {
    res.send({ loggedIn: false, user: req.session.user });
  }
})

app.post('/productselection', (req, res) => {
  const userid=req.body.userid;
  db.query(
    'Select * from product_selection NATURAL JOIN PRODUCT P LEFT JOIN product_discount D ON P.Discount_Name = D.Discount_Name where user_id=?;',userid,
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send(result) 
      }
    }
  )
})

app.post('/login', (req, res) => {
  const email = req.body.email
  const pass = req.body.pass

  db.query('SELECT * from user where email = ? ', email, (err, result) => {
    if (err) {
      res.send({ err: err })
    }

    if (result.length > 0) {
      bcrypt.compare(pass, result[0].passcode, (error, response) => {
        if (response) {
          req.session.user = result // creating a session
          res.send(result)
        } else {
          res.send({ message: 'wrong email password combination' })
        }
      })
    } else {
      res.send({ message: 'User does not exist' })
    }
  })
})



app.get('/gettingproductsonsale', (req, res) => {
  db.query(
    'SELECT * FROM product_discount, product, product_category WHERE PRODUCT.DISCOUNT_NAME = PRODUCT_DISCOUNT.DISCOUNT_NAME AND PRODUCT_CATEGORY.category_id = PRODUCT.category_id AND product_discount.is_active=1',
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send(result) 
      }
    }
  )
})
app.get('/gettingproducts', (req, res) => {
  db.query(
    'SELECT * FROM product_discount D  RIGHT JOIN product P  ON (D.Discount_Name = P.Discount_Name) JOIN product_category C ON (P.category_id = C.category_id)',
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send(result) 
      }
    }
  )
})

  app.post('/updateQty',(req,res)=>{
    const qty=req.body.qty;
    const Product_ID = req.body.Product_ID;
    const User_ID = req.body.User_ID;
    db.query('UPDATE product_selection SET qty =? WHERE product_id=? and user_id = ?',[qty,Product_ID,User_ID],(err,result)=>{
      if(err){
        //console.log(err);
      }else{
        res.send(result);
      }
    }
    )
  })
  app.post('/updatetotal',(req,res)=>{
    const User_ID = req.body.User_ID;
    db.query(
      'update cart set total = (select sum(a.pd) from(select sum(price*qty*(1-discount_percentage/100)) as pd from (product_selection natural join (product natural join product_discount)) where is_active=1 AND cart_ID=? UNION select sum(qty*price) as npd from (product_selection PS natural join (product P)) where P.discount_name is NULL  AND cart_ID=? UNION select sum(qty*price) as pdo  from (product_selection PS natural join product natural join product_discount) where is_active=0  AND cart_ID=?) as a) where cart_id=?',
      [User_ID, User_ID, User_ID, User_ID],
      (err, result) => {}
    )
  })

app.post('/addToCart', (req, res) => {
  const productID = req.body.Product_ID
  const User_ID = req.body.User_ID;
  db.query(
    'INSERT INTO PRODUCT_SELECTION(User_ID,Product_ID,Cart_ID) VALUES(?,?,?)', 
    [User_ID, productID,User_ID],
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send('product added to cart')
      }
    }
  )
})
app.post('/deleteCartItem', (req, res) => {
  const Product_ID = req.body.Product_ID;
  const User_ID = req.body.user_id
  db.query('DELETE FROM product_selection WHERE User_ID=? AND Product_ID=?',[User_ID,Product_ID],
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})
app.post('/creatediscount', (req, res) => {
  const discount_name = req.body.discount_name
  const discount_description = req.body.discount_description
  const discount_percentage = req.body.discount_percentage
  const is_active = req.body.is_active
  db.query(
    'INSERT INTO product_discount VALUES (?,?,?,?)',
    [discount_name, discount_description, discount_percentage, is_active],
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})
app.get('/discounts', (req, res) => {
  db.query('Select * from product_discount', (err, result) => {
    if (err) {
      //console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/updateactive', (req, res) => {
  const Discount_Name = req.body.discount_name
  const is_active= req.body.is_active
  db.query(
    'UPDATE product_discount SET is_active= ? WHERE discount_name = ?',
    [is_active,Discount_Name],
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send(result)
      }
    }
  )
  })
  

app.post('/createproduct',(req,res)=>{
  const category_ID= req.body.category_ID
  const discount_name = req.body.discount_name
  const product_name = req.body.product_name
  const product_description = req.body.product_description
  const price = req.body.price
  const img = req.body.img
  if(discount_name==''){
    db.query('INSERT INTO PRODUCT(category_ID, product_name, product_description, price,created_at,modified_at, img_link) VALUES (?,?,?,?,CURRENT_DATE(),CURRENT_DATE(),?)',
    [category_ID, product_name, product_description, price, img],
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send(result)
      }
    }
  )
  }else{
  db.query(
    'INSERT INTO PRODUCT(category_ID, discount_name, product_name, product_description, price,created_at,modified_at, img_link) VALUES (?,?,?,?,?,CURRENT_DATE(),CURRENT_DATE(),?)',
    [category_ID, discount_name, product_name, product_description, price, img],
    (err, result) => {
      if (err) {
        //console.log(err)
      } else {
        res.send(result)
      }
    }
  )}
})
app.get('/products',(req,res)=>{
  db.query('Select * from product',(err, result) => {
    if (err) {
     // console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.get('/orders',(req,res)=>{
  db.query('Select * from product_order',(err,result)=>{
    if (err) {
     // console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.post('/createorder',(req,res)=>{
  const user_id = req.body.User_ID;
  const total = req.body.total;
  const address_id = req.body.address_id;

  db.query('INSERT INTO product_order (user_id,total,ordered_at,address_id) VALUES (?,?,CURRENT_DATE(),?) ',[user_id,total,address_id],(err,result)=>{
    if (err) {
     // console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.post('/getorderid',(req,res)=>{
  const user_id=req.body.User_ID;
  db.query('select max(order_id) as myorder from product_order where user_id=?',[user_id],(err,result)=>{
    if (err) {
     // console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.post('/fillorderproducts',(req,res)=>{
  const user_id = req.body.User_ID;

  db.query('insert into order_item(order_id,product_id,cart_id,qty) (Select PO.order_id,product_id,PS.user_id,qty from  product_order PO NATURAL JOIN product_selection PS where PS.user_id=? AND order_ID>=ALL(select max(order_id) from product_order))',[user_id],(err,result)=>{
    if (err) {
      //console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.post('/deleteoldcart',(req,res)=>{
  const user_id = req.body.User_ID;
  db.query('delete from product_selection where user_id=?',[user_id],(err,result)=>{
    if (err) {
    //console.log(err)
    } else {
      res.send(result)
    }
  })
})
app.post('/getorderitems',(req,res)=>{
  const order_id = req.body.order_id;
  db.query('Select * from  order_item NATURAL JOIN PRODUCT P LEFT JOIN product_discount D ON P.Discount_Name = D.Discount_Name where order_id=?',[order_id],(err,result)=>{
    if (err) {
     // console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/getaddress',(req,res)=>{
  const user_id = req.body.User_ID;
  const address = req.body.address;//home or work
  db.query(`update  product_order set address_id= 
(select DISTINCT UA.address_id from user_address UA,order_item PO where UA.user_id=?  and type=? 
and PO.order_id= (select max(order_id) from order_item where user_id=?)) where order_id= (select max(order_id) from order_item)`,[user_id,address,user_id],(err,result)=>{
    if (err) {
     // console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(3001, () => {
  console.log('your server is running on port 3001')
}) //start our app
