"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination } from "swiper";

import { projects } from "@/utils/db";
import { ArrowSquareOut } from "phosphor-react";

export default function Projects() {
  const { professional, personal } = projects;

  return (
    <div className="animate-fade-in relative">
      <div>
        <h1 className="font-unbounded text-4xl p-6 mb-5 relative ">
          Projetos profissionais
        </h1>
        <Swiper
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {professional.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col items-center border rounded-lg border-zinc-800 p-4 w-80 mb-8 dark:border-zinc-200">
                <h1 className="font-poppins text-2xl pb-6">{project.title}</h1>

                <p className="text-center text-zinc-500">
                  {project.description}
                </p>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full my-4"
                />

                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-cyan-400 p-2 my-4 text-zinc-900 rounded-lg flex items-center gap-2 text-sm"
                  >
                    Visualizar projeto
                    <ArrowSquareOut size={18} />
                  </a>

                  {project.repository && (
                    <a
                      target="_blank"
                      href={project.repository}
                      className="bg-cyan-500 p-2 my-4 text-zinc-900 rounded-lg flex items-center gap-2 text-sm"
                    >
                      Visualizar repositório
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <h1 className="font-unbounded text-4xl p-6 mb-5 relative">
          Projetos pessoais
        </h1>
        <Swiper
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {personal.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col items-center border rounded-lg border-zinc-800 p-4 w-80 mb-8 dark:border-zinc-200">
                <h1 className="font-poppins text-2xl pb-6">{project.title}</h1>

                <p className="text-center text-zinc-500 h-28">
                  {project.description}
                </p>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full my-4"
                />

                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-cyan-400 p-2 my-4 text-zinc-900 rounded-lg flex items-center gap-2 text-sm"
                  >
                    Visualizar projeto
                    <ArrowSquareOut size={18} />
                  </a>

                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      className="bg-cyan-500 p-2 my-4 text-zinc-900 rounded-lg flex items-center gap-2 text-sm"
                    >
                      Visualizar repositório
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
