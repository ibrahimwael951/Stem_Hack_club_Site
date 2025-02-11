import Image from 'next/image'
import projectsData from "@/Data/Projects.json"
const bgProjects = () => {

   
  
  return (
    <div className=" py-20 px-10 md:px-20 h-fit w-full flex flex-wrap justify-center items-center gap-x-5 gap-y-10">

      {projectsData.map((project,index) => (
        <a href={project.link}  target='_blank' className="cursor-pointer">
          <div 
            key={index} 
            className="relative group overflow-hidden hover:-translate-y-5 flex flex-col justify-evenly items-center  h-[250px]   w-full md:w-[250px] rounded-2xl "
          >
            <Image
              src={`${project.image}`}  
              alt={project.Title}
              width={500}  
              height={500}  
              quality={100}   
              className="object-cover group-hover:brightness-75  h-full w-full" 
              />
            <div className='group-hover:translate-y-0 bg-white dark:bg-black w-full px-5 absolute bottom-0 left-0 md:translate-y-20'>
            <h3 className="text-red-500 dark:text-white text-sm font-semibold mt-2">{project.Title}</h3>
            <p className="text-xs ml-2 text-gray-500">{project.description}</p>
            </div>
          </div>
        </a>
      ))}
 
    </div>
  )
}

export default bgProjects

          