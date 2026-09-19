import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/data/mock";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-orange-50 px-4 py-12 dark:bg-stone-950">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 px-6 py-10">
        <ProfileHeader {...profile} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
