import React from "react";

const SideNav = () => {
  const catagories: { name: string; imageSrc: string }[] = [
    { name: "Cooling System", imageSrc: "../../cooling-fan.svg" },
    { name: "GPUs", imageSrc: "../../graphic-card.svg" },
    { name: "Cases", imageSrc: "../../desktop.svg" },
    { name: "HDDs", imageSrc: "../../hdd.svg" },
    { name: "Motherboard", imageSrc: "../../motherboard.svg" },
    { name: "RAMs", imageSrc: "../../ram-memory.svg" },
    { name: "CPUs", imageSrc: "../../cpu.svg" },
  ];
  return (
    <>
      <div className="border-2 h-screen w-[20%] hidden md:block">
        <ul className="px-2 py-2 ">
          {catagories.map((ele) => {
            return (
              <li className="flex gap-2 p-3 ">
                <img src={ele.imageSrc} className="w-8" alt={ele.name} />
                <p className="my-auto">{ele.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
