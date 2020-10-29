import React from "react";

import design_icon from "../assets/design_icon.png";
import apple_icon from "../assets/apple.png";
import setting_icon from "../assets/setting.png";

const ServiceSection = () => {
  const services = [
    {
      icon: design_icon,
      name: "web design",
      description:
        "Lorem ipsum dolor sit amet consorporis error harum repudiandae quae eius! Enim hic non at similique quis modi.",
    },
    {
      icon: setting_icon,
      name: "development",
      description:
        "Lo amet consectetur adipisicing elit. Nobisvoluptas   error harum repudiandae quae eius! Enim hic non at similique quis modi.",
    },
    {
      icon: apple_icon,
      name: "branding",
      description:
        "Lorem ipsum dolor sunt dignissimos voluptas molestias corporis error harum repudiandae quae eius! Enim hic non at similique quis modi.",
    },
    {
      icon: design_icon,
      name: "photography",
      description:
        "Lorem ipsum dolor ssimos voluptagnissimos voluptas molestiass molespudiandae quae eiusimilique quis modi.",
    },
    {
      icon: setting_icon,
      name: "typography",
      description:
        "Lorem ipsum dolor sit amet aditionem sunt dignissimos voluptas  corporis harum repudiandae quae eiat similique quis modi.",
    },
    {
      icon: apple_icon,
      name: "ui design",
      description:
        "Lorem ipsum dolor sit amet conam  earum,  sunt  voluptas molestias corporis us! Enim hic non at similique quis modi.",
    },
  ];

  return (
    <div className="py-24 text-2xl text-center">
      <div className="tracking-widest font-semibold text-gray-700">
        SERVICES
      </div>
      <div className="flex flex-wrap items-center justify-center mt-20 px-20">
        {services.map((s) => (
          <ServiceCard key={s.name} service={s} />
        ))}
      </div>
    </div>
  );
};
export default ServiceSection;

const ServiceCard = ({ service }) => {
  const { icon, name, description } = service;

  return (
    <div className="text-center flex flex-col items-center service-card mx-4 text-gray-700">
      <img src={icon} alt="" className="w-8 h-8" />
      <div className="uppercase my-4 text-base font-semibold">{name}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
};
