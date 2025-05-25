import { Sparkles } from "lucide-react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        {/* Heading */}
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              Contact Us
            </span>
            <span className="text-gray-500 font-extrabold">
              – We're here to help!
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Have questions, feedback, or just want to say hello? Reach out to us anytime. We’d love to hear from you.
          </p>
        </div>

        {/* Contact Info & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-xl drop-shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            <Button className="w-full">
              Send Message <Sparkles className="ml-2" />
            </Button>
          </div>

          {/* Image */}
          <div className="w-full max-h-96 rounded-xl overflow-hidden drop-shadow-md">
            <img
              src="/assets/img/contact.png"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>

      {/* Final CTA Section */}
      <Container className="pt-12 space-y-6">
        <h3 className="text-lg font-semibold text-gray-700 text-center">
          You can also reach us on:
        </h3>

        <div className="flex flex-col items-center space-y-2 text-muted-foreground text-sm">
          <p>Email: <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a></p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Faisalabad, Pakistan</p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
