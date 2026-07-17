"use client";

import { useState } from "react";

export default function DivisionSections({ sections }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="dropdown">
      {sections.map((section, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`dropdown-wrap${isOpen ? " opened" : ""}`} key={section.title}>
            <div className="dropdown-opener" onClick={() => setOpenIndex(isOpen ? null : i)}>
              <h3>{section.title}</h3>
              <span className="dark-grey">{isOpen ? "Close" : "Read"}</span>
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <div className="inner-wrap">
                  {section.list ? (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
