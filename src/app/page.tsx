import Image from "next/image";
import Button from '@/components/Button'
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen p-[10px] flex flex-col">
      <div className="flex-1 min-h-0 bg-cover bg-no-repeat bg-[90%_0%] lg:bg-center rounded-2xl relative " style={{ backgroundImage: "url('/static-pin.png')" }}>
        <div className="p-[10px] lg:p-5 flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Worldpin" className="flex-shrink-0 w-[87px] h-[14px] lg:w-[130px] lg:h-[20px]" width={130} height={20} />
          </Link>

          <div className="flex items-center gap-[11px] lg:gap-8">
            <div className="flex items-center gap-[11px] lg:gap-5 text-white text-[10px] lg:text-[14px]">
              <Link href="">White paper</Link>
              <Link href="">Community</Link>
            </div>
            <Button>Come Soon &rarr;</Button>
          </div>
        </div>

        <div className="flex justify-center px-5 absolute bottom-[60px] left-0 right-0">
          <div className="max-w-[390px] p-3 rounded-[20px] overflow-hidden backdrop-blur-[30px] flex items-center gap-3" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
            <div className="w-11 h-11 rounded-[10px] bg-white flex items-center justify-center flex-shrink-0">
              <Image src="/sonic.png" alt="" className="w-6 h-6" width={24} height={24} />
            </div>
            <div className="text-black flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <div className="text-[16px] font-bold">Worldpin</div>
                <div className="text-[12px]" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>Now</div>
              </div>
              <div className="text-[12px] lg:text-[14px] mt-1">Don’t rush into investing—take time to understand and think it through first!</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[6px] lg:mt-[10px] p-[5px] lg:p-[10px] bg-white rounded-lg">
        <Image src="/logo.svg" alt="Worldpin" className="w-[125px] h-5 lg:w-[150px] lg:h-[24px] block" width={150} height={24} />

        <div className="mt-3 lg:mt-2 block lg:flex justify-between items-center">
          <div className="flex items-center gap-3 lg:gap-6 text-[12px] lg:text-[14px]">
            <div>Preorder <span style={{ color: 'rgba(0, 0, 0, 0.4)' }}>(Coming Soon)</span></div>
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>

          <div className="block lg:flex items-center gap-6">
            <div className="text-[10px] lg:text-[14px] mt-10 lg:mt-0">
              Worldpin© 2025 All Rights Reserved.
            </div>
            <div className="flex items-center gap-4 lg:gap-6 mt-3 lg:mt-0">
              <Link href="https://x.com/WorldpinAI" target="_blank">
                <Image src="/icon_x.png" alt="Twitter" className="w-8 h-8" width={32} height={32} />
              </Link>
              <Link href="https://t.me/worldpin_official" target="_blank">
                <Image src="/icon_telegram.png" alt="Telegram" className="w-8 h-8" width={32} height={32} />
              </Link>
              <Link href="https://discord.gg/YTwjtzcFW6" target="_blank">
                <Image src="/icon_discord.png" alt="Discord" className="w-8 h-8" width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
