import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function Home() {
  return <main>Hello World</main>
}
