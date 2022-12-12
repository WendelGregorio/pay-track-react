import Head from 'next/head'
import { FaIdCard } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Paytrack - login</title>
        <link rel='icon' href="../public/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-2xl'>
          <div className='w-full p-5 rounded-2xl'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>Paytrack</span> Prestação de contas
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500'>Login</h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaIdCard className='text-gray-400 m-2'/>
                  <input type="text" name="registro" placeholder="Registro" className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-2'/>
                  <input type="password" name="senha" placeholder="Senha" className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='flex justify-between w-64 mb-5'>
                  <label className='flex items-center text-xs'><input type='checkbox' name="remenber" className="mr-1"/> Lembrar senha</label>
                  <a href="#" className='text-xs'>Esqueceu sua senha?</a>
                </div>
                <a 
                  href="#"
                  className='border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>
                  Login
                </a>
              </div>
            </div>
          </div>{/*Login section*/}
        </div>
      </main>
    </div>
  )
}