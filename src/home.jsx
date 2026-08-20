import React, { useState, useEffect } from "react";
import "./App.css";

import NF from "./images/nf01.jpg";

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
  const [newsIndex, setNewsIndex] = useState(0);

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
  },
];

  // ✅ NEWS BOX ROTATION (2s), no repetition — cycles through newsItems one at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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



      {/* HERO */}
      <section className="hero" id="about">
        <div className="hero-top">
          <div className="hero-text">
            <div className="name-row">
              <h1>
                Nahian <span>Fariha</span>
              </h1>
            </div>

            <p className="bio">
              I am a CSE graduate interested in pursuing research on {" "}
              <strong>trustworthy AI</strong> that can be relied upon in real-world settings.
            </p>

            <p className="bio">
              Recently, I worked on <strong>hallucination detection</strong> in <strong>LLM</strong>-generated product reviews, which deepened my interest in <strong>trustworthy AI</strong>. For my next work, I am interested in extending this research toward <strong>explainability and multimodal AI</strong>. In the longer term, I hope to <strong> build trustworthy AI systems that can operate reliably in real-world settings.</strong> 
              I am currently collaborating with professors from my undergraduate university and applying to grad school to further pursue my research.
            </p>

            <p className="bio"> Outside research, I am an artist. I founded and ran my own art
              business,{" "}
              <a
                className="studio-link"
                href="https://nahianfariha.github.io/dotpicturesstudio/"
                target="_blank"
                rel="noreferrer"
              >
                Dot Pictures Studio
              </a>
              . I enjoy photography, nature, quiet time, instrumental music, and
              exploring people doing different hobbies and activities.
            </p>

            <ul className="research-tags">
              <li>Trustworthy AI</li>
              <li>Explainable AI </li>
              <li>Hallucination Detection</li>
              <li>LLMs</li>
              <li>Multimodal AI</li>
              <li>NLP</li>
              <li>Computer Vision</li>
              <li>Deep Learning</li>
              <li>Generative AI</li>
            </ul>
          </div>

          <div className="profile-block">
            <img src={NF} alt="Nahian Fariha" className="profile-img" />

            <div className="profile-social">
              <a
                href="https://linkedin.com/in/nahian-fariha"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://scholar.google.com/citations?hl=en&user=o_MFW1EAAAAJ&view_op=list_works&authuser=1&gmla=AIqSsVtwEeR_XyGEHSTpwJJpSktz2NQbhl9FgoON_boTKovWXtoP1ZdfP2W9BFio-e6Aq0yq815QUR4t_ILsFKzH"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Scholar"
                title="Google Scholar"
              >
                Scholar
              </a>

              <a
                href="https://github.com/NahianFariha"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                Github
              </a>

              <a
                href="mailto:nahianfariha.cs@gmail.com"
                aria-label="Email"
                title="Email"
              >
                Email
              </a>
            </div>

            <span className="availability-text">Open to Research Collaborations</span>

            <a
              href="https://drive.google.com/file/d/1BClLgyUMLVXHXgAdiNUX2rDImAmgxsZS/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="profile-cv-link"
            >
              Download CV
            </a>

      
            <a
              className="news-box"
              href={newsItems[newsIndex].link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="news-box-label">News</span>
              {newsItems[newsIndex].img && (
                <img
                  src={newsItems[newsIndex].img}
                  alt=""
                  className="news-box-img"
                />
              )}
              <p className="news-box-text">{newsItems[newsIndex].text}</p>
            </a>
          </div>
        </div>

          {/* RESEARCH (merged: box heading is now "Research", with "Current Research"
              label + manuscript summary + key points + tools, pulled in from the old
              standalone Research section) */}
          <div className="current-research" id="research">
            <h3>Research</h3>

            <span className="current-research-label">Current Research</span>

            <p>
              (Manuscript) <strong>ShopHallu: A Benchmark Dataset and
              Evaluation Framework for Detecting Hallucination in
              LLM-Generated Influencer-Style Product Reviews.</strong>
              <br />
              Domain: Trustworthy AI, Hallucination Detection and
              Mitigation, Generative AI, LLMs, AI in Business.
            </p>

            <ul className="current-research-content">
              <li>
                Built ShopHallu, a 22,275-pair benchmark dataset for detecting
                hallucination in LLM-generated product reviews, using 3 LLMs
                across 3 prompting strategies and 5 temperature settings.
              </li>

              <li>
                Designed a rule-guided annotation framework (SBERT similarity +
                lexical cues) achieving 89.0% inter-annotator agreement
                (Cohen's κ = 0.83) across a 3-class hallucination taxonomy.
              </li>

              <li>
                Found persuasive prompting nearly doubled hallucination rates
                vs. strict prompting (75.49% vs. 34.74%, p &lt; 0.001),
                validated via cluster-aware statistical modeling.
              </li>

              <li>
                <strong>Tools & Methods:</strong> Python (Pandas, SciPy,
                Statsmodels, Sentence-Transformers), LLM Models (GPT-4o-mini/Gemini
                Flash/Llama-8b-instruct), GEE analysis, Google Colab.
              </li>
            </ul>

            <div className="collaborators">
              <span className="collaborators-label">Authors:</span>
              <a >
                Nahian Fariha
              </a>
              <span className="collaborators-label"></span>
              <a href="https://scholar.google.com/citations?user=Z2Rm0MwAAAAJ&hl=en" target="_blank" rel="noreferrer">
                Farzana Tasnim
              </a>
              <a href="https://orcid.org/0000-0001-9925-3363" target="_blank" rel="noreferrer">
                Lutfun Nahar
              </a>
            </div>
          </div>
      </section>

{/* THESIS / PROJECTS */}
<section className="section">
  <div className="research-card projects-card">
    <h2>Thesis/Project</h2>

    <div className="project-grid">
      <div className="project-card">
        <h3>
          Real-time Social Distance Estimation using YOLO Convolutional
          Neural Network and Euclidean Distance (Undergraduate Thesis)
        </h3>
        <p>
          Proposed a real-time system to estimate social distancing by
          analyzing video footage across six distinct environments (good
          quality, fuzzy, daylight, nightlight, less populated, and
          crowded), using YOLOv3 person detection and Euclidean distance
          between centroids — achieving 90% tracking accuracy across
          varied conditions.
        </p>
        <span className="project-stack">
          Python · OpenCV · YOLOv3 · COCO Dataset · NumPy
        </span>
        <a
          href="https://drive.google.com/file/d/13Zvm6vAlXyL5QDvMjuy_luiB1LplvvK7/view"
          target="_blank"
          rel="noreferrer"
        >
          CLICK HERE TO READ MY THESIS BOOK →
        </a>
      </div>

      <div className="project-card">
        <h3>GenAI Cold Email Generator</h3>
        <p>
          Helps software agencies pitch faster — extracts requirements
          straight from a client's job posting and drafts a cold email that
          matches the right portfolio pieces to those requirements
          automatically.
        </p>
        <span className="project-stack">
          Llama 3.1 · LangChain · ChromaDB · Streamlit
        </span>
        <a
          href="https://github.com/nahianfariha/GenAI-Cold-Email-Generator.git"
          target="_blank"
          rel="noreferrer"
        >
          View repository →
        </a>
      </div>

      <div className="project-card">
        <h3>Bengali Medical Chatbot</h3>
        <p>
          Answers Bengali-language patient queries in a doctor-style voice —
          fine-tuned to stay grounded and empathetic instead of generic,
          trained efficiently on limited GPU resources.
        </p>
        <span className="project-stack">
          QLoRA · Qwen2.5-3B · PyTorch · Hugging Face Transformers · PEFT
        </span>
        <a
          href="https://github.com/nahianfariha/bengali-medical-chatbot.git"
          target="_blank"
          rel="noreferrer"
        >
          View repository →
        </a>
      </div>

      <div className="project-card">
        <h3>Hallucination Detection Benchmark</h3>
        <p>
          Distinguishes fabricated or contradictory claims from persuasive
          but honest language in LLM-generated text, via a structured
          dataset and evaluation protocol for factual consistency.
        </p>
        <span className="project-stack">Python · Evaluation Framework</span>
        <span className="project-private">Private repository</span>
      </div>

      <div className="project-card">
        <h3>Real-Time Social Distance Estimation</h3>
        <p>
          Detects people in live video and flags unsafe proximity in real
          time, built to help monitor safe distancing during the COVID-19
          outbreak.
        </p>
        <span className="project-stack">
          YOLOv3 · OpenCV · COCO Dataset · NumPy
        </span>
        <a
          href="https://github.com/nahianfariha/REAL-TIME-SOCIAL-DISTANCE-ESTIMATION-USING-YOLO-CONVOLUTIONAL-NEURAL-NETWORK-AND-EUCLIDEAN-DISTANCE.git"
          target="_blank"
          rel="noreferrer"
        >
          View repository →
        </a>
      </div>

      <div className="project-card">
        <h3>Movie Recommendation System</h3>
        <p>
          Helps users discover personalized movie picks based on their
          preferences, using content-based filtering over a preprocessed
          and vectorized dataset.
        </p>
        <span className="project-stack">
          Python · Data Preprocessing · Streamlit
        </span>
        <a
          href="https://github.com/nahianfariha/Machine-Learning-and-Ai.git"
          target="_blank"
          rel="noreferrer"
        >
          View repository →
        </a>
      </div>

      <div className="project-card">
        <h3>Restaurant Profit Estimator</h3>
        <p>
          Predicts expected restaurant profit from city population data,
          using a linear regression model implemented from scratch to
          learn the underlying mechanics.
        </p>
        <span className="project-stack">
          Python · NumPy · Matplotlib · Linear Regression
        </span>
        <a
          href="https://github.com/nahianfariha/Restaurant-Profit-Estimator-using-Linear-Regression-Model"
          target="_blank"
          rel="noreferrer"
        >
          View repository →
        </a>
      </div>
    </div>

    <a
      className="more-projects-link"
      href="https://github.com/nahianfariha/Machine-Learning-and-Ai.git"
      target="_blank"
      rel="noreferrer"
    >
      See more projects →
    </a>
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
        Autumn 2016 - Spring 2020 | Result Publication Date: 5th September 2021
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