import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  CheckSquare, 
  Code2, 
  Cloud, 
  Wrench, 
  Database, 
  Network, 
  Search, 
  Star, 
  Filter 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-[#49D6C4]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#49D6C4]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#F2B544]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#49D6C4]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#49D6C4]" />;
      case 'Network': return <Network className="w-5 h-5 text-[#49D6C4]" />;
      default: return <Code2 className="w-5 h-5 text-[#49D6C4]" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return null;
    }
    
    if (!searchQuery.trim()) {
      return category;
    }

    const matchingSkills = category.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0 && !category.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }

    return {
      ...category,
      skills: matchingSkills.length > 0 ? matchingSkills : category.skills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-[#0A0E14] border-t border-[#1D2935] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101720] border border-[#1D2935] text-xs font-mono text-[#49D6C4] mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>CORE_COMPETENCIES // SKILL_MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E8EEF4] font-sans">
              כישורים טכניים
            </h2>
            <p className="text-[#8EA0B3] text-base mt-2 max-w-xl">
              מיומנות מעשית מקיפה בבדיקות תוכנה, תשתיות ענן, ניתוח פרוטוקולי תקשורת ומסדי נתונים.
            </p>
            <div className="w-20 h-1 bg-[#49D6C4] mt-3 rounded-full"></div>
          </div>

          {/* Search and Category Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="חיפוש כישור (Python, AWS, API...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-[#101720] border border-[#1D2935] focus:border-[#49D6C4] rounded-lg px-3.5 py-2 pl-9 text-xs text-[#E8EEF4] placeholder-[#5D6F82] outline-none transition-colors"
              />
              <Search className="w-4 h-4 text-[#5D6F82] absolute left-3 top-2.5" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#101720] border border-[#1D2935] focus:border-[#49D6C4] rounded-lg px-3 py-2 text-xs text-[#E8EEF4] outline-none font-mono"
            >
              <option value="all">כל הקטגוריות (All)</option>
              <option value="testing">Testing Methodologies</option>
              <option value="automation">Automation &amp; Code</option>
              <option value="cloud_devops">Cloud &amp; DevOps</option>
              <option value="tools">Tools &amp; Observability</option>
              <option value="databases">Databases &amp; SQL</option>
              <option value="networking">Networking &amp; Protocols</option>
            </select>
          </div>
        </div>

        {/* 6 Category Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;
            return (
              <div
                key={category.id}
                className="bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#1D2935] pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#080C12] border border-[#1D2935] rounded-lg group-hover:border-[#49D6C4]/40 transition-colors">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h3 className="font-mono font-bold text-sm text-[#E8EEF4] tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-[#5D6F82]">
                      {category.skills.length} items
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => {
                      const isHighlighted = skill.highlight;
                      return (
                        <div
                          key={idx}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
                            isHighlighted
                              ? 'bg-[#080C12] text-[#49D6C4] border border-[#49D6C4]/30 hover:border-[#49D6C4] shadow-sm'
                              : 'bg-[#080C12] text-[#8EA0B3] border border-[#1D2935] hover:text-[#E8EEF4]'
                          }`}
                        >
                          {isHighlighted && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#49D6C4]"></span>
                          )}
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] text-[#5D6F82]">
                              · {skill.level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1D2935] flex items-center justify-between text-[11px] font-mono text-[#5D6F82]">
                  <span>CATEGORY_INTEGRITY</span>
                  <span className="text-[#3FD17A]">100% Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
