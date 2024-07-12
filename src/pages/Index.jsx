import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package2, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-4">
            <Package2 className="h-6 w-6" />
            <span className="font-bold">SaaS Startup</span>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </a>
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </a>
            <Button size="sm">Sign Up</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to SaaS Startup
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Empower your business with our innovative SaaS solution. Streamline your workflow and boost productivity.
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Our Features
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Easy Integration", description: "Seamlessly integrate with your existing tools" },
              { title: "Real-time Analytics", description: "Get insights with our powerful analytics dashboard" },
              { title: "24/7 Support", description: "Our support team is always ready to help you" },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CheckCircle className="w-8 h-8 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container py-12 md:py-24 lg:py-32 bg-gray-100">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Basic", price: "$9.99/mo", features: ["Feature 1", "Feature 2", "Feature 3"] },
              { title: "Pro", price: "$19.99/mo", features: ["All Basic features", "Feature 4", "Feature 5"] },
              { title: "Enterprise", price: "$49.99/mo", features: ["All Pro features", "Feature 6", "Feature 7"] },
            ].map((plan, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                About Us
              </h2>
              <p className="text-gray-500">
                SaaS Startup is dedicated to providing innovative solutions for businesses of all sizes. Our mission is to simplify complex processes and empower our clients with cutting-edge technology.
              </p>
            </div>
            <div className="flex-1">
              <img src="/placeholder.svg" alt="About Us" className="mx-auto object-cover w-full h-[300px]" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-12 md:py-24 lg:py-32 bg-gray-100">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Contact Us
          </h2>
          <form className="max-w-md mx-auto space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center space-x-4">
            <Facebook className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Linkedin className="h-5 w-5" />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 SaaS Startup. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;