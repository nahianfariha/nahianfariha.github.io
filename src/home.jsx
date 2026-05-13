
import React, { useState, useEffect } from "react";
import "./App.css";

import NF from "./images/nf9.webp";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/iiucpic.webp";
import img4 from "./images/nf3.webp";
import img5 from "./images/nf1.webp";
import img6 from "./images/nf2.webp";
import img7 from "./images/nf5.webp";
import img8 from "./images/nf7.webp";
import img9 from "./images/nf8.webp";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const eduImages = [img3, img4,img5, img6,img7, img8, img9];


  // ✅ SLIDESHOW FIXED
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % eduImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [eduImages.length]);



const newsItems = [

  {
    text: "Presented my current research work on 1st AI & Business Online Conference hosted by Professor Minh Nguyen, (Florida Atlantic University), on May, 2026.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7459069227434397696/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8WnoB4n-f9f6hjwVDCK03P3UXAdI5kg4",
    img: img1,
  },
  {
    text: "Attended LLMs Nexus: Bridging Technical Innovation and Ethical Horizons, hosted by Southern Illinois University, Carbondale, on July, 2025.",
    link: "https://www.linkedin.com/posts/nahian-fariha_ai-llms-machinelearning-share-7329108148059811841-D_FA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8WnoB4n-f9f6hjwVDCK03P3UXAdI5kg4",
    img: img2,
  },
];

  const projects = [
    {
      title: "GenAI Cold Email Generator",
      desc: "RAG-based cold email generator using Llama 3.1, LangChain, ChromaDB, and Streamlit.",
      link: "https://github.com/nahianfariha/GenAI-Cold-Email-Generator.git",
    },
    {
      title: "Hallucination Detection Benchmark",
      desc: "Structured benchmark and evaluation framework for factual consistency in LLM outputs.",
      link: "#",
    },
    {
      title: "Real-Time Social Distance Estimation",
      desc: "YOLOv3-based real-time social distancing monitoring system.",
      link: "https://github.com/nahianfariha/REAL-TIME-SOCIAL-DISTANCE-ESTIMATION-USING-YOLO-CONVOLUTIONAL-NEURAL-NETWORK-AND-EUCLIDEAN-DISTANCE.git",
    },
    {
      title: "Movie Recommendation System",
      desc: "Personalized recommendation engine using machine learning.",
      link: "https://github.com/nahianfariha/Machine-Learning-and-Ai.git",
    },
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Nahian Fariha</div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#more">More</a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>


{/* NEWS FLOW */}

<section className="news-section">
  <div className="news-header">
    <span className="news-label">NEWS:</span>

    <div className="news-slider">
      <div className="news-track">
          {[
              ...(window.innerWidth <= 900
                ? newsItems
                : [...newsItems, ...newsItems]),
            ].map((item, index) => (
          <a
            key={index}
            className="news-card"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.img} alt="" className="news-img" />

            <div className="news-text">
              {item.text}
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* HERO */}
      <section className="hero" id="about">
        <div className="hero-left">
          <img src={NF} alt="Nahian Fariha" className="profile-img" />

          <div className="socials">
            <a href="mailto:nahianfariha.cs@gmail.com">Email</a>
            <a href="https://github.com/NahianFariha">GitHub</a>
            <a href="https://linkedin.com/in/nahian-fariha">LinkedIn</a>
          </div>
          <div className="socials" >
            <a href="https://scholar.google.com/citations?hl=en&user=o_MFW1EAAAAJ&view_op=list_works&authuser=1&gmla=AIqSsVtwEeR_XyGEHSTpwJJpSktz2NQbhl9FgoON_boTKovWXtoP1ZdfP2W9BFio-e6Aq0yq815QUR4t_ILsFKzH">Google Scholar</a>
            <a href="https://leetcode.com/u/NahianFariha/">LeetCode</a>
          </div>

          <a
            className="resume-btn"
            href="https://drive.google.com/file/d/1n2XsW8g2Y0wqufb0xY-hI5zj_CeF78zS/view?usp=sharing"
          >
            Download CV
          </a>
        </div>

        <div className="hero-right">
          <p className="tagline">Researcher • AI and ML</p>

          <h1>
            Nahian <span>Fariha</span>
          </h1>

          <div className="availability">
            OPEN TO RESEARCH ASSISTANTSHIP POSITIONS
          </div>

          <p className="bio">
            Computer Science and Engineering graduate currently engaged in AI and Machine Learning research.
          </p>

          <div className="research-tags">
            <span>Natural Language Processing</span>
            <span>Trustworthy AI</span>
            <span>Multimodal AI</span>
            <span>Machine Learning</span>
            <span>Generative AI</span>
          </div>

          <div className="current-research">
            <h3>Current Research</h3>

            <p>
(Manuscript in Preparation) 
Domain: AI in Business, Trustworthy AI, Hallucination in AI, Generative AI, LLMs.
Developed a benchmark framework for hallucination detection in large language models by constructing a structured dataset and a systematic evaluation protocol to assess factual consistency in LLM-generated outputs.  
            </p>
          </div>
        </div>
      </section>



      {/* RESEARCH */}
     <section className="section" id="research">
  <div className="section-title">
    <span>Research</span>
  </div>

  <div className="research-card">
    <div className="research-top">
      <h2>Ongoing Research (Manuscript in Preparation)</h2>
      <p>2026</p>
    </div>

    <div className="research-content">
      <ul>
        <li>
          <strong>Domain:</strong> AI in Business, Trustworthy AI,
          Hallucination in AI, Generative AI, and Large Language Models
          (LLMs).
        </li>

        <li>
          Developed a benchmark framework for hallucination detection in
          large language models by constructing a structured dataset and a
          systematic evaluation protocol to assess factual consistency in
          LLM-generated outputs.
        </li>

        <li>
          Designed a multi-level annotation scheme and a quantitative
          evaluation pipeline to identify and categorize hallucination
          types.
        </li>

        <li>
          Analyzed how prompting strategies and generation settings
          influence hallucination behavior across multiple domains.
        </li>

        <li>
          <strong>Tools & Methods:</strong> Python (Pandas, NumPy),
          OpenAI GPT-4o mini, data preprocessing & sampling,
          LLM-based text generation, manual annotation,
          quantitative evaluation, Google Colab, VS Code,
          Overleaf, and Google Sheets.
        </li>
      </ul>
    </div>
  </div>

       <div className="research-card">
  <div className="research-top">
    <h2>Real-time Social Distance Estimation using YOLO Convolutional Neural Network and Euclidean Distance.</h2>
    <p>(Undergraduate Thesis) - 2021</p>
  </div>

  <div className="research-content">
    <ul>
      <li>
        Proposed a real-time system to estimate social distancing by
        analyzing video footage from six distinct environments:
        good quality, fuzzy, daylight, nightlight, less populated,
        and crowded scenarios.
      </li>

      <li>
        Implemented person detection using YOLOv3 pretrained on the
        COCO dataset, computed centroids, and applied Euclidean
        distance to measure interpersonal spacing.
      </li>

      <li>
        Achieved 90% tracking accuracy across varied environmental
        conditions, demonstrating robustness in both low-visibility
        and high-density scenarios.
      </li>

      <li>
        Contributed to research on real-time computer vision methods
        for public safety and monitoring applications.
      </li>

      <li>
        <strong>Tech Stack:</strong> Python, OpenCV, YOLOv3,
        COCO Dataset, NumPy.
      </li>

      <li>
        <a
          href="https://drive.google.com/file/d/13Zvm6vAlXyL5QDvMjuy_luiB1LplvvK7/view"
          target="_blank"
          rel="noreferrer"
        >
          CLICK HERE TO READ MY THESIS BOOK →
        </a>
      </li>
    </ul>
  </div>
</div>
      </section>

{/* =========================
        MORE SECTION
========================= */}
<section className="section" id="more">
  <div className="section-title">
    <span>More</span>
  </div>

{/* EDUCATION */}
<div className="research-card" id="education">
  <div className="research-top">
    <h2>Education</h2>
  </div>

  <div className="research-content edu-flex">
    
    {/* LEFT TEXT */}
    <div>
      <h3>B.Sc. in Computer Science & Engineering</h3>
      <p>
        <a href="https://iiuc.ac.bd/web/fse/cse" target="_blank" rel="noreferrer">
          International Islamic University Chittagong
        </a>
      </p>
      <span>
        Autumn 2016 - Spring 2020 | Result Publication Date: 9th September 2021
      </span>
    </div>

    {/* RIGHT SLIDESHOW */}
    <div className="edu-slideshow">
      <img
        src={eduImages[slideIndex]}
        alt="education slideshow"
        className="edu-img"
      />
    </div>

  </div>
</div>





 {/* PROJECTS (EXTENDED VERSION - SAME STYLE AS PORTFOLIO) */}
  <div className="research-card">
    <h2>Projects</h2>

    <ul className="more-list">
      <li>
        <strong>GenAI Cold Email Generator</strong> — RAG-based Cold Email Generator using Llama 3.1, LangChain, ChromaDB, and Streamlit that helps software companies send cold emails to acquire projects by extracting data from their potential clients’ job postings and matching the required skills with their portfolios. 
        <a href="https://github.com/nahianfariha/GenAI-Cold-Email-Generator">Repository</a>
      </li>

      <li>
        <strong>Hallucination Detection Benchmark</strong> — A Benchmark for Hallucination Detection in Large Language Models by constructing a structured dataset and a systematic evaluation protocol to assess factual consistency in LLM-generated outputs.
        <a href="#">Private Repository</a>
      </li>

      <li>
        <strong>Real-Time Social Distance Estimation</strong> — Detects people in real-time videos using YOLOv3 and calculates distances with Euclidean metrics to help monitor safe distancing; completed during the COVID-19 outbreak.
        <a href="https://github.com/nahianfariha/REAL-TIME-SOCIAL-DISTANCE-ESTIMATION-USING-YOLO-CONVOLUTIONAL-NEURAL-NETWORK-AND-EUCLIDEAN-DISTANCE.git">Repository</a>
      </li>

      <li>
        <strong>Movie Recommendation System</strong> — MHelps users discover personalized movie suggestions based on their preferences, built with Python, data preprocessing, vectorization, and Streamlit.
        <a href="https://github.com/nahianfariha/Machine-Learning-and-Ai.git">Repository</a>
      </li>

      <li>
        <strong>Restaurant Profit Estimator</strong> — A predictive analytics project that estimates restaurant profits based on city population data. Built with Python, NumPy, Matplotlib, and Linear Regression implemented from scratch in Jupyter Notebook.
        <a href="https://github.com/nahianfariha/Restaurant-Profit-Estimator-using-Linear-Regression-Model">Repository</a>
      </li>
      <li>
        <strong>Click to see More Projects</strong>
        <a href="https://github.com/nahianfariha/Machine-Learning-and-Ai.git">Repository</a>
      </li>
    </ul>
  </div>


  {/* SKILLS (FULL VERSION LIKE PORTFOLIO) */}
  <div className="research-card">
    <h2>Skills</h2>

    <ul className="more-list">
      <li>
        <strong>Programming Languages:</strong> Python, C, C++, JavaScript
      </li>

      <li>
        <strong>Web Development:</strong> React, Node.js, Tailwind CSS, Bootstrap, HTML5, CSS Grid, Vite, GitHub Pages
      </li>

      <li>
        <strong>Machine Learning & AI:</strong> TensorFlow, OpenCV, Pandas, NumPy, Matplotlib, LangChain, RAG, Streamlit
      </li>

      <li>
        <strong>Database:</strong> PostgreSQL, ChromaDB
      </li>

      <li>
        <strong>Tools:</strong> Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Figma, LaTeX
      </li>

      <li>
        <strong>Others:</strong> UX/UI Design, Responsive Web Design, Adobe Photoshop, Illustrator, Procreate
      </li>
    </ul>
  </div>


  {/* WORK EXPERIENCE */}
  <div className="research-card">
    <h2>Work Experience</h2>

    <ul className="more-list">

      <li>
        <strong>Agent Banking Desk Officer</strong> – Islami Bank Bangladesh PLC  
        <br />
        Sept 2025 - Dec 2025  
        <br />
        Hands-on experience with banking software for account management and financial transactions, ensuring accuracy and compliance. Assisting clients with opening and managing accounts, including savings, current, fixed deposits (TDR), and DPS. Supporting clients in financial product selection to meet their banking needs. Experience in cash management, customer service, and financial advisory.
      </li>

      <li>
        <strong>Founder and Artist</strong> – Dot Pictures Studio  
        <br />
        May 2021 - Present  
        <br />
        Created and sold a variety of customized products including cartoon/customized banners, graphics, illustrations, painted products, paintings, UX/UI designs, and painted tote bags. Managed the entire business process from product design to delivery ensuring customer satisfaction. Handled social media marketing, client communications, and order management.
      </li>

      <li>
        <strong>Web Application Development Trainee</strong> – BASIS Institute of Technology and Management (BITM)  
        <br />
        Feb 2019 – April 2019  
        <br />
        Collaborated in a 4-member team to develop two website projects, applying OOP basics, web fundamentals (HTML, CSS, JavaScript), and database management (MS SQL Server), while gaining hands-on experience with web programming and full software development life cycle.
      </li>

    </ul>
  </div>

  {/* Courses & CERTIFICATIONS */}
  <div className="research-card">
    <h2>Courses & Certifications</h2>

    <ul className="more-list">
      <li>
        Machine Learning Specialization – Coursera
        <a href="https://github.com/nahianfariha/Machine-Learning-and-Ai">Repository</a>
      </li>

      <li>
        Deep Learning Specialization – Coursera
        <a href="https://github.com/nahianfariha/Machine-Learning-and-Ai">Repository</a>
      </li>

      <li>
        Python for Everybody Specialization – Coursera
        <a href="https://github.com/nahianfariha/Python-for-Everybody-All-Codes-5-Courses">Repository</a>
      </li>

      <li>
        Linear Algebra for Machine Learning and Data Science – Coursera
        
      </li>

      <li>
        Google UX Design Specialization – Coursera
        
      </li>

      <li>
        Mastering Data Structures & Algorithms – Udemy
        <a href="https://github.com/nahianfariha/Udemy-Mastering-Data-Structures-Algorithms-Abdul-Bari">Repository</a>
      </li>

      <li>
        Full-Stack Web Development Bootcamp – Dr. Angela Yu
        <a href="https://github.com/nahianfariha/Full-Stack-Web-Development-Bootcamp">Repository</a>
      </li>
    </ul>
  </div>

  {/* VOLUNTEERING & Extracurricular Activities */}
  <div className="research-card">
    <h2>Volunteering & Extracurricular Activities</h2>

    <ul className="more-list">
      <li>Member of IIUC Photography Club</li>
      <li>Member of IIUC Computer Club</li>
      <li>Active volunteer in university and community events, demonstrating teamwork and leadership</li>
      <li><a href="https://nahianfariha.github.io/dotpicturesstudio/" target="_blank" rel="noopener noreferrer">Art Practitioner</a></li>
    </ul>
  </div>
</section>



      {/* FOOTER */}
      <footer className="footer" id="contact">
        <p>
          “CREATION AND PROBLEM-SOLVING BRING ME JOY. THEY’RE AT THE HEART OF
          EVERYTHING I DO.”
        </p>

        <p>
          Contact:
          <a href="mailto:nahianfariha.cs@gmail.com">
            nahianfariha.cs@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;