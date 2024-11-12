import { MdLightbulbOutline } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { MdTune } from 'react-icons/md';
import { TfiShield } from 'react-icons/tfi';
import { RiBookOpenLine } from 'react-icons/ri';

import { RiTextBlock } from 'react-icons/ri';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FaRegEdit } from 'react-icons/fa';
import { PiUserCircleCheck } from 'react-icons/pi';

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
