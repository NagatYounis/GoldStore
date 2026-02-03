import { RiArrowGoBackLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { CgSupport } from "react-icons/cg";
import { HiReceiptRefund } from "react-icons/hi";




const Payment = () => {
  return (
    <div className='flex w-full h-33 bg-[#333] lg:px-33 justify-between text-[#fff] gap-5 box-border overflow-hidden'>
      <div className='flex items-center gap-2 text-gray-400'><span  className='text-gray-600 text-2xl'><MdPayment /></span><p className='text-xs lg:text-xl'>100% Payment Secure</p></div>

      <div className='flex items-center gap-2 text-gray-400'><span className='text-gray-600 text-2xl'><HiReceiptRefund /></span><p className='text-xs lg:text-xl'>
Money Return</p></div>
      <div className='flex items-center gap-2 text-gray-400 '><span  className='text-gray-600 text-2xl'>
<CgSupport /></span><p className='text-xs lg:text-xl'>

Support 24/7</p></div>
      <div className='flex items-center gap-2 text-gray-400'><span  className='text-gray-600 text-2xl'><RiArrowGoBackLine />
</span><p className='text-xs lg:text-xl'>

resize your item</p></div>
    </div>
  )
}

export default Payment
