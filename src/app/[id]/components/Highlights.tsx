"use client";

export default function Highlights() {
  return (
    <section
      className="
        px-4 md:px-0"
    >
      <p className="text-[18px] font-bold">Highlights</p>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item, _) => {
          return (
            <div
              key={`highlights-${item.txt}`}
              className="flex flex-col rounded-xl border border-gray-300 p-[18.25px]"
            >
              <img alt={item.txt} className="mb-3 h-6 w-6" src={item.img} />
              <p className="font-bold leading-tight">{item.txt}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const items = [
  {
    img: "/img/time.svg",
    txt: "Open: 1:00 PM - 12:00 AM",
  },
  {
    img: "/img/card.svg",
    txt: "Accepts credit cards",
  },
  {
    img: "/img/house.svg",
    txt: "Outdoor seating",
  },
  {
    img: "/img/people.svg",
    txt: "Good for groups",
  },
  {
    img: "/img/bike.svg",
    txt: "Delivery",
  },
];
