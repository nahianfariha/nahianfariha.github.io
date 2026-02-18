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
  const newsItems = [
    {
      date: "Jan 2026",
      title: "Open to Research Opportunities.",
      description:
        "Actively looking for research assistant positions. Research Interests : Multimodal AI, Trustworthy AI, Machine Learning and Computer Vision. 
      icon: "🔬",
      link: "https://www.linkedin.com/in/nahian-fariha/"
    },
    {
      date: "July 2025",
      title: "Attended Workshop on LLMs at Southern Illinois University. (Online)",
      description:
        "Participated in the Nexus workshop focusing on Large Language Models, ethical AI, and responsible innovation.",
      icon: "🔗",
      link: "https://www.linkedin.com/posts/nahian-fariha_ai-llms-machinelearning-activity-7329108149565562881-mRtM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADd8WnoB4n-f9f6hjwVDCK03P3UXAdI5kg4"
    },
    {
      date: "Sept 2022",
      title: "Undergraduate Convocation – B.Sc. in Computer Science & Engineering",
      description:
        "Officially graduated with a Bachelor of Science in Computer Science & Engineering from International Islamic University Chittagong (IIUC) at the university’s 5th Convocation.",
      icon: "🎓",
      link: "https://www.linkedin.com/posts/nahian-fariha_11sept2022-5thconvocation-officiallygraduated-activity-6976607774340247552-jAu9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADd8WnoB4n-f9f6hjwVDCK03P3UXAdI5kg4"
    }
  ];



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
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#courses">Courses</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#work">Work Experience</a>
          <a href="#extra">Extra</a>
          <a href="#news">News</a>
        </div>
      </nav>

      {/* Sidebar menu for mobile */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work Experience</a>
        <a href="#extra" onClick={() => setMenuOpen(false)}>Extra</a>
        <a href="#extra" onClick={() => setMenuOpen(false)}>News</a>
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
                I am a Computer Science and Engineering graduate with a strong research interest in  Multimodal AI, Trustworthy AI/LLMs, Machine Learning, and Computer Vision.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:nahianfariha.cs@gmail.com"><i className="fas fa-envelope" ></i></a>
              <a href="tel:+8801673759691"><i className="fas fa-phone"></i></a>
              <a href="https://github.com/NahianFariha"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/nahian-fariha"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="resume-download">
              <a href="https://drive.google.com/file/d/1lGglCFqqGFzeJ3U-wcYXAzy5f8boxhUt/view?usp=sharing" download className="resume-btn">
                <i className="fa fa-download"></i> Download My Resume
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Research Experience */}
      <section id="research" className="section">
        <h2>Research Experience</h2>

       {/* {/* Ongoing Research (on top of section) 
       /* <div className="mb-6">
          <h3 className="text-green-600 font-bold">Ongoing Research</h3>
          <p><strong>Currently exploring research on multimodal AI in the medical domain, with a parallel focus on developing trustworthy AI frameworks. (Details are confidential; will be shared once the work is published.)</strong></p>

        </div> */}

        <div className="flex justify-between items-center">
          <p><strong>Undergraduate Thesis</strong></p>
          <span className="text-gray-600">2020 - 2021 </span>
        </div>
        <p><strong>Real-time Social Distance Estimation using YOLO Convolutional Neural Network and Euclidean Distance.</strong></p>

        <ul>
          <li> Proposed a real-time system to estimate social distancing by analyzing video footage from six distinct
            environments: good quality, fuzzy, daylight, nightlight, less populated, and crowded.</li>
          <li> Implemented person detection using YOLOv3 pretrained on the COCO dataset; computed centroids and
            applied Euclidean distance to measure interpersonal spacing.</li>
          <li> Achieved 90 percent tracking accuracy across varied conditions, demonstrating robustness in low- and high-
            visibility scenarios.</li>
          <li>Contributed to research on real-time computer vision methods for public safety applications.</li>
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

      {/* Education */}
      <section id="education" className="section alt">
        <h2>Education</h2>
        <div className="flex justify-between items-center">
          <p><strong>B.Sc. in Computer Science and Engineering</strong></p>
          <span className="text-gray-600">Aug 2016 - Sept 2021</span>
        </div>
        <div className="flex justify-between items-center">
          <p><a class="dsc" href="https://youtu.be/fs7RNN1xAjI?si=723nctNjyD8t9SKe" >International Islamic University Chittagong</a> </p>
          <span><p><a className="text-gray-600" href="https://drive.google.com/file/d/1auIYb2ZJmGV-fidB6-CtW4TrsxPJvZEL/view?usp=sharing"> Certificate</a></p></span>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="section">
        <h2>Work Experience</h2>
        <p><strong><a class="bla" href="https://www.linkedin.com/company/islamibankbangladeshplc/">1. Agent Banking Desk Officer - Islami Bank Bangladesh PLC</a> </strong>   [Sept 2025 - Dec 2025]</p>
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


      {/* Extra Curricular */}
      <section id="extra" className="section alt">
        <h2 className="mb-8 text-3xl font-semibold text-gray-900">
          Volunteering and Extracurricular Activities
        </h2>

        <ul className="list-disc list-inside mb-8 space-y-2 text-gray-800">
          <li>Member of IIUC Photography Club and IIUC Computer Club.</li>
          <li>Active volunteer in university and community events, demonstrating teamwork and leadership.</li>
          <li>
            <a
              href="http://instagram.com/dotpicturesstudio"   // or an external link like "https://your-art-site.com"
              className="font-medium text-black hover:underline"
            >
              Art Practitioner and business owner.
            </a>
          </li>
        </ul>
      </section>

      {/* News Section */}
      <section id="news" className="section">
        <h2>News & Recent Activities</h2>

        <div className="news-list">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-item-link"
              aria-label={item.title}
            >
              <div className="news-item">
                <div className="news-date">{item.date}</div>

                <div className="news-content">
                  <h4>
                    {item.title}
                    {index === 0 && <span className="news-badge">NEW</span>}
                  </h4>
                  <p>{item.description}</p>
                </div>

                <div className="news-action">{item.icon || "➡️"}</div>
              </div>
            </a>
          ))}
        </div>
      </section>





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




      {/* Contact */}
      <footer id="contact" className="footer">
        <p>“CREATION AND PROBLEM-SOLVING BRING ME JOY. THEY’RE AT THE HEART OF EVERYTHING I DO.”</p>
        <p>Reach me anytime at <a href="mailto:nahianfariha.cs@gmail.com">nahianfariha.cs@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default App;
