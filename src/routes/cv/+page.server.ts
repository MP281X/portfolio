export const load = async () => {
  type Education = {
    school: string;
    degree: string;
    period: `${number} - ${number}`;
    vote: number | undefined;
    eqf: number;
  };
  const educations: Education[] = [
    {
      school: 'ISIS A. Malignani',
      degree: 'Diploma in Infomatica e Telecomunicazioni',
      period: '2017 - 2022',
      vote: 68,
      eqf: 4
    },
    {
      school: 'ITS Alto Adriatico',
      degree: 'Tecnico Superiore Cloud Developer',
      period: '2022 - 2024',
      vote: undefined,
      eqf: 5
    }
  ];

  type Language = {
    language: string;
    level: 'native' | 'fluent';
  };
  const languages: Language[] = [
    { language: 'italian', level: 'native' },
    { language: 'english', level: 'fluent' }
  ];

  type Work = {
    company_name: string;
    job_position: string;
    type: 'stage' | 'work';
    location: `${string} (${string})`;
    period: `${number}/${number}/${number} - ${number}/${number}/${number}`;
  };
  const works: Work[] = [
    {
      company_name: 'Nordest Servizi',
      period: '17/01/2022 - 29/01/2022',
      location: 'Tavagnacco (IT)',
      type: 'stage',
      job_position: 'System Engineer'
    },
    {
      company_name: 'Bizaway',
      period: '11/06/2023 - 04/06/2023',
      location: 'Spilimbergo (IT)',
      type: 'stage',
      job_position: 'Backend Developer'
    }
  ];

  type Skill = {
    type: 'frontend' | 'backend' | 'devops' | 'databases';
    languages: string[];
  };
  const skills: Skill[] = [
    { type: 'frontend', languages: ['sveltekit', 'tailwind', 'flutter'] },
    { type: 'backend', languages: ['typescript', 'golang'] },
    { type: 'devops', languages: ['github actions', 'argocd', 'kubernetes'] },
    { type: 'databases', languages: ['postgres', 'redis', 'mongodb'] }
  ];

  type Contact = {
    text: string;
    icon: string;
  };
  const contacts: Contact[] = [
    { icon: 'smartphone', text: '+39 3518853376' },
    { icon: 'email', text: 'paludgnachmatteo.dev@gmail.com' },
    { icon: 'http', text: 'portfolio.mp281x.xyz' },
    { icon: 'code_blocks', text: 'github/MP281X' },
    { icon: 'map', text: 'Via Del Tei 18, Moimacco (UD)' }
  ];

  return { educations, languages, works, skills, contacts };
};
