import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiMedium } from "react-icons/si"

export default function Portfolio() {
  // Projects
  const projects = [
    {
      title: "Kubernetes For Modern Data Engineering",
      description:
        "Deploying Apache Airflow on Kubernetes with Helm to orchestrate data workflows using custom DAGs.",
      tags: ["Kubernetes", "Docker", "Apache Airflow", "Python"],
      link: "https://github.com/ogzyzy/Kubernetes-For-Modern-Data-Engineering",
    },
    {
      title: "AWS Image Scaler",
      description:
        "A serverless image resizing app using AWS S3 and Lambda. Built with Docker to support custom image processing. Fully automated with S3 event triggers.",
      tags: ["AWS", "Lambda", "S3", "Docker"],
      link: "https://github.com/ogzyzy/aws-image-scaler",
    },
    {
      title: "Scalable AWS Architecture",
      description:
        "Deployed an auto-scaled EC2 setup behind an Application Load Balancer using CloudFormation. Scaling based on CloudWatch metrics.",
      tags: ["AWS", "EC2", "CloudFormation", "CloudWatch"],
      link: "https://medium.com/@dominikzygarski_88070/implementation-of-a-scalable-architecture-with-a-load-balancer-in-aws-3a7282ca4be3",
    },
  ]

  return (
    <main className="min-h-screen bg-[#121212] text-gray-200 relative overflow-hidden">
      {/* Tech-inspired Background with Cloud Engineering Accents */}
      <div className="absolute inset-0 w-full min-h-full z-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-[300vw] h-[300vh] opacity-20 sm:w-full sm:h-full sm:scale-100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4B4B" stopOpacity="1" />
              <stop offset="100%" stopColor="#0082C8" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B2C8" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF8F3F" stopOpacity="1" />
            </linearGradient>
          </defs>
  
          {/* Connection lines */}
          <path d="M-100,200 C150,150 350,450 650,150" stroke="url(#grad1)" strokeWidth="0.5" fill="none" />
          <path d="M1200,400 C950,450 750,50 450,350" stroke="url(#grad2)" strokeWidth="0.5" fill="none" />
          <path d="M-50,500 C250,450 350,650 650,350" stroke="#0082C8" strokeWidth="0.3" fill="none" opacity="0.6" />
          <path d="M1100,100 C850,250 650,150 450,550" stroke="#FF6B3F" strokeWidth="0.3" fill="none" opacity="0.6" />
          <path d="M300,0 C250,250 550,350 450,650" stroke="#00B2C8" strokeWidth="0.3" fill="none" opacity="0.5" />
          <path d="M800,0 C750,250 650,350 850,650" stroke="#FF8F3F" strokeWidth="0.3" fill="none" opacity="0.5" />
  
          {/* Nodes */}
          <circle cx="150" cy="150" r="3" fill="#FF4B4B" />
          <circle cx="450" cy="350" r="2" fill="#0082C8" />
          <circle cx="650" cy="150" r="4" fill="#00B2C8" />
          <circle cx="850" cy="450" r="3" fill="#FF8F3F" />
          <circle cx="250" cy="550" r="2" fill="#FF6B3F" />
          <circle cx="950" cy="250" r="3" fill="#0082C8" />
          <circle cx="550" cy="50" r="2" fill="#FF8F3F" />
          <circle cx="750" cy="650" r="3" fill="#00B2C8" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Profile Card */}
        <Card className="bg-[#1E1E1E]/80 backdrop-blur-sm border-0 shadow-xl mb-10 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#0082C8] shadow-lg">
                <Image
                  src="/avatar.jpg"
                  alt="Your Name"
                  fill
                  className="object-contain translate-y-[10%] scale-[1.5]"
                  priority
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-1 text-white">Dominik Zygarski</h1>
                <h2 className="text-xl text-[#00B2C8] mb-4">DevOps Engineer</h2>
                <p className="max-w-2xl text-gray-400 mb-4">
                I&apos;m passionate about solving complex problems using cloud technologies and automation. 
                I focus on AWS, Infrastructure as Code, and CI/CD, with a strong ambition to grow into Cloud Data Engineering and DevOps roles. 
                Currently, I&apos;m expanding my skill set in Big Data by building hands-on projects that address real-world data challenges in cloud-based systems.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#1E1E1E] border-[#333] hover:bg-[#333] hover:border-[#0082C8] transition-all duration-300"
                    asChild
                  >
                    <Link href="https://github.com/ogzyzy" target="_blank" aria-label="GitHub">
                      <Github className="h-5 w-5 text-white" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#1E1E1E] border-[#333] hover:bg-[#333] hover:border-[#0082C8] transition-all duration-300"
                    asChild
                  >
                    <Link href="https://www.linkedin.com/in/dominik-zygarski/" target="_blank" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5 text-white" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#1E1E1E] border-[#333] hover:bg-[#333] hover:border-[#00B2C8] transition-all duration-300"
                    asChild
                  >
                    <Link href="https://medium.com/@dominikzygarski_88070" target="_blank" aria-label="Medium">
                      <SiMedium className="h-5 w-5 text-white" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#1E1E1E] border-[#333] hover:bg-[#333] hover:border-[#0082C8] transition-all duration-300"
                    asChild
                  >
                    <Link href="mailto:dominikzygarski@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5 text-white" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 items-center text-center justify-start md:mt-15 md:mr-20">
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">LOCATION</p>
                  <p className="text-sm text-gray-300 flex items-center justify-center md:justify-center">
                    <span className="inline-flex items-center">
                      <MapPin className="h-3 w-3 mr-1" /> Poland
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">STATUS</p>
                  <p className="text-sm text-gray-300 text-center md:text-left">
                    <span className="inline-flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span> Available for work
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Portfolio</h2>
            <div className="h-1 w-12 bg-[#FF6B3F] ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="h-full flex flex-col bg-[#1E1E1E]/80 backdrop-blur-sm border-0 hover:shadow-[0_0_15px_rgba(0,178,200,0.3)] transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-gray-400 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-[#252525] hover:bg-[#333] text-[#00B2C8] border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#252525] hover:bg-[#0082C8] text-white border-0 transition-all duration-300"
                    asChild
                  >
                    <Link href={project.link} target="_blank">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* About Section */}
        <Card className="bg-[#1E1E1E]/80 backdrop-blur-sm border-0 shadow-xl mb-10">
          <CardHeader>
            <div className="flex items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
              <div className="h-1 w-12 bg-[#FF6B3F] ml-4"></div>
            </div>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="space-y-4">
              <p>
              With a long-standing passion for IT and cloud technologies, 
              I completed the Cloud Engineer Academy led by Soleyman Shahir, 
              where I gained hands-on experience in automation, infrastructure as code, and containerization.
              During the program, I worked on hands-on projects that reflected real-world infrastructure scenarios 
              and allowed me to apply cloud engineering concepts in practice.


              </p>
              <p>
              Comfortable in Linux environments, I use it regularly while learning and working on personal projects. 
              My skill set continues to grow, especially in AWS, Docker, Terraform, Kubernetes, Jenkins, and AI.
              I am fascinated by Big Data processing and data cluster engineering. In the future, 
              I aim to specialize in managing scalable and efficient DevOps environments that support complex data systems.
              </p>
              <p>
              Outside of tech, I enjoy sports, reading, and cinema. In my free time, 
              I train my dog and attend dog sport classes together — it’s a great way to stay active, unwind, and connect beyond the digital world.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-16">
          <p>© {new Date().getFullYear()} Dominik Zygarski. All rights reserved.</p>
          <p className="mt-1 text-xs flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span> All systems operational
          </p>
        </footer>
      </div>
    </main>
  )
}
