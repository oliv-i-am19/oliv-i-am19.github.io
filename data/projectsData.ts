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
    description: `An opportunity to implement the skills I learned in class`,
    imgSrc: '/static/images/earth.jpg',
    href: '/blog/mero',
  },
  {
    title: 'ROB 599 Legged Robot Control Final Project',
    description: `Phase-Based Trajectory Optimization for Legged Locomotion`,
    imgSrc: '/static/images/biped.png',
    href: '/blog/lrc',
  },
  {
    title: 'ROB 498 Multi-Robot Systems Final Project',
    description: `Fighting forest fires with coordinated teams of specialized agents`,
    imgSrc: '/static/images/drone.jpg',
    href: '/blog/mrs',
  },
  {
    title: 'ROB 550 ArmLab Final Project',
    description: `An exercise in FK/IK and OpenCV`,
    imgSrc: '/static/images/armlab.jpg',
    href: '/blog/armlab',
  },
  {
    title: 'ROB 330 SLAM & Navigation Final Project',
    description: `Bringing together sensing, pose estimation, and control`,
    imgSrc: '/static/images/mbot.png',
    href: '/blog/slam',
  },
  {
    title: 'Hardware Projects',
    description: `A showcase of my projects related to hardware design/fabrication`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/hardware',
  },
]

export default projectsData
