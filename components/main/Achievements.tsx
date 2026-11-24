import React from "react";
import AchievementCard from "../sub/AchievementCard";
import Reveal from "@/components/ui/Reveal";

const achievementData: {
  src: string;
  title: string;
  description: string;
}[] = [
  {
    src: "/bdpho.png",
    title: "Bangladesh Physics Olympiad (BdPhO)",
    description:
      "1× national champion · 2× regional champion · 2× national finalist · IPhO Camper.",
  },
  {
    src: "/certis/pb29.png",
    title: "Physics Brawl",
    description:
      "29th place out of 1,584 teams internationally · 10th nationwide.",
  },
  {
    src: "/phiga.png",
    title: "PHIGA #1 Worldwide",
    description:
      "1st place out of 1,211 participants in the PHIGA International Physics Competition.",
  },
  {
    src: "/certis/qcwc.png",
    title: "Queen’s Commonwealth Essay Competition — Silver Award",
    description: "Silver Award out of 53,840 entries.",
  },
  {
    src: "/paper1.png",
    title: "Published Research Papers",
    description:
      "Peer-reviewed publication on entropy-minimal noise schedules for diffusion models; preprint on geometric distortion of quantum state space under noise.",
  },
  {
    src: "/bdoaa.png",
    title: "Bangladesh Olympiad on Astronomy and Astrophysics (BDOAA)",
    description: "15th Nationally · IOAA Camper.",
  },
  {
    src: "/certis/kaipho.png",
    title: "KAIPHO — Silver Medal",
    description:
      "Awarded a silver medal at KAIPHO, hosted by Kazan National Research Technical University.",
  },
  {
    src: "/certis/iaac_hon.png",
    title: "International Astronomy and Astrophysics Competition (IAAC)",
    description: "Silver Honor.",
  },
  {
    src: "/certis/bdoc.png",
    title: "BDOC Chemistry Olympiad",
    description: "Finalist.",
  },
  {
    src: "/certis/nasac.png",
    title: "NASA Space Apps Challenge",
    description: "Exoplanet AI Model.",
  },
  {
    src: "/lc.png",
    title: "LeetCode",
    description: "Top 7% · 200+ problems solved.",
  },
  {
    src: "/codeforces.png",
    title: "Codeforces",
    description: "1300+ rating.",
  },
];

const Achievements = () => {
  return (
    <section
      className="w-full py-16 sm:py-20"
      id="achievements"
      aria-label="Achievements"
    >
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {achievementData.map((achievement, index) => (
            <Reveal
              key={achievement.title}
              className="h-full"
              delay={Math.min(index, 8) * 0.04}
            >
              <AchievementCard
                src={achievement.src}
                title={achievement.title}
                description={achievement.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
