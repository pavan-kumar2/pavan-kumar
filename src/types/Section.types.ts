

export interface SectionProps {
    setActiveSection: (section: string) => void;
}

export type AboutSectionProps = SectionProps;
export type ContactSectionsProps = SectionProps;
export type EducationCertificationSectionProps = SectionProps;
export type ExperienceSectionProps = SectionProps;
export type HeroSectionProps = SectionProps;
export type ProjectsSectionProps = SectionProps;
export type SkillsTechnologiesSectionProps = SectionProps;


export interface NavigationBarProps {
    navigateToSection: (section: string) => void;
    activeSection: string;
}

