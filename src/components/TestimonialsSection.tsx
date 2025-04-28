
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The company registration process was incredibly smooth. Their team guided us through every step, making what seemed complex into something simple and straightforward.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    rating: 5
  },
  {
    quote: "I was amazed at how quickly they processed our application. Within a week, we had all our documentation and were ready to start operations. Highly recommended!",
    author: "Michael Chen",
    position: "Founder, GreenEco Solutions",
    rating: 5
  },
  {
    quote: "Their attention to detail prevented several potential issues with our registration. The expert guidance was invaluable and saved us both time and money.",
    author: "Priya Patel",
    position: "Director, Global Innovations",
    rating: 4
  },
  {
    quote: "As someone with no legal background, I appreciated how they explained everything in simple terms. Their customer service is exceptional.",
    author: "David Rodriguez",
    position: "Owner, Artisan Crafts Co.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-company-blue">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-white">What Our Clients Say</h2>
          <p className="subheading max-w-3xl mx-auto text-white opacity-80">
            We've helped hundreds of entrepreneurs launch their business dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl card-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-company-darkgray mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-company-blue">{testimonial.author}</p>
                <p className="text-company-darkgray text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
