export default function Newsfeed() {
const newsArray = [
    {
      title: "Breaking News",
      description: "Local Cat Holds Press Conference to Demand More Treats. In a surprising turn of events, Fluffy the cat called a press conference today, demanding an increase in the daily treat quota. The feline activist claims it's time for humans to recognize the importance of treats in the pursuit of global happiness."
    },
    {
      title: "Unicorn Sighting in Downtown",
      description: "Chaos ensued during rush hour when a unicorn was spotted trotting through the city streets. Commuters were torn between taking selfies and questioning the authenticity of their morning coffee."
    },
    {
      title: "World's Laziest Person Finally Gets Up, Achieves Nothing",
      description: "After years of dedicated inactivity, local resident Tim Slackington surprised friends and family by getting up from the couch today. However, reports indicate that he promptly returned to binge-watching his favorite TV show without accomplishing anything."
    },
    {
      title: "Scientific Breakthrough: Researchers Discover the Real Purpose of Belly Buttons",
      description: "In a groundbreaking study, scientists have finally determined that belly buttons are, in fact, tiny alien communication devices. They suggest that humans have been unknowingly hosting intergalactic conversations for centuries."
    }
  ];

  return (
    <div>
      {newsArray.map((news, index) => (
        <div key={index}>
          <h3>{news.title}</h3>
          <p>{news.description}</p>
        </div>
      ))}
    </div>
  );
};