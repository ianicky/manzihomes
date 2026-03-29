"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function QuotePage() {
  const searchParams = useSearchParams();
  const servicesParam = searchParams.get("services");

  useEffect(() => {
    if (servicesParam) {
      const phoneNumber = "254718856612";

      const servicesList = servicesParam.split(",");
      const formattedServices = servicesList.join(", ");

      const message = `Hello, I'm interested in the following services: ${formattedServices}. I would like to request a quote.`;

      const encodedMessage = encodeURIComponent(message);

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // ✅ Redirect safely after render
      window.location.replace(whatsappURL);
    }
  }, [servicesParam]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Redirecting to WhatsApp...</h1>
      <p>Please wait...</p>
    </div>
  );
}