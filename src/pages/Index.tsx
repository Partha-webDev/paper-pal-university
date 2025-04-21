
import Navbar from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { PaperCard } from "@/components/PaperCard";
import Footer from "@/components/Footer";
import { useState } from "react";

// Demo data (would be fetched in real app)
const demoPapers = [
  {
    title: "BSc Computer Science - 2023 End Sem 2",
    subject: "Computer Science",
    year: "2023",
    semester: "2",
    downloadUrl: "#",
  },
  {
    title: "BSc Physics - 2022 Mid Sem 4",
    subject: "Physics",
    year: "2022",
    semester: "4",
    downloadUrl: "#",
  },
  {
    title: "BSc Mathematics - 2021 End Sem 1",
    subject: "Mathematics",
    year: "2021",
    semester: "1",
    downloadUrl: "#",
  },
];

const Index = () => {
  const [papers, setPapers] = useState(demoPapers);

  // super simple search/filter (to demo UI)
  function handleSearch(query: string, filters: { subject: string, year: string, semester: string }) {
    let filtered = demoPapers.filter(paper => {
      const matchQuery =
        query === "" ||
        paper.title.toLowerCase().includes(query.toLowerCase()) ||
        paper.subject.toLowerCase().includes(query.toLowerCase());
      const matchSubject = !filters.subject || paper.subject === filters.subject;
      const matchYear = !filters.year || paper.year === filters.year;
      const matchSemester = !filters.semester || paper.semester === filters.semester;
      return matchQuery && matchSubject && matchYear && matchSemester;
    });
    setPapers(filtered);
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center px-2">
        <section className="w-full max-w-4xl mt-10 mb-2">
          <h1 className="text-3xl font-bold text-accent mb-2 text-center">Find Past Year Question Papers</h1>
          <p className="text-text-secondary mb-6 text-center">
            Search and browse previous year university question papers – fast, easy, and free!
          </p>
          <SearchBar onSearch={handleSearch} />
        </section>
        <section className="w-full max-w-2xl flex flex-col">
          {papers.length === 0 ? (
            <div className="text-center text-text-muted py-10">No papers found. Try different filters.</div>
          ) : (
            papers.map(paper => (
              <PaperCard key={paper.title} {...paper} />
            ))
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
