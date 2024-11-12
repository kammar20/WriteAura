import { MdLightbulbOutline, MdTune } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import {
  FaExpandArrowsAlt,
  FaRegEdit,
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { TfiShield } from 'react-icons/tfi';
import { RiBookOpenLine, RiTextBlock } from 'react-icons/ri';
import { HiOutlineSparkles } from 'react-icons/hi';
import { PiUserCircleCheck } from 'react-icons/pi';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';

// Feature Section
export const featureData = [
  {
    id: 1,
    icon: <MdLightbulbOutline />,
    title: 'Intelligent Suggestions',
    desc: 'Receive real-time feedback and smart suggestions to refine your writing style, tone, and clarity.',
  },
  {
    id: 2,
    icon: <AiOutlineCheckCircle />,
    title: 'Grammar & Style Check',
    desc: 'Instantly catch grammar, spelling, and punctuation errors, and polish your style for a professional finish.',
  },
  {
    id: 3,
    icon: <FaExpandArrowsAlt />,
    title: 'Content Expansion & Summarization',
    desc: 'Effortlessly expand ideas or summarize long paragraphs to fit your needs with just a few clicks.',
  },
  {
    id: 4,
    icon: <MdTune />,
    title: 'Custom Tone Adjustments',
    desc: 'Set the right tone for your audience, whether it’s professional, casual, friendly, or persuasive.',
  },
  {
    id: 5,
    icon: <TfiShield />,
    title: 'Plagiarism Detection',
    desc: 'Ensure originality with built-in plagiarism detection, helping you maintain credibility and avoid duplicate content.',
  },
  {
    id: 6,
    icon: <RiBookOpenLine />,
    title: 'Vocabulary Enhancement',
    desc: 'Expand your vocabulary and find the perfect words with AI-powered synonym suggestions and advanced word choice options.',
  },
];

// How it Works Section
export const workData = [
  {
    id: 1,
    icon: <RiTextBlock />,
    title: 'Start with Your Text',
    desc: 'Type or paste your content into WriteAura’s editor, and watch as AI suggestions begin to appear.',
  },
  {
    id: 2,
    icon: <HiOutlineSparkles />,
    title: 'Instant Suggestions',
    desc: 'Our AI provides real-time tips on clarity, conciseness, and grammar, helping you enhance your writing instantly.',
  },
  {
    id: 3,
    icon: <FaRegEdit />,
    title: 'Refine & Finalize',
    desc: 'Apply the suggestions, make adjustments, and enjoy a polished final piece in no time.',
  },
];

// Pricing Section
export const PricingData = [
  {
    id: 1,
    type: 'Free',
    price: '$0,00',
    limit: '/month',
    desc: 'Great for exploring AI writing assistance on personal projects.',
    btnText: 'Start for Free',
    lineText: 'Features',
    icon: <PiUserCircleCheck />,
    features: [
      'Basic grammar check',
      'Core editing tools',
      'Limited tone options',
      'Spelling suggestions',
      'Word count tracking',
    ],
  },
  {
    id: 2,
    type: 'Professional',
    price: '$98,00',
    limit: '/month',
    desc: 'Ideal for professionals looking to refine their writing.',
    btnText: 'Sign Up with Professional',
    lineText: 'Features',
    icon: <PiUserCircleCheck />,
    features: [
      'Advanced grammar & style',
      'Tone customization',
      'Enhanced vocabulary',
      'Content summarization',
      'Synonym suggestions',
    ],
  },
  {
    id: 3,
    type: 'Enterprise',
    price: '$160,00',
    limit: '/month',
    desc: 'Perfect for teams seeking brand consistency and collaboration.',
    btnText: 'Sign Up with Enterprise',
    lineText: 'Features',
    icon: <PiUserCircleCheck />,
    features: [
      'Full editing suite',
      'Team collaboration tools',
      'Custom brand settings',
      'Shared style guidelines',
      'Priority support',
    ],
  },
];

// Faq Data
export const FaqData = [
  {
    id: 1,
    question: 'Is there a free version of WriteAura?',
    answer:
      'Yes! Our Free Plan includes basic grammar and spell-checking to get you started.',
  },
  {
    id: 2,
    question: 'Can I set different tones in WriteAura?',
    answer:
      'Absolutely! You can choose from various tone options to best match your audience.',
  },
  {
    id: 3,
    question: 'Is my data secure with WriteAura?',
    answer:
      'Yes, we prioritize your privacy and use top security standards to keep your information safe.',
  },
  {
    id: 4,
    question: 'Does WriteAura work with other applications?',
    answer:
      'Yes, you can easily integrate WriteAura with your favorite platforms like Google Docs and email.',
  },
  {
    id: 5,
    question: 'Can I customize WriteAura’s suggestions?',
    answer:
      'Yes! WriteAura allows you to tailor suggestions based on your preferences, helping you maintain your unique style and voice.',
  },
  {
    id: 6,
    question: 'Does WriteAura support multiple languages?',
    answer:
      'Currently, WriteAura supports English, but we’re working to expand to other languages soon!',
  },
];

// Team Data
export const TeamData = [
  {
    id: 1,
    imgSrc: user1,
    fullName: 'Eric Fennis',
    info: 'Creator of Lucide & Software engineer @nedap',
    socials: [
      {
        socialId: 1,
        iconSrc: <FaGithub />,
      },
      {
        socialId: 2,
        iconSrc: <FaLinkedin />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: user2,
    fullName: 'Karsa Rigó',
    info: 'Maintainer of Lucide & Software engineer @sztaki',
    socials: [
      {
        socialId: 1,
        iconSrc: <FaGithub />,
      },
      {
        socialId: 2,
        iconSrc: <FaLinkedin />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: user3,
    fullName: 'Jakob Guddas',
    info: 'Maintainer of Lucide & Software engineer @LEGO',
    socials: [
      {
        socialId: 1,
        iconSrc: <FaGithub />,
      },
      {
        socialId: 2,
        iconSrc: <FaLinkedin />,
      },
    ],
  },
];

// Footer Data
export const FooterSocial = [
  { id: 1, iconType: <FaFacebookF /> },
  { id: 2, iconType: <FaTwitter /> },
  { id: 3, iconType: <FaInstagram /> },
  { id: 4, iconType: <FaLinkedinIn /> },
];

export const FooterProducts = [
  'Pricing',
  'Payout',
  'Data pipeline',
  'Capital',
  'Revenue Recognition',
];

export const FooterService = [
  'Start up',
  'Enterprise',
  'SaaS',
  'Platforms',
  'Marketplace',
];

export const FooterResource = [
  'Guides',
  'Customers Stories',
  'Blog',
  'Privacy & Term',
  'Businesses',
];
