import React from "react";

const branches = [
  {
    name: "Учтепинский район",
    address: "Учтепинский район, г. Ташкент",
  },
  {
    name: "Алмазарский район",
    address: "Алмазарский район, возле станции метро Беруний, г. Ташкент",
  },
];

const Branches = () => {
  return (
    <section id="branches" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">Наши филиалы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-blue-50 shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
              <p className="text-gray-600">{branch.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
