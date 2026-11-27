export interface ResearchPillar {
  index: string;
  title: string;
  category: string;
  summary: string;
  topics: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export interface CertificationItem {
  title: string;
  year: string;
  detail: string;
}

export interface ResearchSection {
  heading: string;
  paragraphs: string[];
  codeSnippet?: {
    language: string;
    caption: string;
    code: string;
  };
}

export interface ResearchNote {
  slug: string;
  title: string;
  tag: string;
  readTime: string;
  abstract: string;
  highlights: string[];
  sections: ResearchSection[];
}

export const portfolioData = {
  profile: {
    name: "Vijay Shankar Tiwari",
    monogram: "VST",
    subtitle: "IIT Bhilai · Ph.D. Scholar",
    role: "Research Scholar | Blockchain Architecture & Security",
    headline:
      "Investigating blockchain consensus protocols, architecture, and decentralized security.",
    bio: "I am a Research Scholar working in Blockchain technology with a focus on different types of blockchain consensus protocols, architecture, and security. I explore how consensus mechanisms achieve safety, liveness, and fault tolerance alongside EVM internals and smart contract security. Beyond research, I serve as the Secretary of the Blockchain Club (BlB) at IIT Bhilai, organizing events, leading initiatives, and building a community around Web3 and decentralized technologies.",
    availability: "Ph.D. Research Scholar · IIT Bhilai",
    portrait: "/images/vijay-portrait.jpeg",
    emails: [
      { label: "Academic · IIT Bhilai", address: "vijayst@iitbhilai.ac.in" },
      { label: "Personal", address: "vst3920@gmail.com" },
    ],
    linkedinUrl:
      "https://www.linkedin.com/in/vijay-shankar-tiwari-5637b1337",
    linkedinHandle: "in/vijay-shankar-tiwari-5637b1337",
  },

  researchPillars: [
    {
      index: "01",
      title: "Blockchain Consensus Protocols",
      category: "Core Research",
      summary:
        "Analyzing different consensus mechanisms—Nakamoto, BFT, and Proof-of-Stake variants—comparing safety, liveness, finality guarantees, and adversarial fault tolerance.",
      topics: [
        "Nakamoto & PoS Consensus",
        "BFT Finality Protocols",
        "Safety & Liveness",
        "Fork-Choice & Attacks",
      ],
    },
    {
      index: "02",
      title: "EVM Internals & Smart Contract Security",
      category: "Execution Layer",
      summary:
        "Investigating Ethereum Virtual Machine execution semantics, state transitions, and smart contract security design to identify structural vulnerabilities before deployment.",
      topics: [
        "EVM Execution & Storage",
        "Smart Contract Development",
        "Vulnerability Analysis",
        "Ethereum Architecture",
      ],
    },
    {
      index: "03",
      title: "Protocol Architecture & Network Security",
      category: "Systems & Security",
      summary:
        "Examining peer-to-peer network resilience, cyber and information security, and systems architecture underpinning decentralized blockchain infrastructure.",
      topics: [
        "Blockchain Architecture",
        "Network Security",
        "Cyber & Information Security",
        "Computer Architecture",
      ],
    },
  ] satisfies ResearchPillar[],

  researchNotes: [
    {
      slug: "smart-contract-security-threat-modeling",
      title: "Smart Contract Security & Protocol Threat Modeling",
      tag: "Smart Contract Security",
      readTime: "6 min read",
      abstract:
        "A structured approach to auditing decentralized protocols—identifying invariant breaks, access-control flaws, and state-transition edge cases.",
      highlights: [
        "Checks-effects-interactions and state-mutation ordering",
        "Access control, privilege boundaries, and upgradeability risks",
        "Validating arithmetic precision and economic assumptions",
      ],
      sections: [
        {
          heading: "1. Reasoning About Protocol Invariants",
          paragraphs: [
            "Secure smart contract design begins with explicitly stating the mathematical and logical invariants a protocol must preserve across every transaction, regardless of call ordering or adversarial inputs.",
            "Reviewing contracts from first principles—tracing how balances, permissions, and external calls compose—exposes subtle assumptions that unit tests often miss.",
          ],
        },
        {
          heading: "2. Defensive Execution Patterns",
          paragraphs: [
            "Applying strict checks-effects-interactions ordering, bounding external call surface area, and isolating privileged governance paths reduces the blast radius of unexpected interactions.",
          ],
        },
      ],
    },
    {
      slug: "evm-internals-execution-and-security",
      title: "EVM Internals: Call Contexts, Storage & Security Boundaries",
      tag: "EVM Internals",
      readTime: "7 min read",
      abstract:
        "A systems-level look at how stack, memory, calldata, and persistent storage interact during EVM message calls—and where smart contract bugs emerge.",
      highlights: [
        "Isolation between `CALL` and `DELEGATECALL` execution contexts",
        "Persistent storage layout and slot-collision risks in proxies",
        "Gas accounting and state-mutation ordering",
      ],
      sections: [
        {
          heading: "1. Machine Model & Memory Regions",
          paragraphs: [
            "The Ethereum Virtual Machine is a stack-based, quasi-Turing-complete state machine operating on 256-bit words. Each call frame receives its own ephemeral stack and byte-addressable memory, while contract storage persists across transactions.",
            "Understanding exactly when state is read and committed across external calls is foundational to preventing reentrancy and unintended privilege escalation.",
          ],
        },
        {
          heading: "2. Context Preservation in Delegate Calls",
          paragraphs: [
            "When Contract A invokes Contract B via `DELEGATECALL`, B's bytecode executes against A's storage, `msg.sender`, and `msg.value`. Any mismatch in declared state-variable ordering between caller and implementation corrupts storage slots silently.",
          ],
        },
      ],
    },
    {
      slug: "consensus-and-network-security-foundations",
      title: "Consensus Protocols & Network-Layer Resilience",
      tag: "Consensus & Network Security",
      readTime: "5 min read",
      abstract:
        "Connecting classical network security and distributed systems principles to peer-to-peer blockchain consensus safety and liveness.",
      highlights: [
        "Safety vs. liveness under network partitions and adversarial delay",
        "Peer-to-peer propagation and eclipse/Sybil mitigation",
        "Relating computer architecture constraints to node validation throughput",
      ],
      sections: [
        {
          heading: "1. Bridging Classical InfoSec and Decentralized Consensus",
          paragraphs: [
            "Decentralized protocols do not replace network and information security—they rely on them. Eclipse attacks, asymmetric gossip delays, and resource exhaustion at the peer-to-peer layer directly threaten consensus liveness and finality guarantees.",
            "Studying consensus protocols alongside computer networks and systems architecture provides a complete view of where protocol assumptions hold and where adversaries can apply pressure.",
          ],
        },
      ],
    },
  ] satisfies ResearchNote[],

  experience: [
    {
      period: "01/2024 — Present",
      title: "Teaching Assistant",
      organization: "Indian Institute of Technology (IIT) Bhilai",
      highlights: [
        "Guided undergraduate and graduate students in C Programming and Data Structures laboratory sessions.",
        "Assisted in core courses covering Computer Networks, Cyber Security, Blockchain Technology, and Information Security.",
        "Handled grading, evaluations, and academic support for Computer Organization and Architecture.",
      ],
    },
    {
      period: "Ongoing",
      title: "Secretary — Blockchain Club (BlB)",
      organization: "Indian Institute of Technology (IIT) Bhilai",
      highlights: [
        "Organize technical workshops, speaker sessions, and community events around Web3 and decentralized systems.",
        "Lead student initiatives and mentor peers exploring blockchain architecture, Ethereum, and smart contract security.",
      ],
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      degree: "Ph.D. in Blockchain Technology & Security",
      institution: "IIT Bhilai",
      period: "Ongoing",
      status: "Enrolled · Research Scholar",
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Atal Bihari Vajpayee Vishwavidyalaya (ABVV)",
      period: "2023",
      status: "Completed",
    },
    {
      degree: "Bachelor of Science (B.Sc.) in Computer Science (Honours)",
      institution: "Atal Bihari Vajpayee Vishwavidyalaya (ABVV)",
      period: "2021",
      status: "Completed",
    },
  ] satisfies EducationItem[],

  certifications: [
    {
      title: "GATE 2026 — Computer Science & Engineering (CSE)",
      year: "2026",
      detail: "Graduate Aptitude Test in Engineering qualified.",
    },
    {
      title: "UGC NET 2026",
      year: "2026",
      detail: "National Eligibility Test qualified.",
    },
    {
      title: "CG SET 2024 — State Rank 12",
      year: "2024",
      detail: "Chhattisgarh State Eligibility Test (Computer Science).",
    },
  ] satisfies CertificationItem[],

  skillGroups: [
    {
      group: "Blockchain & Security",
      items: [
        "Blockchain Architecture",
        "Ethereum",
        "Smart Contract Development & Security",
        "EVM Internals",
        "Consensus Protocols",
      ],
    },
    {
      group: "Security & Core CS",
      items: [
        "Data Structures",
        "Network Security",
        "Cyber Security",
        "Information Security",
        "Computer Organization & Architecture",
      ],
    },
    {
      group: "Programming Languages",
      items: [
        "C",
        "C++",
        "Python",
        "Solidity",
        "Rust",
      ],
    },
  ],
};
