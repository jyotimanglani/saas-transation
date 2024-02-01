"use client";

import {
  ChatMembers,
  chatMembersCollectionGroupRef,
} from "@/lib/converters/ChatMembers";
import { useSession } from "next-auth/react";
import { MessageSquare } from "lucide-react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import CreateChatButton from "./CreateChatButton";
import ChatListRow from "./ChatListRow";

function ChatListRows({ initialChats }: { initialChats: ChatMembers[] }) {
  const { data: session } = useSession();

  // So we have server side data available to us right from the start
  // but using useCollectionData we can get the latest data from the client as well
  const [members, loading, error] = useCollectionData<ChatMembers>(
    session && chatMembersCollectionGroupRef(session?.user.id!),
    {
      initialValue: initialChats,
    }
  );

  console.log("members", members);
  if (members?.length === 0)
    return (
      <div className="flex flex-col justify-center items-center pt-40 space-y-2">
        <MessageSquare className="h-10 w-10" />
        <h1 className="text-5xl font-extralight">Welcome</h1>
        <h2 className="pb-10">
          Lets get you started by creating your first chat!
        </h2>
        <CreateChatButton isLarge />
      </div>
    );
  return (
    <div>
      {members?.map((member, i) => (
        <ChatListRow key={member.chatId} chatId={member.chatId} />
      ))}
    </div>
  );
}

export default ChatListRows;
