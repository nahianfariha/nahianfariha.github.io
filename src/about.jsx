import nf from './images/nf1.webp'

const About = () => {
  return (
    <div className="p-4 md:ml-[20rem]  mt-0 ml-5 mr-5 px-5">

    <section className="bg-yellow-50">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="max-w-lg">
                    <p className="font-sacramento text-black-600 text-3xl">"Creation and problem-solving bring me joy—they’re at the heart of everything I do.</p>
                    <p className="mt-4 font-lato font-bold text-black-600 text-sm">
Hi, I’m Nahian Fariha, the founder and sole artist behind Dot Pictures Studio. I started this creative venture during my final year at university, in the midst of the COVID-19 lockdown. What began as a quarantine outlet blossomed into a three-year journey from May 2021 to April 2024.</p>
<p className="mt-4 font-lato font-bold text-black-600 text-sm"> Through Dot Pictures Studio, I created and sold original paintings, graphic designs, print materials, and hand-painted tote bags. I also offered customized art and design services tailored to individual needs and styles.</p>
<p className="mt-4 font-lato font-bold text-black-600 text-sm"> Alongside my artistic work, I practiced coding, explored web development and user experience design, and studied machine learning. Gradually, my interest in machine learning grew stronger, leading me to focus on it professionally. </p>

<p className="mt-4 font-lato font-bold text-black-600 text-sm"> Dot Picture Studio remains a meaningful hobby—an outlet for creativity alongside my evolving academic and career ambitions."</p>
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