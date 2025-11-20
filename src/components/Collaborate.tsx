import { useEffect, useRef, useState, FormEvent } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

interface ContactProps {
  onVisible: () => void;
}

export default function Contact({ onVisible }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [onVisible]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="snap-start laptop:snap-none min-h-[100svh] md:min-h-[90dvh] laptop:h-screen laptop:w-screen laptop:flex-shrink-0 flex laptop:items-center bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="w-full px-6 sm:px-10 md:px-12 laptop:px-8 desktop:px-24 py-12 laptop:py-6 laptop:my-auto">
        <div className="max-w-2xl">
          <div className="text-xs sm:text-sm tracking-widest text-gray-400 mb-3 laptop:mb-0.5 desktop:mb-6">
            CHAPTER 5 — COLLABORATE
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl laptop:text-xl desktop:text-4xl font-light leading-tight mb-3 laptop:mb-1 desktop:mb-4"
            style={{ fontFamily: 'Georgia, serif', color: '#755C53' }}
          >
            Let's tell your story together...
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-[#755C53] to-transparent mb-12 laptop:mb-2 desktop:mb-20"></div>
        </div>

        <div className="space-y-12 laptop:space-y-2 desktop:space-y-16 max-w-2xl mx-auto text-center">
          <div>
            <h3 className="text-lg laptop:text-sm desktop:text-lg tracking-wider mb-6 laptop:mb-1 text-gray-900">STUDIO</h3>

            <div className="space-y-4 laptop:space-y-0.5 text-gray-700 laptop:text-xs desktop:text-[14px]">
              <p className="italic">By Appointment Only</p>
              <p className="leading-relaxed">
                2915 Red Hill Ave., A102<br />
                Costa Mesa, CA  92626
              </p>
            </div>
          </div>

          <div>
            <p className="italic text-gray-700 laptop:text-xs desktop:text-[14px] mb-2 laptop:mb-0.5">All inquiries</p>
            <a
              href="mailto:info@chervikayeds.com"
              className="text-blue-600 hover:text-blue-700 transition-colors underline text-base laptop:text-sm desktop:text-base"
            >
              info@cherylkayeds.com
            </a>
          </div>

          <div className="flex gap-3 justify-center items-center text-sm laptop:text-xs desktop:text-sm text-gray-600 italic">
            <a
              href="https://www.linkedin.com/in/cherylkaye"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Linkedin
            </a>
            <span>|</span>
            <a
              href="https://www.instagram.com/cherylkaye/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Instagram
            </a>
          </div>

          <div className="pt-8 laptop:pt-2 border-t border-gray-300">
            <h3 className="text-lg laptop:text-sm desktop:text-lg tracking-wider mb-8 laptop:mb-1.5 text-gray-900">STAY CONNECTED</h3>

            <form onSubmit={handleSubmit} className="space-y-6 laptop:space-y-2 w-full max-w-sm mx-auto">
              <div>
                <input
                  type="email"
                  placeholder="email*"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 laptop:py-3 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all text-sm laptop:text-xs desktop:text-sm"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 laptop:py-3 bg-[#755C53] text-white hover:bg-[#8B6F47] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm laptop:text-xs desktop:text-sm tracking-wider"
              >
                {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm">
                  Thank you for subscribing!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
