import React from 'react'
import Hero from '../components/Hero';
import test from '../assets/hero/Asset2.svg'
import test2 from '../assets/hero/hero_main.svg'
import './../index.css'
import leader from '../assets/home/leader.png'
import teamwork from '../assets/home/teamwork.png'
import savemoney from '../assets/home/save-money.png'
import coding from '../assets/home/codings.svg'
import Card from '../components/Card';
import cloud from '../assets/home/icons/cloud.png'
import webapp from '../assets/home/icons/webapp.png'
import mobileapp from '../assets/home/icons/mobileapp.png'
import softwaredev from '../assets/home/icons/software_development.png'
import blockchain from '../assets/home/icons/automation.png'
import saas from '../assets/home/icons/saas.png'
import ContactForm from '../components/Forms/ContactForm';

const Home = () => {
  return (
    <div>
      <Hero />
     {/* 2nd section  */}
      <section className='container w-[1300px] mx-auto my-10 py-10 '>
      <div className=" text-center justify-center">
        <h2 className=" max-w-prose text-5xl py-8 my-6 text-center">Unlocking the Potential of Your Business with 
  Innovative & Tailored Software Solutions</h2>

      </div>
        <div className="flex gap-16 justify-between ">
          
          <div className="card w-96 glass">

            <img src={test} alt="" className=" h-48 rounded-[1rem]" />
            <div className="card-body">
              <h2 className="card-title justify-center">Our Expertise</h2>
              <p> Our team of experts has extensive experience in software development and technology. Many of our team members are alumni of the University of Guelph, and have a deep understanding of the latest technologies and methodologies.</p>       
            
            </div>
          </div>
          <div className="card w-96 glass">
          <img src={test2} alt="" className=" h-30" />
            <div className="card-body">
              <h2 className="card-title justify-center">Our Solutions</h2>
              <p>We offer a range of software solutions to automate your business processes such as appointment booking, product ordering, and more, tailored to meet the unique needs of your business and help you reach new levels of success.</p>       
            
            </div>
          </div>
          <div className="card w-96 glass">
            <div className="card-body">
              <h2 className="card-title justify-center">Customer Service</h2>
              <p>At Naratech, customer service is a top priority. Our 24/7 support team is always available to answer questions. We use ticketing system  to support & resolve any issues, ensuring that our software solutions run smoothly for your business.</p>       
            
            </div>
          </div>
        </div>
      </section>

       {/* 3rd section  */}
      <section className="y-sect my-12 py-12 relative flex flex-col items-center mx-auto ">
      <div className="prose flex-start my-2">
        <h2 className=" text-5xl">Why naratech? </h2>

      </div>
      <div className="grid grid-cols-2 mx-auto w-[1300px]">

        <div className=" relative">
          <img src={coding} alt="coding at naratech" className=" object-bottom absolute" />
        </div>
        <div className="prose flex flex-col  ">
          
          <div className="flex flex-row border-2 rounded-2xl border-slate-600 shadow-2xl my-4
            shadow-slate-600 opacity-70 hover:shadow-xl">
            <div className=" flex-grow-0 flex-shrink-0 p-2 max-w-[112px]">
              <img src={leader} alt="leader naratech" className=" " />
            </div>
            <div className="">
              <h3>Expertise & Experience</h3>
              <p>We use latest technologies such as react, angular and micro-services and cloud solution. </p>
            </div>
          </div>

          <div className="flex flex-row border-2 rounded-2xl border-slate-600 shadow-2xl my-4
            shadow-slate-600 opacity-70 hover:shadow-xl">
            <div className=" flex-grow-0 flex-shrink-0 p-2 max-w-[112px]">
              <img src={teamwork} alt="leader naratech" className=" " />
            </div>
            <div className="">
              <h3>Communication & Collaboration</h3>
              <p>We have adapted agile and scrum methodologies to ensure all stakeholders are on the same page throughout the project. </p>
            </div>
            
          </div>
          <div className="flex flex-row border-2 rounded-2xl border-slate-600 shadow-2xl my-4
            shadow-slate-600 opacity-70 hover:shadow-xl  ">
            <div className=" flex-grow-0 flex-shrink-0 p-2 max-w-[112px]">
              <img src={savemoney} alt="leader naratech" className="  " />
            </div>
            <div className="">
              <h3>Cost & Budget</h3>
              <p>Affordable pricing options tailored to meet specific needs & budget. Transparent pricing with no hidden fees or surprises.</p>
            </div>
            
          </div>
        </div>
      </div>

      </section>

      <section className=" deals-section my-10 py-10 ">
        <div className="flex flex-row justify-start  mx-auto my-10 py-10 w-[1300px]">

          <div className="left basis-3/4 py-4 prose prose-h2:text-5xl prose-h3:text-3xl 
         prose-p:text-lg ">
            <h2 className=" ">A Website for Everyone</h2>

            <h3 className=" ">Unveil your unique identity to the world with a stunning website, because every individual deserves a platform to showcase their presence.</h3>
            <p className="">Transform your online presence with our cost-effective personal website solution using WordPress CMS. Create a professional, functional and custom website with ease and expert support at your fingertips.
            </p>
            <span className="">starting from  CAD 297</span><button className='btn btn-primary btn-lg text-3xl'>Buy Now</button>
          </div>
          <div className="right basis-1/2 ">
            {/* <img src={girl} alt="" className=" " /> */}
            
          </div>
        </div>
      </section>

      {/* service section */}
      <section className="service-section my-10 py-10">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="prose prose-p:text-5xl prose-h2:text-2xl flex flex-col justify-start items-center  my-2">
            <h2 className="">Our Services</h2>
            <p className="">Transforming Ideas into Digital Solutions</p>
          </div>
          <div className="grid grid-cols-2 grid-flow-row py-12  gap-10 ">
            <div className=" ">
              <Card 
                icon = {softwaredev}
                icon_alt = "Software Development" 
                title="Software Development & Solutions" 
                description1=" Customized user interface(UI) based on your idea."
                description2=" System Integration and develop extensions/plugins."
                description3=" Build sophisticated backend capabilities ."
                />
            </div>
            <div className=""> 
            <Card  
              icon = {webapp}
              icon_alt = "Web App development"
              title="Website Design & Development" 
              description1=" Affordable responsive web app using CMS (WordPress)"
              description2=" Complex full-stack web app using MERN and Next.js stack "
              description3=" Strong security measures to protect against attacks"
              />
            </div>
            <div className="">
              <Card  
              icon = {mobileapp}
              icon_alt = "Mobile App development (iOS/Android)"
              title="Mobile App development (iOS/Android)" 
              description1=" Mobile apps for dual os using react native & flutter"
              description2=" Design intuitive and engaging user experiences"
              description3=" Develop bespoke mobile apps for clients' specific needs"
              />
            </div>
            <div className="">
              <Card  
              icon = {saas}
              icon_alt = "Software as a Service products"
              title="Software as a Service products" 
              description1=" Provide in-house SaaS solutions (Ex: Appointment Booking)"
              description2=" Customized business logic that automates unique workflows"
              description3=" Ongoing support, maintenance and updates"
              />
            </div>
            <div className="">
              <Card  
              icon = {cloud}
              icon_alt = "Cloud development (AWS)"
              title="Cloud development (AWS)" 
              description1=" Deploy/host apps on AWS amplify, lightsail EC2 & S3 "
              description2=" Microservices using AWS lambda and AWS fargate"
              description3=" Load balancing, database and auto scaling features"
              />
            </div>
            <div className="">
              <Card  
              icon = {blockchain}
              icon_alt = "Blockchain & web3 dApp development"
              title="Blockchain & web3 dApp development" 
              description1=" Smart contract development using solidity (Ex: ERC-20)"
              description2=" Web3.0 dApp with wallet integration & NFT mint functions"
              description3=" Support for Etherium, Arbitrum and Binance chain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* contact us section #a5d0ee21 */}
      <section className="contact relative my-12 py-10 ">
        <div className=" bg-gradient-to-r from-[#b6d5f971] to-[#00000000] z-10">

          <div className=" h-96 overflow-visible grid grid-cols-2 gap-4 items-center justify-center mx-auto max-w-[1300px] ">
            <div className="left flex flex-col justify-center items-center prose prose-h2:text-5xl prose-h2:text-slate-200/75">
              <h2> Get in Touch</h2>
              <p>Address: 78 College Awe., Guelph. Ontario</p>
              <p>Phone: +1-519-760-3651</p>
              <p>Email: support@naratech.ca</p>
            </div>
            <div className="right z-20  relative -top-24 "> 
              <div className="contact-form z-30 absolute h-auto">
                <ContactForm />

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* our technologies section */}

      <section className="techno my-12 py-12 max-w-[1300px] mx-auto mt-32 flex flex-col justify-start items-center">
        <div className="prose prose-p:text-5xl prose-h2:text-2xl   my-2">
          <h2 className="">Our Technologies</h2>
          
        </div>
        <div className="">
          con
        </div>
      </section>
      

    </div>
  )
}

export default Home;