import React from 'react'

const OrderButton = () => {
  return (
    <div className="w-full flex justify-center my-5">
      <a
        className="p-4 px-10 btn group mt-5 mb-4 bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white rounded shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600 sm:mb-0 animate-pulse"
        href="#0"
      >
        <span className="relative inline-flex items-center text-lg">
          ⚡Order Now At ₹199{" "}
          <span className="ml-1 tracking-normal text-blue-300 transition-transform duration-300 group-hover:translate-x-1">
            -&gt;
          </span>
        </span>
      </a>
    </div>
  )
}

export default OrderButton
