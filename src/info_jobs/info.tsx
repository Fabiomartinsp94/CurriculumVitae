interface CurriculumSection {
    name: string;
    description: Array<Description>;
    icon: string;
  }
  
  interface Description {
    title: string
    starting: string 
    finishing: string
    attribution: string
  }
  
  export const sections: Array<CurriculumSection> = [
    {
      name: "Education", 
      description:[
        {
          title: "USCS - Universidade Municipal de São Caetano do Sul",
          starting: "feb 2021",
          finishing: "jul 2023",
          attribution: "Information Technology"
        },
        {
          title: "USP - Universidade de São Paulo",
          starting: "feb 2012",
          finishing: "dec 2018",
          attribution: "Sports Bachelor"
        },
      ], 
      icon:""
    },
    {
      name: "Experience", 
      description:[
        {
          title: "Tech Lead - Devnology",
          starting: "dec 2021",
          finishing: "present",
          attribution: "Manage a team and ensure delivery quality to the end customer. Find automation opportunities to decrease costs as well as manual and repetitive work. Keep codes, APIs, endpoints and database always in the best possible working order"
        },
        {
          title: "Back-end Developer - Devnology", 
          starting: "sep 2021", finishing: "dec 2021", 
          attribution: "Find automation opportunities to decrease costs as well as manual and repetitive work. Keep codes, APIs, endpoints and database always in the best possible working order"
        },
        {
          title: "Fullstack Developer - QualityWay",
          starting: "may 2021", 
          finishing: "sep 2021", 
          attribution: "Identify automation opportunities to reduce company costs. Design and develop solutions using Python, C#, Automation Anywhere and Javascript. Perform tests, communicate with the customer and ensure the improvement delivery. Create web and mobile platforms in React.js, and integration same with API and database. Maintain versioned code in Git.Present implementation proposals and resolve doubts of the end customer regarding the systems and processes of the company. "
        },
        {
          title: "Soccer Coach & Camp Counselour - Challenger Sports", 
          starting: "apr 2019", 
          finishing: "sep 2019", 
          attribution: "Responsible for planning, development and application of soccer training for all teams of Bourne Youth Soccer Academy, from Tiny tikes (3 years old) until U14 teams. Worked as a Summer Coach and Camp Conselour too. Responsible for management and implementation of training throughout the summer in the New England Region Camps."
        },
      ], 
      icon:""
    }, 
    {
      name: "capabilities",
      description:[
        {
          title: "Python", 
          starting: "mar 2019", 
          finishing: "present", 
          attribution: "FastAPI, Django, Flask, Selenium, Playwright, Pydantic, SQLalchemy"
        },
        {
          title: "Javascript", 
          starting: "feb 2020", 
          finishing: "present", 
          attribution: "Node.js, React.js, Typescript, Next.js, puppeteer, express, Sequelize, fs, FakeBrowser"
        },
        {
          title: "AWS", 
          starting: "jan 2021", 
          finishing: "present", 
          attribution: "EC2, S3, Fargate, ECK, Lambda"
        },
        {title: "C#", 
        starting: "jan 2022", 
        finishing: "present", 
        attribution: "ASP.NET"
        },
      ],
      icon:""
    },
  ]

export default sections