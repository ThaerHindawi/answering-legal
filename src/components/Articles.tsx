"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "./common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Articles() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !prevRef.current || !nextRef.current) return;
    const navigationParams = swiper.params.navigation as unknown as
      | {
          prevEl?: Element | null;
          nextEl?: Element | null;
        }
      | false
      | undefined;
    if (navigationParams && typeof navigationParams !== "boolean") {
      navigationParams.prevEl = prevRef.current;
      navigationParams.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  });

  const articles = [
    {
      category: "LAWYER WELLNESS",
      date: "June 6, 2024",
      title: "How Viable Is Remote Work For Lawyers?",
      description:
        "This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public.",
      image: "/Article_img_placeholder.jpg",
    },
    {
      category: "LAWYER WELLNESS",
      date: "June 6, 2024",
      title: "How Viable Is Remote Work For Lawyers?",
      description:
        "This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public.",
      image: "/Article_img_placeholder.jpg",
    },
    {
      category: "LAWYER WELLNESS",
      date: "June 6, 2024",
      title: "How Viable Is Remote Work For Lawyers?",
      description:
        "This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public.",
      image: "/Article_img_placeholder.jpg",
    },
    {
      category: "LAWYER WELLNESS",
      date: "June 6, 2024",
      title: "How Viable Is Remote Work For Lawyers?",
      description:
        "This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public.",
      image: "/Article_img_placeholder.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-1248 mx-auto flex flex-col gap-8 lg:gap-32-5px items-center relative">
        {/* Section header */}
        <div className="text-center px-4 md:px-0">
          <h2 className="text-32 font-bold text-brand-dark leading-none">
            Want to learn more? Read our articles on legal intake.
          </h2>
        </div>

        <div className="relative gap-16 lg:absolute lg:inset-0 flex justify-between items-center pointer-events-none">
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="relative z-20 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-white border-2 border-neutral-gray cursor-pointer pointer-events-auto"
          >
            <svg
              width="17"
              height="28"
              viewBox="0 0 17 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7296 1.64624L2.0957 14.2801L14.1694 26.3539"
                stroke="#161641"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="relative z-20 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-white border-2 border-neutral-gray cursor-pointer pointer-events-auto"
          >
            <svg
              width="17"
              height="28"
              viewBox="0 0 17 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.27039 26.3538L14.9043 13.7199L2.83059 1.64614"
                stroke="#161641"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Articles carousel */}
        <div className="relative z-10 w-full px-0 md:px-15 flex flex-col justify-center items-center">
          <Swiper
            className="w-full"
            modules={[Navigation, A11y]}
            loop={true}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 0, slidesOffsetBefore: 32, slidesOffsetAfter: 28 },
              768: { slidesPerView: 2,centeredSlides: false, spaceBetween: 0, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
              1024: { slidesPerView: 3,centeredSlides: false, spaceBetween: 0, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
              const navigationParams = swiper.params.navigation as unknown as
                | {
                    prevEl?: Element | null;
                    nextEl?: Element | null;
                  }
                | false
                | undefined;
              if (navigationParams && typeof navigationParams !== "boolean") {
                navigationParams.prevEl = prevRef.current;
                navigationParams.nextEl = nextRef.current;
              }
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <article className="relative bg-white rounded-20 shadow-custom-1 px-4 pt-4 pb-23px flex flex-col gap-4 mx-3 mb-8 lg:mb-32-5px">
                  <div className="aspect-video relative items-center justify-center">
                    <div className="w-full h-full">
                      <Image
                        className="rounded-20"
                        src={article.image}
                        alt={article.title}
                        fill
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="text-sm text-brand-primary font-semibold">
                      {article.category}
                    </div>
                    <div className="flex gap-4.5 pe-15px ">
                      <div className="shrink-0 w-0.5 bg-accent-cyan rounded-15px"></div>
                      <div className="flex flex-col gap-3">
                        <span className="text-neutral-gray text-base font-semibold capitalize leading-none">
                          {article.date}
                        </span>
                        <h3 className="text-xl font-semibold leading-none">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                    <p className="">{article.description}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Go to blog button */}
          <Button
            className="z-10"
            variant="primary"
            size="lg"
            fullWidth={false}
          >
            Go to blog
          </Button>
        </div>
      </div>
    </section>
  );
}
