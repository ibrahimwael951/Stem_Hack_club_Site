//data CP
import CPData from '../data/CP.json';
const CPContent = () => {
  return (
    <div>
      <h1>Competitive Programming (C++)</h1>
      <p>
       The competitive programming branch is a branch that has the goal of giving introductory sessions in algorithms, problem solving, and solution-oriented thinking. This is a concluding report that summarizes the work done by the Hack Club - Competitive Programming Branch (which contained seven, carefully-chosen mentees) throughout 2022. The club mainly uses <a href="https://docs.google.com/spreadsheets/d/1oWHRW51zFzf_RgFHs6oCzxahJFouvNN0/edit?usp=sharing&ouid=118107763559604272263&rtpof=true&sd=true">[Mostafa Saad's sheet]</a> as the main practice material. Moreover, the club recommends the use of USACO's <a href="https://usaco.guide/">[website]</a> as a learning material. In addition to those previously made resources, the club has its own original pdfs. All info about the branch are <a href="https://drive.google.com/drive/folders/1lmA6TTd1d2WKZ1Nxc3PIjM0Ri9j8faZC?usp=sharing">[here]</a>. There were two offline session done at our wonderful boarding school. During the summer vacation, the club had 13 online session. After finishing the sessions, the Egyptian Olympiad in Informatics (EOI)'s season has started. The EOI qualifications were on the 2nd and 3rd of September, where a contest was prepared to make the contestants ready for the contest. See the Contest's <a href="https://codeforces.com/gym/397083">[URL]</a> and the HackClub's <a href="https://codeforces.com/group/DlEKRmkyeU">[group]</a> on CodeForces. Note that the group should be joined before entering the contest.
         </p>
         <p>
    There were two offline session done at our wonderful boarding school. During the summer vacation, the club had 13 online session: 
    </p>

    <div className='flex  flex-wrap gap-5 justify-center items-center '>
    {CPData.map((data,index) => (
        <div key={index} className='border dark:border-white border-black rounded-xl flex flex-col justify-center items-center w-52 h-60 p-2'>
            <h2 className='text-black dark:text-white text-base'>{data.h1}</h2>
            <p className='text-black  dark:text-white text-sm'> {data.p}</p>
            <a href={data.a} target='_blank'>[here]</a>
        </div>
    )

)}

    </div>
    </div>
  )
}

export default CPContent
