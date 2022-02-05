import buiding from "/project/src/logo/Building-Quantum-Circuits-with-Javascript.png";
import buiding1 from "/project/src/logo/Pong-Game-in-Javascript.png";
import buiding2 from "/project/src/logo/Imposter-Syndrome-in-Tech.png";
import buiding3 from "/project/src/logo/10-things-js.png";
import buiding4 from "/project/src/logo/Web-Scraping-with-Python.png";
const Apiblog1 = [
  {
    id: "1",
    title: "Quantum Computing with Javascript using Q.js",
    descriton: "Tutorial",
    img: buiding,
    time: "2022-01-06",
    content:
      "While Quantum Computing may feel like a new buzzword, it’s been around for quite a long time. What started as a theoretical idea in the 1980s is slowly becoming a reality In this tutorial, we’ll be talking about how Quantum computing works and how you can use Javascript to simulate a simple Quantum circuit that you can play around with Quantum computing is a form of computation that harnesses the power and potential of Quantum Mechanics. Unlike classical computing that works with transistors and bit values 0 and 1, quantum computing uses the properties exhibited by subatomic particles to perform computations and solve problems too complex for classical computers It utilizes what’s known as qubits, which can have values 0, 1, or both 0 and 1 at the same time. This property of having two values at the same time is a feature of superposition and is only possible within quantum states and not classical ones ",
  },
  {
    id: "2",
    title: "Can we make Pong in less than a 100 lines of Javascript?",
    descriton: "Tutorial",
    img: buiding1,
    time: "2021-12-28",
    content:
      "The original Pong took Atari over 3 months to complete back in 1972. The classic arcade game was one of the first commercially successful games that paved the way for the game development industry. Additionally, it’s simplicity makes it one of the first projects that any programmer takes on. As a showcase of how much easier programming has become in the past 50 years, we’re going to be attempting to make Pong in less than 100 lines of Javascript! You can play the finished project deployed on Codesphere here.Let’s get started!",
  },
  {
    id: "3",
    title: "How to overcome Imposter Syndrome in Tech",
    descriton: "Tutorial",
    img: buiding2,
    time: "2021-12-23",
    content:
      "Ever felt the need to pull out data from a website? What would you do? Visit the sites one after the other and gather information? Well that would work if you have a page or two. However, if you have lots of them, manual extraction will become too difficult a task; this is where web scraping comes to the rescue! Web scraping, as the name suggests, is a method of extracting data from web pages in an automated fashion. Scraping is super helpful in price comparisons, R&D, gathering data from social media, job listings, and more. Many methods can be used to perform web scraping such as online services, APIs, or even writing your own script. And that’s why we are here. This article will teach you the basics of how to scrape data from the web. Before we get into that, let’s take a quick look at why we would even want to scrape data from the web.",
  },
  {
    id: "4",
    title: "10 Things You Didn’t Know You Could Do With Javascript",
    descriton: "Informative",
    img: buiding3,
    time: "2021-12-15",
    content:
      "Have you ever wondered why someone thinks so highly of you? Have you questioned why they’ve given you such a cool and important project to own at work?,The majority of us have probably experienced Imposter Syndrome during some stage of our lives. No matter if you’re just starting out in your career, if you’re a perfectionist, or a high performer with many years experience, millions of people suffer with imposter syndrome.A belief that you are not intelligent, creative or generally deserving of the success you are experiencing, even though there is plenty of evidence of your achievements.People who experience imposter syndrome are basically experiencing the feeling of being a fraud who is undeserving, which brings feelings of anxiety and stress as you feel like you’re misleading your colleagues and employees. Imposter syndrome is prevalent within the tech industry, with about 58% of tech employees stating that they currently experience some form of the condition within their careers. It’s especially common in software engineers, developers, and designers. It’s usually worse in people who are new within the tech industry, are part of an underrepresented group, or have come from different professional backgrounds.",
  },
  {
    id: "5",
    title: "Scrape Your First Website in Minutes with Python",
    descriton: "Informative",
    img: buiding4,
    time: "2021-12-06",
    content:
      "Every year Lisbon plays host to the world-famous Web Summit tech conference, and this year, along with over 42,000 other attendees for 128 countries the Codesphere team was there to introduce the next generation of cloud services to the community.The conference has always been about the people; The technologies on show are simply the tools that bring us all together. After 4 days of connecting with brilliant and insightful industry leaders, we are ready to get to work on the next steps in our plan to deliver the first truly holistic solution for startup cloud development. We learned that you’re probably using the cloud service provider you are because they gave you free credits right? Or better yet, you switched to your current provider because the last one ran out? We can’t argue with that and we are already hard at work on a better option for our users. Unmanageable UIs, the inability to debug, and ineffective monitoring are all part of the current reality for the CTOs and founders we spoke to, and we’re happy to provide the long-awaited solution to these problems with Codesphere so our users can get back to coding.Devs are a resourceful group and for every pain point, we discover there is a workaround in place, whether it’s using different tools on top of one another or straight up switching to different providers from project to project, devs have been finding a way.",
  },
];

export const getProductByIds = (id) => {
  const datas = Apiblog1.find((data) => data.id === id.id);

  return datas;
};
export default Apiblog1;
