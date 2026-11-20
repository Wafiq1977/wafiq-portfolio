import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { MarqueeSection } from "@/components/portfolio/logo-marquee";
import { AboutSection } from "@/components/portfolio/about-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { CertificationsSection } from "@/components/portfolio/certifications-section";
import { OrganizationSection } from "@/components/portfolio/organization-section";
import { WorkingApproachSection } from "@/components/portfolio/working-approach-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import { BackgroundFX } from "@/components/portfolio/background-fx";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { BackToTop } from "@/components/portfolio/back-to-top";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <OrganizationSection />
        <WorkingApproachSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
