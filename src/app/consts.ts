export const projects = [
  {
    name: "Taught People How to Oi!",
    description: [
      "Sexism should be a thing of the past, yet unfortunately it happens daily and too often goes unchecked.",
      "Oi! Observe and Intervene is a simple way people can challenge sexism when they overhear it.",
      "All the quotes we used were overheard by real women on social media, in the workplace, or in the street."
    ],
    image: "/HowToOi.jpg",
    link: "/work/how-to-oi",
  },
  {
    name: "Made a CPR Bra",
    description: [
      "Boobs shouldn’t be the difference between life and death. But St John Ambulance revealed that 1/3 people are afraid to give CPR to women because they are worried about inappropriate touching.",
      "We stepped in with the CPR Bra. The world’s first educational bra to bust the touch taboo.",
      "The campaign was launched on Restart a Heart day with Lioness legend Millie Bright and others. It spread far and wide on social and beyond.",
      "It was covered by BBC Breakfast, The Guardian, Forbes, The Mirror, The Daily Mail, Campaign, PR Week, Famous Campaigns and more. Plus St John Ambulance had an 26,000% traffic increase to their website! ",
      "Description 2",
    ],
    image: "/CPRBra.png",
    link: "/work/made-a-cpr-bra",
  },
  {
    name: "Turned Small Talk Into Real Talk",
    description: [
      "Conversations, particularly in workplaces always follow the same format. This film for Ruby Wax’s mental health charity is a funny depiction of office small talk, and encourages people to swap this boring talk for real talk.",
      "The campaign video launched on World Mental Health Day, and got Campaign’s Ad of the Day.",
    ],
    image: "/SmallTalk.jpg",
    link: "/work/turned-small-talk-into-real-talk",
  },
  {
    name: "World Without Soil",
    description: [
      "40% of the world’s farming soil is degraded. Terrifying, considering 95% of the food we eat relies on soil (including Heinz ketchup!)",
      "It’s hard to get people to care about soil. So we helped them picture a world without it.",
      "We took an iconic Van Gogh painting and repainted to reflect the present, and the future. The immersive exhibition was held for 3 days the Thyssen Gallery in Madrid.",
      "112M PR Impressions. Over 2,000 visitors. Coverage from 90+ media outlets. The campaign was even recognised for a Spanish sustainability award. ",
    ],
    image: "/WorldWithoutSoil.jpg",
    link: "/work/world-without-soil",
  },
  {
    name: "Made a Farting Billboard",
    description: [
      "The brief was simple. Use The Gut Stuff’s free OOH space to break a taboo around gut health. ",
      "The brief led to this silly idea, and some beautiful art direction and copywriting. Even better, the hero site was in the Trafford Centre, so I got to go back to my hometown to get Manchester talking about farts. My dad found it hilarious.",
    ],
    image: "/MadeAFartingBillboard.png",
    link: "/work/made-a-farting-billboard",
  },
  {
    name: "Brought Hope During Covid",
    description: [
      "This was an emergency film for WaterAid during the start of the COVID-19 pandemic. We had 2 weeks to come up with an idea, and shoot something to raise money quickly for people in need. ",
      "Water had never been so important, yet this moment in time, only 1/4 health centres globally had access to clean water.",
      "We borrowed the rainbow that became a sign of hope globally, and brought hope to those who need it most. ",
      "The film got WaterAid’s highest ever engagement rate online, and the most donations off the back of a TV they’d had to date.",
    ],
    image: "/BroughtHopeDuringCovid.jpg",
    link: "/work/brought-hope-during-covid",
  },
  {
    name: "Wind in the Willows",
    description: [
      "The UK is one of the most nature-depleted countries in the world. So we got Brits to connect to the issue by reinventing a classic British story",
      "We created a fake trailer for a Wind in the Willows remake, where Badger, Toad, Ratty and Mole find themselves in a world affected by climate change.",
    ],
    image: "/WindInTheWillows.jpg",
    link: "/work/wind-in-the-willows",
  },
  {
    name: "Callaly",
    description: [
      "A lot of products for women have changed a lot in the last 100 years. Except one very important thing a lot of us use every month: tampons. ",
      "This is an unboxing video with an important twist. All to sell the new “tampliner”,  one of the first major innovations in tampons in the past century.",
    ],
    image: "/Callaly.jpg",
    link: "/work/callaly",
  },
];

export interface Project {
  name: string;
  description: string[];
  image: string;
  link: string;
}