

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


export interface TemplateParams {
    name: string;
    email: string;
    message: string
}

export interface NotificationParams {
    class?: string;
    status?: string;
}

export interface MailParams {
    service_id: string;
    template_id: string;
    user_id: string;
    template_params: TemplateParams;
}

export interface Certification {
    title: string,
    provider: Provider,
    link: string
}

export interface Entity {
    name: string,
    url: string,
}

export interface Experience {
    company: Company,
    role: string,
    duration: string,
    contributions: string[],
    projectsIWorked: projectsIWorked[]
}

export interface Project {
    title: string;
    description: string;
    image: string;
    keySkills: string[];
    liveDemo: string;
    github: string;
}

export interface Skills {
    name: string,
    logo: string,
}

export type Provider = Entity;
export type Company = Entity;
export type projectsIWorked = Entity;

