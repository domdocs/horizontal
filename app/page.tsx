"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Code, Cpu, ExternalLink, Globe, Mail, Menu, MessageSquare, Rocket, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background/95 to-background">
      {/* Decorative elements - smaller for mobile */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 rounded-full bg-primary/15 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col h-full p-5">
            <div className="flex justify-between mb-8">
              <div className="flex items-center">
                <Image 
                  src="/horizontal_logo.svg"
                  width={160}
                  height={40}
                  alt="Horizontal Labs Logo"
                  className="h-10 w-auto"
                />
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 items-center justify-center flex-1">
              <Link 
                href="#about" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="#apps" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Apps
              </Link>
              <Link 
                href="#contact" 
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30">
        <div className="container flex h-14 md:h-16 items-center justify-between py-2 md:py-4">
          <div className="flex items-center">
            <Image 
              src="/horizontal_logo.svg"
              width={180}
              height={45}
              alt="Horizontal Labs Logo"
              className="h-8 md:h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
              About Us
            </Link>
            <Link href="#apps" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
              Our Apps
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button 
              className="md:hidden size-8 p-0 bg-primary/20 hover:bg-primary/30" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5 text-white" />
            </Button>
            <Button className="bg-primary/80 backdrop-blur-sm hover:bg-primary/90 p-2 text-xs md:text-sm md:p-3 whitespace-nowrap" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-8 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[1fr_350px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                    Revolutionizing Digital Experiences
                  </h1>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    We design and develop full-stack applications that modernize systems.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="bg-primary/80 backdrop-blur-sm hover:bg-primary/90 text-xs sm:text-sm" asChild>
                    <Link href="#apps">
                      Our Apps <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-xs sm:text-sm"
                    asChild
                  >
                    <Link href="#about">About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 opacity-30 blur-3xl"></div>
                  <div className="relative flex h-full w-full items-center justify-center rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 p-2 sm:p-3 backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="flex h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 items-center justify-center rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-2 sm:p-4 backdrop-blur-sm shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/10">
                        <Code className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                      </div>
                      <div className="flex h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 items-center justify-center rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-2 sm:p-4 backdrop-blur-sm shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/10">
                        <Cpu className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                      </div>
                      <div className="flex h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 items-center justify-center rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-2 sm:p-4 backdrop-blur-sm shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/10">
                        <Globe className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                      </div>
                      <div className="flex h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 items-center justify-center rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-2 sm:p-4 backdrop-blur-sm shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/10">
                        <Rocket className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-8 md:py-12 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-primary/10 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg border border-white/20 bg-primary/80 px-2 py-1 text-xs sm:text-sm text-primary-foreground backdrop-blur-sm">
                  About Us
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                  Full-Stack App Development
                </h2>
                <p className="mx-auto text-xs sm:text-sm text-muted-foreground">
                  We develop new applications and modernize legacy systems with cutting-edge technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-center gap-6 py-6 md:py-8 md:grid-cols-2 md:gap-8">
              <div className="relative rounded-xl sm:rounded-2xl border border-white/20 bg-white/5 p-1 backdrop-blur-md shadow-md">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  width={250}
                  height={250}
                  alt="About Horizontal Labs"
                  className="mx-auto aspect-square overflow-hidden rounded-lg sm:rounded-xl object-cover object-center w-full"
                />
              </div>
              <div className="flex flex-col justify-center space-y-3">
                <ul className="grid gap-3">
                  <li className="rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <div className="grid gap-1">
                      <h3 className="text-base sm:text-lg font-bold">Innovation-Driven</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        We leverage the latest technologies to create forward-thinking solutions.
                      </p>
                    </div>
                  </li>
                  <li className="rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <div className="grid gap-1">
                      <h3 className="text-base sm:text-lg font-bold">Results-Focused</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Our applications are designed with clear business objectives for measurable outcomes.
                      </p>
                    </div>
                  </li>
                  <li className="rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <div className="grid gap-1">
                      <h3 className="text-base sm:text-lg font-bold">System Modernization</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        We transform outdated systems into efficient, scalable platforms.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="apps" className="w-full py-8 md:py-12 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-1/4 left-1/4 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-primary/10 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg border border-white/20 bg-primary/80 px-2 py-1 text-xs sm:text-sm text-primary-foreground backdrop-blur-sm">
                  Our Apps
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                  Cutting-Edge Applications
                </h2>
                <p className="mx-auto text-xs sm:text-sm text-muted-foreground">
                  Innovative applications designed to solve real-world problems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-4 py-6 sm:grid-cols-2">
              <div className="group rounded-lg sm:rounded-xl border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-md">
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold">App Name 1</h3>
                  <p className="text-xs text-muted-foreground">Solution for modern businesses</p>
                  <div className="mt-3 aspect-video overflow-hidden rounded-md sm:rounded-lg border border-white/10">
                    <Image
                      src="/placeholder.svg?height=120&width=200"
                      width={200}
                      height={120}
                      alt="App screenshot"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Platform that streamlines operations and enhances productivity.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 w-full border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-xs py-1"
                    asChild
                  >
                    <Link href="#">
                      Learn More <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="group rounded-lg sm:rounded-xl border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-md">
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold">App Name 2</h3>
                  <p className="text-xs text-muted-foreground">Automation for complex workflows</p>
                  <div className="mt-3 aspect-video overflow-hidden rounded-md sm:rounded-lg border border-white/10">
                    <Image
                      src="/placeholder.svg?height=120&width=200"
                      width={200}
                      height={120}
                      alt="App screenshot"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    AI-powered solution that automates tasks and optimizes decisions.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 w-full border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-xs py-1"
                    asChild
                  >
                    <Link href="#">
                      Learn More <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-8 md:py-12 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 right-1/3 h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-primary/10 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg border border-white/20 bg-primary/80 px-2 py-1 text-xs sm:text-sm text-primary-foreground backdrop-blur-sm">
                  Contact Us
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                  Let's Build Together
                </h2>
                <p className="mx-auto text-xs sm:text-sm text-muted-foreground">
                  Have a project in mind? Get in touch with our team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-4 py-6">
              <div className="flex flex-col gap-3 rounded-lg sm:rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Email Us</h3>
                    <p className="text-xs text-muted-foreground">info@thehorizontal.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Chat With Us</h3>
                    <p className="text-xs text-muted-foreground">Our support team is available 24/7</p>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="mb-2 text-sm font-bold">Follow Us</h3>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg sm:rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-md shadow-md">
                <h3 className="mb-3 text-sm font-bold">Send Us a Message</h3>
                <form className="space-y-3">
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="h-8 text-xs border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="h-8 text-xs border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[80px] text-xs border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary/80 backdrop-blur-sm hover:bg-primary/90 text-xs h-8">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-white/10 bg-background/60 py-4 backdrop-blur-xl">
        <div className="container flex flex-col items-center justify-between gap-2 px-4">
          <div className="flex items-center">
            <Image 
              src="/horizontal_logo.svg"
              width={120}
              height={30}
              alt="Horizontal Labs Logo"
              className="h-8 w-auto"
            />
          </div>
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Horizontal Labs. All rights reserved.
          </p>
          <nav className="flex gap-3">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
