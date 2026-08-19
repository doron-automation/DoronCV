import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  MessageSquare,
  Sparkles,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format mailto body
    const subject = encodeURIComponent(`פנייה עבור דורון כהן - משרת QA / אוטומציה מאת ${formData.name} (${formData.company || 'חברה'})`);
    const body = encodeURIComponent(
      `שלום דורון,\n\nשמי ${formData.name}.\nאימייל: ${formData.email}\nחברה: ${formData.company}\nתפקיד מיועד: ${formData.role}\n\nהודעה:\n${formData.message}\n\nנשמח לתאם שיחה!`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#080C12] border-t border-[#1D2935] relative">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#49D6C4]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101720] border border-[#1D2935] text-xs font-mono text-[#49D6C4] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET_IN_TOUCH // OPEN_OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E8EEF4] font-sans">
            בואו נדבר על התפקיד הבא
          </h2>
          <p className="text-[#8EA0B3] text-base mt-2 max-w-2xl">
            פתוח להזדמנויות בתחום QA, Automation, Cloud ו-Microservices. זמין מיידית לשיחה ולראיון.
          </p>
          <div className="w-20 h-1 bg-[#49D6C4] mt-3 rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Action Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Status Card */}
            <div className="p-6 bg-[#101720] border border-[#3FD17A]/40 rounded-2xl relative overflow-hidden shadow-lg shadow-black/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#3FD17A] animate-ping"></span>
                <span className="text-sm font-mono font-bold text-[#3FD17A]">
                  STATUS: AVAILABLE IMMEDIATELY
                </span>
              </div>
              <p className="text-xs text-[#E8EEF4] leading-relaxed">
                פתוח לתפקידי <b>Senior QA Engineer</b>, <b>Automation Engineer</b> ו-<b>QA Lead</b> בסביבות Web, Mobile, Cloud ו-Microservices.
              </p>
            </div>

            {/* Direct Contact Methods Card */}
            <div className="p-6 bg-[#101720] border border-[#1D2935] rounded-2xl space-y-4">
              <h3 className="text-sm font-mono font-bold text-[#49D6C4] uppercase">
                DIRECT_COMMUNICATION_CHANNELS:
              </h3>

              {/* Email Button */}
              <div className="p-3.5 bg-[#080C12] border border-[#1D2935] hover:border-[#49D6C4]/50 rounded-xl flex items-center justify-between transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#101720] rounded-lg text-[#49D6C4]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#8EA0B3]">Email Address</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-mono text-[#E8EEF4] font-bold hover:text-[#49D6C4] transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    title="העתק אימייל"
                    className="p-2 bg-[#101720] hover:bg-[#1D2935] text-[#8EA0B3] hover:text-[#49D6C4] rounded-lg transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#3FD17A]" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 bg-[#49D6C4] text-[#080C12] rounded-lg font-mono text-xs font-bold hover:bg-[#3ec4b3] transition-colors"
                  >
                    שלח
                  </a>
                </div>
              </div>

              {/* Phone Button */}
              <div className="p-3.5 bg-[#080C12] border border-[#1D2935] hover:border-[#F2B544]/50 rounded-xl flex items-center justify-between transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#101720] rounded-lg text-[#F2B544]">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#8EA0B3]">Mobile Phone</div>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-mono text-[#E8EEF4] font-bold hover:text-[#F2B544] transition-colors">
                      {PERSONAL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyPhone}
                    title="העתק מספר טלפון"
                    className="p-2 bg-[#101720] hover:bg-[#1D2935] text-[#8EA0B3] hover:text-[#F2B544] rounded-lg transition-colors"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#3FD17A]" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="p-2 bg-[#F2B544] text-[#080C12] rounded-lg font-mono text-xs font-bold hover:bg-[#e0a232] transition-colors"
                  >
                    חייג
                  </a>
                </div>
              </div>

              {/* LinkedIn & GitHub Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#080C12] border border-[#1D2935] hover:border-[#0077B5] rounded-xl flex items-center justify-center gap-2 text-xs font-mono text-[#E8EEF4] hover:text-[#0077B5] transition-all hover:scale-105"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#080C12] border border-[#1D2935] hover:border-[#49D6C4] rounded-xl flex items-center justify-center gap-2 text-xs font-mono text-[#E8EEF4] hover:text-[#49D6C4] transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4 text-[#49D6C4]" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Quick Contact Message Form */}
          <div className="lg:col-span-7 bg-[#101720] border border-[#1D2935] rounded-2xl p-6 sm:p-8 relative">
            <h3 className="text-xl font-bold text-[#E8EEF4] mb-2 font-sans">
              שליחת פנייה ישירה לדורון
            </h3>
            <p className="text-xs text-[#8EA0B3] mb-6 font-mono">
              מלאו את הפרטים וההודעה תיפתח מיידית בתוכנת המייל שלכם (Mailto Trigger).
            </p>

            {submitted ? (
              <div className="p-6 bg-[#080C12] border border-[#3FD17A]/50 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#3FD17A]/15 text-[#3FD17A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-[#E8EEF4]">
                  ההודעה מוכנה לשליחה!
                </div>
                <p className="text-xs text-[#8EA0B3]">
                  תוכנת הדוא"ל שלך נפתחה עם פרטי הפנייה. ניתן גם לשלוח ישירות ל-<b>doroncohenqa@gmail.com</b>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#49D6C4] underline pt-2"
                >
                  שלח הודעה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-right">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#8EA0B3] mb-1">
                      שם מלא / איש קשר *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="לדוגמה: יעל כהן (HR / QA Manager)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#080C12] border border-[#1D2935] focus:border-[#49D6C4] rounded-xl px-4 py-2.5 text-xs text-[#E8EEF4] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8EA0B3] mb-1">
                      כתובת אימייל לחזרה *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080C12] border border-[#1D2935] focus:border-[#49D6C4] rounded-xl px-4 py-2.5 text-xs text-[#E8EEF4] outline-none transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#8EA0B3] mb-1">
                      שם החברה / ארגון
                    </label>
                    <input
                      type="text"
                      placeholder="שם החברה או הסטארטאפ"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#080C12] border border-[#1D2935] focus:border-[#49D6C4] rounded-xl px-4 py-2.5 text-xs text-[#E8EEF4] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8EA0B3] mb-1">
                      תפקיד מיועד
                    </label>
                    <input
                      type="text"
                      placeholder="Senior QA / Automation Engineer"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#080C12] border border-[#1D2935] focus:border-[#49D6C4] rounded-xl px-4 py-2.5 text-xs text-[#E8EEF4] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8EA0B3] mb-1">
                    תוכן ההודעה / פרטי המשרה *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="נשמח לשוחח בנוגע למשרת Senior QA Engineer אצלנו בצוות..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#080C12] border border-[#1D2935] focus:border-[#49D6C4] rounded-xl px-4 py-2.5 text-xs text-[#E8EEF4] outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[#49D6C4] hover:bg-[#3ec4b3] text-[#080C12] font-bold font-mono text-xs rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#49D6C4]/25"
                >
                  <Send className="w-4 h-4" />
                  <span>שלח פנייה עכשיו (Email Me)</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
