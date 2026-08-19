import React from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  Sparkles, 
  Search, 
  Zap, 
  Database,
  Workflow
} from 'lucide-react';
import { DoronAvatar } from './DoronAvatar';

export const About: React.FC = () => {
  const testingCompetencies = [
    { title: 'Manual Testing', desc: 'בדיקות פונקציונליות מעמיקות, Exploratory ו-UAT' },
    { title: 'Automation Testing', desc: 'בניית תשתיות מודולריות ב-Playwright, Selenium ו-Python' },
    { title: 'API & Microservices', desc: 'בדיקות שירותי REST, JSON Schema ו-Contracts' },
    { title: 'Backend & DB Integrity', desc: 'אימות נתונים בשאילתות SQL מורכבות ו-Data Pipelines' },
    { title: 'Integration Testing', desc: 'בדיקות ממשקים רב-מערכתיים ותקשורת בין שירותים' },
    { title: 'E2E & User Journeys', desc: 'אימות מסלול משתמש מלא מקצה לקצה בדפדפנים מרובים' },
    { title: 'Regression Strategy', desc: 'מיפוי תלויות חכם והפחתת זמני הרצה ב-CI/CD' },
    { title: 'Exploratory Testing', desc: 'חשיפת מקרי קצה מורכבים ותרחישי כשל לא מתועדים' },
    { title: 'Performance Testing', desc: 'איתור צווארי בקבוק ועמידה ב-SLAs באמצעות Gatling' },
    { title: 'Production Investigation', desc: 'ניתוח לוגים (Splunk, Wireshark, Linux) ותחקור תקלות' }
  ];

  const tags = [
    'Playwright',
    'Selenium',
    'Python',
    'Pytest',
    'AWS Cloud',
    'Postman',
    'Jenkins CI/CD',
    'Docker',
    'Kubernetes',
    'SQL',
    'Git',
    'Jira',
    'Gatling',
    'Splunk',
    'Wireshark',
    'Swagger / OpenAPI'
  ];

  return (
    <section id="about" className="py-20 bg-[#080C12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101720] border border-[#1D2935] text-xs font-mono text-[#49D6C4] mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT_ENGINEER // PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E8EEF4] font-sans">
            אודותיי
          </h2>
          <div className="w-20 h-1 bg-[#49D6C4] mt-2 rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            <div className="p-6 rounded-2xl bg-[#101720] border border-[#1D2935] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#49D6C4]/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-bold text-[#E8EEF4] mb-3">
                שילוב מעמיק בין ראייה מערכתית רב-תחומית לאוטומציה מתקדמת בענן
              </h3>
              
              <p className="text-[#E8EEF4] leading-relaxed text-base">
                <b>דורון כהן</b> הוא <b>Senior QA Engineer</b> עם ניסיון רב בבדיקות מערכות מורכבות, מערכות Cloud, Microservices, API ו־Backend.
                הקריירה המקצועית שלו משלבת עבודה מעמיקה על מערכות תקשורת לוויין עתירות פרוטוקולים (ב-Gilat) לצד הובלת איכות ואוטומציה בארכיטקטורת ענן מבוססת AWS ו-Microservices (ב-NICE Systems).
              </p>

              <p className="text-[#8EA0B3] leading-relaxed text-sm mt-3">
                דורון מתמחה בהבנת הארכיטקטורה המערכתית מקצה לקצה, החל מניתוח לוגים ברמת השרת והרשת, אימות מסדי נתונים בשאילתות SQL מורכבות, ועד פיתוח תשתיות אוטומציה מודולריות ב-<b>Python ו-Playwright/Selenium</b> המשתלבות בצנרות CI/CD.
              </p>

              {/* AI Enablement callout */}
              <div className="mt-4 p-3.5 bg-[#080C12] rounded-xl border border-[#1D2935] flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#F2B544] shrink-0 mt-0.5" />
                <div className="text-xs text-[#8EA0B3] leading-relaxed">
                  <span className="text-[#E8EEF4] font-semibold">מינוף כלי AI בתהליכי QA: </span>
                  שימוש שוטף ב-GitHub Copilot ו-ChatGPT להאצת כתיבת מסמכי STP/STD, איתור תרחישי קצה מורכבים וייעול כתיבת סקריפטי אוטומציה.
                </div>
              </div>
            </div>

            {/* Core Competencies Grid */}
            <div className="space-y-3">
              <div className="text-sm font-mono font-bold text-[#49D6C4] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3FD17A]" />
                <span>תחומי מומחיות ומתודולוגיות בדיקה (Core QA Capabilities)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {testingCompetencies.map((comp, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-[#101720]/80 border border-[#1D2935] hover:border-[#49D6C4]/40 rounded-xl transition-all hover:bg-[#101720]"
                  >
                    <div className="font-bold text-sm text-[#E8EEF4] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#49D6C4]"></span>
                      <span>{comp.title}</span>
                    </div>
                    <div className="text-xs text-[#8EA0B3] mt-1">
                      {comp.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Tags Cloud */}
            <div className="pt-2">
              <div className="text-xs font-mono text-[#8EA0B3] mb-2.5">
                STACK_TAGS // ניסיון טכנולוגי מעשי:
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#101720] border border-[#1D2935] text-[#E8EEF4] hover:border-[#49D6C4] hover:text-[#49D6C4] transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Left Visual Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Profile Summary Card */}
            <div className="bg-[#101720] border border-[#1D2935] rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-4 border-b border-[#1D2935] pb-5">
                <DoronAvatar size="md" showBadge={false} />
                <div>
                  <h4 className="text-lg font-bold text-[#E8EEF4]">דורון כהן</h4>
                  <div className="text-xs font-mono text-[#49D6C4]">Senior QA Engineer</div>
                  <div className="text-xs text-[#8EA0B3] mt-0.5">זמינות: <span className="text-[#3FD17A] font-semibold">מיידית (Immediate)</span></div>
                </div>
              </div>

              <div className="pt-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[#1D2935]/50">
                  <span className="text-[#8EA0B3]">Total Experience:</span>
                  <span className="text-[#E8EEF4] font-bold">12+ Years</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#1D2935]/50">
                  <span className="text-[#8EA0B3]">Primary Automation:</span>
                  <span className="text-[#49D6C4] font-bold">Playwright · Python · Selenium</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#1D2935]/50">
                  <span className="text-[#8EA0B3]">Backend &amp; Cloud:</span>
                  <span className="text-[#E8EEF4]">AWS · REST API · Microservices</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#1D2935]/50">
                  <span className="text-[#8EA0B3]">Certifications:</span>
                  <span className="text-[#F2B544] font-bold">ISTQB CTFL · QA Automation</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#1D2935]/50">
                  <span className="text-[#8EA0B3]">Education:</span>
                  <span className="text-[#E8EEF4]">B.Sc. Computer Science</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#8EA0B3]">Email:</span>
                  <a href="mailto:doroncohenqa@gmail.com" className="text-[#49D6C4] hover:underline">
                    doroncohenqa@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* QA Philosophy Card */}
            <div className="bg-[#0D131B] border border-[#1D2935] rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-mono text-[#F2B544] font-bold">
                <Zap className="w-4 h-4 text-[#F2B544]" />
                <span>גישת האיכות (QA Mindset)</span>
              </div>
              <p className="text-xs text-[#8EA0B3] leading-relaxed">
                "בדיקות איכות אינן רק מציאת באגים בסוף התהליך — אלא מניעתם מהשלב הראשון. השילוב בין הבנה ארכיטקטונית עמוקה, אוטומציה מהירה ב-CI/CD ובדיקות Exploratory חכמות הוא המפתח לשחרור גרסאות יציבות, אמינות וללא תקלות בייצור."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
