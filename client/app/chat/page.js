import MessageArea from '@/components/MessageArea'
import ChatInputArea from '@/components/ChatInputArea'

export default function Page() {
  return (
    <div className='relative h-[95vh] flex flex-col w-full max-w-5xl mx-auto pb-20'>
      <MessageArea />
      <ChatInputArea />
    </div>
  )
}
