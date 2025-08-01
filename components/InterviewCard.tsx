import { getRandomInterviewCover } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";

function InterviewCard({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96 mt-3">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 bg-light-600 rounded-bl-lg ">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <Image src={getRandomInterviewCover()} alt="cover" width={90} height={90} className="rounded-full object-fit size[90px]" />

          <h3 className="mt-5 capitalize">{role} Inteview</h3>

          <div className="flex gap-5 mt-3">
            <div className="flex gap-2">
              <Image src='/calendar.svg' alt="cal" width={22} height={22} />
              <p>{formattedDate}</p>
              <div className="flex gap-2">
                <Image src='/star.svg' alt="star" width={22} height={22}/>
                <p>{feedback?.totalScore || "---"}/100</p>
              </div>
            </div>
          </div>
            <p className="mt-5 line-clamp-2">
              {feedback?.finalAssessment || "You haven't taken the interview yet.Take it now to improve your skills."}
            </p>
        </div>
        <div className="flex justify-between">
          <DisplayTechIcons techStack={techstack}/>
          <Button className="btn-primary">
            <Link href={feedback? `/interview/${interviewId}/feedback`: `/interview/${interviewId}`}>
              {feedback? 'Check Feedback' : 'View Interview'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard
