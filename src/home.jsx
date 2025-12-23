import React, { useState } from "react";
import "./App.css";
import NF from "./images/nf.webp";
import NF1 from "./images/nf1.webp";
import NF2 from "./images/nf2.webp";
import NF3 from "./images/nf3.webp";
import NF5 from "./images/nf5.webp";
import NF7 from "./images/nf7.webp";
import NF8 from "./images/nf8.webp";
import IIUC from "./images/iiucpic.webp";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        {/* Hamburger (for mobile/tablet) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Logo */}
        <div className="nav-logo">Nahian Fariha</div>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#courses">Courses</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work Experience</a>
          <a href="#extra">My Journey</a>
        </div>
      </nav>

      {/* Sidebar menu for mobile */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work Experience</a>
        <a href="#extra" onClick={() => setMenuOpen(false)}>Extracurricular</a>
        <a href="#extra" onClick={() => setMenuOpen(false)}>My Journey</a>
      </div>

     <section id="about" className="about-section">
  <div className="about-content">
    {/* Left side: Photo */}
    <div className="about-left">
      <div className="about-photo">
        <img src={NF} alt="Nahian Fariha" />
      </div>
    </div>

    {/* Right side: Name + Text + Icons */}
    <div className="about-right">
      <h2 className="profile-name">Nahian Fariha</h2>

      <div className="about-text">
        <p>
          I am a Computer Science and Engineering graduate with a strong research interest in Generative AI (Trustworthy LLMs), Machine Learning, and Computer Vision.
        </p>
      </div>

      <div className="contact-links">
        <a href="mailto:nahianfariha.cs@gmail.com"><i className="fas fa-envelope" ></i></a>
        <a href="tel:+8801673759691"><i className="fas fa-phone"></i></a>
        <a href="https://github.com/NahianFariha"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/nahian-fariha"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="resume-download">
        <a href="https://drive.google.com/file/d/1ngKUe7ijYjkF9htCp1ppmZMQtFiBsqAy/view?usp=sharing" download className="resume-btn">
          <i className="fa fa-download"></i> Download My Resume
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Education */}
      <section id="education" className="section alt">
        <h2>Education</h2>
        <div className="flex justify-between items-center">
          <p><strong>B.Sc. in Computer Science and Engineering</strong></p>
          <span className="text-gray-600">Oct 2016 - Oct 2020</span>
        </div>
        <div className="flex justify-between items-center">
        <p><a class="dsc" href="https://youtu.be/fs7RNN1xAjI?si=723nctNjyD8t9SKe" >International Islamic University Chittagong</a> </p>
        <span><p><a className="text-gray-600" href="https://drive.google.com/file/d/1auIYb2ZJmGV-fidB6-CtW4TrsxPJvZEL/view?usp=sharing"> Certificate</a></p></span>
        </div>
      </section>

{/* Research Experience */}
      <section id="research" className="section">
        <h2>Research Experience</h2>
        <div className="flex justify-between items-center">
    <p><strong>Undergraduate Thesis</strong></p>
    <span className="text-gray-600">2020 - 2021 </span>
    </div>
    <p><strong>Real-time Social Distance Estimation using YOLO Convolutional Neural Network and Euclidean Distance.</strong></p>
  
        <ul>
          <li> Proposed a real-time system to estimate social distancing by analyzing video footage from six distinct environments: good quality, fuzzy, daylight, nightlight, less populated, and crowded.</li>
          <li> The objective of this research was to estimate social distance in real-time and giving a tracking accuracy in percentage based on six different environments.</li>
          <li> Used YOLO (You Only Look Once) pretrained on the COCO dataset to detect people and draw bounding boxes; computed centroids and applied Euclidean distance to measure interpersonal spacing.</li>
          <li>Achieved 90% tracking accuracy across varied conditions, supporting real-time public safety monitoring in low and high visibility environments.</li>
          <li>Tech : Python, OpenCV, YOLOv3, COCO Dataset, NumPy.</li>
        </ul>
        <a class="dsc" href="https://drive.google.com/file/d/13Zvm6vAlXyL5QDvMjuy_luiB1LplvvK7/view?usp=sharing">CLICK HERE TO READ MY THESIS BOOK</a>
      </section>

      {/* Projects */}
      <section id="projects" className="section alt">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>1. 🤖📧 GenAI Cold Email Generator</h3>
            <p>RAG-based Cold Email Generator using Llama 3.1, LangChain, ChromaDB, and Streamlit that helps software companies send cold emails to acquire projects by extracting data from their potential clients’ job postings and matching the required skills with their portfolios.</p>
            <a href="https://github.com/nahianfariha/GenAI-Cold-Email-Generator.git">Repository</a>
          </div>
          <div className="project-card">
            <h3>2. 💻🌐 Dot Pictures Studio Responsive Website</h3>
            <p>Developed a fully responsive web application for my arts and graphic business that helps me showcase and manage my work online, built with React, Tailwind CSS, and Node.js using Vite for modern, efficient deployment.</p>
            <a href="https://nahianfariha.github.io/dotpicturesstudio">Client Side</a> & <a href="https://github.com/nahianfariha/dotpicturesstudio">Repository</a>
          </div>
          <div className="project-card">
            <h3>3. 🤖🚶 REAL-TIME Social Distance Estimation using YOLO Convolutional Neural Network and Euclidean Distance</h3>
            <p> Detects people in real-time videos using YOLOv3 and calculates distances with Euclidean metrics to help monitor safe distancing; completed during the COVID-19 outbreak.</p>
            <a href="https://github.com/nahianfariha/REAL-TIME-SOCIAL-DISTANCE-ESTIMATION-USING-YOLO-CONVOLUTIONAL-NEURAL-NETWORK-AND-EUCLIDEAN-DISTANCE.git">Repository</a>
          </div>
          <div className="project-card">
            <h3>4. 🔍🎬 Movie Recommender System using Machine Learning Techniques</h3>
            <p>Helps users discover personalized movie suggestions based on their preferences, built with Python, data preprocessing, vectorization, and Streamlit.</p>
            <a href="https://github.com/nahianfariha/Machine-Learning-and-Ai.git">Repository</a>
          </div>
          <div className="project-card">
            <h3>5. 📈🧑‍💻 Restaurant Profit Estimator using Linear Regression Model</h3>
            <p>A predictive analytics project that estimates restaurant profits based on city population data. Built with Python, NumPy, Matplotlib, and Linear Regression implemented from scratch in Jupyter Notebook.</p>
            <a href="https://github.com/nahianfariha/Restaurant-Profit-Estimator-using-Linear-Regression-Model.git">Repository</a>
          </div>
          <div className="project-card">
            <h3>6. 🌐👩‍💻 Academic Portfolio Website</h3>
            <p>A professional academic portfolio website to showcase my projects, research, and achievements, built with React, Vite, Tailwind CSS, Node.js, and deployed on Github Pages.</p>
            <a href="https://nahianfariha.github.io">Client Side</a> & <a href="https://github.com/nahianfariha/nahianfariha.github.io.git">Repository</a>
          </div>
        </div>
      </section>
    {/* Workshops & Certifications */}
<section id="courses" className="section">
  <h2 className="text-xl font-bold mb-4">Workshops & Certifications</h2>
  <ul className="space-y-6">
     {/* Python for Everybody */}
    <li>
      <div className="flex justify-between items-start">
        <p className="font-semibold">Workshop on LLMs - Nexus : Bridging Technical Innovation and Ethical Horizons - Southern Illinois University</p>
        <div className="flex flex-col space-y-2 text-right">
          <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/posts/nahian-fariha_ai-llms-machinelearning-activity-7329108149565562881-mRtM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADd8WnoB4n-f9f6hjwVDCK03P3UXAdI5kg4">See More</a>
        </div>
      </div>
    </li>
    {/* Machine Learning Specialization */}
    <li>
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">Machine Learning Specialization - Coursera</p>
          <ol className="list-decimal ml-6">
            <li>Course 1: Supervised Machine Learning: Regression and Classification</li>
            <li>Course 2: Advanced Learning Algorithms</li>
            <li>Course 3: Unsupervised Learning, Recommenders, Reinforcement Learning</li>
          </ol>
        </div>
        <div className="flex flex-col space-y-2 text-right">
          <a className="text-blue-600 hover:underline" href="https://www.coursera.org/account/accomplishments/specialization/NK4X1PQ35HO1">Certificate</a>
        <a className="text-blue-600 hover:underline" href="https://github.com/nahianfariha/Machine-Learning-and-Ai.git">Repository</a>
        
        </div>
      </div>
    </li>

    {/* Deep Learning Specialization */}
    <li>
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">Deep Learning Specialization - Coursera</p>
          <ol className="list-decimal ml-6">
            <li>Course 1: Neural Networks and Deep Learning</li>
            <li>Course 2: Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</li>
            <li>Course 3: Structuring Machine Learning Projects</li>
            <li>Course 4: Convolutional Neural Networks</li>
            <li>Course 5: Sequence Models</li>
          </ol>
        </div>
        <div className="flex flex-col space-y-2 text-right">
           <a className="text-blue-600 hover:underline" href="https://www.coursera.org/account/accomplishments/specialization/7PB9Q3222FGP">Certificate</a>
        <a className="text-blue-600 hover:underline" href="https://github.com/nahianfariha/Machine-Learning-and-Ai.git">Repository</a>
        </div>
      </div>
    </li>

    {/* Python for Everybody */}
    <li>
      <div className="flex justify-between items-start">
        <p className="font-semibold">Python for Everybody Specialization - Coursera</p>
        <div className="flex flex-col space-y-2 text-right">
          <a className="text-blue-600 hover:underline" href="https://www.coursera.org/account/accomplishments/specialization/25VF6NVCFV7C">Certificate</a>
        <a className="text-blue-600 hover:underline" href="https://github.com/nahianfariha/Python-for-Everybody-All-Codes-5-Courses.git">Repository</a>
        </div>
      </div>
    </li>
    {/* Python for Everybody */}
    <li>
      <div className="flex justify-between items-start">
        <p className="font-semibold">Linear Algebra for Machine Learning and Data Science - Coursera</p>
        <div className="flex flex-col space-y-2 text-right">
          <a className="text-blue-600 hover:underline" href="https://www.coursera.org/account/accomplishments/specialization/25VF6NVCFV7C">Certificate</a>
        </div>
      </div>
    </li>
    {/* Mastering DSA */}
    <li>
      <div className="flex justify-between items-start">
        <p className="font-semibold">
          Mastering Data Structures & Algorithms using C and C++ | Abdul Bari | - Udemy
        </p>
        <div className="flex flex-col space-y-2 text-right">
          <a className="text-blue-600 hover:underline" href="https://github.com/nahianfariha/Udemy-Mastering-Data-Structures-Algorithms-Abdul-Bari.git">Repository</a>
        </div>
      </div>
    </li>

    {/* Full Stack Bootcamp */}
    <li>
      <div className="flex justify-between items-start">
        <p className="font-semibold">
          The Complete Full-Stack Web Development Bootcamp | Dr. Angela Yu | - Coursera
        </p>
        <div className="flex flex-col space-y-2 text-right">
          <a className="text-blue-600 hover:underline" href="https://github.com/nahianfariha/Web-Development.git">Repository</a>
        </div>
      </div>
    </li>

    {/* Google UX */}
    <li>
      <div className="flex justify-between items-start">
        <p className="font-semibold">Google UX Design Specialization - Coursera</p>
        <div className="flex flex-col space-y-2 text-right">
        </div>
      </div>
    </li>
  </ul>
</section>




      {/* Skills */}
      <section id="skills" className="section alt">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: Python, C, C++, JavaScript</li>
          <li>Web Development: React, Node.js, Tailwind CSS, Bootstrap, Flexbox, CSS Grid, Vite, Flowbite, HTML5, GitHub Pages</li>
          <li>Database: PostgreSQL, ChromaDB</li>
          <li>Frameworks and Tools: Git, Github, React.js, Jupyter Notebook, VS Code, Google Colab, Latex Editor</li>
          <li>Machine Learning and AI: NumPy, TensorFlow, Pandas, Matplotlib, OpenCV, Machine Learning, Deep
          Learning, Computer Vision, RAG, Langchain, Streamlit</li>
          <li>Others: Google Workspace, Figma, Adobe (Photoshop, Illustrator), Procreate, Responsive Web Design</li>
        </ul>
      </section>

      {/* Work Experience */}
      <section id="work" className="section">
        <h2>Work Experience</h2>
        <p><strong><a class="bla" href="https://www.linkedin.com/company/islamibankbangladeshplc/">1. Agent Banking Desk Officer - Islami Bank Bangladesh PLC</a> </strong>   [Sept 2025 - Present]</p>
        <ul>
        <li>Hands-on experience with banking software for account management and financial transactions, ensuring
accuracy and compliance.</li>
        <li>Assisting clients with opening and managing accounts, including savings, current, fixed deposits (TDR),
and DPS; Supporting clients in financial product selection to meet
their banking needs; cash management, customer service, and financial advisory.</li></ul>
<div className="mb-8"></div>
        <p><strong> <a class="bla" href="https://nahianfariha.github.io/dotpicturesstudio/">2. Founder and Artist - Dot Pictures Studio</a>    </strong> [May 2021 - April 2024]</p>
        <ul>
        <li>Created and sold a variety of customized products, including cartoon/customized banners, graphics, illustrations, painted products, paintings, UX/UI designs, and painted tote bags.</li>
<li>Managed he entire business process, from product design to delivery, ensuring customer satisfaction.</li>
<li>Handled social media marketing, client communications, and order management.</li></ul>
 <div className="mb-8"></div>
        <p><strong><a class="bla" href="https://www.linkedin.com/company/basis-bitm/">3. Web Application Development - Trainee, BASIS Institute of Technology and Management (BITM) </a>
   </strong>  [Feb 2019 – April 2019]</p>
<ul>
<li>Collaborated in a 4-member team to develop two website projects, applying OOP basics, web fundamentals (HTML, CSS, JavaScript), and database management (MS SQL Server), while gaining hands-on experience with web programming and the full life cycle of real-world projects.</li></ul>
      </section>
      

     {/* Extra Curricular & My Journey */}
<section id="extra" className="section alt">
  <h2 className="mb-8 text-3xl font-semibold text-gray-900">
    Volunteering and Extracurricular Activities
  </h2>

  <ul className="list-disc list-inside mb-8 space-y-2 text-gray-800">
    <li>Member of IIUC Photography Club and IIUC Computer Club.</li>
    <li>Active volunteer in university and community events, demonstrating teamwork and leadership.</li>
    <li>Art Practitioner and business owner.</li>
  </ul>

  {/* Text Section */}
  <div className="space-y-6 text-gray-800 leading-relaxed mb-10">
   
    <p>
     My first academic exposure to Artificial Intelligence was during a three-hour lecture in my undergraduate course, where the professor’s presentation on intelligent systems completely held my attention. That moment sparked my curiosity about how machines learn and reason, and my strong performance in the course further deepened my interest. During the COVID-19 period, I conducted my undergraduate thesis using the YOLO convolutional neural network to estimate social distancing, which introduced me to computer vision, real-time inference, and end-to-end ML system design.
    </p>
    <p>
After graduation, I explored interdisciplinary fields that strengthened both my technical and creative abilities. I founded Dot Pictures Studio, producing paintings, graphics and UX/UI design work while independently studying Machine Learning and full-stack web development. These experiences allowed me to apply ML concepts to real-world projects, including recommendation models and regression-based solutions. Later, attending an international workshop led me to explore the reliability and trustworthiness of large language models, shaping my current research focus.    </p>
    <p>
I worked at Islami Bank Bangladesh PLC until December 2025, mainly to gain personal growth and real-world exposure. During this time, I learned practical money management, observed how banking software systems operate, and understood which financial packages or schemes genuinely benefit customers. Fully dedicating myself now to research and academic preparation for a Ph.D., I am focused on strengthening my knowledge in Machine Learning, exploring new ideas through hands-on projects and research papers, and deepening my understanding of LLM reliability and evaluation.     </p>
     <p>
Looking ahead, I aim to pursue a career in academia, dedicating myself to long-term research and teaching, advancing AI-driven solutions, mentoring future researchers, and contributing to innovations that can have a lasting impact on both the scientific community and society.     </p>
  </div>

  {/* Slideshow + Social Section */}
  <div className="flex flex-col items-center justify-between gap-10 mt-12">
    {/* Right: Slideshow */}
    <div className="relative w-full md:w-[600px] h-[300px] overflow-hidden rounded-2xl flex items-center justify-center">
      {[IIUC, NF1, NF2, NF3, NF5, NF7, NF8].map((src, index) => (
        <img
          key={index}
          src={src}
          className="absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeSlide"
          style={{
            animationDelay: `${index * 1}s`,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  </div>

  <style>{`
    @keyframes fadeSlide {
      0% { opacity: 0; }
      10% { opacity: 1; }
      25% { opacity: 1; }
      35% { opacity: 0; }
      100% { opacity: 0; }
    }
    .animate-fadeSlide {
      animation: fadeSlide 8s infinite ease-in-out;
    }
  `}</style>
</section>




      {/* Contact */}
      <footer id="contact" className="footer">
        <p>“CREATION AND PROBLEM-SOLVING BRING ME JOY—THEY’RE AT THE HEART OF EVERYTHING I DO.”</p>
        <p>Reach me anytime at <a href="mailto:nahianfariha.cs@gmail.com">nahianfariha.cs@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default App;
