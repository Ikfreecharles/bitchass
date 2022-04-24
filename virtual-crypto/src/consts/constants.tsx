import { FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import {
  IBitchAssCards,
  IContact,
  IFaq,
  IFeatures,
  IImages,
  ILaunch,
  IMenu,
  IMint,
  IRoadmap,
  ISocial,
  ITabs,
  ITeam,
  ITokenShare,
} from "../types/interface";

export const IMAGES: IImages[] = [
  { classname: "front", img: "./assets/images/BitChPoster1.jpg" },
  { classname: "back", img: "./assets/images/BitChPoster2.jpg" },
];
export const WHATIS: string[] = [
  ' This NFT Collection is GUARANTEED to revolutionize the way you look at UTILITY for an upcoming NFT project. ViZion Protocol is the first true decentralized cryptocurrency project that specializes in the Film, Music, Art and Entertainment Industry. "Bitch Ass" was Written, Directed and Produced by one of our co-founders, Bill Posley (Cobra Kai, The Neighborhood, Keenan). "Bitch Ass" is also starring one of ViZion Protocol &#39; s Co-Founders as well, Tunde Laleye (Black Panther, Zoo, Six.',
  'The "Bitch Ass" NFT Collection is a one-of-a-kind, never seen before mint, on the Solana Blockchain. With low gas fees, fast transactions and one of the most trusted and secure platforms in the industry, ViZion Protocol looks to merge the real world, the entertainment industry and these incredible experiences using blockchain technology. As you will see below, EVERY NFT will include perks and benefits that will be UNPARALLELED to any other launch in the history of cryptocurrency.',
];
export const CARDS: ITabs[] = [
  {
    id: "1",
    title: "Face",
    avatars: [
      {
        id: "1",
        image: "./assets/nfts/",
        name: "Ukrun",
        rarity: "10.00%",
      },
      {
        id: "2",
        image: "./assets/nfts/",
        name: "Pierced Ukrun",
        rarity: "10.00%",
      },
      {
        id: "3",
        image: "./assets/nfts/",
        name: "Pierced Dronkuk",
        rarity: "10.00%",
      },
      {
        id: "4",
        image: "./assets/nfts/",
        name: "Dronkuk",
        rarity: "10.00%",
      },
      {
        id: "5",
        image: "./assets/nfts/",
        name: "Pierced Zamol",
        rarity: "5.00%",
      },
      {
        id: "6",
        image: "./assets/nfts/",
        name: "Zamol",
        rarity: "5.00%",
      },
      {
        id: "7",
        image: "./assets/nfts/",
        name: "Vrenil",
        rarity: "5.00%",
      },
      {
        id: "8",
        image: "./assets/nfts/",
        name: "Pierced Vrenil",
        rarity: "5.00%",
      },
      {
        id: "9",
        image: "./assets/nfts/",
        name: "Pierced Gume",
        rarity: "5.00%",
      },
      {
        id: "10",
        image: "./assets/nfts/",
        name: "Gume",
        rarity: "5.00%",
      },
      {
        id: "11",
        image: "./assets/nfts/",
        name: "Higat",
        rarity: "10.00%",
      },
      {
        id: "12",
        image: "./assets/nfts/",
        name: "Pierced Higat",
        rarity: "5.00%",
      },
      {
        id: "13",
        image: "./assets/nfts/",
        name: "Pierced Farnol",
        rarity: "5.00%",
      },
      {
        id: "14",
        image: "./assets/nfts/",
        name: "Farnol",
        rarity: "5.00%",
      },
      {
        id: "15",
        image: "./assets/nfts/",
        name: "Chilgrut",
        rarity: "5.00%",
      },
      {
        id: "16",
        image: "./assets/nfts/",
        name: "Pierced Chilgrut",
        rarity: "5.00%",
      },
    ],
  },
  {
    id: "2",
    title: "Eye",
    avatars: [
      {
        id: "1",
        image: "./assets/nfts/",
        name: "Green Snob",
        rarity: "20.00%",
      },
      {
        id: "2",
        image: "./assets/nfts/",
        name: "Blue Snob",
        rarity: "20.00%",
      },
      {
        id: "3",
        image: "./assets/nfts/",
        name: "Indigo",
        rarity: "15.00%",
      },
      {
        id: "4",
        image: "./assets/nfts/",
        name: "Amazed",
        rarity: "13.00%",
      },
      {
        id: "5",
        image: "./assets/nfts/",
        name: "Focused",
        rarity: "10.00%",
      },
      {
        id: "6",
        image: "./assets/nfts/",
        name: "Shut",
        rarity: "10.00%",
      },
      {
        id: "7",
        image: "./assets/nfts/",
        name: "Star",
        rarity: "5.00%",
      },
      {
        id: "8",
        image: "./assets/nfts/",
        name: "Dot",
        rarity: "5.00%",
      },
      {
        id: "9",
        image: "./assets/nfts/",
        name: "Stoner",
        rarity: "2.00%",
      },
    ],
  },
  {
    id: "3",
    title: "Hair",
    avatars: [
      {
        id: "1",
        image: "./assets/nfts/",
        name: "Short",
        rarity: "30.00%",
      },
      {
        id: "2",
        image: "./assets/nfts/",
        name: "White Snob",
        rarity: "10.00%",
      },
      {
        id: "3",
        image: "./assets/nfts/",
        name: "Dark Snob",
        rarity: "10.00%",
      },
      {
        id: "4",
        image: "./assets/nfts/",
        name: "Mohawk",
        rarity: "10.00%",
      },
      {
        id: "5",
        image: "./assets/nfts/",
        name: "Pink Anime",
        rarity: "10.00%",
      },
      {
        id: "6",
        image: "./assets/nfts/",
        name: "Blue Anime",
        rarity: "10.00%",
      },
      {
        id: "7",
        image: "./assets/nfts/",
        name: "Yellow Anime",
        rarity: "8.00%",
      },
      {
        id: "8",
        image: "./assets/nfts/",
        name: "Bald",
        rarity: "2.00%",
      },
    ],
  },
  {
    id: "4",
    title: "Costume",
    avatars: [
      {
        id: "1",
        image: "./assets/nfts/",
        name: "Armor Plate",
        rarity: "30.00%",
      },
      {
        id: "2",
        image: "./assets/nfts/",
        name: "Grey Hoodie",
        rarity: "12.00%",
      },
      {
        id: "3",
        image: "./assets/nfts/",
        name: "Blue Hoodie",
        rarity: "8.00%",
      },
      {
        id: "4",
        image: "./assets/nfts/",
        name: "Pink Hoodie",
        rarity: "7.00%",
      },
      {
        id: "5",
        image: "./assets/nfts/",
        name: "White Tuxedo",
        rarity: "5.00%",
      },
      {
        id: "6",
        image: "./assets/nfts/",
        name: "Robe V2",
        rarity: "5.00%",
      },
      {
        id: "7",
        image: "./assets/nfts/",
        name: "Robe V1",
        rarity: "5.00%",
      },
      {
        id: "8",
        image: "./assets/nfts/",
        name: "Mech V1",
        rarity: "5.00%",
      },
      {
        id: "9",
        image: "./assets/nfts/",
        name: "Tactical",
        rarity: "5.00%",
      },
      {
        id: "10",
        image: "./assets/nfts/",
        name: "Panda",
        rarity: "5.00%",
      },
      {
        id: "11",
        image: "./assets/nfts/",
        name: "Mech V2",
        rarity: "10.00%",
      },
      {
        id: "12",
        image: "./assets/nfts/",
        name: "Clown",
        rarity: "5.00%",
      },
      {
        id: "13",
        image: "./assets/nfts/",
        name: "Cowboy",
        rarity: "5.00%",
      },
      {
        id: "14",
        image: "./assets/nfts/",
        name: "Captain",
        rarity: "5.00%",
      },
      {
        id: "15",
        image: "./assets/nfts/",
        name: "DBZ",
        rarity: "5.00%",
      },
      {
        id: "16",
        image: "./assets/nfts/",
        name: "Black Tuxedo",
        rarity: "5.00%",
      },
      {
        id: "17",
        image: "./assets/nfts/",
        name: "White Astronaut",
        rarity: "2.00%",
      },
      {
        id: "18",
        image: "./assets/nfts/",
        name: "Black Astronaut",
        rarity: "1.00%",
      },
    ],
  },
  {
    id: "5",
    title: "Front Accessories",
    avatars: [
      {
        id: "1",
        image: "./assets/nfts/",
        name: "Armor Helmet",
        rarity: "8.00%",
      },
      {
        id: "2",
        image: "./assets/nfts/",
        name: "Angel Head Ring",
        rarity: "5.00%",
      },
      {
        id: "3",
        image: "./assets/nfts/",
        name: "Mustache V2",
        rarity: "2.00%",
      },
      {
        id: "4",
        image: "./assets/nfts/",
        name: "Cigar",
        rarity: "2.00%",
      },
      {
        id: "5",
        image: "./assets/nfts/",
        name: "Bob Tag",
        rarity: "2.00%",
      },
      {
        id: "6",
        image: "./assets/nfts/",
        name: "Tattoo V4",
        rarity: "2.00%",
      },
      {
        id: "7",
        image: "./assets/nfts/",
        name: "Tattoo V3",
        rarity: "2.00%",
      },
      {
        id: "8",
        image: "./assets/nfts/",
        name: "Tattoo V2",
        rarity: "2.00%",
      },
      {
        id: "9",
        image: "./assets/nfts/",
        name: "Yellow Bucket Hat",
        rarity: "2.00%",
      },
      {
        id: "10",
        image: "./assets/nfts/",
        name: "Tattoo V1",
        rarity: "2.00%",
      },
      {
        id: "11",
        image: "./assets/nfts/",
        name: "Jewish Hat",
        rarity: "2.00%",
      },
      {
        id: "12",
        image: "./assets/nfts/",
        name: "Blue Bowtie",
        rarity: "2.00%",
      },
      {
        id: "13",
        image: "./assets/nfts/",
        name: "Red Bowtie",
        rarity: "2.00%",
      },
      {
        id: "14",
        image: "./assets/nfts/",
        name: "Kiddo Hat",
        rarity: "2.00%",
      },
      {
        id: "15",
        image: "./assets/nfts/",
        name: "Mustache V1",
        rarity: "2.00%",
      },
      {
        id: "16",
        image: "./assets/nfts/",
        name: "Blue Headphones",
        rarity: "2.00%",
      },
      {
        id: "17",
        image: "./assets/nfts/",
        name: "Red Headphones",
        rarity: "2.00%",
      },
      {
        id: "18",
        image: "./assets/nfts/",
        name: "Glasses V3",
        rarity: "2.00%",
      },
      {
        id: "19",
        image: "./assets/nfts/",
        name: "Hannibal Mask",
        rarity: "2.00%",
      },
      {
        id: "20",
        image: "./assets/nfts/",
        name: "Glasses V5",
        rarity: "2.00%",
      },

      {
        id: "21",
        image: "./assets/nfts/",
        name: "Dr. Sew's Hat",
        rarity: "2.00%",
      },
      {
        id: "22",
        image: "./assets/nfts/",
        name: "Dragonball Scout",
        rarity: "2.00%",
      },
      {
        id: "23",
        image: "./assets/nfts/",
        name: "Eyepatch",
        rarity: "2.00%",
      },
      {
        id: "24",
        image: "./assets/nfts/",
        name: "Demon Horns",
        rarity: "2.00%",
      },
      {
        id: "25",
        image: "./assets/nfts/",
        name: "Glasses V2",
        rarity: "2.00%",
      },
      {
        id: "26",
        image: "./assets/nfts/",
        name: "Cryptar Cap",
        rarity: "2.00%",
      },
      {
        id: "27",
        image: "./assets/nfts/",
        name: "Crown",
        rarity: "4.00%",
      },
      {
        id: "28",
        image: "./assets/nfts/",
        name: "Grey Beanie",
        rarity: "2.00%",
      },
      {
        id: "29",
        image: "./assets/nfts/",
        name: "Captain's Hat",
        rarity: "2.00%",
      },
      {
        id: "30",
        image: "./assets/nfts/",
        name: "Pink Beanie",
        rarity: "2.00%",
      },
      {
        id: "31",
        image: "./assets/nfts/",
        name: "Brown Beard",
        rarity: "2.00%",
      },
      {
        id: "32",
        image: "./assets/nfts/",
        name: "Black Beard",
        rarity: "2.00%",
      },
      {
        id: "33",
        image: "./assets/nfts/",
        name: "Orange Beanie",
        rarity: "2.00%",
      },
      {
        id: "34",
        image: "./assets/nfts/",
        name: "Ash Cap",
        rarity: "2.00%",
      },
      {
        id: "35",
        image: "./assets/nfts/",
        name: "Band Aid V1",
        rarity: "2.00%",
      },
      {
        id: "36",
        image: "./assets/nfts/",
        name: "Band Aid V2",
        rarity: "2.00%",
      },
      {
        id: "37",
        image: "./assets/nfts/",
        name: "Glasses V4",
        rarity: "2.00%",
      },
      {
        id: "38",
        image: "./assets/nfts/",
        name: "Army Helmet",
        rarity: "2.00%",
      },
      {
        id: "39",
        image: "./assets/nfts/",
        name: "Glasses V1",
        rarity: "2.00%",
      },
      {
        id: "40",
        image: "./assets/nfts/",
        name: "Yellow Bowtie",
        rarity: "1.00%",
      },
      {
        id: "41",
        image: "./assets/nfts/",
        name: "Pipe",
        rarity: "1.00%",
      },
      {
        id: "42",
        image: "./assets/nfts/",
        name: "Rifle",
        rarity: "1.00%",
      },
      {
        id: "43",
        image: "./assets/nfts/",
        name: "Jason's Mask",
        rarity: "1.00%",
      },
      {
        id: "44",
        image: "./assets/nfts/",
        name: "White Astronaut Helmet",
        rarity: "1.00%",
      },
      {
        id: "45",
        image: "./assets/nfts/",
        name: "Black Astronaut Helmet",
        rarity: "1.00%",
      },
      {
        id: "46",
        image: "./assets/nfts/",
        name: "Red Hannya Mask",
        rarity: "1.00%",
      },
      {
        id: "47",
        image: "./assets/nfts/",
        name: "Black Hannya Mask",
        rarity: "1.00%",
      },
      {
        id: "48",
        image: "./assets/nfts/",
        name: "Goldie",
        rarity: "1.00%",
      },
      {
        id: "49",
        image: "./assets/nfts/",
        name: "Unpixeld",
        rarity: "1.00%",
      },
      {
        id: "50",
        image: "./assets/nfts/",
        name: "Pixeled",
        rarity: "1.00%",
      },
    ],
  },
  {
    id: "6",
    title: "Back Accessories",
    avatars: [
      {
        id: "1",
        image: "./assets/nfts/",
        name: "Axe",
        rarity: "10.00%",
      },
      {
        id: "2",
        image: "./assets/nfts/",
        name: "Blue Dragon",
        rarity: "10.00%",
      },
      {
        id: "3",
        image: "./assets/nfts/",
        name: "Blue Soul",
        rarity: "5.00%",
      },
      {
        id: "4",
        image: "./assets/nfts/",
        name: "Bow",
        rarity: "5.00%",
      },
      {
        id: "5",
        image: "./assets/nfts/",
        name: "Devil Tail",
        rarity: "5.00%",
      },
      {
        id: "6",
        image: "./assets/nfts/",
        name: "Dragonball",
        rarity: "5.00%",
      },
      {
        id: "7",
        image: "./assets/nfts/",
        name: "Face Hugger",
        rarity: "5.00%",
      },
      {
        id: "8",
        image: "./assets/nfts/",
        name: "Green Soul",
        rarity: "5.00%",
      },
      {
        id: "9",
        image: "./assets/nfts/",
        name: "Ketchup",
        rarity: "5.00%",
      },
      {
        id: "10",
        image: "./assets/nfts/",
        name: "Mustard",
        rarity: "5.00%",
      },
      {
        id: "11",
        image: "./assets/nfts/",
        name: "Missile",
        rarity: "5.00%",
      },
      {
        id: "12",
        image: "./assets/nfts/",
        name: "Pokeball",
        rarity: "5.00%",
      },
      {
        id: "13",
        image: "./assets/nfts/",
        name: "Red Soul",
        rarity: "5.00%",
      },
      {
        id: "14",
        image: "./assets/nfts/",
        name: "Red Dragon",
        rarity: "5.00%",
      },
      {
        id: "15",
        image: "./assets/nfts/",
        name: "Spear",
        rarity: "5.00%",
      },
      {
        id: "16",
        image: "./assets/nfts/",
        name: "Spatula",
        rarity: "5.00%",
      },
      {
        id: "17",
        image: "./assets/nfts/",
        name: "Sword",
        rarity: "2.00%",
      },
      {
        id: "18",
        image: "./assets/nfts/",
        name: "Tank",
        rarity: "2.00%",
      },
      {
        id: "19",
        image: "./assets/nfts/",
        name: "Wings",
        rarity: "2.00%",
      },
      {
        id: "20",
        image: "./assets/nfts/",
        name: "Yellow Dragon",
        rarity: "2.00%",
      },
      {
        id: "21",
        image: "./assets/nfts/",
        name: "Alien Tail",
        rarity: "2.00%",
      },
    ],
  },
  {
    id: "7",
    title: "Background",
    avatars: [
      {
        id: "1",
        image: "./assets/nfts/",
        name: "Green",
        rarity: "50.00%",
      },
      {
        id: "2",
        image: "./assets/nfts/",
        name: "Blue",
        rarity: "30.00%",
      },
      {
        id: "3",
        image: "./assets/nfts/",
        name: "Indigo",
        rarity: "15.00%",
      },
      {
        id: "4",
        image: "./assets/nfts/",
        name: "Gold",
        rarity: "5.00%",
      },
    ],
  },
];
export const FEATURES: IFeatures[] = [
  {
    id: "1",
    image: "./assets/nfts/61e98dfec9bd3e4aefd30940_stable.png",
    title: "Staking",
    desc: "Every 'Bitch Ass NFT' will have the ability to STAKE and EARN our own cryptocurrency token, VIZION. ViZion Protocol's entire Eco-System is built with the ability to give back and create value for it's holders, especially each and every one of their NFT launches.",
  },
  {
    id: "2",
    image: "./assets/nfts/61e98dfe7ede0590f162788b_trade.png",
    title: "Buy, Sell, Trade",
    desc: "Buy, Sell, and/or Trade all of the Bitch Ass NFT's on the Magic Eden marketplace and soon to be released, our very own NFT Marketplace for ViZion Protocol",
  },
  {
    id: "3",
    image: "./assets/nfts/61e98dfec456ac38c2905503_earn-money.png",
    title: "VIP Experiences",
    desc: 'Walk the Red Carpet, Come to Movie Festival Screenings Around The World, Enjoy exclusive access to our Official "Members Only" launch party in Miami during NFT week and gain access to our Metaverse in Portals (Solana), plus much more!',
  },
];
export const LAUNCH: ILaunch[] = [
  {
    title: "ViZion Protocol IDO Launch",
    item: [
      "Token Name: ViZion PROTOCOL",
      "Token Symbol: VIZION",
      "Total Supply: 100,000,000",
      "ViZion Protocol Token is a SPL token",
    ],
  },
  {
    title: "Bitch Ass NFT Utility",
    item: [
      "Every NFT will have AT LEAST 12,500 worth of ViZion Tokens at (.04), which will go directly to our Liquidity Pool. We LAUNCH at (.05 with a 2.25 Million Dollar Market Cap)",
      "VIP Access to ALL ViZion Protocol parties + events",
      "Every NFT will have staking rewards and will be able to earn ViZion Tokens Weekly",
      "Access to our Metaverse + Bitch Ass Movie Premier in Portals (Solana)",
      "Access to our Alpha Group in our Discord Channel",
      "(9)LEGENDARY WINNERS will win our Red Carpet Experience + 50,000 ViZion Tokens",
    ],
  },
];
export const TOKEN_SHARE: ITokenShare[] = [
  {
    share: "2%",
    owner: "Developers",
  },
  {
    share: "3.5%",
    owner: "Advisors",
  },
  {
    share: "4%",
    owner: "Private Sale",
  },
  {
    share: "5%",
    owner: "Marketing & Development",
  },
  {
    share: "7%",
    owner: "IDO NFT Sale",
  },
  {
    share: "8.5%",
    owner: "Founders",
  },
  {
    share: "20%",
    owner: "DeFi/Staking",
  },
  {
    share: "20%",
    owner: "Locked for 5 years",
  },
  {
    share: "30%",
    owner: "Tokens Launched",
  },
];
export const HOW_TO_MINT: IMint[] = [
  {
    icon: "./assets/images/Phontom-removebg-preview.png",
    title: "Download Phantom Wallet",
    desc: "Use Your App Store via Google or Apple to Download the PHANTOM WALLET. MAKE SURE YOU SAVE AND WRITE TO YOUR KEY PHRASE & SAVE THIS. Never provide this to ANYONE. Once You’ve downloaded Phantom wallet, you’re ready to go!",
  },
  {
    icon: "./assets/images/5426-removebg-preview.png",
    title: "Purchase Solana",
    desc: "YAfter you’re done creating your account on your PHANTOM wallet, start by selecting and Purchasing SOLANA. Once you’ve finalized your purchase, you now own the cryptocurrency SOLANA and will be able to purchase a BITCH ASS NFT!",
  },
  {
    icon: "./assets/images/reasons-for-nft-removebg-preview.png",
    title: "Go to Site and Connect Wallet",
    desc: "Once the MINT date and time is announced via our Discord, go to the link above and select “MINT”. Connect your wallet and select BUY NOW. Once your transaction goes thru, you are now an official owner of a Bitch Ass NFT! You will then be able to view it in your wallet and/or BUY/SELL/TRADE on the secondary market, Magic Eden!",
  },
];
export const ROADMAP: string[] = [
  "With the launch of the Official Bitch Ass The Movie NFT Launch, ViZion Protocol will revolutionize the way we look at NFT's and the Utility behind them. As the 1st ever NFT Mint thru ViZion Protocol, this ViZionary Phaze will ALWAYS hold exclusive rights and access thru ViZion Protocols entire eco system thru the long haul.",
  "As we initialize our IDO launch, each and every NFT will be the reason for the future success of ViZion Protocol, therefor, we will always be grateful and compensate heavily, our original ViZionaries. Check out our ROADMAP below. Anybody who is left without holding a Bitch Ass NFT, just ask them, 'Who's The Bitch Ass Now'.",
];
export const ROADMAP_TREE: IRoadmap[] = [
  {
    title: "Vizionary Phaze",
    desc: "The ViZionary Phaze will start with 1000 original NFTs during our initial launch. These will hold the most value and earn the most staking rewards possible in the entire ViZion Protocol Eco-System and will be the first ever IDO launch via NFT's",
    date: "",
    completed: true,
  },
  {
    title: "BITCH ASS NFT STEALTH IDO LAUNCH",
    desc: "No Marketing, No Hype, No Bitch Ass Bullshit. We will do a word-of-mouth and organic marketing campaign 48 hours prior to launch (March 13th) and will announce the exact time via our Discord. Only (1) NFT max per wallet during mint. (8 SOLANA)",
    date: "",
    completed: false,
  },
  {
    title: "Bitch Ass NFT Reveal",
    desc: "The Bitch Ass NFT Reveal will be held 48 hours after mint (March 15th) with WINNERS being ANNOUNCED and flown out to our March 19th, 2022 SXSW Movie Premier.",
    date: "",
    completed: false,
  },
  {
    title: "SXSW World Movie Premier (Austin)",
    desc: "For the first time EVER, we will be flying (3) Legendary Bitch Ass NFT holders to an exclusive RED CARPET Movie Premier of 'Bitch Ass' The Movie at the SXSW Film Festival in Austin, TX on March 19th, 2022. Our LEGENDARY NFT winners and a guest, will be flown out to Austin, put up in a Hotel, all travel accommodations paid for, walk the Red Carpet, tickets to the Movie Premier and take pics with the Cast and Crew!",
    date: "",
    completed: false,
  },
  {
    title: "Vizion Protocol Official Launch Party",
    desc: "ViZion Protocol will be holding an exclusive VIP launch party with one of our partners, Mansion Yachts, during the NFT Week and Bitcoin Conference in Miami. ALL 1000 Bitch Ass NFT holders will have VIP access to our official launch party event filled with celebrities, yachts, music, entertainment and more",
    date: "4/2/22",
    completed: false,
  },
  {
    title: "VIZION PROTOCOL NFT MARKETPLACE RELEASED",
    desc: "ViZion Protocol will official release their very own NFT marketplace. Not only will the Bitch Ass Official Collection be there, but so will our upcoming NFT launches will be as well. After partnering with ArtLuv and Bettancourt PR, we are proud to bring you two new NFT launches that blow your mind. More Info Coming Soon...",
    date: "4/15/22",
    completed: false,
  },
  {
    title:
      "LONDON INTERNATIONAL HORROR FILM FESTIVAL + LOS ANGELES MOVIE PREMIER + MORE",
    desc: "This entire project is for you and the community and we want you to enjoy and experience this incredible opportunity with us and our team!! (3) Lucky Winners will be flown to LONDON and (3) lucky winners will be flown to LOS ANGELES to view our Film, BITCH ASS, at our exclusive Film Festival run. This is an experience like no other and would be honored to have you and our community join in on the fun and adventures of this incredible project. Trust us when we say that this is a DREAM come true for US and look forward to sharing in on the fun!.",
    date: "XX/XX/22",
    completed: false,
  },
];
export const IS_THAT_IT: string[] = [
  "This is only the BEGINNING of what we are offering and what the Bitch Ass Official NFT collection will provide. Again, these are the very 1st NFT collection of ViZion Protocol and will be helping fund the future via our IDO allocation of each NFT that will be redeemable at launch. Each and every one of these will be very special and will earn several perks, rewards and staking opportunities as well.",
  "Our White Paper includes several other NFT projects, a 2 year Roadmap, Partnerships, Music Festivals and exclusive collaborations with other big names in the NFT space. This is and will always be community driven and our team at ViZion Protocol looks forward to bring you the most iconic project in the crypto space. Check it out below!",
];
export const FAQ: IFaq[] = [
  {
    question: "WHAT IS MINTING?",
    answer:
      "Minting a BITCHASS NFT means that you are buying a digital art piece that will be exclusively yours which becomes a part of the Solana blockchain. Your digital artwork is represented as an NFT so it can be traded in the market and digitally tracked as it is resold or collected again in the future..",
  },
  {
    question:
      "WHICH WALLET CAN I CONNECT TO MINT A BITCHASS NFT AND HOW DO I CONNECT IT?",
    answer:
      "You can connect PHANTOM or SOLANA wallets only. If you don’t have it, you create one here : (Click Here) After you created your wallet (WATCH TUTORIAL HERE) you will just have to click on the button on the header of this page “MINT” Live, Connect Your Wallet and MINT your Bitch Ass NFT!",
  },
  {
    question: "HOW MUCH WILL IT COST TO MINT A BITCHASS NFT?",
    answer: "The price is 8 SOLANA + FEES (Approx $750)",
  },
  {
    question: "HOW TO MINT?",
    answer:
      "Minting will be announced on our discord group, Instagram, Twitter and Via our Stealth Marketing campaigns. We will be holding a number of giveaways and raffles 1 day prior to the public launch for a chance to be on the Whitelist. Only 50 AVAILABLE. Please join our Discord to learn how you can join the Whitelist. The Whitelist spots will be very limited. The public sale will happen 24h after the Whitelist Spots are announced. Once you have minted a BITCHASS NFT, you will be able to see it by connecting your Phantom wallet to Magic Eden.",
  },
  {
    question: "HOW CAN I PROMOTE THE PROJECT?",
    answer:
      "The best way to promote the project is by inviting people to the Discord channel and our Social Media Channels. If you are an influencer and would like to work with us, write us sb@vizionprotocol.io",
  },
  {
    question: "WHEN IS THE MINT?",
    answer: "March 12th - 5PM EST !",
  },
  {
    question: "WHAT IS THE TOTAL SUPPLY?",
    answer: "1000 Total",
  },
  {
    question: "WILL I BE ABLE TO USE MY BITCH ASS NFT IN THE METAVERSE?",
    answer:
      "YES!! ViZion Protocol has PARTNERED with PORTALS AND will have currently OWN several pieces of Real Estate in their metaverse. With a Bitch Ass NFT, you will be the ONLY members allowed to access to our Movie Screeening of Bitch Ass in VR, Live Events, Alpha Groups, plus more!",
  },
];
export const TEAM: ITeam[] = [
  {
    image: "./assets/images/bill_posley-removebg-preview.png",
    name: "Bill Posley",
    role: "Co-Founder",
  },
  {
    image: "./assets/images/tunde_laleye-removebg-preview.png",
    name: "Tunde Laleye",
    role: "Co-Founder",
  },
  {
    image: "./assets/images/shane_brown-removebg-preview.png",
    name: "Shane Brown",
    role: "CEO/Founder",
  },
];
export const MENU_ITEMS: IMenu[] = [
  { title: "About", id: "about" },
  { title: "The Project", id: "theproject" },
  { title: "Roadmap", id: "roadmap" },
  { title: "FAQ", id: "faq" },
  { title: "Team", id: "team" },
];
export const SOCIAL_MEDIA: ISocial[] = [
  { name: "discord", Icon: FaDiscord, link: "https://discord.gg/yyZCUvSM4E" },
  {
    name: "instagram",
    Icon: BsInstagram,
    link: "https://www.instagram.com/vizionprotocol/",
  },
  {
    name: "twitter",
    Icon: FiTwitter,
    link: "https://twitter.com/vizionprotocol",
  },
  {
    name: "magiceden",
    Icon: "./assets/images/MAGIC_EDEN_LOGO-removebg-preview.png",
    link: "https://opensea.io/vizionprotocol",
  },
];
export const CONTACT: IContact[] = [
  {
    title: "Contact Address",
    desc: "0x175d8a89e4fbaf9014c6639bbb41d1e1d352ae13",
    type: "link",
    link: "http://bitchass.vizionprotocol.io/address/0x175d8a89e4fbaf9014c6639bbb41d1e1d352ae13.html",
  },
  {
    title: "Enquiries",
    desc: "sb@vizionprotocol.io",
    type: "mail",
    link: "sb@vizionprotocol.io",
  },
];
export const BITCHASS_CARDS: IBitchAssCards[] = [
  {
    img: "./assets/images/card1.png",
    classname: "img1",
    initial: { x: "350px", scale: "0.8" },
    x: "100px",
    transition: { duration: 0.5, ease: "linear", delay: 1.2 },
  },
  {
    img: "./assets/images/card2.png",
    classname: "img2",
    initial: { x: "180px", scale: "0.9" },
    x: "60px",
    transition: { duration: 0.5, ease: "linear", delay: 1.2 },
  },
  {
    img: "./assets/images/card4.png",
    classname: "img3",
    initial: { x: "unset", scale: "1" },
    x: "unset",
    transition: { duration: 0.5, ease: "linear", delay: 1.2 },
  },
  {
    img: "./assets/images/card5.png",
    classname: "img4",
    initial: { x: "-180px", scale: "0.9" },
    x: "-60px",
    transition: { duration: 0.5, ease: "linear", delay: 1.2 },
  },
  {
    img: "./assets/images/card3.png",
    classname: "img5",
    initial: { x: "-350px", scale: "0.8" },
    x: "-100px",
    transition: { duration: 0.5, ease: "linear", delay: 1.2 },
  },
];
