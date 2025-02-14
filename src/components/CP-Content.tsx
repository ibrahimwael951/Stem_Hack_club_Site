//data CP
import CPData from "../Data/Competitive-Programming.json";
const CPContent = () => {
  return (
    <div className="px-5 lg:px-20 py-10 flex flex-col gap-5">
      <h1 className="text-2xl ">Competitive Programming (C++)</h1>
      <p className="ml-5">
        The competitive programming branch is a branch that has the goal of
        giving introductory sessions in algorithms, problem solving, and
        solution-oriented thinking. This is a concluding report that summarizes
        the work done by the Hack Club - Competitive Programming Branch (which
        contained seven, carefully-chosen mentees) throughout 2022. The club
        mainly uses{" "}
        <a href="https://docs.google.com/spreadsheets/d/1oWHRW51zFzf_RgFHs6oCzxahJFouvNN0/edit?usp=sharing&ouid=118107763559604272263&rtpof=true&sd=true">
          [Mostafa Saad's sheet]
        </a>{" "}
        as the main practice material. Moreover, the club recommends the use of
        USACO's <a href="https://usaco.guide/">[website]</a> as a learning
        material. In addition to those previously made resources, the club has
        its own original pdfs. All info about the branch are{" "}
        <a href="https://drive.google.com/drive/folders/1lmA6TTd1d2WKZ1Nxc3PIjM0Ri9j8faZC?usp=sharing">
          [here]
        </a>
        . There were two offline session done at our wonderful boarding school.
        During the summer vacation, the club had 13 online session. After
        finishing the sessions, the Egyptian Olympiad in Informatics (EOI)'s
        season has started. The EOI qualifications were on the 2nd and 3rd of
        September, where a contest was prepared to make the contestants ready
        for the contest. See the Contest's{" "}
        <a href="https://codeforces.com/gym/397083">[URL]</a> and the HackClub's{" "}
        <a href="https://codeforces.com/group/DlEKRmkyeU">[group]</a> on
        CodeForces. Note that the group should be joined before entering the
        contest.
      </p>
      <p>
        There were two offline session done at our wonderful boarding school.
        During the summer vacation, the club had 13 online session:
      </p>

      <div className="flex  flex-wrap gap-5 justify-center items-center  ">
        {CPData.map((data, index) => (
          <a
            href={data.a}
            target="_blank"
            key={index}
            className="group cursor-pointer relative overflow-hidden border dark:border-neutral-700 border-black rounded-xl w-60 h-32 p-2  "
          >
            <h1 className="text-xl mb-1 text-red-600 dark:text-red-600">
              {data.h1}
            </h1>
            <p className="text-sm ">{data.p}</p>

            <div className="absolute left-0 bottom-0   w-0 overflow-hidden  h-full group-hover:w-full flex justify-center items-center bg-red-700 dark:bg-red-700">
              <p className="group-hover:scale-100 scale-0 text-white dark:text-white m-0 p-0 cursor-pointer duration-100">
                click to see the files
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CPContent;
