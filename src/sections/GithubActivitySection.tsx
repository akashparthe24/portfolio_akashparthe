import Button from "../components/Button";
import Card from "../components/Card";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { contact } from "../data/portfolioData";

function GithubActivitySection() {
  return (
    <SectionContainer id="github-activity">
      <SectionTitle
        eyebrow="GitHub"
        title="Activity Snapshot"
        subtitle="Optional visual section for highlighting GitHub activity."
      />

      <Card className="github-card">
        <p>
          Replace this block with your preferred GitHub stats integration if needed.
          A simple option is embedding a stats image from `github-readme-stats`.
        </p>
        <div className="profile-link-group">
          <Button
            as="a"
            variant="inline"
            href="https://github.com/akashparthe24/akash-parthe24"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </Button>
          <Button as="a" variant="inline" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            View LinkedIn Profile
          </Button>
        </div>
      </Card>
    </SectionContainer>
  );
}

export default GithubActivitySection;
