"use client";

import { useSearchParams } from "next/navigation";

export default function QuotePage() {
  const searchParams = useSearchParams();

  // 👇 change from "service" to "services"
  const servicesParam = searchParams.get("services");

  if (typeof window !== "undefined" && servicesParam) {
    const phoneNumber = "254718856612";

    // 👇 handle multiple services
    const servicesList = servicesParam.split(",");
    const formattedServices = servicesList.join(", ");

    const message = `Hello, I'm interested in the following services: ${formattedServices}. I would like to request a quote.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // 🔥 instant redirect (no delay)
    window.location.replace(whatsappURL);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Redirecting to WhatsApp...</h1>
    </div>
  );
}