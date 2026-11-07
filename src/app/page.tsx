import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black p-8">
      <main className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Hero Section */}
        <div className="my-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            แอปพลิเคชัน In-fo สุดล้ำ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            พัฒนาด้วยเทคโนโลยีสมัยใหม่ Next.js 14 + Tailwind CSS
Works on the Termux app </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://vercel.com/new?utm_source=my-app&utm_medium=app"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener"
            >
              <Image src="/vercel.svg" alt="Vercel" width={20} height={20} />
              Deploy บน Vercel
            </a>
            <a 
              href="https://github.com/Aa-ok99"
              className="bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener"
            >
              <Image src="/github.svg" alt="GitHub" width={20} height={20} />
              GitHub ของฉัน
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="my-12 w-full">
          <h2 className="text-2xl font-bold mb-6">ติดต่อฉันได้ที่</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://www.instagram.com/as_ok99/" target="_blank" rel="noopener" className="p-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full hover:scale-110 transition-transform">
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://m.facebook.com/ok.kanhar/" target="_blank" rel="noopener" className="p-4 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="http://www.youtube.com/@as_oktm_ok" target="_blank" rel="noopener" className="p-4 bg-red-600 text-white rounded-full hover:scale-110 transition-transform">
              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
            <a href="https://x.com/kan_ok99" target="_blank" rel="noopener" className="p-4 bg-black text-white rounded-full hover:scale-110 transition-transform">
              <Image src="/twitter.svg" alt="X (Twitter)" width={24} height={24} />
            </a>
            <a href="https://github.com/Aa-ok99" target="_blank" rel="noopener" className="p-4 bg-gray-800 text-white rounded-full hover:scale-110 transition-transform">
              <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 my-12 w-full">
          {/* ... (ส่วน Features เดิม) ... */}
        </div>

        {/* Deploy Section */}
        <div className="my-16 p-8 bg-blue-50 dark:bg-gray-800 rounded-xl w-full">
          <h2 className="text-2xl font-bold mb-4">พร้อมใช้งานแล้ววันนี้!</h2>
          <p className="mb-6">Deploy แอปของคุณบน Vercel ด้วยคลิกเดียว</p>
          <a 
            href="https://vercel.com/new?utm_source=my-app&utm_medium=app"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg"
            target="_blank"
            rel="noopener"
          >
            <Image src="/vercel-white.svg" alt="Vercel" width={20} height={20} />
            Deploy Now →
          </a>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.instagram.com/as_ok99/" target="_blank" rel="noopener" className="hover:text-blue-500">
            Instagram
          </a>
          <a href="https://m.facebook.com/ok.kanhar/" target="_blank" rel="noopener" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="http://www.youtube.com/@as_oktm_ok" target="_blank" rel="noopener" className="hover:text-blue-500">
            YouTube
          </a>
          <a href="https://x.com/kan_ok99" target="_blank" rel="noopener" className="hover:text-blue-500">
            Twitter
          </a>
          <a href="https://github.com/Aa-ok99" target="_blank" rel="noopener" className="hover:text-blue-500">
            GitHub
          </a>
        </div>
        <p>© {new Date().getFullYear()} สร้างด้วย Next.js | พัฒนาโดยคุณ</p>
      </footer>
    </div>
  );
}
