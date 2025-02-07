import React from 'react'

const WhyUsContent = () => {
    
    const DivStyle = "my-4"
 
  return (
    <section className='flex flex-col justify-evenly  h-fit   select-text cursor-default px-20 py-10'>
      
        <div className={DivStyle}>
            <h2>STEM Egypt Hack Club</h2>
            <p>At STEM Egypt Hack Club, we are a welcoming Egyptian and Arabian communities of fellow makers, aspiring engineers, and outstanding computer scientists in the 
                <b>boot camp</b>! The opportunity to interact with other students interested in technology is undoubtedly the most valuable perk. 
                <i>Hack Club</i> is a fantastic social setting that is educational and enjoyable.
            </p>
        
        </div>

        <div className={DivStyle}>
            <h2>Our annual Bootcamp</h2>
            <p> 
                Our<b> Annual Bootcamp ,</b>
                , held in August or September, is open to students from Egypt and the Arab world. It provides a strong foundation in
                <b> Competitive Programming, Cybersecurity, Game Development, and App Development </b>
                By the end of the bootcamp, participants create their own projects in their chosen fields. All attendees receive certificates, with top performers earning special prizes.
            </p>
        
        </div>

        <div className={DivStyle}>
            <h2>Final Projects </h2>
            <p>
            We foster a collaborative community of coders and makers, guiding them to apply their skills in a final group project. Members are grouped within their tracks to enhance teamwork, culminating in evaluations and presentations that refine their technical and communication skills. Explore these projects and more in Projects Section. (will be hyperlink to the section of projects) 
            </p>
        </div> 

        <div className={DivStyle}>
            <h2> Hackathons and Events          </h2>
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
