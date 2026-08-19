import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Terminal, Check, AlertTriangle, ShieldCheck, Zap, Server, Copy, CheckCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsoleLine {
  id: number;
  text: string;
  type: 'cmd' | 'info' | 'pass' | 'warn' | 'stat' | 'success' | 'divider';
  delay: number;
}

const FULL_SUITE_LINES: ConsoleLine[] = [
  { id: 1, text: '$ python -m pytest tests/ --env=production -v', type: 'cmd', delay: 100 },
  { id: 2, text: '[QA-ENGINE] Initializing Playwright & Pytest distributed runners (xdist)...', type: 'info', delay: 400 },
  { id: 3, text: '[INFO] Target: AWS Cloud / Microservices Mesh · Region: eu-west-1', type: 'info', delay: 700 },
  { id: 4, text: '✓ API Tests ............ 128/128 PASS [2.4s]', type: 'pass', delay: 1100 },
  { id: 5, text: '✓ E2E Tests ............ 42/42 PASS (Chromium / WebKit) [6.1s]', type: 'pass', delay: 1600 },
  { id: 6, text: '✓ Regression Suite ..... 100% PASS (Zero Blockers)', type: 'pass', delay: 2000 },
  { id: 7, text: '✓ Backend Validation ... PASS (JSON Schema & DB Integrity)', type: 'pass', delay: 2400 },
  { id: 8, text: '✓ Database Tests ....... PASS (MSSQL / DynamoDB Sync)', type: 'pass', delay: 2800 },
  { id: 9, text: '⚠ Performance (Gatling) ... Bottleneck flagged in Checkout SLA (>450ms)', type: 'warn', delay: 3300 },
  { id: 10, text: '✓ Optimization applied .. Query indexed & Redis cached → Resolved (120ms)', type: 'pass', delay: 3900 },
  { id: 11, text: '──────────────────────────────────────────────────────────', type: 'divider', delay: 4300 },
  { id: 12, text: '📊 TEST COVERAGE: 95% (Critical features 60% → 95%)', type: 'stat', delay: 4600 },
  { id: 13, text: '📉 PROD BUGS: -30%  ·  ⏱ AUTOMATION RUNTIME: -40%', type: 'stat', delay: 4900 },
  { id: 14, text: '🚀 STATUS: ALL 170 TESTS PASSED · READY FOR RELEASE [CI/CD VERIFIED]', type: 'success', delay: 5300 }
];

export const HeroConsole: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<ConsoleLine[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'full' | 'api' | 'e2e' | 'perf'>('full');
  const [copied, setCopied] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const startTestRun = () => {
    // Clear previous timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setDisplayedLines([]);
    setIsRunning(true);

    FULL_SUITE_LINES.forEach((line) => {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        if (line.type === 'success') {
          setIsRunning(false);
          // Trigger celebration confetti
          try {
            confetti({
              particleCount: 40,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#49D6C4', '#F2B544', '#3FD17A']
            });
          } catch (e) {
            // ignore if confetti blocked
          }
        }
      }, line.delay);
      timeoutsRef.current.push(timeout);
    });
  };

  useEffect(() => {
    startTestRun();
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [activeTab]);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [displayedLines]);

  const handleCopyLogs = () => {
    const text = displayedLines.map(l => l.text).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl bg-[#0D131B] border border-[#1D2935] rounded-xl overflow-hidden shadow-2xl shadow-black/80 font-mono text-xs md:text-sm border-glow transition-all duration-300">
      
      {/* Console Top Bar */}
      <div className="bg-[#101720] border-b border-[#1D2935] px-4 py-2.5 flex items-center justify-between select-none">
        
        {/* Left Mac/Terminal controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF5B5B]/80 hover:bg-[#EF5B5B] transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#F2B544]/80 hover:bg-[#F2B544] transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-[#3FD17A]/80 hover:bg-[#3FD17A] transition-colors"></div>
          <div className="h-4 w-[1px] bg-[#1D2935] mx-1"></div>
          <div className="flex items-center gap-1.5 text-[#8EA0B3] text-xs">
            <Terminal className="w-3.5 h-3.5 text-[#49D6C4]" />
            <span className="font-semibold text-[#E8EEF4]">doron_qa_runner.py</span>
            <span className="text-[#5D6F82] hidden sm:inline">--playwright</span>
          </div>
        </div>

        {/* Right Status Indicator & Actions */}
        <div className="flex items-center gap-2">
          {isRunning ? (
            <span className="flex items-center gap-1.5 text-[#F2B544] text-xs bg-[#F2B544]/10 border border-[#F2B544]/30 px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B544] animate-ping"></span>
              RUNNING TESTS...
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[#3FD17A] text-xs bg-[#3FD17A]/10 border border-[#3FD17A]/30 px-2 py-0.5 rounded">
              <Check className="w-3 h-3" />
              100% PASSED
            </span>
          )}

          <button
            onClick={startTestRun}
            title="Re-run Automation Suite"
            className="p-1 text-[#8EA0B3] hover:text-[#49D6C4] hover:bg-[#1D2935] rounded transition-colors"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={handleCopyLogs}
            title="Copy test output"
            className="p-1 text-[#8EA0B3] hover:text-[#49D6C4] hover:bg-[#1D2935] rounded transition-colors"
          >
            {copied ? <CheckCheck className="w-3.5 h-3.5 text-[#3FD17A]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Scope Pills / Tabs */}
      <div className="bg-[#0A0E14] border-b border-[#1D2935] px-4 py-1.5 flex items-center gap-2 text-xs overflow-x-auto">
        <span className="text-[#5D6F82] font-semibold text-[11px] uppercase tracking-wider">Suite:</span>
        <button 
          onClick={() => setActiveTab('full')}
          className={`px-2 py-0.5 rounded text-xs transition-all ${
            activeTab === 'full' 
              ? 'bg-[#49D6C4]/15 text-[#49D6C4] border border-[#49D6C4]/40 font-semibold' 
              : 'text-[#8EA0B3] hover:text-[#E8EEF4]'
          }`}
        >
          Full Regression (170)
        </button>
        <button 
          onClick={() => setActiveTab('api')}
          className={`px-2 py-0.5 rounded text-xs transition-all ${
            activeTab === 'api' 
              ? 'bg-[#49D6C4]/15 text-[#49D6C4] border border-[#49D6C4]/40 font-semibold' 
              : 'text-[#8EA0B3] hover:text-[#E8EEF4]'
          }`}
        >
          API REST (128)
        </button>
        <button 
          onClick={() => setActiveTab('e2e')}
          className={`px-2 py-0.5 rounded text-xs transition-all ${
            activeTab === 'e2e' 
              ? 'bg-[#49D6C4]/15 text-[#49D6C4] border border-[#49D6C4]/40 font-semibold' 
              : 'text-[#8EA0B3] hover:text-[#E8EEF4]'
          }`}
        >
          E2E Playwright (42)
        </button>
      </div>

      {/* Terminal Screen Body */}
      <div className="p-4 bg-[#080C12] min-h-[300px] max-h-[360px] overflow-y-auto space-y-1.5 leading-relaxed selection:bg-[#49D6C4] selection:text-[#080C12] text-left" dir="ltr">
        {displayedLines.map((line) => {
          if (line.type === 'cmd') {
            return (
              <div key={line.id} className="text-[#49D6C4] font-semibold flex items-center gap-1.5">
                <span className="text-[#F2B544] select-none">&gt;</span>
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === 'info') {
            return (
              <div key={line.id} className="text-[#8EA0B3] text-xs">
                {line.text}
              </div>
            );
          }
          if (line.type === 'pass') {
            return (
              <div key={line.id} className="text-[#3FD17A] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#3FD17A] shrink-0" />
                <span>{line.text.replace('✓ ', '')}</span>
              </div>
            );
          }
          if (line.type === 'warn') {
            return (
              <div key={line.id} className="text-[#F2B544] bg-[#F2B544]/5 p-1 rounded border border-[#F2B544]/20 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#F2B544] shrink-0" />
                <span>{line.text.replace('⚠ ', '')}</span>
              </div>
            );
          }
          if (line.type === 'divider') {
            return (
              <div key={line.id} className="text-[#1D2935] overflow-hidden select-none py-1">
                {line.text}
              </div>
            );
          }
          if (line.type === 'stat') {
            return (
              <div key={line.id} className="text-[#E8EEF4] font-bold bg-[#101720] px-2 py-1 rounded border border-[#1D2935]">
                {line.text}
              </div>
            );
          }
          if (line.type === 'success') {
            return (
              <div key={line.id} className="text-[#080C12] bg-gradient-to-r from-[#49D6C4] to-[#3FD17A] font-bold px-3 py-1.5 rounded flex items-center gap-2 shadow-lg shadow-[#49D6C4]/20 mt-2">
                <ShieldCheck className="w-4 h-4 text-[#080C12]" />
                <span>{line.text}</span>
              </div>
            );
          }
          return null;
        })}

        {isRunning && (
          <div className="flex items-center gap-1 text-[#49D6C4] pt-1">
            <span className="w-2 h-4 bg-[#49D6C4] animate-pulse inline-block"></span>
          </div>
        )}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Footer Bar */}
      <div className="bg-[#101720] border-t border-[#1D2935] px-4 py-2 flex items-center justify-between text-[11px] text-[#8EA0B3]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Server className="w-3 h-3 text-[#49D6C4]" />
            <span>AWS ECS Runner</span>
          </span>
          <span className="hidden sm:inline text-[#5D6F82]">|</span>
          <span className="hidden sm:inline text-[#8EA0B3]">Coverage: <b className="text-[#49D6C4]">95%</b></span>
        </div>
        <div className="flex items-center gap-1 text-[#5D6F82]">
          <span>Exit: 0</span>
          <span>·</span>
          <span>Time: 5.3s</span>
        </div>
      </div>
    </div>
  );
};
