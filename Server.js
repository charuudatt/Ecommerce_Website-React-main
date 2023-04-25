const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51MhAnkSGQboMBc9Yh01Jh3jzMR6v1RnH1N0S4gSz2FmjOjfehlYbMNsoBp0zz3WUWNtCj4ZkEpx4Wuk0z5uoY4gN00w1wmcHiW")
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 1232
app.get("/",(req,resp)=>{
    resp.send("home")
})
app.post("/checkout",async (req,res)=>{
    let error ; 
    let status ;
    try {
        const { product, token } = req.body;
    
        const customer = await stripe.customers.create({
          email: token.email,
          source: token.id
        });
        const idempotency_key = uuidv4();
        const charge = await stripe.charges.create(
  {
    amount: product.price * 100,
    currency: "usd",
    customer: customer.id,
    receipt_email: token.email,
    description: `Purchased the ${product.name}`,
    shipping: {
      name: token.card.name,
      address: {
        line1: token.card.address_line1,
        line2: token.card.address_line2,
        city: token.card.address_city,
        country: token.card.address_country,
        postal_code: token.card.address_zip
      }
    }
  },
  {
    idempotency_key
  }
);
        // console.log("Charge:", { charge });
        status = "success";
      } catch (error) {
        console.error("Error:", error);
        status = "failure";
      }
    
      res.json({ error, status });
    });
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})