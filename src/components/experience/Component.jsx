import {motion} from 'framer-motion';

export default function Component() {
  
    return (
      <motion.div 
        initial={{ y:100}}
        animate={{ y:0 , transition:{duration: 2}}}
        delay = '0.5'
        duration = '0.4'
        className="container mx-auto py-0 px-4 sm:px-6 lg:px-8">
        <motion.div className="relative overflow-hidden">
          <motion.div className="space-y-8">
            <motion.div className="relative">
              <motion.div className="absolute inset-y-0 left-6 w-0.5 bg-gray-300 dark:bg-gray-600" />
              <motion.div className="relative pl-16">
                <motion.div className="absolute left-0 -top-0 w-12 h-12 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-white dark:text-gray-900" />
                </motion.div>
                <motion.p className="text-lg font-semibold mb-1">Development Engineer</motion.p>
                <motion.div className='flex justify-between'>
                <motion.p className='text-sm font-medium'>Standard Chartered Bank</motion.p>
                <motion.p className='text-sm font-medium'>July. 2023 - Present</motion.p>
                </motion.div>
                <motion.li className="mt-2 text-sm">
                  Engineered robust RESTful APIs using Java 17 - Spring Boot and Maven, ensuring scalable, high-performance
                  endpoints that seamlessly support client applications and third-party integrations.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Utilized Junit and Mockito to implement comprehensive unit testing, significantly bolstering reliability and
                  increasing SonarQube code coverage to 90%.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Integrated Cucumber framework and Gherkin to create behavior-driven tests that bridged the gap between
                  technical requirements and business expectations, streamlining the acceptance testing process.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Developed data access layers by leveraging JDBC, Hibernate, and JPA, enhancing database interactions and
                  reducing query execution times by 20% through optimized ORM techniques.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Implemented caching mechanisms with EH Cache and Hazelcast Cache to reduce latency and improve response
                  times, resulting in a more responsive application under load.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Interfaced Kibana and ElasticSearch for real-time log analysis and system monitoring, which improved issue
                  diagnosis and accelerated troubleshooting processes.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Authored and maintained detailed API documentation using Swagger/OpenAPI, incorporating custom
                  Mustache templates for dynamic and automatic generation of model classes and API interfaces to ease down
                  development process.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Configured Kong API Gateway to implement smart routing strategies, enforce rate limiting, and optimize
                  performance through efficient load balancing.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Leveraged Apache Camel for enterprise integration patterns and orchestrated asynchronous messaging flows
                  with Kafka, enabling real-time data processing and resilient system architecture.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Operated within an Agile framework to drive incremental improvements and rapid iterations.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Managed and executed CI/CD pipelines on Azure DevOps, ensuring smooth containerization with Docker, and
                  automated deployments through Redis OpenShift Platform.
                </motion.li>
              </motion.div>
            </motion.div>
            <motion.div className="relative">
              <motion.div className="absolute inset-y-0 left-6 w-0.5 bg-gray-300 dark:bg-gray-600" />
              <motion.div className="relative pl-16">
                <motion.div className="absolute left-0 -top-0 w-12 h-12 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-white dark:text-gray-900" />
                </motion.div>
                <motion.p className="text-lg font-semibold mb-1">Sustenance Marketplace</motion.p>
                <motion.div className='flex justify-between'>
                <motion.p className='text-sm font-medium'>Sustenance Marketplace</motion.p>
                <motion.p className='text-sm font-medium'>March. 2022‑ September. 2022</motion.p>
                </motion.div>
                <motion.li className="mt-2 text-sm">
                  Automated the label printing process for B2B and B2C products, thus streamlining operations and improving
                  efficiency. And managed product data using PostgreSQL for accurate and timely information retrieval.
                </motion.li>
                <motion.li className="mt-2 text-sm">
                  Developed an user Access Control System based on ESP32 Technology which uses RFID cards to identify users,
                  record access tries and allow or deny access at certain sectors based on permission schedules.
                </motion.li>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    )
  }
  
  function BriefcaseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }