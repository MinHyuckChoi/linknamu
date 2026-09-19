import Image from "next/image";
import type { ProfileInfo } from "@/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileInfo) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-amber-400 to-orange-500 ring-4 ring-orange-50 shadow-sm dark:ring-stone-950">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-2xl font-semibold text-white">
            {initials(name)}
          </span>
        )}
      </div>
      <div>
        <h1 className="text-lg font-bold text-stone-900 dark:text-stone-50">
          {name}
        </h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{bio}</p>
      </div>
    </div>
  );
}
