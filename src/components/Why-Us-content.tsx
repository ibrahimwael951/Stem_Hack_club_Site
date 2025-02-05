import React from 'react'

const WhyUsContent = () => {
    
    const DivStyle = "my-4"
 
  return (
    <section className='flex flex-col justify-evenly  h-fit   select-text cursor-default dark:bg-gray-950 px-20 py-10'>
      
        <div className={DivStyle}>
            <h2>STEM Egypt Hack Club</h2>
            <p>At STEM Egypt Hack Club, we are a welcoming Egyptian and Arabian communities of fellow makers, aspiring engineers, and outstanding computer scientists in the 
                <b>boot camp</b>! The opportunity to interact with other students interested in technology is undoubtedly the most valuable perk. 
                <i>Hack Club</i> is a fantastic social setting that is educational and enjoyable.
            </p>
        
        </div>


        <div className={DivStyle}>
            <h2> Hack Night</h2>
            <p>Every 
                <b>Saturday at 8:00 PM</b>, 
                we have our weekly Zoom meetings where we present fantastic workshops. It is a chance to meet new friends or hang out on a chill call.</p>
        
        </div> 

        <div className={DivStyle}>
            <h2> Game Jams, Workshops, and Events</h2>
            <p>
                It would be best if you did not hesitate to join us for one of our weekly meetings, no matter your skill level. It is entirely acceptable if you have never programmed or worked with any coding or engineering before. You will be guided through the learning process by our mentors. Through our weekly sessions, you may complete your first project in less than 1.5 hours.
            </p>
        </div> 

        <div className={DivStyle}>
            <h2>Final Projects </h2>
            <p>
                We cultivate a community of coders and makers to build up a final project at the end of the training to utilize each skill they have learned throughout their tasks, sessions, and outside resources. We distribute the members in groups according to the members' number in each track to establish a cooperative environment. There is an evaluation and a presentation for each group to present their ideas and projects at the final evaluation, which helps them improve their presentation and other skills!
            </p>
        </div> 

        <div className={DivStyle}>
            <h2> Hackathons</h2>
            <p>
                Every season we do two hackathons: a project hackathon 
                <i>(online)</i> 
                and a competitive programming hackathon 
                <i>(in-person)</i>. 
                These hackathons help the young coders be ready for the final project and look inside at what they will see in the final project. In addition, they help in letting them know what the environment is like in the 
                <b>Egyptian and International Olympiads of Informatics</b>.
            </p>
        </div> 

        <div className={DivStyle}>
            <h2>Arts </h2>
            <p>
                As we do not want to keep the 
                <i>limits</i> to computer science and coding to these creative young students, we offer any member to share their graphic design skills in front of the community and teach how they do these pieces of designs.
            </p>
        </div> 

        <div className={DivStyle}>
            <h2>Articles & Research Projects </h2>
            <p>
                As we expect more from each maker in the club, we offered them something that makes
                <b>STEM Egypt Hack Club</b> unique from any other branch: doing a research project or writing an article related to computer science, 
                <i>not just a Python file as a final project</i>. They can submit a manuscript to be featured on our website and approved and edited by our mentors who did many other research projects in top-notch programs 
                        <b>
                            <i>(e.g., pioneer research program)</i>
                        </b>.
                We also review their work to ensure that our content satisfies our high standards for other 
                <b>readers</b>.
             </p>
        </div> 


        <div className={DivStyle}>
            <h2> Code Of Conduct</h2>
            <h3>Treat everyone with respect and kindness.</h3>
            <h3>Be thoughtful in how you communicate.</h3>
            <h3>Don't be destructive or inflammatory.</h3>
            <h2><a href="https://hackclub.com/conduct/" target="_blank">For more information...</a></h2>
        </div> 


    </section>
  )
}

export default WhyUsContent
