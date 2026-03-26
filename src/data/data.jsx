import React from 'react';
import { Brain, Heart, Users, BookOpen } from 'lucide-react';

export const DATA = {
  services: [
    { 
      title: "Clinical Therapy", 
      description: "Evidence-based support for stress, anxiety, burnout, and emotional fatigue. Reconnect with your inner calm.", 
      icon: <Brain className="w-8 h-8" />, 
      color: "bg-emerald-50" 
    },
    { 
      title: "Parenting Guidance", 
      description: "Empathetic support for managing behavior challenges, conscious parenting, and building family connections.", 
      icon: <Heart className="w-8 h-8" />, 
      color: "bg-emerald-50" 
    },
    { 
      title: "Corporate Wellness", 
      description: "Skill-building workshops, educator wellness programs, and emotional resilience training for teams.", 
      icon: <Users className="w-8 h-8" />, 
      color: "bg-emerald-50" 
    },
    { 
      title: "Internship Programs", 
      description: "Hands-on learning experiences, supervised case studies, and real-world skills for aspiring psychologists.", 
      icon: <BookOpen className="w-8 h-8" />, 
      color: "bg-emerald-50" 
    }
  ],
  team: [
    { 
      name: "Kumud Aneja", 
      role: "Founder, Mental Health Advocate", 
      bio: "With over 18 years of experience, Kumud creates safe spaces for individuals to reflect, reset, and rise. Certified in CBT, ACT, IPT, and Couple Counselling.", 
      img: "/images/team1.webp" 
    },
    { 
      name: "Smriti Maini", 
      role: "Counselling Psychologist", 
      bio: "Currently pursuing her PhD, Smriti has extensive clinical experience across multi-specialty hospitals and is a certified laughter yoga leader.", 
      img: "/images/team2.webp" 
    },
    { 
      name: "Bhanuja", 
      role: "Mental Health Facilitator", 
      bio: "A compassionate psychologist trained in evidence-based approaches, helping clients navigate anxiety, emotional dysregulation, and relationship challenges.", 
      img: "/images/team3.webp" 
    }
  ],
  reviews: [
    { 
      name: "Priya S.", 
      role: "Working Professional", 
      text: "MannVriksh gave me the tools to finally manage my severe burnout. The dual-path approach isn't just talk; it actively gave me my life back.", 
      rating: 5 
    },
    { 
      name: "Amit & Neha", 
      role: "Parents", 
      text: "The parenting guidance sessions were an eye-opener. Kumud helped us transition from reacting to our teenager's behavior to actually understanding it.", 
      rating: 5 
    },
    { 
      name: "Rohan M.", 
      role: "Student", 
      text: "A truly non-judgmental space. I felt heard for the first time in years. The coping mechanisms I learned here are invaluable.", 
      rating: 5 
    }
  ],
  faqs: [
    { 
      question: "What is the 'Dual Path' approach?", 
      answer: "Our unique approach bridges traditional clinical therapy with actionable life-skill training. We don't just help you process in the clinic; we actively teach emotional resilience for your daily life at home and work." 
    },
    { 
      question: "Are the sessions confidential?", 
      answer: "Absolutely. 100% confidentiality is the absolute cornerstone of our practice. Your data, conversations, and records are strictly protected under ethical clinical guidelines." 
    },
    { 
      question: "How long is a typical session?", 
      answer: "A standard individual counselling session lasts 50 minutes. Corporate workshops, training sessions, and family interventions vary based on the customized curriculum." 
    },
    { 
      question: "Do you offer online sessions?", 
      answer: "Yes, we offer both in-person sessions at our beautiful Gurugram clinic and secure online video sessions for clients across India and globally." 
    }
  ]
};