import Link from "next/link";

export default function ForgotPage() {
  return (
    <form className="w-72 m-auto">
      <h1 className="text-3xl mb-3 font-bold">Forgot Pasword</h1>
      
      <div className="mb-3">
        <input type="email" className="border rounded-full py-1 px-4 w-full" placeholder="your email"/>
      </div>
    
      <button className="bg-primary text-white rounded-full py-1 w-full">Send</button>
      
      <div className="text-secondary text-end mt-2">
        <Link className="text-sm" href="/login">{" < "}Back</Link>
      </div>
    </form>
  )
}
