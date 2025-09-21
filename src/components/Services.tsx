import Image from "next/image";
import Divider from "./common/Divider";

type ServiceItem = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

function splitTitleIntoTwoLines(title: string): {
  firstLine: string;
  secondLine: string;
} {
  const words = title.trim().split(/\s+/);
  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");
  return { firstLine, secondLine };
}

const serviceItems: ServiceItem[] = [
  {
    id: "answering-service",
    iconSrc: "/service-1.svg",
    iconAlt: "Legal answering service",
    title: "Legal answering service",
    description:
      "With 24/7 legal intake, you’ll never miss a potential client’s call.",
  },
  {
    id: "ai-intake-chatbot",
    iconSrc: "/service-2.svg",
    iconAlt: "AI Intake chatbot",
    title: "AI Intake chatbot",
    description:
      "Turn web leads into clients with a chatbot powered by the latest in AI technology.",
  },
  {
    id: "live-translation",
    iconSrc: "/service-3.svg",
    iconAlt: "Live translation services",
    title: "Live translation services",
    description:
      "Break through the language barrier and schedule video conferences with live interpreters.",
  },
];

export default function Services() {
  return (
    <section className="relative lg:max-w-1376 mx-auto lg:h-340 px-4 py-16 xl:py-0 xl:px-0">
      <div className="flex flex-col gap-8 relative lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:-translate-y-174">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6 mx-4 lg:mx-20">
          <h2 className="text-32 text-center lg:text-start font-bold text-brand-black lg:text-neutral-white">
            Here’s what we can do for your law firm
          </h2>
          <Divider className="w-1216 max-w-1216" />
        </div>

        {/* Services grid */}
        <div className="max-w-1120 mx-5.5 lg:mx-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceItems.map((item) => {
            const { firstLine, secondLine } = splitTitleIntoTwoLines(
              item.title
            );
            return (
              <div
                key={item.id}
                className="bg-white px-4 py-8 rounded-20 shadow-custom-1 h-370 text-center flex flex-col gap-6 items-center"
              >
                <div className="w-100 h-100">
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={100}
                    height={100}
                  />
                </div>

                <h2 className="text-32 font-bold leading-full">
                  <span className="block">{firstLine}</span>
                  <span className="block">{secondLine || "\u00A0"}</span>
                </h2>

                <div className="w-full">
                  <Divider className="rounded-5" />
                </div>

                <p className="text-base font-semibold">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
