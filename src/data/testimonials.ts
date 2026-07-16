export interface Testimonial {
  name: string
  role: string
  avatar: string
  text: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Chioma Obi",
    role: "Fashion Boutique • Lagos",
    avatar: "CO",
    text: "SellPoint transformed how I run my shop. Sales are faster, inventory is always accurate, and I can monitor everything from my phone.",
  },
  {
    name: "Emeka Nwosu",
    role: "Electronics Store • Abuja",
    avatar: "EN",
    text: "The AI recommendations helped us stock the right products before the holidays. Revenue increased significantly.",
  },
  {
    name: "Amaka Eze",
    role: "Supermarket • Port Harcourt",
    avatar: "AE",
    text: "Managing multiple branches has never been easier. Staff performance and reports are available instantly.",
  },
]