import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Ghost } from "lucide-react"

export default function Home() {
  return (
  <div className="">
    <Input />
    <Button variant={"primary"} size={"sm"}>Primary</Button>
    <Button variant={"secondary"}>Secondary</Button> 
    <Button variant={"destructive"}>Destructive</Button> 
    <Button variant={"ghost"}>Ghost</Button> 
    <Button variant={"muted"}>Link</Button>  
    <Button variant={"outline"}>Outline</Button>
    <Button variant={"teritary"}>Teritary</Button>  
  </div> 
  )
}
