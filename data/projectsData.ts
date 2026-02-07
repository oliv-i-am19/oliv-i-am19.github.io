interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Reliable Robotics GNC Intern Projects',
    description: `My 2025 internship projects`,
    imgSrc: '/static/images/airplane.jpg',
    href: '/blog/reliable',
  },
  {
    title: 'A2Sys/Haptix Lab Pogo Drone',
    description: `My research experience developing intentional collision controller for UAS-environment interaction`,
    imgSrc: '/static/images/pogo.jpg',
    href: '/blog/pogo-drone',
  },
  {
    title: 'Michigan Experimental Rocketry Org (MERO) VTVL Rocket',
    description: ``,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/mero',
  },
  {
    title: 'ROB 498 Multi-Robot Systems Final Project',
    description: ``,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/mrs',
  },
  {
    title: 'ROB 550 ArmLab Final Project',
    description: ``,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/armlab',
  },
  {
    title: 'ROB 330 SLAM & Navigation Final Project',
    description: ``,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/slam',
  },
]

export default projectsData
