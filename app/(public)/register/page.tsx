import Link from "next/link";

export default function LoginPage() {
  return (
    <form className="w-72 m-auto">
      <h1 className="text-3xl mb-3 text-center font-bold">Register</h1>
      
      <div className="mb-3">
        <input type="text" className="border rounded-full py-1 px-4 w-full" placeholder="your name"/>
      </div>

      <div className="mb-3">
        <input type="text" className="border rounded-full py-1 px-4 w-full" placeholder="your username"/>
      </div>

      <div className="mb-3">
        <input type="text" className="border rounded-full py-1 px-4 w-full" placeholder="your email"/>
      </div>

      <div className="mb-3">
        <input type="password" className="border rounded-full py-1 px-4 w-full" placeholder="password"/>
      </div>

      <div className="mb-3">
        <input type="password" className="border rounded-full py-1 px-4 w-full" placeholder="confirm your password"/>
      </div>

      <button className="bg-primary text-white rounded-full py-1 w-full">Create</button>

      <div className="text-secondary text-end mt-2">
        <Link className="text-sm" href="/login">{"< "}Back for login.</Link>
      </div>
    </form>
  )
}
