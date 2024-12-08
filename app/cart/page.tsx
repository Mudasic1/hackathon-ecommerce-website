"use client"


const page = () => {
  return (
    
      <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="text-sm text-gray-500">Home &gt; Cart</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 flex items-center space-x-4">
                    <img
                      src="/assets/product4.png"
                      alt="Product Image"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>Asgaard Sofa</span>
                  </td>
                  <td className="p-4">Rp. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="w-16 border rounded px-2"
                    />
                  </td>
                  <td className="p-4">Rp. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </section>

          <aside className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rp. 250,000.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span>Rp. 250,000.00</span>
            </div>
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
              Check Out
            </button>
          </aside>
        </div>

        <section className="mt-12 bg-gray-100 py-6">
          <div className="flex flex-wrap justify-around max-w-4xl mx-auto">
            <div className="text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/8348/8348232.png" alt="High Quality" className="mx-auto mb-2 w-10" />
              <h4 className="font-semibold">✅ High Quality</h4>
              <p className="text-sm text-gray-600">Crafted from top materials</p>
            </div>
            <div className="text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/665/665939.png" alt="Warranty Protection" className="mx-auto mb-2 w-10" />
              <h4 className="font-semibold">Warranty Protection</h4>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
            <div className="text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/5952/5952766.png" alt="Free Shipping" className="mx-auto mb-2 w-10" />
              <h4 className="font-semibold">Free Shipping</h4>
              <p className="text-sm text-gray-600">Order over 150 $</p>
            </div>
            <div className="text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1497/1497751.png" alt="24/7 Support" className="mx-auto mb-2 w-10" />
              <h4 className="font-semibold">24 / 7 Support</h4>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    
  )
}

export default page
