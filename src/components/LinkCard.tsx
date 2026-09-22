import type { LinkItem } from "@/types";

interface LinkCardProps extends LinkItem {
  clickCount: number;
  onClick?: () => void;
}

export default function LinkCard({
  title,
  url,
  clickCount,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-2xl border border-orange-200 bg-white px-5 py-4 font-medium text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md active:translate-y-0 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:hover:border-amber-600"
    >
      <span className="flex-1 text-center">{title}</span>
      <span className="shrink-0 text-xs font-normal text-stone-400 dark:text-stone-500">
        {clickCount}회
      </span>
    </a>
  );
}
