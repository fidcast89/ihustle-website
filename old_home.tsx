"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CreditCard, LineChart, Brain, MessageSquare, Share2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroPhone } from "@/components/hero-phone"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { PricingCard } from "@/components/pricing-card"
import { FadeIn } from "@/components/fade-in"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const phoneRotation = useTransform(scrollYProgress, [0, 0.1], [0, 5])
  const phoneScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.05])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      {/* Hero Section - Fixed responsive issues */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 pt-20 pb-32">
        <FloatingElements />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row md:items-center lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl flex-shrink-0 md:w-1/2"
            >
              <FadeIn delay={0.1}>
                <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                  AI-Powered POS for Small Businesses
                </span>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Your <span className="text-primary">Hustle</span>, supercharged with AI
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="mb-8 max-w-lg text-lg text-gray-300">
                  We've built the POS system we always wanted - smart, simple, and actually fun to use. Let AI handle
                  the boring stuff while you focus on growing your Hustle.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
                    Try it for free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="mt-8">
                  <p className="text-sm text-gray-400">
                    No credit card required • 14-day free trial • Setup in minutes
                  </p>
                </div>
              </FadeIn>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full md:w-1/2 flex justify-center"
            >
              {isClient && (
                <motion.div
                  style={{
                    rotate: phoneRotation,
                    scale: phoneScale,
                  }}
                  className="relative z-10"
                >
                  <HeroPhone />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* AI Features Section */}
      <section className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[5%] h-[200px] w-[200px] rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                AI Superpowers
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let AI do the heavy lifting
              </h2>
              <p className="text-lg text-gray-300">
                We've packed iHustle with AI features that actually make your life easier. No gimmicks, just practical
                magic.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Brain className="h-6 w-6 text-primary" />}
              title="AI Product Creation"
              description="Snap a pic, get a product. Our AI identifies items, writes descriptions, and suggests pricing in seconds."
              delay={0.1}
              hoverEffect="scale"
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6 text-primary" />}
              title="Smart Insights"
              description="'Hey, you're running low on those shirts that sell like crazy on Thursdays.' AI that actually helps."
              delay={0.2}
              hoverEffect="scale"
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6 text-primary" />}
              title="AI Sales Assistant"
              description="Get product recommendations, answer customer questions, and close more sales with your AI sidekick."
              delay={0.3}
              hoverEffect="scale"
            />
            <FeatureCard
              icon={<Share2 className="h-6 w-6 text-primary" />}
              title="Social Media Magic"
              description="Turn inventory into Instagram-ready posts with AI-generated captions and hashtags that actually work."
              delay={0.4}
              hoverEffect="scale"
            />
            <FeatureCard
              icon={<LineChart className="h-6 w-6 text-primary" />}
              title="Predictive Analytics"
              description="'You should stock up on these items before next month.' Predictions that help you plan ahead."
              delay={0.5}
              hoverEffect="scale"
            />
            <FeatureCard
              icon={<CreditCard className="h-6 w-6 text-primary" />}
              title="Smart Credit Management"
              description="AI helps you decide which customers are good candidates for credit and reminds them to pay (so you don't have to)."
              delay={0.6}
              hoverEffect="scale"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-950 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                How It Works
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Simple enough for anyone to use
              </h2>
              <p className="text-lg text-gray-300">
                No tech degree required. If you can use a smartphone, you can use iHustle POS.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="space-y-12">
                  <FadeIn delay={0.1}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        1
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-white">Snap photos of your products</h3>
                        <p className="text-gray-300">
                          Take a few pics with your phone, and our AI will do the rest - identifying items, creating
                          descriptions, and suggesting prices.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        2
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-white">Sell with a tap</h3>
                        <p className="text-gray-300">
                          Our super simple checkout process makes selling quick and painless. Cash, card, mobile money -
                          whatever works for your Hustle.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        3
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-white">Keep your customers coming back</h3>
                        <p className="text-gray-300">
                          Track what your customers love, offer them credit when it makes sense, and use AI to keep them
                          happy and spending.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        4
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-white">Get smarter every day</h3>
                        <p className="text-gray-300">
                          Our AI learns what works for your Hustle and gives you tips that actually help you sell more
                          and waste less.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>

              <div className="order-1 flex items-center justify-center lg:order-2">
                <FadeIn delay={0.5}>
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/30 to-blue-500/20 blur-xl"></div>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg"
                    >
                      {/* Product Creation Mockup */}
                      <div className="relative h-[600px] w-[400px] overflow-hidden bg-gray-900 p-4">
                        {/* App Header */}
                        <div className="mb-4 flex items-center justify-between">
                          <h2 className="text-lg font-bold text-white">New Product</h2>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>

                        {/* Camera View */}
                        <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl bg-gray-800">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-16 w-16 rounded-full border-2 border-dashed border-primary"></div>
                          </div>
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                              <div className="h-3 w-3 rounded-full bg-primary"></div>
                            </div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">
                              <ArrowRight className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* AI Processing */}
                        <div className="mb-4 rounded-xl bg-gray-800 p-4">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                              <Brain className="h-3 w-3 text-primary" />
                            </div>
                            <p className="text-sm font-medium text-white">AI is analyzing your product</p>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                              <motion.div
                                className="h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: ["0%", "100%"] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              />
                            </div>
                            <p className="text-xs text-gray-400">Identifying product type...</p>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="rounded-xl bg-gray-800 p-4">
                          <h3 className="mb-3 text-sm font-medium text-white">AI Detected Product</h3>
                          <div className="space-y-3">
                            <div>
                              <p className="mb-1 text-xs text-gray-400">Product Name</p>
                              <p className="text-sm text-white">Black Cotton T-Shirt</p>
                            </div>
                            <div>
                              <p className="mb-1 text-xs text-gray-400">Category</p>
                              <p className="text-sm text-white">Clothing &gt; T-Shirts</p>
                            </div>
                            <div>
                              <p className="mb-1 text-xs text-gray-400">Suggested Price</p>
                              <p className="text-sm text-white">KES 1,200</p>
                            </div>
                            <div>
                              <p className="mb-1 text-xs text-gray-400">Description</p>
                              <p className="text-sm text-white">
                                Classic black cotton t-shirt, medium weight fabric, round neck.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* Testimonials Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                Early Adopters Love Us
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Don't just take our word for it
              </h2>
              <p className="text-lg text-gray-300">Here's what our beta testers have to say about iHustle POS.</p>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="I was skeptical about the AI stuff, but wow! It saved me hours of work adding products. Now I just snap pics and the system does the rest."
              author="Sarah K."
              role="Clothing Store Owner"
              avatar="/placeholder.svg?height=48&width=48"
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              quote="The credit sales feature is a game-changer for my Hustle. My customers love the flexibility, and the AI reminders mean I don't have to chase payments."
              author="Michael O."
              role="Electronics Retailer"
              avatar="/placeholder.svg?height=48&width=48"
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              quote="I'm not tech-savvy at all, but iHustle is actually fun to use! The AI suggestions have helped me stock the right products at the right time."
              author="Priya M."
              role="Grocery Store Owner"
              avatar="/placeholder.svg?height=48&width=48"
              rating={4}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-950 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                Pricing
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Simple pricing that grows with your Hustle
              </h2>
              <p className="text-lg text-gray-300">
                No hidden fees, no surprises. Just straightforward pricing that makes sense for small businesses.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              title="Starter"
              price="$29"
              description="Perfect for new and small retailers just getting started"
              features={[
                "Core POS functionality",
                "Basic inventory management",
                "Up to 500 products",
                "1 user account",
                "Email support",
              ]}
              buttonText="Get Started"
              popular={false}
              delay={0.1}
            />
            <PricingCard
              title="Growth"
              price="$79"
              description="For businesses ready to leverage the power of AI"
              features={[
                "Everything in Starter",
                "AI product creation",
                "Credit sales management",
                "Up to 2,000 products",
                "3 user accounts",
                "Priority support",
              ]}
              buttonText="Get Started"
              popular={true}
              delay={0.2}
            />
            <PricingCard
              title="Scale"
              price="$149"
              description="For established businesses with multiple locations"
              features={[
                "Everything in Growth",
                "Advanced AI analytics",
                "Multi-location support",
                "Unlimited products",
                "10 user accounts",
                "Dedicated account manager",
              ]}
              buttonText="Contact Sales"
              popular={false}
              delay={0.3}
            />
          </div>

          <div className="mt-16">
            <FadeIn delay={0.4}>
              <div className="mx-auto max-w-3xl rounded-2xl bg-gray-800 p-8 shadow-sm">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">Need something custom?</h3>
                    <p className="mt-2 text-gray-300">
                      Let's chat about what you need. We're flexible and love helping businesses find the right solution
                      for their Hustle.
                    </p>
                  </div>
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
                    Contact Us
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to supercharge your Hustle?
              </h2>
              <p className="mb-8 text-lg text-white/80">
                Join our growing community of smart retailers who are using AI to work smarter, not harder.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                  Start your free trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                  See a demo
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Questions? We've got answers
              </h2>
              <p className="text-lg text-gray-300">Here's what people usually want to know.</p>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-xl font-semibold text-white">Do I need to be tech-savvy to use iHustle?</h3>
                <p className="mt-2 text-gray-300">
                  Not at all! If you can use WhatsApp, you can use iHustle. We've designed it to be super intuitive, and
                  our AI features actually make technology work for you, not the other way around.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-xl font-semibold text-white">Can I use iHustle when my internet is down?</h3>
                <p className="mt-2 text-gray-300">
                  We know connectivity can be an issue. iHustle works offline and automatically syncs when you're back
                  online. No more lost sales due to network problems.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-xl font-semibold text-white">How does the AI product creation actually work?</h3>
                <p className="mt-2 text-gray-300">
                  It's like magic, but real! Just snap a few photos of your product, and our AI identifies what it is,
                  writes a description, suggests categories, and even recommends pricing based on similar items. What
                  used to take 10 minutes now takes 10 seconds.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold text-white">Is my data safe with you?</h3>
                <p className="mt-2 text-gray-300">
                  100%. We take security seriously. Your data is encrypted, backed up, and never shared with third
                  parties. Plus, you always maintain ownership of your business information.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div>
                <h3 className="text-xl font-semibold text-white">Can iHustle help me sell online too?</h3>
                <p className="mt-2 text-gray-300">
                  Yes! We make it super easy to post your products on social media with AI-generated descriptions and
                  hashtags. Plus, we're working on integrations with popular e-commerce platforms.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div>
                <h3 className="text-xl font-semibold text-white">What kind of support do you offer?</h3>
                <p className="mt-2 text-gray-300">
                  We're here for you! All plans include email support, with faster response times for higher tiers. We
                  also have video tutorials, a knowledge base, and an active community of users helping each other out.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-950 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-12 shadow-xl">
            <div className="text-center">
              <FadeIn>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Try iHustle free for 14 days
                </h2>
                <p className="mb-8 text-lg text-white/80">
                  No credit card needed. See how AI can transform your Hustle.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                    Start your free trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white text-white hover:bg-white/10"
                  >
                    Schedule a demo
                  </Button>
                </div>
                <p className="mt-6 text-sm text-white/70">
                  By signing up, you agree to our{" "}
                  <Link href="/terms" className="underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
