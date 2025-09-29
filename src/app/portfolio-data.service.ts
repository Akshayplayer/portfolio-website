
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  public name = signal('Akshay Ku Bothra');
  public major = signal('Software engineer and data science enthusiast');
  public contact = signal({
    phone: '91-9521232972',
    email: 'akshayku.bothra@gmail.com',
    linkedin: 'https://www.linkedin.com/in/akshay-ku-bothra-1136861bb/',
    github: 'https://github.com/Akshayplayer',
    leetcode: 'https://leetcode.com/u/user3885IN/',
    codeforces: 'https://codeforces.com/profile/akshayku.bothra',
    codechef: 'https://www.codechef.com/users/akshaykubothra',
    Pinterest: 'https://pin.it/63HCPFTOe',
    Instagram: 'https://www.instagram.com/akshay_jain_2000/?next=%2F'


  });

  public aboutText = signal(`A highly motivated and results-oriented Software Engineer with a passion for building robust and scalable applications. Proficient in a wide range of technologies, including Angular, ASP.NET Core, and various data science libraries. Eager to contribute to a challenging and innovative environment.`);

  public education = signal({
    institution: 'Indian Institute of Technology, Kharagpur',
    degree: 'B.Tech in Civil Engineering',
    cgpa: '8.11',
    duration: 'Dec 2020 - May 2025',
    location: 'Kharagpur, India'
  });

  public experience = signal([
    {
      role: 'Full Stack Trainee Engineer',
      company: 'Cambridge Technology Enterprises',
      domain: 'cambridgetech.com',
      location: 'Hyderabad',
      date: 'June 2025 - Present',
      details: [
        'Built a resource tracker with Angular and Kendo UI, featuring role-based dashboards, grids, charts and spreadsheets for audits',
        'Developed ASP.NET Core (C#) backend with 3-tier architecture, JWT auth, role-based access, Serilog logging, and error handling',
        'Optimized SQL Server schema with normalized tables, stored procedures and TVPs, enabling fast dropdowns, and Excel/CSV bulk imports',
        'Deployed apps on Vercel (frontend) and Azure App Service + SQL DB, with technical docs ensuring seamless handover and maintenance'
      ]
    },
    {
      role: 'Software Engineering Intern',
      company: 'Renergy Technologies',
      domain: 'renergytechnologies.com',
      location: 'Remote',
      date: 'May 2024 - July 2024',
      details: [
        'Automated website testing by scripting in Playwright framework, validated 200+ UI components, and ensured website’s functionality',
        'Engineered data extraction and comparison script using Lodash and Node.js, achieved 98% accuracy in verifying critical web elements',
        'Boosted testing efficiency by 80% by refined testing framework with custom file operations, timeout adjustments, and error handling'
      ]
    },
    {
      role: 'Data Science Intern',
      company: 'Hindalco Industries Limited',
      domain: 'hindalco.com',
      location: 'Mumbai',
      date: 'Feb 2024 - May 2024',
      details: [
        'Developed a predictive maintenance model to optimize machine efficiency and minimize downtime in window manufacturing process',
        'Executed advanced EDA on 27 features using Pandas/Plotly, generated actionable insights to optimize 100+ CNC machines',
        'Implemented 7-day backward fill for failure labels, created a predictive window that improved the model’s real-world maintenance use',
        'Leveraged XGBoost and CatBoost, achieved 93.28% accuracy with hyperparameter fine-tuning with ensured consistent performance'
      ]
    },
    {
      role: 'Data Science Intern',
      company: 'IIM Bangalore',
      domain: 'iimb.ac.in',
      location: 'Remote',
      date: 'Dec 2023 - Jan 2024',
      details: [
        'Preprocessed abstract dataset using NLTK, resolved 95% of data issues, and created a RoBERTa-based Q/A model with HuggingFace',
        'Utilized TextBlob for sentiment analysis and Pytrends for trend analysis, generated insights on search trends across 29 Indian states',
        'Produced a highly accurate Q/A model with improved Cosine Similarity to 0.7, contributed to high-quality and impactful patent'
      ]
    }
  ]);

  public publications = signal([
    {
      event: 'CTRG 2025 | IIT Guwahati',
      title: 'Analysis and Modelling of Road Crash Injuries for Different Road Categories and Environments: a Case Study of West Bengal, India.',
      authors: 'Bothra A. K., Pramanik S., Ganguly S., & Maitra B. (2025).',
      notes: 'Accepted for presentation at 8th CTRG 2025, IIT Guwahati; to be published in Scopus Indexed Proceedings.'
    }
  ]);

  public competitions = signal([
    {
      name: 'Smart India Hackathon 2023',
      track: 'Ministry Of Coal',
      award: 'National Finalist',
      date: 'Oct 2023 - Dec 2023',
      description: 'Designed a telematics solution for vehicles with ECU, a cloud server, and a dashboard, resulted in fleet optimization and cost reduction. Transformed sensor data into InfluxDB database and crafted Grafana dashboards, enhanced real-time monitoring efficiency by 40%. Ranked among the top 5 nationwide out of 100+ teams, for the SIH’23 finale held at the National Institute of Engineering, Mysore'
    }
  ]);

  public projects = signal([
    {
      name: 'Master’s Thesis Project',
      guide: 'Prof. Mrigank Sharad, IIT Kharagpur',
      date: 'Aug 2024 - April 2025',
      details: [
        'Led development of an Edtech platform for seamless student-teacher interaction, leveraging React, FastAPI, and MongoDB stack',
        'Engineered clustering mechanism using BERTopic to group semantically similar queries, enhanced response efficiency by 30%',
        'Merged 85% of student queries using NLP with scikit-learn and integrated an OpenCV-based automated attendance tracking system',
        'Programmed computer vision based real-time system (OpenCV, EasyOCR) for MCQ detection from answer sheets in 40+ students class'
      ]
    }
  ]);

  public skills = signal({
    languages: 'Python | C++ | SQL | C# | Java',
    development: 'HTML | CSS | Javascript | Angular | ASP.NET Core',
    data: 'Seaborn | Matplotlib | Numpy | scikit-learn | Excel | Azure | Git | Github | TensorFlow | Keras | OpenCV | NLTK | Pytorch | Statsmodels | Docker | Grafana | FastAPI | Flask'
  });

  public courses = signal([
    'Programming, Data Structure and Algorithms',
    'Statistics for AI-ML',
    'Probability and Statistics',
    'Linear Algebra',
    'Machine Learning using Python',
    'Data Analysis with Python',
    'Artificial Intelligence Foundations and Applications',
    'Improving Deep Neural Network',
    'Neural Network and Deep Learning'
  ]);

  public profiles = signal([
    {
      name: 'GitHub',
      url: this.contact().github,
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: this.contact().linkedin,
      icon: 'fab fa-linkedin'
    },
    {
      name: 'LeetCode',
      url: this.contact().leetcode,
      icon: 'fas fa-code'
    },
    {
      name: 'Codeforces',
      url: this.contact().codeforces,
      icon: 'fas fa-laptop-code'
    },
    {
      name: 'CodeChef',
      url: this.contact().Instagram,
      icon: 'fa-brands fa-instagram'
    },
    {
      name: 'CodeChef',
      url: this.contact().Pinterest,
      icon: 'fa-brands fa-pinterest'
    }
  ]);
}
