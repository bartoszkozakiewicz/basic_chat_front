import ChatWindow from "@/components/chat/chatWindow";
import MemoryWindow from "@/components/memory/memoryWindow";
//--------------------------------------------

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-row  justify-between ">
      <ChatWindow />
      <MemoryWindow />
    </main>
  );
}
