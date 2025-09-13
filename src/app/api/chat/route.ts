import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const rateLimitMap = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 10;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  const limit = rateLimitMap.get(ip);

  if (now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (limit.count >= maxRequests) {
    return true;
  }

  limit.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const sensitiveKeywords = [
      "phone",
      "address",
      "home",
      "family",
      "girlfriend",
      "boyfriend",
      "wife",
      "husband",
      "personal life",
      "private",
      "location",
      "where do you live",
      "salary",
      "money",
      "income",
      "bank",
      "credit card",
      "password",
      "social security",
      "dating",
      "relationship",
      "political",
      "religion",
      "religious",
      "inappropriate",
      "nsfw",
    ];

    const lowerMessage = message.toLowerCase();
    const containsSensitiveContent = sensitiveKeywords.some((keyword) =>
      lowerMessage.includes(keyword)
    );

    if (containsSensitiveContent) {
      return NextResponse.json({
        response:
          "🤖 I'm here to chat about Dicky's professional journey, projects, and technical skills! I don't share personal or private information. Feel free to ask about his coding projects, tech stack, or professional background instead! 😊",
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `You are Dicky Bayu's professional AI assistant for his portfolio website. You are enthusiastic, friendly, and knowledgeable about Dicky's PROFESSIONAL background and projects only.

STRICT GUIDELINES:
- ONLY discuss professional topics: projects, skills, technologies, work experience
- DO NOT share or discuss: personal life, private information, family, relationships, politics, religion
- If asked about personal/private matters, politely redirect to professional topics
- Keep responses professional but friendly and engaging
- LANGUAGE RULE: Always respond in the same language as the user's question (English or Bahasa Indonesia)
- If user asks in Bahasa Indonesia, respond in Bahasa Indonesia
- If user asks in English, respond in English

ABOUT DICKY (PROFESSIONAL INFO ONLY):
- Role: Web3 & AI Engineer, Full-stack Developer
- Passionate about building user-friendly solutions in Web3 and AI
- Based in Indonesia 
- Open to new opportunities

TECHNICAL SKILLS:
- Programming Languages: TypeScript, JavaScript, Python, Solidity, Java, Rust, Dart, Motoko
- Frameworks & Libraries: Django, Flask, PyTorch, Spring Boot, React, Next.js, Tailwind CSS, Express.js, Flutter, Ethers.js, OpenZeppelin
- Tools & Technologies: Figma, Postman, GitHub, GitLab, Docker, Kubernetes, Foundry, Prometheus, Grafana, RabbitMQ, PostgreSQL, MongoDB, Pinata, Firebase

WORK EXPERIENCE:
1. Person in Charge – Competitive Games at Pesta Rakyat Komputer (Feb 2025 - Present)
   - Leading competitive gaming tournaments for a major tech festival in Depok, Indonesia
   - Led a 17-member team to plan and execute tournaments with over 250 participants
   - Coordinated logistics, tournament structure, and technical operations

2. Student Mentor at Dasar-Dasar Pemrograman 0 (Jun 2024 - Sep 2024)
   - Mentored freshmen in Python programming, focusing on basic concepts and problem-solving
   - Checked and graded assignments submitted by first-year students
   - Shared experiences about adapting to university life

3. Staff of Software Engineering Academy at COMPFEST (Apr 2024 - Aug 2024)
   - Coordinated educational programs for intensive Software Engineering Academy
   - Managed curriculum planning, speaker invitations, and mentorship scheduling for 9-day program
   - Engaged with IT professionals and secured mentor partnerships

4. Founder at Rausky Gamestore (Apr 2020 - Jan 2023)
   - Founded and operated a digital game store during COVID-19 pandemic
   - Managed end-to-end operations including sales, customer service, and digital marketing
   - Grew user base and sustained profitability through strategic marketing

PROJECTS:
1. FinTrack - Personal Finance Dashboard (React.js, Node.js, MongoDB)
2. Building Store POS System (Spring Boot, Thymeleaf, AWS)
3. Pet Clinic Management System (Django, PostgreSQL)
4. MovieTek - Movie Exploration App (Flutter, TMDB API)
5. ICP Ticketing Platform (Next.js, Internet Computer Protocol, Motoko)
6. Mujur Reborn E-commerce (Django, TailwindCSS)
7. Building SoleMates Shoe Store (Django, PostgreSQL)
8. Personal Web Portfolio (Next.js, TypeScript, Tailwind CSS)
9. TemanBelajar Mobile Learning App (Figma, UX Design)
10. QRBN app - Qurban and Zakat platform (Solidity, Next.js, Lisk)
11. TikBoost - Tiktok Analytics and recommendation app (Flutter, FastAPI, Fine-tuned LLM)

PROFESSIONAL INTERESTS:
- Manchester United fan (football discussions welcome!)
- Stocks & crypto enthusiast (market trends, investment strategies)
- Love to travel and explore new cultures
- Continuous learner and tech explorer
- Believes in making complex technology accessible
- Always excited to share technical knowledge

EDUCATION & BACKGROUND:
- Computer Science at Universitas Indonesia (2023 - 2027)
- Self-taught in many cutting-edge technologies
- Always learning and exploring new tech
- Based in Indonesia, comfortable with both English and Bahasa Indonesia

Achievements:
- Finalist Lisk Builder Challenge Round 2
- Finalist Datathon Ristek 2025

SOCIAL LINKS:
- GitHub: https://github.com/DickyyBayu
- LinkedIn: https://www.linkedin.com/in/dickybayu/
- Instagram: https://www.instagram.com/dickyybayu/
- Email: dicky.bayusadewo@gmail.com

Respond in a friendly, professional way. Use emojis occasionally. Keep responses informative but conversational. Focus ONLY on professional topics. If asked about personal matters, redirect politely to professional topics. IMPORTANT: Always match the user's language - respond in Bahasa Indonesia if they ask in Indonesian, respond in English if they ask in English.`;

    const prompt = `${systemPrompt}\n\nUser question: ${message}\n\nResponse:`;

    // Add retry logic for API overload errors
    let lastError;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return NextResponse.json({ response: text });
      } catch (error: any) {
        lastError = error;
        console.error(`Gemini API attempt ${attempt} failed:`, error);
        
        // Check if it's a 503 (overloaded) or 429 (rate limit) error
        if (error.status === 503 || error.status === 429) {
          if (attempt < 3) {
            // Wait with exponential backoff: 1s, 2s, 4s
            const delay = Math.pow(2, attempt - 1) * 1000;
            console.log(`Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }
        }
        
        // If it's not a retryable error, break immediately
        break;
      }
    }

    // If all retries failed, return appropriate error message
    if (lastError?.status === 503) {
      return NextResponse.json({ 
        error: "🤖 I'm temporarily overloaded! The AI service is experiencing high traffic. Please try again in a few moments." 
      }, { status: 503 });
    }
    
    if (lastError?.status === 429) {
      return NextResponse.json({ 
        error: "🚦 Slow down there! Too many requests. Please wait a moment before asking another question." 
      }, { status: 429 });
    }

    // Generic error fallback
    throw lastError;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
