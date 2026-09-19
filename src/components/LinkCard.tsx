import type { LinkItem } from "@/types";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-orange-200 bg-white px-5 py-4 text-center font-medium text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md active:translate-y-0 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-amber-600"
    >
      {title}
    </a>
  );
}
