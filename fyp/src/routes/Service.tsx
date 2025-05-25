import { BadgeCheck, Brain, Bot, Sparkles } from "lucide-react";
import Container from "@/components/container";

const services = [
  {
    icon: <Brain className="w-8 h-8 text-indigo-600" />,
    title: "AI-Powered Interview Practice",
    description:
      "Simulate real interview scenarios using AI-driven questions tailored to your role and experience level. Get real-time feedback on your answers and improve continuously.",
  },
  {
    icon: <Bot className="w-8 h-8 text-green-600" />,
    title: "Mock Interviews with Smart Feedback",
    description:
      "Take mock interviews and receive detailed analytics and suggestions powered by our smart evaluation engine to polish your communication and technical skills.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-600" />,
    title: "Customized Question Generation",
    description:
      "Generate personalized questions based on job role, company, and experience using advanced AI models. Practice targeted questions that reflect real industry demands.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-purple-600" />,
    title: "Progress Tracking & Performance Metrics",
    description:
      "Track your progress over time with rich visual analytics. See your improvements in communication, clarity, and technical depth through scorecards and reports.",
  },
];

const ServicesPage = () => {
  return (
    <div className="w-full pb-24 flex-col">
      <Container className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Our <span className="text-black">Services</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            We offer a suite of intelligent tools and features to supercharge your interview preparation using cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-lg border shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Let AI give you the edge.
          </h2>
          <p className="text-gray-500 mt-2">
            Our services are designed for students, professionals, and career changers who want to ace interviews with confidence and precision.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;
