import "./NavigationBar.scss";

type Props = {
  navigateToSection: (sectionType: string) => void,
  activeSection: string
};

export default function NavigationBar({navigateToSection, activeSection}: Props) {

const navList:{icon:string, type:string}[]=[
  {icon:' 👋🏻', type:'heroSection'},
  {icon:'✨', type:'aboutSection'},
  {icon:'💼', type:'experienceSection'},
  {icon:'💻', type:'projectsSection'},
  {icon:'🛠️', type:'skillsTechnologiesSection'},
  {icon:'🎓', type:'educationCertificationSection'},
  {icon:'📬', type:'contactSection'}
];

  return (
    <div className="navigation-bar">
      <nav className="nav">
        <ul>
          {navList.map((nav, index)=> <li key={index+nav.type} className={nav.type === activeSection?'active':''} onClick={()=>navigateToSection(nav.type)}>{nav.icon}</li>)}
        </ul>
      </nav>
    </div>
  );
}
