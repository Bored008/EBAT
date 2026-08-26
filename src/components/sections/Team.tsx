import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 'arjun',
    name: 'Arjun Mehta',
    role: 'Lead Hardware Engineer',
    image: '/images/team/arjun1.png',
  },
  {
    id: 'divya',
    name: 'Divya Kapoor',
    role: 'Training & Certification Lead',
    image: '/images/team/divya.png',
  },
  {
    id: 'ananya',
    name: 'Ananya Rao',
    role: 'Field Service Technician',
    image: '/images/team/ananya.png',
  },
  {
    id: 'vikram',
    name: 'Arjun Mehta',
    role: 'Lead Hardware Engineer',
    image: '/images/team/arjun2.png',
  },
  {
    id: 'priya',
    name: 'Priya Nair',
    role: 'AI/ML Engineer',
    image: '/images/team/priya.png',
  },
  {
    id: 'rohan',
    name: 'Rohan Verma',
    role: 'Flight Operations Specialist',
    image: '/images/team/rohan.png',
  },
];

export function Team() {
  return (
    <section className="w-[100vw] relative left-1/2 -translate-x-1/2 flex flex-col items-center gap-[64px] overflow-hidden">
      {/* Header Container */}
      <div className="flex flex-col items-center gap-[8px] max-w-[816px] text-center px-[24px]">
        <h2 className="font-heading font-bold text-[48px] md:text-[64px] leading-tight tracking-[-0.05em] text-white">
          Meet the <span className="font-accent italic font-normal text-[#F00511] underline decoration-1 underline-offset-4">Team</span>
        </h2>
        <p className="font-sans text-[16px] text-white/75 leading-[1.5] tracking-[-0.02em]">
          The engineers, pilots, and specialists who keep every EBAT mission flying.
        </p>
      </div>

      {/* Team Row - Infinite Marquee */}
      <div className="w-full relative mt-[-16px] group flex overflow-hidden gap-[20px]">
        {/* We render two identical flex tracks side by side that translate infinitely. 
            The marquee keyframe translates exactly -100% - 20px (width of one track + gap). */}
        
        {/* Track 1 */}
        <div className="flex flex-row gap-[20px] min-w-max animate-marquee">
          {teamMembers.map((member) => (
            <div key={`${member.id}-1`} className="flex flex-col gap-[16px] w-[300px] shrink-0 items-start">
              {/* Image Container */}
              <div className="relative w-full h-[293px] rounded-[16px] overflow-hidden bg-[#D9D9D9]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col gap-[4px] w-full text-left">
                <h3 className="font-sans font-medium text-[20px] text-white tracking-[-0.02em] leading-tight">
                  {member.name}
                </h3>
                <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] leading-snug">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2 - Duplicate for seamless looping */}
        <div className="flex flex-row gap-[20px] min-w-max animate-marquee" aria-hidden="true">
          {teamMembers.map((member) => (
            <div key={`${member.id}-2`} className="flex flex-col gap-[16px] w-[300px] shrink-0 items-start">
              {/* Image Container */}
              <div className="relative w-full h-[293px] rounded-[16px] overflow-hidden bg-[#D9D9D9]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col gap-[4px] w-full text-left">
                <h3 className="font-sans font-medium text-[20px] text-white tracking-[-0.02em] leading-tight">
                  {member.name}
                </h3>
                <p className="font-sans text-[16px] text-white/75 tracking-[-0.02em] leading-snug">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
