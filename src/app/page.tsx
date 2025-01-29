import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#6846C1] relative">
      <div className="w-[1440px] h-[397px] mx-auto">
        <div className="text-center">
          <h2 className="pt-10 text-[#f7fafc] text-[48px] font-extrabold">
            Simple Pricing for your buisnesss
          </h2>
          <p className="mt-5 text-[#f7fafc] text-[24px] font-medium">
            Plans that are carefully crafted to suit your buisnesss.
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-10 absolute top-[210px] right-[600px] customClass w-[994px]
       h-[336px] rounded-xl bg-[#FFF]"
      >
        <div
          className="w-[378px] h-[336px] bg-[#642cd34d] 
         rounded-l-xl text-center"
        >
          <div className="py-20">
            <p className="text-[#171923] text-[24px] font-extrabold">
              Premium PRO
            </p>
            <p className="text-[#171923] text-[60px] font-extrabold my-5">
              $392
            </p>
            <p className="text-[#171923] text-[18px] font-medium">
              billed just once
            </p>
            <button
              className="bg-[#885AD5] w-[282px] h-[51px] rounded-[8px] mt-1
          text-[#F7FAFC] font-bold"
            >
              Get Started
            </button>
          </div>
        </div>
        <div>
          <p className="text-[#2D3748] text-[18px] font-normal">
            Access these features when you get this pricing package for
            </p>
           <p className="mt-4">your buisness.</p> 
      
          <div className="flex items-center gap-5 mt-10">
            <div>
              <Image
                src="/images/tick.png"
                alt="tickIcon"
                width={22}
                height={22}
              />
            </div>
            <div>
              <p className="text-[#2D3748] text-[18px] font-normal">
                International calling and messaging API
              </p>
            </div>
           
            </div>
            <div className="flex items-center gap-5 mt-5">
            <Image
                src="/images/tick.png"
                alt="tickIcon"
                width={22}
                height={22}
              />
              <p className="text-[#2D3748] text-[18px] font-normal">Additional phone numbers</p>
            </div>
            <div className="flex items-center gap-5 mt-5">
            <Image
                src="/images/tick.png"
                alt="tickIcon"
                width={22}
                height={22}
              />
              <p className="text-[#2D3748] text-[18px] font-normal" >Automated messages via Zapier</p>
            </div>
            <div className="flex items-center gap-5 mt-5"  >
            <Image
                src="/images/tick.png"
                alt="tickIcon"
                width={22}
                height={22}
              />
              <p className="text-[#2D3748] text-[18px] font-normal"  >24/7 support and consulting</p>
            </div>
          </div>
          
        </div>
        <div className=" flex items-center gap-10 absolute top-[600px] left-[600px]">
          <div className="flex items-center gap-5">
            <div>
            <Image src="/images/star.png" alt="Star Logo" width={40} height={40}/>
            </div>
            <div>
              <p className="text-[#171923] text-[18px] font-bold">30 days money back 
                <br/>Gurantee </p>
            </div>
           <div className="flex items-center gap-5">
           <Image src="/images/circle.png" alt="Star Logo" width={50} height={50}/>
           </div>
            <p className="text-[#171923] text-[18px] font-bold">No Setup fees<br/>100%
            hassel-free</p>
            <div className="flex items-center gap-5">
            <Image src="/images/triangle.png" alt="Star Logo" width={50} height={50}/>
            </div>
            <p className="text-[#171923] text-[18px] font-bold">No Monthly Subscription  
            <br/> Pay and for all</p>

          </div>
        
          </div>
      

          </div>
      
         

        
          
          
       
  );  
    
}
