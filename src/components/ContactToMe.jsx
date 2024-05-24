import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { contactData } from "../constants";
import CartContact from "./CartContact";

const ContactToMe = () => {
  return (
    <div className="items-start  flex flex-col">
      <h3 className="text-white text-[24px] font-bold text-center">
        Click for Contact to me
      </h3>
      <div className="flex flex-wrap o gap-10 py-10 ">
        {contactData.map((service, index) => (
          <CartContact
            key={service.title}
            index={index}
            {...service}
            link={service.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ContactToMe, "");
