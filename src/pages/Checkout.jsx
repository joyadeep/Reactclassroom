import KhaltiCheckout from 'khalti-checkout-web';
import React from 'react'

const Checkout = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
            let config = {
              // replace this key with yours
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
            // let btn = document.getElementById("payment-button");
            // btn.onclick = function () {
            //   // minimum transaction amount must be 10, i.e 1000 in paisa.
              
            // };
        //   };
    }
  return (
    <div className='px-20 py-10'>
        <h3 className='text-2xl font-semibold'>Billing Address</h3>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='flex flex-col'>
                <label htmlFor="fullname" className='text-slate-500'>Fullname</label>
                <input type="text" name="" id=""  className='border outline-none rounded-md px-3 py-2 text-xl'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email" className='text-slate-500'>Email</label>
                <input type="email" name="" id=""  className='border outline-none rounded-md px-3 py-2 text-xl'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="address" className='text-slate-500'>Address</label>
                <input type="text" name="" id=""  className='border outline-none rounded-md px-3 py-2 text-xl'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone" className='text-slate-500'>Phone</label>
                <input type="tel" name="" id=""  className='border outline-none rounded-md px-3 py-2 text-xl'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone" className='text-slate-500'>Payment Method</label>
                <select className='border outline-none rounded-md px-3 py-2 text-lg'>
                    <option value="">select payment method</option>
                    <option value="cod">💵 cash on delivery</option>
                    <option value="khalti"> 🧱 Khalti</option>
                </select>
            </div>
            <button className='px-4 py-2 bg-blue-500 w-fit text-white rounded-md' >Ship To My Address</button>
        </form>
    </div>
  )
}

export default Checkout