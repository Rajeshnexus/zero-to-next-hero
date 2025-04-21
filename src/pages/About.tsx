
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About NextHero
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Building the future of web applications
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Story</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                NextHero was founded with a simple mission: to create beautiful, performant web
                applications that are a joy to use. We believe in the power of React and modern
                web technologies to create exceptional user experiences.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Our team of passionate developers and designers work tirelessly to push the
                boundaries of what's possible on the web, creating tools and frameworks that
                help others build amazing products.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                We're on a mission to make web development more accessible, more performant,
                and more enjoyable for everyone. We believe that the best websites are not just
                functional, but beautiful and delightful to use.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Through our open-source projects, educational content, and professional services,
                we're helping to build a better web, one application at a time.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Our Values</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Quality</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We never compromise on quality. Every line of code, every design element, and
                  every interaction is crafted with care and attention to detail.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Innovation</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We're constantly exploring new technologies and approaches to solve problems
                  in novel and effective ways.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Community</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We believe in the power of community and open source. We give back through
                  contributions, education, and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
