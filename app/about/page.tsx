import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const team = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    image: "/creative-director-headshot.png",
  },
  {
    name: "Sarah Miller",
    role: "Design Lead",
    image: "/professional-headshot-designer-woman.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "Tech Lead",
    image: "/professional-headshot-developer-man.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Strategy Director",
    image: "/professional-headshot-strategist-woman.jpg",
  },
]

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12", label: "Years Experience" },
  { value: "40+", label: "Team Members" },
  { value: "25", label: "Awards Won" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8">
        <h1 className="font-serif text-[11vw] md:text-[8vw] leading-[0.85] uppercase tracking-tighter">
          About
          <br />
          <span className="text-primary">Us</span>
        </h1>
      </section>

      <section className="px-4 md:px-8 pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <p className="font-sans text-xl md:text-4xl leading-tight">
              Grittyflint is a next-gen brand experience agency that blends creative brilliance with cutting-edge tech.
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <p className="font-serif text-muted-foreground">
              We develop, design and craft marketing and advertising solutions through visual storytelling and bold brand communication. Helping brands carve out unique spaces in a constantly shifting marketplace. For almost a decade, we&apos;ve been delivering hype-worthy, brand-aligned 360 campaigns, marketing strategy and video productions for global powerhouses like Dabur, Shalina Healthcare, Reckitt Benckiser, Netflix, MTN, Cadbury, and Hollandia.
            </p>
            <p className="font-serif text-muted-foreground">
              Step into a space where creativity flows endlessly, and experience the journey with a team of forward-thinking, innovative and solution-driven minds.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-10 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-2 border-foreground p-4 md:p-8">
              <span className="font-serif text-3xl md:text-6xl text-primary">{stat.value}</span>
              <p className="font-mono text-[10px] md:text-xs uppercase mt-1 md:mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-10 md:pb-24">
        <h2 className="font-serif text-3xl md:text-6xl uppercase tracking-tight mb-6 md:mb-12">The Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-square overflow-hidden border-2 border-foreground">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-2 md:mt-4">
                <h3 className="font-serif text-sm md:text-xl uppercase">{member.name}</h3>
                <p className="font-mono text-[10px] md:text-xs text-primary uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-10 md:pb-24">
        <div className="bg-foreground text-background p-5 md:p-16">
          <h2 className="font-serif text-2xl md:text-6xl uppercase tracking-tight">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-6 md:mt-12">
            {[
              {
                title: "Bold",
                description: "We take risks and push boundaries. Safe design is forgettable design.",
              },
              {
                title: "Honest",
                description: "We tell it like it is. Transparency builds trust and better work.",
              },
              {
                title: "Relentless",
                description: "We don't stop until it's right. Good enough is never good enough.",
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="font-serif text-xl md:text-2xl text-primary uppercase">{value.title}</h3>
                <p className="font-mono text-xs md:text-sm mt-2 md:mt-4 opacity-70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
