const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://N-mendiola.github.io',
  title: 'Natalia Mendiola.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Natalia Mendiola',
  role: 'Graduate Student at Georgia Tech',
  description:
    "My name is Natalia Mendiola and I am a graduate student at Georgia Tech majoring in Electrical and Computer Engineering. I'm excited to shape data-driven, human-centered products that create meaningful impact. I thrive in collaborative, fast-paced environments and love working with people from diverse backgrounds to build what's next.",
  //resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/natalia-mendiola/',
    github: 'https://github.com/N-Mendiola',
  },
}

const experiences = [
  {
    role: 'Power Electronics - Vehicle Hardware Intern	',
    company: 'Tesla',
    date: 'May 2024 - August 2024',
    description: `Collaborated cross-functionally with engineering and data infrastructure teams to identify inefficiencies in failure analysis workflows. Proposed, scoped, and led integration of a new Power BI dashboard into existing workflows, streamlining cross-team hardware failure analysis and saving 48+ engineering hours/month.Built OpenCV pipeline to detect PCB design changes in visual schematics, aiding design traceability and reverse comparison, reducing review time by 65%.`,
  },
  {
    role: 'Electrical Engineering R&D Intern',
    company: 'Boston Scientific',
    date: 'June 2023 - August 2023',
    description: `Led end-to-end program coordination for a design change initiative, synthesizing feedback from 6+ stakeholder teams and publishing a technical impact assessment to guide decision-making. Extended product availability for another 2 years through technical assessment of electrical component datasheet specifications, identified replacements for end-of-life components. `,
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BSECE Capstone Project: Ghost In the Machine',
    description:
      'Collaborated with a team of 7 to develop a highly parameterized deep neural network accelerator with systolic array architecture featuring novel processing elements designed to improve computation throughput. Implemented and evaluated the accelerator design in Simulink, Vivado, and FPGA for analysis and benchmarking.',
    stack: ['C++', 'Python', 'Vitis HLS', 'Xilinx Vivado', 'Agile Methodology'],
    //sourceCode: 'https://github.com',
    livePreview: 'https://www.linkedin.com/posts/pchari_feeling-incredibly-proud-for-winning-the-activity-7319114783046127617-YF4T?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk8N1EBcFOda2nCt1j_nPaLrondlVhI5Pg',
  },
  {
    name: 'Autonomous Lane Keeping RC Car',
    description:
      'Developed an autonomous driving system for an RC car using Python, implementing lane-keeping, stop-sign detection.',
    stack: ['Python', 'OpenCV', 'Raspberry PI', 'Embedded Linux'],
    sourceCode: 'www.hackster.io/projects/00b157/',
    livePreview: 'https://youtu.be/R4vvM8UXXF4?si=R2jtk4mRyPFazQtj',
  },
  {
    name: 'Guitar Hero with MSP430',
    description:
      'Designed and implemented Guitar Hero gameplay using MSP430 microcontrollers, a rhythm-based game with real-time logic, LED visualizations, audio processing, and dynamic user interactions on TI LaunchPad Kits.',
    stack: ['C', 'MSP430', 'Embedded Systems'],
    sourceCode: 'https://github.com/lindseyr23/GuitarHero430', 
    livePreview: 'https://youtu.be/caU7hopNlVo?si=VWlUrG9y-vQojxJ4',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Git',
  'Verilog',
  'C',
  'MATLAB',
  'PCB Design',
  'Altium',
  'Vitis HLS',
  'PostgreSQL',
  'R',
  'LTSpice',
  'Embedded Linux'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'natmendiolav@mail.com',
}

export { header, about, contact, projects, experiences, skills }
