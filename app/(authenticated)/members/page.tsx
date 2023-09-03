import Link from "next/link";
import { getMembers } from "./services/get-members";

interface Member {
  "id": number,
  "name": string,
  "workspace_id": number,
  "user_id": number,
  "created_at": Date,
  "updated_at": Date,
}

export default async function MemberPage() {
  const members = await getMembers();

  const listItems = members.map((member: Member) => (
    <li className="border-b p-2 flex justify-between" key={member.id}>
      <span>{member.name}</span>
      
      <Link className="border rounded px-2" href={`/members/${member.id}`}>Visualizar</Link>
    </li>
  ));

  return (
    <div>
      <h1 className="text-md py-5">Membros</h1>

      <ul className="border rounded">{listItems}</ul>
    </div>
  );
}