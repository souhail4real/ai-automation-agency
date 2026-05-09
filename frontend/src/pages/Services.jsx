import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'

export default function Services() {
  const services = [
    {
      icon: '⚙️',
      title: 'Workflow Automation',
      description: 'Connect your tools, automate repetitive tasks, and streamline business processes. From data entry to multi-step workflows, we handle it all.',
    },
    {
      icon: '🤖',
      title: 'AI Chatbots & Assistants',
      description: 'Deploy intelligent AI chatbots that understand context, qualify leads, and provide 24/7 customer support without human intervention.',
    },
    {
      icon: '👥',
      title: 'CRM & Lead Management Automation',
      description: 'Automatically capture leads, assign sales reps, send follow-ups, and track customer interactions across your entire pipeline.',
    },
    {
      icon: '🔄',
      title: 'RPA Solutions',
      description: 'Robotic Process Automation for high-volume, rule-based tasks. Perfect for data processing, order management, and compliance workflows.',
    },
    {
      icon: '📊',
      title: 'Reporting & Analytics Dashboards',
      description: 'Real-time dashboards that consolidate data from multiple sources, providing instant visibility into your business metrics.',
    },
    {
      icon: '🔌',
      title: 'API Integrations & Data Sync',
      description: 'Custom integrations that connect your entire tech stack and keep data synchronized across all platforms in real-time.',
    },
  ]

  return (
    <div className="min-h-screen bg-navy pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-navy-light to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Comprehensive Automation Solutions</h1>
            <p className="section-subtitle">
              Explore our full range of automation services designed to solve your specific business challenges and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Implementation Process"
            subtitle="We follow a proven methodology to deliver automation solutions that stick."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'Discovery', description: 'We analyze your processes, systems, and goals to identify automation opportunities.' },
              { number: '02', title: 'Design', description: 'Our team designs custom automation workflows tailored to your specific needs.' },
              { number: '03', title: 'Build & Test', description: 'We develop and thoroughly test your automation solution for reliability and efficiency.' },
              { number: '04', title: 'Deploy & Support', description: 'We launch your solution and provide ongoing support and optimization.' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl border border-electric-blue/20"
              >
                <div className="text-4xl font-bold text-electric-blue-bright mb-3">{step.number}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Our Automation Solutions Stand Out"
            subtitle="Built with best practices and cutting-edge technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Scalable Architecture', icon: '📈', description: 'Solutions designed to grow with your business, handling increased volume without performance degradation.' },
              { title: 'Security First', icon: '🔒', description: 'Enterprise-grade security, data encryption, and compliance with industry standards.' },
              { title: '24/7 Monitoring', icon: '👁️', description: 'Continuous monitoring and alerts ensure your automation systems run smoothly around the clock.' },
              { title: 'Easy Integration', icon: '🔗', description: 'Seamless integration with your existing tools and platforms without disrupting current operations.' },
              { title: 'Real-Time Analytics', icon: '📊', description: 'Detailed insights into automation performance, cost savings, and efficiency gains.' },
              { title: 'Dedicated Support', icon: '🤝', description: 'Expert support team ready to help with any questions or adjustments.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Build Your Automation Strategy"
        subtitle="Schedule a free consultation to discuss how we can automate your workflows and drive results."
        buttonText="Book Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}
