
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Zap, LineChart, Shield, Globe } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
        
        {/* Hero content */}
        <div className="relative z-10 pt-16 pb-20 md:pt-32 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300">
              Build Modern Web Apps with NextHero
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A powerful React starter template inspired by Next.js with everything you need to create beautiful, responsive web applications.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md">
                Get Started
              </Button>
              <Button variant="outline" className="border-blue-300 text-blue-600 dark:border-blue-700 dark:text-blue-400 px-8 py-6 rounded-md">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Lightning Fast
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Built on Vite for incredibly fast development and optimized production builds.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  TypeScript Ready
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                First-class TypeScript support for type safety and better developer experience.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <LineChart className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Responsive Design
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Beautiful UI components that work perfectly on any device, powered by Tailwind CSS.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Modern Best Practices
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Follows modern React patterns and best practices for maintainable code.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Dark Mode Support
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Built-in dark mode with automatic detection of system preferences.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="h-6 w-6 text-blue-500 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Ready to Extend
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Modular architecture that's easy to extend and customize for your specific needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Loved by Developers
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of developers building amazing applications with NextHero
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">JS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Jane Smith</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "NextHero has revolutionized how I build React applications. The developer experience is unmatched!"
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">TD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Thomas Davis</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The combination of TypeScript, React, and the modular architecture saved me weeks of setup time."
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">AR</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Alicia Richards</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The built-in components and styling system make it so easy to create beautiful interfaces quickly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of developers building amazing applications with NextHero.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-6 rounded-md flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/about">
              <Button variant="outline" className="border-blue-300 text-white hover:bg-blue-700 px-8 py-6 rounded-md">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
