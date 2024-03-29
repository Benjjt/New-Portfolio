"use client";
import { useEffect } from "react";

export default function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @ts-ignore

      if (window.hbspt) {
        // @ts-ignore

        window.hbspt.forms.create({
          portalId: "144414517",
          formId: "496fe94c-0b01-4487-a82c-56c8310464cf",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return <div id="hubspotForm" className="p-12 bg-white rounded-lg"></div>;
}
