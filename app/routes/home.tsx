import { resumes } from "constants/index";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";

// It is the Meta Data setup for the index.html for for SEO Purpose
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reshunt" },
    { name: "description", content: "It is the AI Powered Resumed Analyzer" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('./images/bg-main.svg')] bg-cover">
      <Navbar/>

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review Your submissions and check AI-powered feeddack</h2>
        </div>


      {
        resumes.length >0 && (
          <div className="resumes-section">
            {resumes.map((resume) => {
              return (
                <div>
            <ResumeCard key={resume.id} resume={resume}/>
              </div>
        )
      }
      
    )
    
  }



          </div>
        )
      }

      </section>
      

    </main>
  )
  
  
};
