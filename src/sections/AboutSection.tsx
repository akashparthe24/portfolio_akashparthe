import Card from "../components/Card";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionTitle
        eyebrow="About"
        title="Business Insight Backed by Engineering Depth"
      />

      <Card className="about-consistent-card">
        <div className="max-w-3xl space-y-5">
          <p className="text-[1.03rem] leading-relaxed text-slate-600">
            I&apos;m a Business Analytics graduate candidate at Carnegie Mellon University with 3+ years of
            experience building data-driven products and scalable systems. I work at the intersection of business
            strategy, analytics, and AI to turn ambiguous problems into measurable outcomes.
          </p>

          <ul className="grid gap-3.5 text-[0.98rem] leading-relaxed text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500/90" aria-hidden="true" />
              <span>Translate business goals into KPI-driven analytics and decision frameworks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500/90" aria-hidden="true" />
              <span>Build production-ready AI systems (ML, computer vision, RAG pipelines)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500/90" aria-hidden="true" />
              <span>Design scalable data pipelines and BI dashboards for real-time insights</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-500/90" aria-hidden="true" />
              <span>Deliver solutions that improve decision speed, efficiency, and business impact</span>
            </li>
          </ul>
        </div>
      </Card>
    </SectionContainer>
  );
}

export default AboutSection;
