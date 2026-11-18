import React from "react";
import AchievementCard from "../sub/AchievementCard";

const achievementData: {
  src: string;
  title: string;
  description: string;
}[] = [
  {
    src: "/bdpho.png",
    title: "National Champion — Bangladesh Physics Olympiad (BdPhO)",
    description:
      "2× regional champion · 2× national finalist · 1× national champion · IPhO national camp selection.",
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
    title: "IPhO & IOAA National Camp Selections",
    description:
      "Selected for national physics and astronomy Olympiad camps through the IPhO and IOAA tracks.",
  },
];

const Achievements = () => {
  return (
    <section
      className="flex flex-col relative items-center justify-center w-full py-4"
      id="achievements"
      aria-label="Achievements"
    >
      <div className="h-full w-full flex flex-wrap gap-8 px-2 justify-center">
        {achievementData.map((achievement) => (
          <AchievementCard
            key={achievement.title}
            src={achievement.src}
            title={achievement.title}
            description={achievement.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
