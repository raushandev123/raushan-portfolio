"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  { id: "upload", svc: "S3", text: "Client PDF or scanned image lands in S3" },
  { id: "stream", svc: "Lambda", text: "DynamoDB Stream triggers the ingestion function" },
  { id: "ocr", svc: "OCR", text: "Layout-aware extraction turns pages into structured text" },
  { id: "embed", svc: "Embeddings", text: "Chunks are embedded and synced to the search index" },
  { id: "retrieve", svc: "Vector search", text: "Top passages are retrieved and semantically reranked" },
  { id: "answer", svc: "Claude / Gemini", text: "The model writes an answer grounded in those passages" },
];

const STEP_MS = 800;

export default function Trace() {
  const [current, setCurrent] = useState(-1); // -1 idle, steps.length = done
  const timers = useRef([]);

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  const run = () => {
    clear();
    setCurrent(0);
    steps.forEach((_, i) => {
      timers.current.push(setTimeout(() => setCurrent(i + 1), STEP_MS * (i + 1)));
    });
  };

  useEffect(() => {
    const start = setTimeout(run, 900);
    return () => { clearTimeout(start); clear(); };
  }, []);

  const done = current === steps.length;
  const running = current >= 0 && !done;
  const pct = current < 0 ? 0 : (current / steps.length) * 100;

  return (
    <div className="trace" aria-label="Example RAG pipeline run">
      <div className="trace-head">
        <span className="trace-title"><i /><i /><i /> rag-pipeline</span>
        <span className={`status ${done ? "ok" : running ? "run" : ""}`}>
          {done ? "Completed" : running ? "Running" : "Idle"}
        </span>
        <button onClick={run} disabled={running}>{done ? "Run again" : running ? "Running…" : "Run pipeline"}</button>
      </div>

      <div className="bar"><div style={{ width: `${pct}%` }} /></div>

      <ol className="flow">
        {steps.map((s, i) => {
          const state = i < current ? "done" : i === current ? "active" : "wait";
          return (
            <li key={s.id} className={state}>
              <span className="dot" aria-hidden="true">
                {state === "done" ? "✓" : state === "active" ? <em /> : ""}
              </span>
              <div>
                <p className="svc">{s.svc}</p>
                <p className="txt">{s.text}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className={`answer${done ? " show" : ""}`}>
        <p className="a-label">Sample answer</p>
        <p className="a-text">The agreement requires 60 days’ written notice before termination.</p>
        <p className="a-src"><span>contract.pdf · p.4</span><span>terms.pdf · p.2</span></p>
      </div>
    </div>
  );
}