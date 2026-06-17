'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}


export default function AIAgenciesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [socialProofLightboxOpen, setSocialProofLightboxOpen] = useState(false)
  const [socialProofLightboxIndex, setSocialProofLightboxIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      try {
        // Insert into Supabase
        const { error } = await supabase
          .from('leads')
          .insert([
            {
              name: name,
              email: email,
              source: 'ai-agency-scaling'
            }
          ])

        if (error) throw error

        // Show success message
        setFormSubmitted(true)

        // Trigger PDF download
        const link = document.createElement('a')
        link.href = '/scaling-guide.pdf'
        link.download = 'AI-Agency-Scaling-Guide.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Close modal after delay
        setTimeout(() => {
          setFormSubmitted(false)
          setName('')
          setEmail('')
          setModalOpen(false)
        }, 3000)
      } catch (error: any) {
        console.error('Form submission error:', error)
        console.error('Error message:', error?.message)
        console.error('Error details:', JSON.stringify(error, null, 2))
        alert('Something went wrong. Please try again. Check console for details.')
      }
    }
  }

  const faqItems = [
    {
      q: 'I\'m only at $3-5K/month. Can I really hit $20K?',
      a: 'Yes. The jump from $5K to $20K is usually not about working harder — it\'s about packaging, pricing, and positioning. This framework shows you exactly how.',
    },
    {
      q: 'Do I need to specialize in a specific AI niche?',
      a: 'It helps, but this works whether you\'re doing AI copywriting, automation, customer support, lead gen, or custom solutions. The business model is the same.',
    },
    {
      q: 'What if I\'m not good at sales?',
      a: 'This isn\'t about becoming a salesman. It\'s about positioning yourself as the expert so clients seek you out. That\'s different.',
    },
    {
      q: 'Won\'t scaling to $20K mean taking on more clients?',
      a: 'Not necessarily. It\'s about raising your prices and project sizes, not doing more volume. Fewer, bigger, more profitable projects.',
    },
    {
      q: 'How long does it take to go from $5K to $20K?',
      a: 'Depends on your current positioning, but most consultants who implement this see movement within 60-90 days. Some faster, some slower.',
    },
    {
      q: 'Is this a blueprint or done-for-you?',
      a: 'This is a call to map out your specific situation and show you exactly what your path to $20K looks like.',
    },
  ]

  const painPoints = [
    {
      title: 'You\'re doing $5-10K/month but stuck because you can\'t scale without working 60+ hour weeks.',
      desc: '',
    },
    {
      title: 'Every client project drains you because you haven\'t systematized your delivery.',
      desc: '',
    },
    {
      title: 'You\'re competing on price with other consultants instead of commanding premium fees.',
      desc: '',
    },
    {
      title: 'Lead generation feels random — you\'re relying on referrals instead of a repeatable system.',
      desc: '',
    },
    {
      title: 'You\'re scared to take on bigger projects because you don\'t know if you can deliver profitably.',
      desc: '',
    },
  ]

  const modules = [
    'The pricing and project structure that lets you hit $20K/month as a solo consultant',
    'How to package your AI consulting service so every project is profitable and repeatable',
    'The lead generation system that fills your pipeline with qualified, high-intent clients',
    'How to position yourself as the expert so clients come to you, not vice versa',
    'The delivery framework that lets you take on bigger projects without longer hours',
    'Real examples from AI consultants scaling to $20K+ per month solo',
  ]

  const campaignScreenshots = [
    '/campaigns/campaign-1.png',
    '/campaigns/campaign-2.png',
    '/campaigns/campaign-3.png',
    '/campaigns/campaign-4.png',
    '/campaigns/campaign-5.png',
    '/campaigns/campaign-6.png',
    '/campaigns/campaign-7.png',
    '/campaigns/campaign-8.png',
    '/campaigns/campaign-9.png',
    '/campaigns/campaign-10.png',
    '/campaigns/campaign-11.png',
    '/campaigns/campaign-12.png',
    '/campaigns/campaign-13.png',
    '/campaigns/campaign-14.png',
    '/campaigns/campaign-15.png',
    '/campaigns/campaign-16.png',
    '/campaigns/campaign-17.png',
    '/campaigns/campaign-18.png',
  ]

  const socialProofImages = [
    '/social-proof/IMG_5437.PNG',
    '/social-proof/Screenshot 2026-06-04 at 11.33.12.png',
    '/social-proof/Screenshot 2026-06-04 at 11.33.00.png',
    '/social-proof/Screenshot 2026-06-04 at 11.33.33.png',
    '/social-proof/Screenshot 2026-06-04 at 11.33.27.png',
    '/social-proof/Screenshot 2026-06-04 at 11.33.20.png',
    '/social-proof/IMG_6057.PNG',
    '/social-proof/bytobyanand_1771106332_highlight18077613521601332.jpg',
    '/social-proof/Screenshot 2026-06-04 at 11.33.46.png',
  ]

  return (
    <div className="min-h-screen bg-black text-white w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-transparent w-full">
        <div className="container-wrapper relative z-10">
          <div className="flex items-center justify-between h-16">
            <div className="text-lg font-semibold text-white">
              AI Consultant's Playbook
            </div>
            <a href="https://api.leadconnectorhq.com/widget/bookings/ai-operators-consult" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 whitespace-nowrap">
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-0">
        <div className="container-wrapper relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-6xl mx-auto"
          >
            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 md:mb-6 text-white"
            >
              Build a $20K/Month AI Consulting Business Without a Team
            </motion.h1>

            {/* Subheadline */}
            <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
              <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-2 md:mb-3">
                Scale to 20k a month with a lean AI consulting business.
              </p>
              <p className="text-sm md:text-base text-gray-400 font-normal">
              </p>
            </motion.div>

            {/* Video Container */}
            <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
              <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/TSUHSGSrSI8"
                    title="AI Agency Scaling Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3">
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/ai-operators-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                Book a Call
              </a>
              <a
                href="/why_cold_email_fails_AOC.pdf"
                download
                className="text-purple-400 hover:text-purple-300 text-xs font-semibold transition-colors"
              >
                ↓ Or download the playbook
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Results Grid */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-0 bg-gradient-to-b from-black via-purple-950/10 to-black relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wrapper relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12 lg:mb-16 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
          >
            What Consultants Are Building Now
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {campaignScreenshots.map((screenshot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="cursor-pointer group"
                onClick={() => {
                  setLightboxIndex(i)
                  setLightboxOpen(true)
                }}
              >
                <div className="border border-[#222222] rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 bg-[#0f0f0f] group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <img
                    src={screenshot}
                    alt={`Agency example ${i + 1}`}
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={campaignScreenshots[lightboxIndex]}
              alt={`Agency example ${lightboxIndex + 1}`}
              className="max-w-5xl max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) =>
                  prev === 0 ? campaignScreenshots.length - 1 : prev - 1
                )
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) =>
                  prev === campaignScreenshots.length - 1 ? 0 : prev + 1
                )
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ›
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
              {lightboxIndex + 1} / {campaignScreenshots.length}
            </div>
          </div>
        </motion.div>
      )}

      {/* Social Proof Masonry Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-0 bg-gradient-to-b from-black to-purple-950/15 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wrapper relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12 lg:mb-16 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
          >
            What People Are Saying
          </motion.h2>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
            {socialProofImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="cursor-pointer group break-inside-avoid mb-4"
                onClick={() => {
                  setSocialProofLightboxIndex(i)
                  setSocialProofLightboxOpen(true)
                }}
              >
                <div className="border border-[#222222] rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 bg-[#0f0f0f] group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <img
                    src={image}
                    alt={`Social proof ${i + 1}`}
                    className="w-full h-auto group-hover:opacity-90 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Lightbox Modal */}
      {socialProofLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSocialProofLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <motion.img
              key={socialProofLightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={socialProofImages[socialProofLightboxIndex]}
              alt={`Social proof ${socialProofLightboxIndex + 1}`}
              className="max-w-5xl max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSocialProofLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSocialProofLightboxIndex((prev) =>
                  prev === 0 ? socialProofImages.length - 1 : prev - 1
                )
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSocialProofLightboxIndex((prev) =>
                  prev === socialProofImages.length - 1 ? 0 : prev + 1
                )
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ›
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
              {socialProofLightboxIndex + 1} / {socialProofImages.length}
            </div>
          </div>
        </motion.div>
      )}

      {/* The Problem */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-0 bg-gradient-to-b from-black via-purple-950/10 to-black relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wrapper relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-12 lg:mb-16 text-white"
          >
            Why Most AI Consultants Stay Stuck at $10K/Month
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl mx-auto mb-12"
          >
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className="text-purple-500 font-bold text-lg mt-1 flex-shrink-0">•</div>
                <p className="text-gray-400 text-base leading-relaxed">
                  {point.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The System */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-0 bg-black">
        <div className="container-wrapper relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-center mb-16 text-white"
          >
            The AI Consulting Blueprint
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8 max-w-3xl mx-auto"
          >
            {[
              {
                title: 'Price for profitability, not desperation',
                desc: 'Stop racing to the bottom. Charge based on value delivered, not hours worked. This alone can 4x your income.',
              },
              {
                title: 'Package your service so it scales',
                desc: 'Create repeatable offerings so you\'re not starting from scratch with every client. Same service, higher prices.',
              },
              {
                title: 'Build a lead system, not a referral habit',
                desc: 'Replace luck with a system. One or two reliable lead sources beats hoping your network remembers you.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="space-y-3"
              >
                <div className="flex items-start gap-4">
                  <span className="text-purple-500 text-lg font-black flex-shrink-0">
                    {i + 1}.
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed ml-8">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-0 bg-black">
        <div className="container-wrapper relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-center mb-16 text-white"
          >
            What We'll Map Out On Your Call
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {modules.map((module, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className="text-purple-500 font-bold text-lg mt-1 flex-shrink-0">✓</div>
                <p className="text-gray-400 text-base leading-relaxed">
                  {module}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-0 bg-black">
        <div className="container-wrapper max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-center mb-16 text-white"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border border-[#222222] rounded-lg overflow-hidden hover:border-[#333333] transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-colors"
                >
                  <span className="text-left font-semibold text-white text-sm">
                    {item.q}
                  </span>
                  <span
                    className={`text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-black border-t border-[#222222]"
                  >
                    <p className="text-gray-400 leading-relaxed text-sm">{item.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-0 bg-black">
        <div className="container-wrapper relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black mb-6 text-white"
            >
              Most AI Consultants Stop at $10K. You Don't Have To.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-gray-400 mb-6 md:mb-8"
            >
              Book a call and we'll map out exactly what your path to $20K/month looks like — no generic advice, specific to your situation.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-3"
            >
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/ai-operators-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                BOOK A CALL
              </a>
              <a
                href="/why_cold_email_fails_AOC.pdf"
                download
                className="text-purple-400 hover:text-purple-300 text-xs font-semibold transition-colors"
              >
                ↓ Or download the playbook
              </a>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-xs mt-3 md:mt-4"
            >
              ⏱ 30 minutes. No sales pitch. Just strategy.
            </motion.p>
          </motion.div>
        </div>
      </section>

{/* Footer */}
      <footer className="py-8 md:py-12 border-t border-purple-500/20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container-wrapper">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
            <p>&copy; 2026 AI Operators Collective. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300 transition">Twitter</a>
              <a href="#" className="hover:text-gray-300 transition">LinkedIn</a>
              <a href="#" className="hover:text-gray-300 transition">YouTube</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-purple-500/20 rounded-2xl p-8 md:p-10 max-w-md w-full relative overflow-hidden"
          >
            {/* Decorative gradient background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/5 to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors text-xl z-10"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="text-center py-12 relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">You're All Set!</h3>
                <p className="text-gray-400 text-sm mb-2">Your guide is downloading now.</p>
                <p className="text-gray-500 text-xs">Check your email for access and future updates.</p>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-2">
                  <h2 className="text-2xl font-black bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Get The Scaling Guide</h2>
                </div>
                <p className="text-gray-400 text-sm mb-1">
                  Get instant access to the free PDF guide.
                </p>
                <p className="text-gray-500 text-xs mb-6">
                  Download everything you need to scale from solopreneur to a six-figure agency.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-xs font-semibold block mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:bg-black transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-semibold block mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:bg-black transition-all text-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 mt-6 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
                  >
                    Send Me The PDF
                  </button>

                  <p className="text-gray-500 text-xs text-center mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  )
}
