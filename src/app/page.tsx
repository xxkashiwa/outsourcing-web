'use client';
import { ChatMessageList } from '@/components/chat-message-list';
import InputBox from '@/components/inputbox';
import { useConversation } from '@/hooks/use-conversation';
const Home = () => {
  const { isLoading, chatLogs } = useConversation();
  if (chatLogs.length > 0 && !isLoading) {
    window.location.href = '/chat';
  }
  return (
    <div className="flex h-[90vh] w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-7 md:max-w-3xl">
          {isLoading ? (
            <div className="flex w-full flex-col items-center">
              <div className="w-full md:max-w-3xl">
                <ChatMessageList />
              </div>
            </div>
          ) : (
            <h1 className="text-3xl font-extrabold">有什么可以帮忙的？</h1>
          )}

          <div className="w-full">
            <InputBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
