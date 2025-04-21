
type PaperCardProps = {
  title: string;
  subject: string;
  year: string;
  semester: string;
  downloadUrl?: string;
};

export function PaperCard({ title, subject, year, semester, downloadUrl }: PaperCardProps) {
  return (
    <div className="card p-4 flex flex-col gap-2 mb-4 hover:shadow-lg transition group">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <span className="text-accent text-xs font-bold bg-accent/10 px-2 py-1 rounded-md select-none">
          {year} Sem {semester}
        </span>
      </div>
      <div className="flex items-center gap-4 text-text-secondary text-sm">
        <span>Subject: {subject}</span>
      </div>
      <div>
        <a
          href={downloadUrl || "#"}
          target="_blank"
          className="button-glow inline-block bg-accent text-[#1a1a1a] font-medium px-3 py-1.5 mt-1 rounded-lg text-sm shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent transition"
          download
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
