import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#6846C1] relative ">
      
      <div className="w-[90%] max-w-[1200px]  mx-auto">
        <div className="text-center">
          <h2 className="pt-10 text-[#f7fafc] text-[32px] font-extrabold">
            Simple Pricing for your business
          </h2>
          <p className="mt-5 text-[#f7fafc] text-[20px] font-medium">
            Plans that are carefully crafted to suit your business.
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-5 absolute top-[210px] right-[10%] customClass w-[90%] max-w-[800px]
       h-[300px] rounded-xl bg-[#FFF]"
      >
        <div
          className="w-[50%] h-full bg-[#642cd34d] 
         rounded-l-xl text-center"
        >
          <div className="py-10">
            <p className="text-[#171923] text-[20px] font-extrabold">
              Premium PRO
            </p>
            <p className="text-[#171923] text-[48px] font-extrabold my-5">
              $392
            </p>
            <p className="text-[#171923] text-[16px] font-medium">
              billed just once
            </p>
            <button
              className="bg-[#885AD5] w-[80%] h-[45px] rounded-[8px] mt-1
          text-[#F7FAFC] font-bold"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="w-[50%] p-5">
          <p className="text-[#2D3748] text-[16px] font-normal">
            Access these features when you get this pricing package for
            </p>
           <p className="mt-4">your business.</p> 
      
          <div className="flex items-center gap-3 mt-5">
            <div>
              <Image
                src="/images/tick.png"
                alt="tickIcon"
                width={20}
                height={20}
              />
            </div>
            <div>
              <p className="text-[#2D3748] text-[16px] font-normal">
                International calling and messaging API
              </p>
            </div>
           
            </div>
            <div className="flex items-center gap-3 mt-3">
            <Image
                src="/images/tick.png"
                alt="tickIcon"
                width={20}
                height={20}
              />
              <p className="text-[#2D3748] text-[16px] font-normal">Additional phone numbers</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
            <Image
                src="/images/tick.png"
                alt="tickIcon"
                width={20}
                height={20}
              />
              <p className="text-[#2D3748] text-[16px] font-normal" >Automated messages via Zapier</p>
            </div>
            <div className="flex items-center gap-3 mt-3"  >
            <Image
                src="/images/tick.png"
                alt="tickIcon"
                width={20}
                height={20}
              />
              <p className="text-[#2D3748] text-[16px] font-normal"  >24/7 support and consulting</p>
            </div>
          </div>
          
        </div>
        <div className=" flex items-center gap-5 absolute top-[500px] left-[10%]">
          <div className="flex items-center gap-3">
            <div>
            <Image src="/images/star.png" alt="Star Logo" width={30} height={30}/>
            </div>
            <div>
              <p className="text-[#171923] text-[16px] font-bold mt-6 ">30 days money back 
                <br/>Guarantee </p>
            </div>
           <div className="flex items-center gap-3">
           <Image src="/images/circle.png" alt="Star Logo" width={30} height={30}/>
           </div>
            <p className="text-[#171923] text-[16px] font-bold ">No Setup fees<br/>100%
            hassle-free</p>
            <div className="flex items-center gap-3">
            <Image src="/images/triangle.png" alt="Star Logo" width={30} height={30}/>
            </div>
            <p className="text-[#171923] text-[16px] font-bold">No Monthly Subscription  
            <br/> Pay once for all</p>

          </div>
        
          </div>
      

          </div>
      
         

        
          
          
       
  );  
    
}
