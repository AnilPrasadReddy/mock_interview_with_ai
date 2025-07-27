import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

enum CallStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Connecting = "CONNECTING",
  Finished = "FINISHED"
}

function Agent({ userName }: AgentProps) {
  const status = CallStatus.Inactive
  const isSpeaking = true;
  const messages = [
    "What's your name?",
    "I'm Anil, nice to meet you!"
  ]

  const lastMessage = messages[messages.length - 1];
  console.log("Last message: ", lastMessage);

  return (
    <>
      <div className='call-view mb-4'>
        <div className="card-interviewer">
          <div className="avatar">
            <Image src='/ai-avatar.png' alt='vapi' height={60} width={60} className='object-cover' />
            {isSpeaking && <span className='animate-speak' />}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className='card-border'>
          <div className='card-content'>
            <Image src='/user-avatar.png' alt='user' height={550} width={550} className='object-cover object-top rounded-full size-[125px]' />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className='transcript-border'>
          <div className="transcript">
            <p className={cn('transistion-opacity duration-500 opacity-0','animate-fadeIn opacity-100')}>
              {lastMessage}
            </p>
          </div>
        </div>
      )}
      <div className='w-full flex justify-center items-center mt-4'>
        {status !== "ACTIVE" ? (
          <button className='relative btn-call'>
            <span className={cn("absolute animate-ping rounded-full opactity-75", status !== "CONNECTING" & "hidden")} />
            <span>
              {status === "INACTIVE" || status === "FINISHED" ? "Start Interview" : "Connecting..."}
            </span>
          </button>
        ) : (
          <button className='btn-disconnect'>
            <span>End</span>
          </button>
        )}
      </div>
    </>
  )
}

export default Agent;