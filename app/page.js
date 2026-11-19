import Trace from "./Trace";

const EMAIL = "raushnk09052000@gmail.com";
const LINKEDIN = "https://linkedin.com/in/raushan-kumara6121917a";
const RESUME = "/Raushan_Kumar_Senior_Full_Stack_AI_Engineer.pdf";
const PHONE = "+919354776703";
const PHONE_TEXT = "+91 93547 76703";
const stats = [["4+", "years in software"], ["5+", "engineers led"], ["80%+", "test coverage in CI"], ["US · UK · HK", "client regions"]];

const focus = [
  ["Production RAG", "LangChain pipelines over Claude, Gemini and OpenAI with vector search, semantic reranking and prompt templates for grounded answers on large document sets."],
  ["Document AI", "OCR and layout-aware extraction for PDFs and scans that replaces manual data entry with structured output."],
  ["LLM evaluation", "Benchmarking models, prompts and retrieval against labeled datasets to cut hallucinations and token cost."],
  ["AWS serverless", "AppSync, Lambda, DynamoDB, Cognito, S3 and CloudFront, with event-driven ingestion and single-table design."],
];

const projects = [
  { name: "InboxAccel", tag: "Email agent", url: "https://app.inboxaccel.com/",
    text: "RAG-based email agent that reads context from your mail, drafts replies and tracks whether each email was seen and whether a draft was prepared.",
    stack: ["RAG", "LLM", "Email tracking", "Draft generation"] },
  { name: "Power Pairs Assessment", tag: "Assessment + reports", url: "https://assessment.power-pairs.com/",
    text: "Takes a person’s assessment answers, generates their power pairs and produces a written report from the results.",
    stack: ["Assessment engine", "Report generation", "LLM"] },
  { name: "Halluseer", tag: "Voice agent", url: "https://halluseer.online/",
    text: "Voice agent that transcribes call audio, finds the sensitive parts of the conversation and turns them into a transcript report.",
    stack: ["Voice AI", "Speech-to-text", "Sensitive-content detection", "Reports"] },
  { name: "Wivy Coder", tag: "Prompt-to-app builder", url: null,
    text: "A Lovable-style app builder. Describe an app in a prompt, Anthropic’s Claude generates the code, and the app is deployed for you.",
    stack: ["Claude API", "Code generation", "Auto deploy"] },
];

const live = ["growth99.com", "remotehunter.com", "dfxonepro.com", "tejyug.com", "app.inboxaccel.com", "nextias.com", "app.pharmaforceiq.com"];

const trending = [
  ["Multi-agent workflows", "Planner, researcher and reviewer agents that split a task, call tools and check each other’s output."],
  ["MCP tool servers", "Model Context Protocol servers that give Claude and other assistants safe access to company data and APIs."],
  ["AI customer-support copilot", "Retrieval over help docs plus live order or account lookups, with human approval for sensitive actions."],
  ["LLM evaluation dashboard", "Track answer quality, hallucination rate and token cost across prompts and models."],
];

const jobs = [
  { role: "Team Lead & Senior AI / Full Stack Engineer", co: "Odz Services · Remote", when: "Jan 2024 – Present",
    pts: ["Lead AI engineering for enterprise SaaS, shipping LLM features into live products.",
      "Built RAG pipelines with LangChain over Claude and Gemini, using vector search and semantic reranking.",
      "Designed OCR document pipelines that turn PDFs and scans into structured data.",
      "Trained document and image classifiers with TensorFlow and Scikit-Learn.",
      "Architected the AWS serverless platform: AppSync, Lambda, DynamoDB, S3, CloudFront, Route 53.",
      "Built event-driven ingestion with DynamoDB Streams and Lambda for embeddings and index sync.",
      "Secured multi-tenant auth with Cognito user pools, MFA and IAM role mapping.",
      "Raised test coverage above 80% with Jest and Cypress in CI; mentor 5+ remote engineers."] },
  { role: "Full Stack Engineer", co: "Web mingo · Remote", when: "Oct 2022 – Jan 2024",
    pts: ["Added AI automation for document processing and workflows.",
      "Built enterprise apps with React, Redux, Next.js, Node.js and Python for UK insurance clients.",
      "Migrated monoliths to AWS serverless (Lambda, API Gateway, DynamoDB, S3), lowering infra cost.",
      "Integrated Guidewire ClaimCenter and PolicyCenter with GDPR-aware data handling.",
      "Built Python, NumPy and Pandas analytics pipelines; wrote Jest and Cypress suites in GitHub Actions."] },
];

const skills = [
  ["AI & LLM", ["LangChain", "RAG", "Claude", "OpenAI", "Gemini", "Embeddings", "Vector DBs", "Semantic Search", "AI Agents", "Guardrails", "Evaluation"]],
  ["ML & Vision", ["TensorFlow", "Scikit-Learn", "OCR", "PDF extraction", "Image classification", "NumPy", "Pandas"]],
  ["AWS", ["AppSync", "Lambda", "DynamoDB", "Streams", "Cognito", "S3", "CloudFront", "Bedrock", "SQS", "SNS", "CloudWatch"]],
  ["Backend", ["Python", "FastAPI", "Flask", "Django", "Node.js", "NestJS", "Express", "Fastify", "GraphQL", "REST"]],
  ["Frontend", ["React", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "React Query"]],
  ["Data", ["DynamoDB", "PostgreSQL", "MySQL", "MongoDB", "Redis"]],
  ["Testing & DevOps", ["Jest", "Cypress", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Azure"]],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="logo"><span>RK</span>Raushan Kumar</a>
          <nav>
            <a href="#focus">What I do</a><a href="#projects">Projects</a><a href="#experience">Experience</a>
            <a href="#skills">Skills</a><a href="#resume">Resume</a><a href="#contact">Contact</a>
          </nav>
          <a className="btn sm" href={RESUME} download>Download CV</a>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div>
            <p className="badge"><i /> Open to senior AI / LLM roles</p>
            <h1>Senior AI engineer who ships LLM products to production.</h1>
            <p className="lead">I build RAG pipelines, document intelligence and AWS serverless platforms for clients in the US, UK and Hong Kong, and lead the team that delivers them.</p>
            <div className="cta">
              <a className="btn" href={RESUME} download>Download resume</a>
              <a className="btn ghost" href={`mailto:${EMAIL}`}>Hire me</a>
            </div>
          </div>
          <Trace />
        </section>

        <div className="wrap">
          <dl className="stats">
            {stats.map(([a, b]) => (<div key={b}><dt>{a}</dt><dd>{b}</dd></div>))}
          </dl>
        </div>

        <section id="focus" className="wrap">
          <h2>What I build</h2>
          <div className="grid4">
            {focus.map(([a, b]) => (<article key={a}><h3>{a}</h3><p>{b}</p></article>))}
          </div>
        </section>

        <section id="projects" className="wrap">
          <h2>Projects I’ve built</h2>
          <div className="projgrid">
            {projects.map((p) => (
              <article key={p.name} className="proj">
                <p className="tag">{p.tag}</p>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul className="chips">{p.stack.map((x) => <li key={x}>{x}</li>)}</ul>
                {p.url && <a className="visit" href={p.url} target="_blank" rel="noreferrer">Visit {p.url.replace("https://", "").replace(/\/$/, "")}</a>}
              </article>
            ))}
          </div>

          <h3 className="sub">Live products I’ve worked on</h3>
          <ul className="chips live">
            {live.map((d) => (<li key={d}><a href={`https://${d}`} target="_blank" rel="noreferrer">{d}</a></li>))}
          </ul>

          <h3 className="sub">In-demand AI builds I’m exploring</h3>
          <div className="grid4">
            {trending.map(([a, b]) => (<article key={a}><h3>{a}</h3><p>{b}</p></article>))}
          </div>
        </section>

        <section id="experience" className="wrap">
          <h2>Experience</h2>
          <div className="timeline">
            {jobs.map((j) => (
              <div className="job" key={j.role}>
                <div className="job-top"><h3>{j.role}</h3><span className="when">{j.when}</span></div>
                <p className="co">{j.co}</p>
                <ul>{j.pts.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="edu"><b>B.Tech</b>, Bhagalpur College of Engineering, Bihar (2023). College topper.</p>
        </section>

        <section id="skills" className="wrap">
          <h2>Skills</h2>
          <div className="skillgrid">
            {skills.map(([g, list]) => (
              <div key={g}><h3>{g}</h3><ul>{list.map((s) => <li key={s}>{s}</li>)}</ul></div>
            ))}
          </div>
        </section>

        <section id="resume" className="wrap">
          <h2>Resume</h2>
          <p className="sectionlead">Full details of my work, skills and education.</p>
          <div className="cta"><a className="btn" href={RESUME} download>Download PDF</a>
            <a className="btn ghost" href={RESUME} target="_blank" rel="noreferrer">Open in new tab</a></div>
          <iframe className="pdf" src={`${RESUME}#view=FitH`} title="Raushan Kumar resume" />
        </section>

        <section id="contact" className="wrap">
          <div className="contact">
            <h2>Have an AI product to ship?</h2>
            <p>I’m happy to talk about LLM features, RAG systems or AWS serverless builds.</p>
            <div className="cta">
              <a className="btn light" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a className="btn ghost light" href={`tel:${PHONE}`}>{PHONE_TEXT}</a>
              <a className="btn ghost light" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div><b>Raushan Kumar</b><p>Senior AI / LLM Engineer · Full Stack · AWS Serverless</p></div>
          <nav><a href="#focus">What I do</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#resume">Resume</a></nav>
          <nav><a href={`mailto:${EMAIL}`}>Email</a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a><a href={RESUME} download>Resume PDF</a></nav>
        </div>
        <p className="copy wrap">© {new Date().getFullYear()} Raushan Kumar. Built with Next.js.</p>
      </footer>
    </>
  );
}