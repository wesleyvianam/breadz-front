import Link from "next/link";
import { getMemberById } from "../services/get-member-by-id";

interface MemberId {
  memberId: string
}

interface IMember {
  "id": number,
	"username": string,
	"company": string,
	"name": string,
	"email": string,
	"user_id": number
}

export default async function MembersDetailsPage({ params }: { params: MemberId }) {
  const member: IMember = await getMemberById(params);

  return (
    <div className="pt-5">
      <div className="flex justify-between items-center p-2 bg-slate-100">
        <h1 className="text-xl font-bold">{member.name}</h1>
        
        <div>
          <Link className="border rounded px-3 py-1 bg-blue-700 text-white" href={`/member/edit/${member.id}`}>edit</Link>
          <Link className="border rounded px-3 py-1 bg-red-700 text-white" href={`/member/delete/${member.id}`}>delete</Link>
        </div>
      </div>
      
      <div>
        <ul className="border rounded">
          <li className="border-b p-2">Username: {member.username}</li>
          <li className="border-b p-2">Email: {member.email}</li>
          <li className="border-b p-2">Company: {member.company}</li>
        </ul>
      </div>
    </div>
  );
}