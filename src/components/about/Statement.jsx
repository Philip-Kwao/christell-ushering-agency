import React from "react";
import { StatementData } from "../../../lib";
import ServiceCard from "../ServiceCard";

const Statement = () => {
  return (
    <section className="relative">
      <h2 className="text-center font-bold text-xl capitalize my-4">
        What we stand for
      </h2>
      <div className="-z-10 flex items-center flex-wrap justify-between gap-5 m-6">
        {StatementData?.map((data, key) => (
          <ServiceCard
            key={key}
            name={data.title}
            icon={data.icon}
            detail={data.detail}
          />
        ))}
      </div>
    </section>
  );
};

export default Statement;
