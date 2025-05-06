"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {

  // const htmlContent = document.querySelector("html")
  // const themeAttribute = htmlContent?.getAttribute("data-theme")

  // define states
  const [theme, setTheme] = useState<string> ("fantasy")
  const [htmlContent, sethtmlContent] = useState <any> ()

  useEffect(() => {
    // search and save html tag
    const htmlContentVar = document.querySelector("html")
    sethtmlContent(htmlContentVar)

    // get theme value
    const themeAttribute = htmlContent?.getAttribute("data-theme")
    setTheme(themeAttribute!)
  }, [])

  const handleThemeChanger = () => {
    htmlContent.setAttribute("data-theme", "dim")
  }

  return (
    <div>
      <button
        className="btn btn-primary"
      onClick={() => {handleThemeChanger()}}>
        update theme
      </button>
      <Button>Click me</Button>
      <Textarea placeholder="Type your message here." />
    </div>
  )
}
