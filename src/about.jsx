import nf from './images/nf.avif'

const About = () => {
  return (
    <div className="p-4 md:ml-[20rem]  mt-0 ml-5 mr-5 px-5">

    <section className="bg-yellow-50">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="max-w-lg">
                    <p className="mt-4 font-lato font-bold text-black-600 text-lg">"Hi, I am Nahian Fariha, the founder and sole artist of Dot Pictures Studio. I started Dot Picture Studio during my final year at university, around the time of the COVID-19 lockdown. What began as a creative outlet during quarantine grew into a three-year journey from May 2021 to April 2024. During this time, I created and sold paintings, graphic designs, print materials, and hand-painted tote bags. I also provided customized art and design services tailored to individual needs.</p>

<p className="mt-4 font-lato font-bold text-black-600 text-lg"> Alongside my artistic work, I practiced coding, explored web development and user experience design, and studied machine learning. Gradually, my interest in machine learning grew stronger, leading me to focus on it professionally. </p>

<p className="mt-4 font-lato font-bold text-black-600 text-lg"> Dot Picture Studio remains a meaningful hobby—an outlet for creativity alongside my evolving academic and career ambitions."</p>
                </div>
                <div className="mt-12 md:mt-0">
                    <img src={nf} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                </div>
            </div>
        </div>
    </section>

</div>
  )
}

export default About;