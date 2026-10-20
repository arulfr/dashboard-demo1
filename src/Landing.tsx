import React from 'react'
import "./asset/style.css";
import { CheckIcon, PlayIcon } from '@heroicons/react/24/solid'


const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        
        {/*  Header  */}
        <nav className="flex flex-row max-w-7xl px-8 py-6 h-20 items-center justify-between mx-auto">
            {/* logo and Caption */}
            <div className="flex items-center justify-between p-4 space-x-3">
                <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center ">
                    <div className="h-5 w-5 bg-purple-600 rounded-full"></div>
                </div>
                <h2 className="text-2xl text-slate-700 font-bold font-sans">Collab Hub</h2>
            </div>
            {/* end */}
            {/* --------- Menus ---------  */}
            <div className="flex items-center">
                <ul className="flex flex-row space-x-8 font-bold font-sans text-sm text-slate-600">
                    <li className="hover:text-blue-500 cursor-pointer">Fitur</li>
                    <li className="hover:text-blue-500 cursor-pointer">Harga</li>
                    <li className="hover:text-blue-500 cursor-pointer">Tentang Kami</li>
                    <li className="hover:text-blue-500 cursor-pointer">Blog</li>
                    <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                </ul>
            </div>
            {/* --------- right Option --------- */}
            <div className="flex items-center space-x-4 justify-between">
                <div className="text-base font-bold text-slate-700 hover:text-blue-500 cursor-pointer">
                    Masuk
                </div>
                <button className="px-6 py-2 bg-blue-600 rounded-full items-center justify-center text-base font-bold text-white hover:bg-blue-700">
                        Register
                </button>
            </div>
        </nav>

        {/*  -------------- Banner -----------------------  */}
        <section className="flex flex-row max-w-7xl px-8 py-6 mx-auto">
            {/* Bagian Kiri */}
            <div className="flex flex-col w-1/2 px-4 py-6">
                <h1 className="text-5xl font-extrabold font-sans leading-14 mb-4">Satu Platform untuk Kolaborasi Tim Tanpa Batas</h1>
                <p className="text-gray-400 text-lg max-w-md mb-6">
                    Kelola proyek, komunikasi real-time, dan bagikan file dalam satu workspace yang cepat dan terintegrasi. Tanpa ribet, tanpa hambatan.
                </p>
                <div className="flex flex-row gap-4">
                    <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600">
                        Mulai Gratis Sekarang
                    </button>
                    <div className="flex items-center hover:text-blue-500 transition-colors gap-0.5">
                        <PlayIcon className="w-4 h-4 mr-2" />
                        <span className="font-bold">Tonton Demo</span>
                    </div>
                </div>
            </div>
            {/* ========= */}
            {/* bagian Kanan */}
            <div className="flex flex-row relative w-1/2 px-4 py-6">
               <div className="flex w-full absolute h-94 bg-blue-100 rounded-2xl">
                    <div className="flex flex-col w-1/4 bg-gray-100 my-3 ml-3 p-4 rounded-l-2xl border-r-2 border-gray-200 gap-4 ">
                        <div className="h-4 w-full bg-blue-200 rounded-xl"></div>
                        <div className="h-4 w-3/4 bg-blue-200 rounded-xl"></div>
                        <div className="h-4 w-3/4 bg-blue-200 rounded-xl"></div>
                    </div>
                    <div className="flex flex-col w-3/4 rounded-r-2xl bg-gray-100 my-3 mr-3 p-4">
                        <div className="flex w-full h-40 bg-blue-100 rounded-2xl"></div>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <div className="w-1/2 h-20 bg-amber-100 rounded-2xl"></div>
                            <div className="w-1/2 h-20 bg-amber-100 rounded-2xl"></div>
                        </div>
                    </div> 
               </div> 
            </div>
        </section>

        {/* list produk */}
        <section className="border-2 border-gray-200 mt-10 py-10">
            <div className="flex max-w-7xl mx-auto text-slate-900 opacity-60 justify-between items-center ">
                <span className="text-2xl font-bold font-serif">#Slack</span>
                <span className="text-2xl font-bold font-serif">Airbnb</span>
                <span className="text-2xl font-bold font-serif">Spotify</span>
                <span className="text-2xl font-bold font-serif">Stripe</span>
                <span className="text-2xl font-bold font-serif">HubSpot</span>
            </div>
        </section>
        {/* ---------------------------------- */}

        {/* List Card */}
        <section className="max-w-7xl px-8 py-24 mx-auto">
            <div className="mb-12">
                <span className=" px-4 py-2 w-fit bg-blue-700 text-white font-bold rounded-xl">
                    Fitur Unggulan
                </span>
                <h2 className="text-xl font-bold font-sans mt-5">
                    Semua yang Anda Butuhkan untuk Kerja Cepat
                </h2>
            </div>

            {/* Grid Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="border border-gray-200 p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center mb-3">
                        <CheckIcon className="w-5 h-5 text-yellow-800" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                            Manajemen Proyek
                        </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Kelola proyek, komunikasi real-time, dan bagikan file dalam satu workspace yang cepat dan terintegrasi.
                    </p>
                </div>
                {/* ==================== */}
                {/* Card 2 */}
                <div className="border border-gray-200 p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center mb-3">
                        <CheckIcon className="w-5 h-5 text-blue-800" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                            Obrolan Real-time
                        </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Obrolan & komunikasi real-time, bagikan file yang ada di dalam workspace tanpa hambatan.
                    </p>
                </div>
                {/* ==================== */}
                {/* Card 3 */}
                <div className="border border-gray-200 p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center mb-3">
                        <CheckIcon className="w-5 h-5 text-green-700" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                            Analitik & Laporan
                        </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Analitik & laporan & perkalian harian analisis & pengukuran performa tim Anda.
                    </p>
                </div>
                {/* ==================== */}
            </div>

        </section>

        {/* FOOTER */}
        <footer className="bg-slate-800 pt-16 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 text-gray-500 border-b border-gray-500 pb-8">
                    <div className="flex flex-col mr-12 ">
                        <div className="flex gap-4">
                            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <div className="h-4 w-4 bg-purple-600 rounded-full"></div>
                            </div>
                            <h2 className="font-bold text-white">CollabHub</h2>
                        </div>
                        <p className="text-md text-gray-500 leading-6 mt-4">
                            Platform kolaborasi all-in-one untuk manajemen proyek dan komunikasi tim yang lebih produktif.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-md font-bold text-white">Produk</h2>
                        <ul>
                            <li className="hover:text-white cursor-pointer transition-colors">Fitur Utama</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integrasi</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Paket Harga</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pembaruan</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-md font-bold text-white">Produk</h2>
                        <ul>
                            <li className="hover:text-white cursor-pointer transition-colors">Fitur Utama</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integrasi</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Paket Harga</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pembaruan</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-md font-bold text-white">Produk</h2>
                        <ul>
                            <li className="hover:text-white cursor-pointer transition-colors">Fitur Utama</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Integrasi</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Paket Harga</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Pembaruan</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between pt-10 text-gray-400">
                    <p className="text-gray-500 text-sm">
                        © 2026 CollabHub. Seluruh hak cipta dilindungi.
                    </p>
                    <div className="flex gap-6">
                        <span className="hover:text-gray-500 cursor-pointer transition-colors">TWITTER</span>
                        <span className="hover:text-gray-500 cursor-pointer transition-colors">GITHUB</span>
                        <span className="hover:text-gray-500 cursor-pointer transition-colors">LINKEDIN</span>
                    </div>
                </div>
            </div>

        </footer>


    </div>
  )
}

export default Landing