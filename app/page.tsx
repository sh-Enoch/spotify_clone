"use client";

import { useState } from "react";

import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  House,
  Search,
  UserRoundGroup,
  UserRound,
  Toolbox,
} from "lucide-react";
import React from "react";
import { text } from "stream/consumers";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="bg-gray-900 p-4 text-white">
      <section className=" items-center gap-3 grid grid-cols-3">
        <div className="flex items-center gap-4">
          <div>
            <Ellipsis size={25} strokeWidth={1} />
          </div>
          <div className="flex items-center gap-2">
            <ChevronLeft strokeWidth={1} size={25} />
            <ChevronRight strokeWidth={1} size={25} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-600/10 transition hover:bg-gray-600/90">
            <House size={20} strokeWidth={1.8} />
          </div>

          <div className="flex items-center gap-3 rounded-full bg-gray-600/10 px-4 py-2">
            <div className="flex items-center gap-3">
              <Search size={20} strokeWidth={1.8} />
              <input
                type="text"
                placeholder="What do you want to listen to?"
                className="w-full bg-transparent text-sm text-gray-200 placeholder:text-gray-400 outline-none"
              />
            </div>

            <div className="h-6 w-px bg-white/20" />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Toolbox
                size={20}
                strokeWidth={isHovered ? 2.2 : 1.8}
                className="transition-all duration-150"
              />
            </button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-gray-600/90">
            <Bell size={20} strokeWidth={1} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-gray-600/90">
            <UserRoundGroup size={20} strokeWidth={1} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-gray-600/90">
            <UserRound size={20} strokeWidth={1} />
          </button>
        </div>
      </section>
      <section className="grid grid-cols-3">
        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  );
}

export default Home;
