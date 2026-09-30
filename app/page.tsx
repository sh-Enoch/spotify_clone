"use client";

import { Blobatar } from "@blobatar/react";
import { sleepy, thinking } from "blobatar/expression";
import "blobatar/motion.css";

import { useState } from "react";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Ellipsis,
  Heart,
  House,
  ListMusic,
  Music2,
  Play,
  Plus,
  Search,
  Toolbox,
  UserRound,
  UserRoundGroup,
} from "lucide-react";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="flex h-dvh flex-col gap-3 overflow-hidden bg-[#101010] p-3 text-white">
      <header className="grid min-h-14 shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl bg-[#121212] px-4">
        <div className="flex items-center gap-4">
          <button
            aria-label="Open menu"
            className="text-white/75 transition hover:text-white"
          >
            <Ellipsis size={25} strokeWidth={1} />
          </button>
          <div className="flex items-center gap-2">
            <button
              aria-label="Go back"
              className="text-white/75 transition hover:text-white"
            >
              <ChevronLeft size={25} strokeWidth={1} />
            </button>
            <button
              aria-label="Go forward"
              className="text-white/75 transition hover:text-white"
            >
              <ChevronRight size={25} strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-xl min-w-0 items-center gap-3">
          <button
            aria-label="Home"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
          >
            <House size={20} strokeWidth={1.8} />
          </button>
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white/5 px-4 py-2">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <Search size={20} strokeWidth={1.8} />
              <input
                type="text"
                placeholder="What do you want to listen to?"
                className="w-full min-w-0 bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-400 max-sm:placeholder:text-transparent"
              />
            </div>
            <div className="h-6 w-px bg-white/20" />
            <button
              aria-label="Browse categories"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
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

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <button
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
          >
            <Bell size={20} strokeWidth={1} />
          </button>
          <button
            aria-label="Friends activity"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10 sm:flex"
          >
            <UserRoundGroup size={20} strokeWidth={1} />
          </button>
          <button
            aria-label="Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10 p-1"
          >
            {/* <UserRound size={20} strokeWidth={1} /> */}
            <Blobatar
              name="Wafula"
              traits={{ shape: 0.888 }}
              expression={sleepy}
              animate="hover"
              size={34}
            />
          </button>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-[minmax(210px,0.85fr)_minmax(320px,2fr)_minmax(230px,0.95fr)] gap-3 max-lg:grid-cols-1 max-lg:overflow-y-auto">
        <aside
          aria-label="Your library"
          className="min-h-0 overflow-y-auto rounded-xl bg-[#181818] p-4 max-lg:min-h-65"
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 className="m-0 text-base font-bold text-white">Your Library</h2>
            <button
              aria-label="Create playlist"
              className="rounded-full p-2 text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              <Plus size={19} />
            </button>
          </div>
          <div className="mb-5 flex gap-2 text-sm">
            <button className="rounded-full bg-white/10 px-3 py-1.5">
              Playlists
            </button>
            <button className="rounded-full bg-white/5 px-3 py-1.5 text-white/70">
              Artists
            </button>
          </div>
          <button className="mb-4 flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-white/5">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-linear-to-br from-fuchsia-700 to-indigo-950">
              <Heart size={18} fill="currentColor" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">
                Liked Songs
              </span>
              <span className="block text-xs text-white/55">
                Playlist · 128 songs
              </span>
            </span>
          </button>
          <button className="mb-4 flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-white/5">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-linear-to-br from-emerald-500 to-teal-950">
              <Music2 size={18} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">
                Daily Mix 1
              </span>
              <span className="block text-xs text-white/55">Made for you</span>
            </span>
          </button>
          <div className="mt-7 border-t border-white/10 pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/45">
              Recently played
            </p>
            <p className="text-sm text-white/70">
              Your recent albums and playlists will show up here.
            </p>
          </div>
        </aside>

        <section
          aria-label="Discover music"
          className="min-h-0 overflow-y-auto rounded-xl bg-[#1b1b1b] p-6 max-lg:min-h-105"
        >
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="mb-1 text-sm text-white/55">
                Tuesday, just for you
              </p>
              <h1 className="m-0 text-3xl font-extrabold text-white">
                Good evening
              </h1>
            </div>
            <button
              aria-label="Recently played"
              className="rounded-full p-2 text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              <Clock3 size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
            <button className="flex min-w-0 items-center gap-3 overflow-hidden rounded-md bg-white/10 text-left transition hover:bg-white/15">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-linear-to-br from-rose-400 to-red-950">
                <Heart size={21} fill="currentColor" />
              </span>
              <span className="truncate pr-3 text-sm font-semibold">
                Liked Songs
              </span>
            </button>
            <button className="flex min-w-0 items-center gap-3 overflow-hidden rounded-md bg-white/10 text-left transition hover:bg-white/15">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-linear-to-br from-sky-400 to-blue-950">
                <Music2 size={21} />
              </span>
              <span className="truncate pr-3 text-sm font-semibold">
                Daily Mix 1
              </span>
            </button>
            <button className="flex min-w-0 items-center gap-3 overflow-hidden rounded-md bg-white/10 text-left transition hover:bg-white/15">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-linear-to-br from-amber-300 to-orange-950">
                <ListMusic size={21} />
              </span>
              <span className="truncate pr-3 text-sm font-semibold">
                Focus Flow
              </span>
            </button>
            <button className="flex min-w-0 items-center gap-3 overflow-hidden rounded-md bg-white/10 text-left transition hover:bg-white/15">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-linear-to-br from-violet-400 to-purple-950">
                <Music2 size={21} />
              </span>
              <span className="truncate pr-3 text-sm font-semibold">
                Discover Weekly
              </span>
            </button>
          </div>

          <div className="mb-4 mt-9 flex items-center justify-between">
            <h2 className="m-0 text-xl font-bold text-white">Made for you</h2>
            <button className="text-xs font-bold uppercase tracking-wide text-white/55 hover:text-white">
              Show all
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
            {[
              [
                "Daily Mix 1",
                "The Weeknd, Dua Lipa, and more",
                "from-cyan-500 to-blue-950",
              ],
              [
                "Discover Weekly",
                "Your weekly mixtape of fresh music",
                "from-orange-400 to-rose-950",
              ],
              [
                "Release Radar",
                "The latest releases from artists you follow",
                "from-lime-400 to-emerald-950",
              ],
            ].map(([title, description, colors]) => (
              <article
                key={title}
                className="min-w-0 rounded-lg bg-white/5 p-3 transition hover:bg-white/10"
              >
                <div
                  className={`mb-3 flex aspect-square items-center justify-center rounded-md bg-linear-to-br ${colors}`}
                >
                  <Music2 size={34} className="text-white/85" />
                </div>
                <h3 className="mb-1 truncate text-sm font-bold text-white">
                  {title}
                </h3>
                <p className="m-0 line-clamp-2 text-xs text-white/55">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <aside
          aria-label="Now playing"
          className="min-h-0 overflow-y-auto rounded-xl bg-[#181818] p-4 max-lg:min-h-75"
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 className="m-0 text-base font-bold text-white">Now playing</h2>
            <button
              aria-label="Open queue"
              className="rounded-full p-2 text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              <ListMusic size={19} />
            </button>
          </div>
          <div className="mb-5 flex aspect-square items-center justify-center rounded-lg bg-linear-to-br from-amber-300 via-orange-600 to-rose-950">
            <Music2 size={58} className="text-white/85" />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="mb-1 truncate text-lg font-bold text-white">
                Midnight City
              </h3>
              <p className="m-0 truncate text-sm text-white/55">M83</p>
            </div>
            <button
              aria-label="Like track"
              className="shrink-0 p-2 text-white/60 transition hover:text-emerald-400"
            >
              <Heart size={19} />
            </button>
          </div>
          <div className="mt-6 h-1 rounded-full bg-white/20">
            <div className="h-full w-2/5 rounded-full bg-white" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-white/45">
            <span>1:24</span>
            <span>4:03</span>
          </div>
          <button
            aria-label="Play"
            className="mx-auto mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
          >
            <Play size={19} fill="currentColor" />
          </button>
        </aside>
      </div>
    </main>
  );
}

export default Home;

// neagley
// 