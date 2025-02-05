import Link from 'next/link'
import Image from 'next/image'
import HackerError from '../../public/images/HackerError.png'

export default function notfound() {
  return (
    <section className="flex  flex-col-reverse lg:flex-row items-center justify-center h-[110vh] lg:h-screen bg-white dark:bg-black">
      <div className='flex flex-col items-center gap-5 z-10'>
          <h1 className='text-5xl text-red-500 select-none'>Error 404</h1>
        <h1 className='text-2xl md:text-4xl cursor-default'>Sry mate this page not found </h1>
        <Link href="/" className='button-not-found  select-none'>Go back to Home</Link>
      </div>
      <Image 
       className='w-96 h-96 select-none md:right-24 lg:right-60'
       src={HackerError} 
       alt='hackerError'
       />
    </section>
  )
}
