import Container from "@/components/container";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              About Us
            </span>
            <span className="text-gray-500 font-extrabold">
              - Meet the Minds Behind the Innovation
            </span>
            <br />
            We build smarter tools for smarter interviews.
          </h2>

          <p className="mt-4 text-muted-foreground text-sm max-w-3xl">
            Our mission is to help candidates around the world improve their
            interview skills with the power of AI. We believe in smarter
            preparation, personalized practice, and unlocking your full
            potential. Founded by passionate developers and interview experts,
            we aim to transform how people get hired.
          </p>
        </div>

        {/* team section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-xl bg-gray-100 drop-shadow-md overflow-hidden">
            <img
              src="/assets/img/team.png"
              alt="Our Team"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold text-gray-800">Who We Are</h3>
            <p className="text-muted-foreground mt-2">
              We’re a group of engineers, designers, and AI enthusiasts who are
              passionate about building intuitive platforms to help job seekers
              succeed. With cutting-edge technology and a human-first approach,
              we create tools that actually make a difference.
            </p>

            <Button className="mt-6">
              Learn More <Sparkles className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>

      {/* vision and mission */}
      <Container className="mt-16 space-y-12">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            To become the leading AI platform that helps millions of people
            worldwide unlock job opportunities through smart preparation.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Empower every job seeker with the tools, confidence, and insights
            they need to ace interviews and grow their careers.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
