import Image from 'next/image'
import React from 'react'

const bgProjectPage = () => {
  return (
    <div className="select-none relative h-[75vh] w-full flex flex-col gap-5 justify-center items-center">
    <Image
      className="object-cover brightness-50 w-full h-full absolute top-0 left-0 "
      src="/images/Projects.jpg"
      alt="Image"
      width={3000}
      height={3000}
    />
    <h1 className="text-white text-center dark:text-white  text-8xl lg:m-4 z-10">
      our projects
    </h1>
  </div>
  )
}

export default bgProjectPage
