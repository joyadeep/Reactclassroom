import KhaltiCheckout from 'khalti-checkout-web';
import React,{useState} from 'react'

const Checkout = () => {
  const [data,setData]=useState({name:'',email:'',address:'',phone:'',payment:''})

  const handleChange=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("data=",data)
            let config = {
              publicKey: "test_public_key_1d64d4f9ac274085a20a42e3443c2c0b",
              productIdentity: 1,
              productName: "recharge",
              productUrl: "http://gameofthrones.com/buy/Dragons",
              eventHandler: {
                onSuccess(payload) {
                console.log("success!")
        
                },
                // onError handler is optional
                onError(error) {
                  // handle errors
                  console.log(error);
                },
                onClose() {
                  console.log("widget is closing");
                },
              },
              paymentPreference: [
                 "KHALTI",
                "EBANKING",
                "MOBILE_BANKING",
                "CONNECT_IPS",
                "SCT",
              ],
            };
            let checkout = new KhaltiCheckout(config);
            checkout.show({ amount:200 * 100 });
           
    }
  return (
    <div className='px-20 py-10 flex gap-10'>
       <div className='w-1/2'>
       <h3 className='text-2xl font-semibold'>Billing Address</h3>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='flex flex-col'>
                <label htmlFor="fullname" className='text-slate-500'>Fullname</label>
                <input type="text" name="name" value={data.name} onChange={handleChange}  className='border outline-none rounded-md px-3 py-2 text-xl'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email" className='text-slate-500'>Email</label>
                <input type="email" name="email" value={data.email} onChange={handleChange}   className='border outline-none rounded-md px-3 py-2 text-xl'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="address" className='text-slate-500'>Address</label>
                <input type="text" name="address" value={data.address} onChange={handleChange}   className='border outline-none rounded-md px-3 py-2 text-xl'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone" className='text-slate-500'>Phone</label>
                <input type="tel" name="phone" value={data.phone} onChange={handleChange}  className='border outline-none rounded-md px-3 py-2 text-xl'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone" className='text-slate-500'>Payment Method</label>
                <select name='payment' value={data.payment} onChange={handleChange} className='border outline-none rounded-md px-3 py-2 text-lg'>
                    <option value="">select payment method</option>
                    <option value="cod">💵 cash on delivery</option>
                    <option value="khalti"> 🧱 Khalti</option>
                </select>
            </div>
            <button className='px-4 py-2 bg-blue-500 w-fit text-white rounded-md' >Ship To My Address</button>
        </form>
       </div>
       <aside className='h-full border-4 border-slate-400 border-dotted w-2/3 rounded-md px-10 py-3'>
          <h5 className='font-semibold text-2xl tracking-tighter text-slate-600 '>My Bill</h5>
          <div className='flex justify-between mt-5 text-lg text-slate-600'>
            <p>Name</p>
            <p className='font-medium'>Joyadeep Limbu</p>
          </div>
          <div className='flex justify-between mt-5 text-lg text-slate-600'>
            <p>Email</p>
            <p className='font-medium'>dev.joyadeep@gmail.com</p>
          </div>
          <div className='flex justify-between mt-5 text-lg text-slate-600'>
            <p>Address</p>
            <p className='font-medium'>Kathmandu</p>
          </div>
          <div className='flex justify-between mt-5 text-lg text-slate-600'>
            <p>Phone</p>
            <p className='font-medium'>9813534587</p>
          </div>
          <div className='flex justify-between mt-5 text-lg text-slate-600'>
            <p>Payment</p>
            <p className='font-medium'>COD</p>
          </div>
       </aside>
    </div>
  )
}

export default Checkout