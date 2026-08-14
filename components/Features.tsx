import React from 'react';
import { Lock, Link2, Users, Code } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 'encryption',
      icon: Lock,
      iconBg: 'bg-[#FFF3EB]',
      iconColor: 'text-[#E57A44]',
      title: 'End-to-end encryption',
      description:
        'Your env variables are encrypted before they leave your device. Only authorized people can access them.',
    },
    {
      id: 'temporary',
      icon: Link2,
      iconBg: 'bg-[#EEF4FF]',
      iconColor: 'text-[#4F75E2]',
      title: 'Temporary by default',
      description:
        'Set expiration times for variables and secrets. They auto-expire when no longer needed.',
    },
    {
      id: 'sharing',
      icon: Users,
      iconBg: 'bg-[#ECFDF3]',
      iconColor: 'text-[#16B364]',
      title: 'Team sharing',
      description:
        'Share envs with your team securely. Granular access control and audit logs included.',
    },
    {
      id: 'developer',
      icon: Code,
      iconBg: 'bg-[#F5F3FF]',
      iconColor: 'text-[#7C3AED]',
      title: 'Developer friendly',
      description:
        'CLI, API and integrations with your favorite tools. Super Env fits right into your workflow.',
    },
  ];

  return (
    <section id="features" className="py-5 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <div className="inline-block">
          <span className="px-3.5 py-1 text-xs font-semibold tracking-wider text-[#8A7969] uppercase bg-[#FAF8F5] border border-[#E7DFD4] rounded-full">
            Features
          </span>
        </div>
        <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1A18] mt-4 tracking-[-0.02em]">
          Everything you need to<br className="hidden sm:inline" /> manage envs securely.
        </h2>
        <p className="text-base sm:text-lg text-[#6B655D] mt-3 font-normal">
          Built for developers. Designed for teams.
        </p>
      </div>

      {/* 4 Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {features.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-[#EBE6DF] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-[#DDD5C9] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div
                  className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105`}
                >
                  <IconComponent className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-[17px] sm:text-lg text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#706B62] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
