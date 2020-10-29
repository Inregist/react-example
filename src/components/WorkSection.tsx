import React, { useEffect, useState } from "react";

const WorkSection = () => {
  const tabs = {
    all: "all",
    branding: "branding",
    design: "design",
    photo: "photo",
    coffee: "coffee",
  };
  const [selection, setSelection] = useState(tabs.all);

  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="uppercase text-center text-2xl tracking-widest font-semibold text-gray-700">
        Great Work<span className="text-yellow-600">.</span>
      </div>
      <WorkTab tabs={tabs} selection={selection} setSelection={setSelection} />
      <WorkImages selection={selection} />
    </div>
  );
};
export default WorkSection;

const WorkTab = ({ tabs, selection, setSelection }) => {
  return (
    <div className="flex items-center justify-between sm:w-1/3 w-full px-4 text-sm my-12">
      {Object.keys(tabs).map((tab) => (
        <div
          key={tab}
          className={`uppercase font-medium cursor-pointer 
                      ${selection === tab ? "text-yellow-600" : ""}`}
          onClick={() => setSelection(tabs[tab])}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

const WorkImages = ({ selection }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImgUrl = async () => {
      const res = await fetch(
        "https://api.unsplash.com/photos/random/?count=8&orientation=landscape&client_id=tpK1vbxOxCPIup5H8jD10pXoxlXEX9K23AXj9VfLcEg&query=" +
          selection
      );
      setImages(await res.json());
    };
    getImgUrl();
  }, [selection]);

  return (
    <div className="flex items-center justify-center flex-wrap">
      {images.map((img: any, i) => (
        <div className="md:w-1/4 w-full md:h-64 ">
          <img
            key={i}
            src={img.urls.regular}
            alt="https://http.cat/200"
            className="w-full h-full object-fill"
          />
        </div>
      ))}
    </div>
  );
};
