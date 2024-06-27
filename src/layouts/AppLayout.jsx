import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen container bg-[#14213d] text-white ' >
            {/* Header */}
            <Header/>
            <Outlet/>
        </main>
        {/* Footer */}
        <div className='p-10 text-center bg-[#fca311]' >
          Made with Love
        </div>
    </div>
  )
}

export default AppLayout