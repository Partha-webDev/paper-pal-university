
import { useState } from "react";
import { Search, Filter } from "lucide-react";

const subjects = ["Mathematics", "Physics", "Computer Science", "Chemistry", "Biology"];
const years = ["2024", "2023", "2022", "2021"];
const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

export function SearchBar({ onSearch }: { onSearch?: (query: string, filters: { subject: string, year: string, semester: string }) => void }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, { subject, year, semester });
    }
  }

  return (
    <form
      className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-4 w-full max-w-3xl mx-auto py-6 px-2"
      onSubmit={handleSubmit}
      id="search-bar"
      autoComplete="off"
    >
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-accent pointer-events-none">
          <Search size={18} />
        </span>
        <input
          className="w-full pl-9 pr-3 py-2 bg-[#232323] text-white rounded-lg outline-none transition duration-100 focus:ring-2 focus:ring-accent placeholder:text-text-secondary font-medium"
          placeholder="Search papers, subjects, topics..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Search by keyword"
        />
      </div>
      <div className="flex gap-2">
        <select
          className="bg-[#232323] text-text-secondary px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-accent transition"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          aria-label="Filter by subject"
        >
          <option value="">Subject</option>
          {subjects.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          className="bg-[#232323] text-text-secondary px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-accent transition"
          value={year}
          onChange={e => setYear(e.target.value)}
          aria-label="Filter by year"
        >
          <option value="">Year</option>
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <select
          className="bg-[#232323] text-text-secondary px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-accent transition"
          value={semester}
          onChange={e => setSemester(e.target.value)}
          aria-label="Filter by semester"
        >
          <option value="">Semester</option>
          {semesters.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="button-glow min-w-[48px] flex items-center gap-1 bg-accent text-[#1a1a1a] font-bold px-4 py-2 rounded-lg shadow focus:ring-2 focus:ring-accent animate-scale-pop hover:brightness-105"
        aria-label="Search"
      >
        <Filter size={18} />
        Search
      </button>
    </form>
  );
}
