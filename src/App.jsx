import { Navbar } from "./components/navbar"
import { RevenueCard } from "./components/RevenueCard"
import { Hero } from "./components/Hero"
import { Body } from "./components/Body"

function App() {
  
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="md:grid md:grid-cols-2 bg-gray-100">
      <RevenueCard title={"Online orders"} amount={"231"}/>
      <RevenueCard title={"Amount received"} amount={"₹23,92,312.19"}/>
      </div>
      <Body />
    </>
  )
}

export default App
