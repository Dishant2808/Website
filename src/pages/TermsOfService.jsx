import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Our terms and conditions for using our services and working with us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Krishna WebWorks' services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                Krishna WebWorks provides web development, mobile development, and digital solutions 
                services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Custom web application development</li>
                <li>Mobile app development (iOS and Android)</li>
                <li>Backend development and API creation</li>
                <li>UI/UX design services</li>
                <li>DevOps and cloud deployment solutions</li>
                <li>Maintenance and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for feedback and approval in a timely manner</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Provide necessary access to systems and resources</li>
                <li>Respect intellectual property rights</li>
                <li>Use our services in compliance with applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional fees</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All prices are subject to change with 30 days notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Unless otherwise specified in writing:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Client retains ownership of their existing intellectual property</li>
                <li>Work created specifically for the client becomes their property upon full payment</li>
                <li>Krishna WebWorks retains rights to general methodologies and frameworks</li>
                <li>Open source components remain under their respective licenses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality regarding client information and projects. 
                We will not disclose confidential information to third parties without written consent, 
                except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Project Timeline and Deliverables</h2>
              <p className="text-gray-700 mb-4">
                Project timelines and deliverables will be specified in individual project agreements. 
                Delays caused by client factors (late feedback, missing requirements, etc.) may 
                extend project timelines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Warranty and Support</h2>
              <p className="text-gray-700 mb-4">
                We provide a 90-day warranty on delivered work for defects in materials and workmanship. 
                Support and maintenance services are available under separate agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Krishna WebWorks shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not 
                limited to loss of profits, data, or business opportunities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with 30 days written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All outstanding invoices become immediately due</li>
                <li>Work completed up to the termination date will be delivered</li>
                <li>Confidentiality obligations continue indefinitely</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Force Majeure</h2>
              <p className="text-gray-700 mb-4">
                Neither party shall be liable for any failure or delay in performance due to circumstances 
                beyond their reasonable control, including but not limited to acts of God, natural disasters, 
                war, terrorism, or government actions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                where Krishna WebWorks is incorporated, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@krishnawebworks.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 123 Business Street, City, State 12345
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
