"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { Loader2, Send } from "lucide-react";
import Button from "@/components/ui/Button";

const initialForm = { name: "", email: "", phone: "", message: "" };

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      toast.success("Message sent! I'll get back to you soon.", {
        position: "bottom-right",
        theme: "colored",
      });
      setForm(initialForm);
      setStatus("idle");
    } catch (error) {
      toast.error(error.message || "Failed to send message.", {
        position: "bottom-right",
        theme: "colored",
      });
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="rounded-xl border border-white/10 bg-navy-950/40 px-4 py-2.5 text-sm text-frost-50 placeholder:text-sky-100/40 focus:border-steel-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="rounded-xl border border-white/10 bg-navy-950/40 px-4 py-2.5 text-sm text-frost-50 placeholder:text-sky-100/40 focus:border-steel-500 focus:outline-none"
        />
      </div>
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Your phone number (optional)"
        className="rounded-xl border border-white/10 bg-navy-950/40 px-4 py-2.5 text-sm text-frost-50 placeholder:text-sky-100/40 focus:border-steel-500 focus:outline-none"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
        required
        rows={4}
        className="resize-none rounded-xl border border-white/10 bg-navy-950/40 px-4 py-2.5 text-sm text-frost-50 placeholder:text-sky-100/40 focus:border-steel-500 focus:outline-none"
      />
      <Button type="submit" disabled={status === "loading"} className="self-start">
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
