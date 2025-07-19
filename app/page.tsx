import Navbar from '../components/Navbar';
import RecurringDatePicker from '../components/RecurringDatePicker';
import '../styles/globals.css';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Recurring Events Manager - Simplify Your Scheduling</title>
        <meta name="description" content="Manage recurring events and appointments with ease" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Dancing+Script:wght@700&family=Poppins:wght@300;600&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-4">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-800 mb-6 font-montserrat">
            Simplify Your <span className="text-blue-600 font-dancing">Recurring</span> Events
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-poppins">
            The ultimate tool to manage repeating appointments, meetings, and events with ease
          </p>
          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Calendar and scheduling concept"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-purple-900 opacity-30"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-montserrat">
            Powerful <span className="text-purple-600 font-dancing">Features</span> For Your Scheduling Needs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Recurring events"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3 font-montserrat">Flexible Recurrence</h3>
              <p className="text-gray-600 font-poppins">
                Set up events that repeat daily, weekly, monthly, or with custom patterns. Never miss important recurring appointments again.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Calendar visualization"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3 font-montserrat">Visual Calendar</h3>
              <p className="text-gray-600 font-poppins">
                See all your recurring events in a beautiful, intuitive calendar view. Drag and drop to reschedule with ease.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Notifications"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-3 font-montserrat">Smart Reminders</h3>
              <p className="text-gray-600 font-poppins">
                Get notified before each event. Customize reminders by email, SMS, or push notifications.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-6xl mx-auto mb-20 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-montserrat">
            How Our <span className="text-blue-600 font-dancing">Recurring Date Picker</span> Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4 font-montserrat">1. Create Your Event</h3>
              <p className="text-gray-600 mb-6 font-poppins">
                Start by naming your event and setting the initial date. Our intuitive interface guides you through each step.
              </p>
              
              <h3 className="text-2xl font-semibold text-purple-700 mb-4 font-montserrat">2. Set Recurrence Pattern</h3>
              <p className="text-gray-600 mb-6 font-poppins">
                Choose how often your event repeats - daily, weekly, monthly, or create custom patterns like "every other Tuesday".
              </p>
              
              <h3 className="text-2xl font-semibold text-purple-700 mb-4 font-montserrat">3. Review & Save</h3>
              <p className="text-gray-600 font-poppins">
                Preview all occurrences before saving. Edit individual instances or the entire series anytime.
              </p>
            </div>
            
            <div className="relative h-80">
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Person using calendar app"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-montserrat">
            Try Our <span className="text-purple-600 font-dancing">Recurring Date Picker</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto font-poppins">
            Experience the power of our tool firsthand. Create a sample recurring event below to see how it works.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <RecurringDatePicker />
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-montserrat">
            What Our <span className="text-blue-600 font-dancing">Users</span> Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <p className="text-gray-700 italic mb-4 font-poppins">
                "This tool has completely transformed how I manage my weekly team meetings. Setting up recurring sessions takes seconds now!"
              </p>
              <div className="flex items-center">
                <Image 
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 font-montserrat">Sarah Johnson</h4>
                  <p className="text-purple-600 text-sm font-poppins">Project Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-gray-700 italic mb-4 font-poppins">
                "As a fitness instructor, I have classes at different times each week. This app handles all my scheduling needs perfectly."
              </p>
              <div className="flex items-center">
                <Image 
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Michael Chen"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 font-montserrat">Michael Chen</h4>
                  <p className="text-blue-600 text-sm font-poppins">Fitness Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center font-poppins">
          <p>© {new Date().getFullYear()} Recurring Events Manager. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Simplify your scheduling, one recurring event at a time.</p>
        </div>
      </footer>
    </>
  );
}