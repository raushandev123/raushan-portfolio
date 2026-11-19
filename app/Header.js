"use client";
import { useEffect, useState } from "react";

const links = [
  ["focus", "What I do"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];

export default function Header({ resume, email }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrolled(h.scrollTop > 8);
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap site-nav-in">
        <a href="#top" className="logo" onClick={() => setOpen(false)}><span>RK</span>Raushan Kumar</a>

        <nav className="menu" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : ""} aria-current={active === id ? "true" : undefined}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn ghost sm hide-sm" href={`mailto:${email}`}>Hire me</a>
          <a className="btn sm hide-sm" href={resume} download>Download CV</a>
          <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div id="drawer" className={`drawer${open ? " show" : ""}`}>
        <nav aria-label="Mobile">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : ""} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="drawer-cta">
          <a className="btn" href={resume} download onClick={() => setOpen(false)}>Download CV</a>
          <a className="btn ghost" href={`mailto:${email}`} onClick={() => setOpen(false)}>Hire me</a>
        </div>
      </div>

      <div className="progress" style={{ width: `${progress}%` }} />
    </header>
  );
}