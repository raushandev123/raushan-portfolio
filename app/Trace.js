"use client";
import { useState } from "react";

const steps = [
  ["upload", "Client PDF / scanned image lands in S3"],
  ["stream", "DynamoDB Stream triggers Lambda ingestion"],
  ["ocr", "OCR + layout-aware extraction to structured text"],
  ["embed", "Chunks embedded and synced to the search index"],
  ["retrieve", "Vector search + semantic reranking"],
  ["answer", "Claude / Gemini returns a grounded answer with sources"],
];

export default function Trace() {
  const [n, setN] = useState(0);
  const run = () => {
    setN(0);
    steps.forEach((_, i) => setTimeout(() => setN(i + 1), 500 * (i + 1)));
  };
  return (
    <div className="trace">
      <div className="trace-head">
        <span><i /><i /><i /> rag-pipeline / run</span>
        <button onClick={run}>{n === 0 ? "Run pipeline" : "Run again"}</button>
      </div>
      <ol>
        {steps.slice(0, n).map(([t, m]) => (<li key={t}><b>{t}</b>{m}</li>))}
        {n === 0 && <li className="idle">Press “Run pipeline” to watch a document go from upload to grounded answer.</li>}
      </ol>
    </div>
  );
}
