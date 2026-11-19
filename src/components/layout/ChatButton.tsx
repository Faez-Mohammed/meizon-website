import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function ChatButton() {
  return (
    <Link
      href="/contact"
      aria-label="Chat with MEIZON"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
