"use client";
import { useState } from "react";
import Image from "next/image";

interface FlipCardsProps {
  setIndex: (index: number) => void; // Function to update the parent state
}

const FlipCards: React.FC<FlipCardsProps> = ({ setIndex }) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
    setIndex(index);
  };

  // Data for each card (front and back content)
  const cardData = [
    {
      name: "Frontend",
      title: "Building the user Interface",
      frontImage: "/ai_bot.png",
      backImage: "/development.png",
    },
    {
      name: "Backend",
      title: "Powering the server-side Logic",
      frontImage: "/ai_bot.png",
      backImage: "/development.png",
    },
    {
      name: "AI",
      title: "Intelligent Machines, Limitless Possibilities",
      frontImage: "/ai_bot.png",
      backImage: "/development.png",
    },
    {
      name: "UX",
      title: "Designing for User Delight",
      frontImage: "/ai_bot.png",
      backImage: "/development.png",
    },
    {
      name: "Cloud",
      title: "The Future of Computing",
      frontImage: "/ai_bot.png",
      backImage: "/development.png",
    },
    {
      name: "DevOps",
      title: "Accelerating Software Delivery",
      frontImage: "/ai_bot.png",
      backImage: "/development.png",
    },
  ];

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-10">
      {cardData.map((card, index) => (
        <div
          className={`group hover:bg-gradient-to-t from-[#D4AFF5] to-[#82C3FF] p-[2px] rounded-lg ${
            (index === 2 || index === 3) && "translate-y-[80px]"
          }`}
          key={index}
        >
          <div className="p-2 group-hover:bg-white rounded-lg">
            <div
              className={`card w-[192.23px] h-[270.3px] cursor-pointer`}
              onMouseEnter={() => toggleFlip(index)}
            >
              <div
                className={`card__content relative text-center transition-transform duration-1000 ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="card__front ">
                  <div className="w-[192.23px] h-[270.3px] flex flex-col justify-between bg-gradient-to-t from-[#7793FF80] to-transparent rounded-lg overflow-hidden">
                    <div className="p-[15px] pt-[30px] text-start">
                      <h1 className="text-black font-medium">{card.name}</h1>
                      <h2 className="grotesk text-[#666666] font-medium">
                        {card.title}
                      </h2>
                    </div>
                    <div className="w-full flex justify-end">
                      <div className="relative h-[163px] w-[163px]">
                        <Image src={card.frontImage} alt={card.name} fill />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="card__back absolute top-0 bottom-0 right-0 left-0 transform rotate-y-180">
                  <div className="w-[192.23px] h-[270.3px] flex items-center justify-center bg-gradient-to-t from-white to-[#8218EA] rounded-lg overflow-hidden">
                    <div className="relative h-[142px] w-[150px]">
                      <Image
                        src={card.backImage}
                        alt={`Back of ${card.name}`}
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards;
