
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Mail } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    college: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // For now, we just show a toast. Backend submission would need Supabase integration.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Fake delay to simulate message sending
    setTimeout(() => {
      toast.success("Message sent! We'll reach out soon.");
      setForm({ name: "", email: "", message: "", college: "" });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="flex flex-col items-center min-h-[60vh] py-8 px-3">
      <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-2 flex items-center gap-2">
        <Mail className="text-accent" /> Contact Us
      </h2>
      <p className="text-text-secondary max-w-lg mb-8 text-center">
        Have a question, suggestion, or want a paper added? Reach out below and our team will get in touch quickly!
      </p>
      <form
        className="bg-navbar shadow-card rounded-xl px-6 py-6 w-full max-w-md flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-text-muted mb-1 font-semibold" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block text-text-muted mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block text-text-muted mb-1 font-semibold" htmlFor="college">
            College Name
          </label>
          <Input
            id="college"
            name="college"
            required
            placeholder="Your College"
            value={form.college}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>
        <div>
          <label className="block text-text-muted mb-1 font-semibold" htmlFor="message">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          className="button-glow w-full font-bold"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
