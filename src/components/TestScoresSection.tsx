import { Trophy } from "lucide-react";

const scores = [
  {
    title: "JEE Mains 2020",
    score: "97.5 %ile",
    description: "Joint Entrance Examination (Main)",
  },
  {
    title: "IELTS 2025",
    score: "8.0 / 9.0",
    description: "International English Language Testing System",
  },
];

const TestScoresSection = () => {
  return (
    <section id="test-scores" className="py-20 md:py-28">
      <div className="section-container">
        <h2 className="section-title">
          <span className="section-title-accent">Test</span> Scores
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {scores.map((item, index) => (
            <div key={index} className="card-portfolio text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Trophy className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-1">{item.score}</h3>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestScoresSection;
