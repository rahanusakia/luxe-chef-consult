<div align="center">

<br/>

```
  ██╗     ██╗   ██╗██╗  ██╗███████╗     ██████╗██╗  ██╗███████╗███████╗
  ██║     ██║   ██║╚██╗██╔╝██╔════╝    ██╔════╝██║  ██║██╔════╝██╔════╝
  ██║     ██║   ██║ ╚███╔╝ █████╗      ██║     ███████║█████╗  █████╗
  ██║     ██║   ██║ ██╔██╗ ██╔══╝      ██║     ██╔══██║██╔══╝  ██╔══╝
  ███████╗╚██████╔╝██╔╝ ██╗███████╗    ╚██████╗██║  ██║███████╗██║
  ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝     ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝
```

### *AI-Powered Private Chef & Culinary Consultation Platform*

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-konsultanchef.com-c9a96e?style=for-the-badge&logo=vercel&logoColor=white)](https://konsultanchef.com)
[![OpenAI](https://img.shields.io/badge/Powered%20by-GPT--4o-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-6b5a42?style=for-the-badge)](LICENSE)

<br/>

> *"Access to a Michelin-level culinary consultant — available 24/7, powered by GPT-4o."*

<br/>

</div>

---

## ✨ Overview

**Luxe Chef Consult** connects discerning clients with elite private chefs for bespoke dining experiences. At the heart of the platform is **Chef Lumière** — an AI culinary consultant powered by **OpenAI GPT-4o** that delivers personalized, Michelin-caliber culinary guidance through natural conversation.

Unlike static booking pages or generic chatbots, Chef Lumière understands context: your event type, guest preferences, dietary constraints, and flavor profiles — and responds with the specificity of a seasoned professional.

**Try it live → [konsultanchef.com](https://konsultanchef.com)** *(no login required)*

---

## 🤖 AI Integration

| Detail | Value |
|---|---|
| **Model** | `gpt-4o` |
| **API** | OpenAI Chat Completions API |
| **Persona** | Chef Lumière — 20+ years fine dining experience |
| **Interface** | Real-time streaming chat |
| **Context** | System-prompted for haute cuisine expertise |

The AI is the product — not a feature. Every user interaction on the platform flows through GPT-4o, transforming what would be a static booking form into a fully personalized culinary consultation.

**System prompt design** establishes Chef Lumière as a trusted advisor who speaks with warmth and authority, naturally guiding users from consultation toward booking.

---

## 🍽️ Features

### Chef Lumière — AI Culinary Consultant
Real-time chat powered by GPT-54. Ask anything, get expert answers instantly.

### Custom Menu Design
Describe your event, guest count, and preferences — receive a complete multi-course menu with professional chef techniques, ingredient suggestions, and plating notes.

### Wine & Ingredient Pairing
Sommelier-level pairing recommendations for any dish. From Burgundy to natural wines, tailored to your specific menu.

### Private Chef Booking Guidance
The AI guides you through choosing the right chef for your occasion — intimate dinners, corporate galas, weddings, cooking classes, and more.

### Luxury Dietary Accommodations
Vegan, gluten-free, kosher, halal, and allergy-conscious menus that maintain haute cuisine standards — not compromises.

### Quick-Start Prompts
Four curated conversation starters to help users immediately experience the platform's value:
- 🍽️ Design my dinner menu
- 👨‍🍳 Book a private chef
- 🥂 Wine pairing advice
- 🌿 Vegan luxury menu

---

## 🛠️ Tech Stack

```
Frontend         React 18 + TypeScript + Vite
UI Components    shadcn/ui + Tailwind CSS
AI Engine        OpenAI GPT-4o (Chat Completions API)
Fonts            Cormorant Garamond + Jost
Hosting          Vercel (custom domain: konsultanchef.com)
Built with       Lovable AI
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- OpenAI API key → [platform.openai.com](https://platform.openai.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/rahanusakia/luxe-chef-consult.git
cd luxe-chef-consult

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OPENAI_API_KEY=sk-...
```

> ⚠️ Never commit your `.env` file. It is already in `.gitignore`.

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
luxe-chef-consult/
├── src/
│   ├── components/
│   │   ├── AIChefConsultant.tsx   # GPT-4o chat interface — core AI feature
│   │   └── ui/                   # shadcn/ui components
│   ├── pages/                    # Route pages
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utilities
│   └── App.tsx                   # Root component + routing
├── public/                       # Static assets
├── index.html                    # SEO meta tags + structured data
├── tailwind.config.ts
├── vite.config.ts
└── .env                          # API keys (not committed)
```

---

## 🔑 How the AI Works

The core AI logic lives in `src/components/AIChefConsultant.tsx`:

```typescript
// Calls OpenAI Chat Completions API with Chef Lumière persona
async function callOpenAI(messages: Message[]): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      max_tokens: 1000,
      messages: [
        { role: "system", content: SYSTEM_PROMPT }, // Chef Lumière persona
        ...messages,
      ],
    }),
  });
  const data = await response.json();
  return data.choices[0].message.content;
}
```

**The system prompt** defines Chef Lumière's expertise, tone, and scope — ensuring every response feels like it comes from a trusted culinary professional, not a generic chatbot.

---

## 🌐 Deploy Your Own

### Vercel (Recommended)

1. Fork this repository
2. Import to [vercel.com](https://vercel.com)
3. Add environment variable: `VITE_OPENAI_API_KEY`
4. Deploy → live in ~2 minutes

### Lovable

1. Open [Lovable Project](https://lovable.dev/projects/def087b9-3aa9-49e4-96f8-a744916629ea)
2. Add `VITE_OPENAI_API_KEY` in project settings
3. Click Publish

---

## 💡 Example Conversations

**Menu Design**
> *"Design a 7-course tasting menu for an anniversary dinner for 2. She loves seafood, he's vegetarian. Make it truly special."*

**Wine Pairing**
> *"I'm serving pan-seared duck breast with cherry reduction and truffle risotto. Recommend wine pairings for each."*

**Private Chef Booking**
> *"I need a private chef for a 20-person birthday celebration next month. Budget is flexible. What should I look for?"*

**Luxury Vegan**
> *"Create a stunning 5-course plant-based menu that would genuinely impress non-vegan guests at a corporate dinner."*

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

```bash
git checkout -b feature/your-feature
git commit -m 'feat: add your feature'
git push origin feature/your-feature
```

---

## 📄 License

MIT © [rahanusakia](https://github.com/rahanusakia)

---

<div align="center">

Built with ❤️ using [OpenAI GPT-54](https://openai.com) · Live at [konsultanchef.com](https://konsultanchef.com)

</div>
