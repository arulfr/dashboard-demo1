import { useState } from "react";
import "./asset/style.css";
import { Bars3Icon, Cog6ToothIcon, DocumentIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid'

function App() {

  const [sideBarOpen,setSideBarOpen] = useState(true);

  return (
    <div className="flex bg-gray-200 font-sans h-screen">
        {/* side menu */}
        <aside className={`flex flex-col bg-slate-800 h-screen border-r border-slate-900 font-sans overflow-hidden transition-all duration-300 ${sideBarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full' }`}>
            <div className="flex items-center justify-center border-b border-gray-200 px-4 py-4">
              <h2 className="font-bold font-sans uppercase text-2xl text-white">hr connect</h2>
            </div>
            {/* Menu */}
            <div className="px-4 py-4 text-white">
              <span className="text-gray-400">Menu</span>
            </div>
            <ul className="flex-1 p-2 w-full text-white space-y-4 font-bold">
                <li className="px-2 py-2 hover:bg-blue-500 rounded-xl ">
                  <div className="flex flex-row">
                    <HomeIcon className="h-5 w-5 mr-2" /> Dashboard
                  </div>
                </li>
                <li className="px-2 py-2 hover:bg-blue-500 rounded-xl ">
                  <div className="flex flex-row">
                    <UserIcon className="h-5 w-5 mr-2" /> Data Pegawai
                  </div>
                </li>
                <li className="px-2 py-2 hover:bg-blue-500 rounded-xl ">
                  <div className="flex flex-row">
                    <DocumentIcon className="h-5 w-5 mr-2" /> Verifikasi Dokumen
                  </div>
                </li>
                <li className="px-2 py-2 hover:bg-blue-500 rounded-xl ">
                  <div className="flex flex-row">
                    <Cog6ToothIcon className="h-5 w-5 mr-2" /> Pengaturan
                  </div>
                </li>
            </ul>
            {/* footer menu */}
            <div className="p-4 border-t border-gray-300">
              <p className="text-gray-500 text-sm">
                © 2024 HR Connect. All rights reserved.ss
              </p>
            </div>
        </aside>
        {/* main content */}
        <main className="flex flex-1 flex-col">
            {/* header */}
            <div className="flex w-full h-16.5 bg-gray-50 p-4 border-b border-gray-300 justify-between">
              <div className="flex gap-4 items-center">
                <button onClick={()=>setSideBarOpen(!sideBarOpen)} className="p-3 bg-white border border-slate-400 rounded-xl hover:cursor-pointer" >
                  <Bars3Icon className="w-5 h-5" />
                </button>
                <input type="text" className="px-4 py-2 text-slate-500 text-md rounded-2xl border border-gray-400 outline-none focus:border-blue-400" placeholder="Cari...." />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-2xl text-white">A</span>
                </div>
                <h3 className="font-medium text-md">ADMIN</h3>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4 overflow-auto">
              <span className="text-2xl text-gray-500 font-bold">Admin DashBoard</span>
              <div className="grid grid-cols-1 lg:grid-cols-3 pt-8 pb-4 gap-4">
                {/* Card 1 */}
                <div className="px-4 pt-4 pb-6 border border-gray-300 rounded-xl bg-gray-100/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Icon Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-400 text-blue-700 flex items-center justify-center rounded-full">
                        <UserIcon className="w-6 h-6" />
                      </div>
                        Data Pegawai
                      </div>
                      <div className="flex flex-col item-center px-16 ">
                        <span className="font-bold text-gray-600 text-3xl">80</span>
                        <p className="text-md text-gray-600">total Pegawai</p>
                      </div>
                </div>
                {/* Card 2 */}
                <div className="px-4 pt-4 pb-6 border border-gray-300 rounded-xl bg-gray-100/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Icon Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-400 text-green-700 flex items-center justify-center rounded-full">
                        <DocumentIcon className="w-6 h-6" />
                      </div>
                        Data Surat Terverifikasi
                      </div>
                      <div className="flex flex-col item-center px-16 ">
                        <span className="font-bold text-gray-600 text-3xl">35</span>
                        <p className="text-md text-gray-600">Total Surat Terverifikasi</p>
                      </div>
                </div>
                {/* Card 3 */}
                <div className="px-4 pt-4 pb-6 border border-gray-300 rounded-xl bg-gray-100/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* Icon Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400 text-yellow-700 flex items-center justify-center rounded-full">
                        <UserIcon className="w-6 h-6" />
                      </div>
                        Data Surat Masuk
                      </div>
                      <div className="flex flex-col item-center px-16 ">
                        <span className="font-bold text-gray-600 text-3xl">45</span>
                        <p className="text-md text-gray-600">Total Surat Terverifikasi</p>
                      </div>
                </div>
              </div>
              {/* Table */}
              <div className="mt-6 bg-white rounded-md border-slate-600 overflow-x-auto">
                 <table className="w-full text-left ">
                    <thead className="bg-gray-300 text-slate-700">
                        <tr>
                          <th className="p-4">Nama Pegawai</th>
                          <th className="p-4">Jenis Dokumen</th>
                          <th className="p-4">Nama Dokumen</th>
                          <th className="p-4">Status</th>
                          <th className="p-4">Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 flex items-center">
                            <div className="w-8 h-8 bg-blue-700 flex justify-center items-center text-white font-semibold rounded-full mr-2">
                              A
                            </div>
                            Amrullah
                        </td>
                        <td className="p-4">Ijazah S1</td>
                                <td className="p-4">10/11/2024</td>
                                <td className="p-4">
                                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-sm font-semibold rounded-full">
                                        Menunggu Verifikasi
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-300">Submit</button>
                                </td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 flex items-center justify-center text-white rounded-full font-bold mr-2">
                                        A
                                    </div>
                                    Aghna
                                </td>
                                <td className="p-4">Ijazah S1</td>
                                <td className="p-4">10/11/2024</td>
                                <td className="p-4">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 text-sm font-semibold rounded-full">
                                        Diterima
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-300">Submit</button>
                                </td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 flex items-center justify-center text-white rounded-full font-bold mr-2">
                                        J
                                    </div>
                                    Jonas
                                </td>
                                <td className="p-4">Ijazah S1</td>
                                <td className="p-4">10/11/2024</td>
                                <td className="p-4">
                                    <span className="bg-red-100 text-red-700 px-2 py-1 text-sm font-semibold rounded-full">
                                        Rejected
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-300">Submit</button>
                                </td>
                      </tr>
                    </tbody>
                 </table>
              </div>
            </div>

            {/* footer */}
            <div className="p-4 border-t border-gray-300">
              <p className="text-slate-600 text-sm">
                 &copy; 2024 HR Connect. All rights reserved.
              </p>
            </div>

        </main>


    </div>
  )
}

export default App
