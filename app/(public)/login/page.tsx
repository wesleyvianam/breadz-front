import Link from "next/link";

export default function LoginPage() {
  return (
    <form className="w-72 m-auto">
      <h1 className="text-3xl mb-3 text-center font-bold">Breadz</h1>
      
      <div className="mb-3">
        <input type="text" className="border rounded-full py-1 px-4 w-full" placeholder="your username"/>
      </div>

      <div className="mb-1">
        <input type="password" className="border rounded-full py-1 px-4 w-full" placeholder="your password"/>
      </div>

      <div className="text-secondary text-end pb-2">
        <Link className="text-sm" href="/forgot">Forgot my password</Link>
      </div>
    
      <button className="bg-primary text-white rounded-full py-1 w-full">Login</button>

      <div className="text-secondary mt-2">
        <Link className="text-sm" href="/register">Create a new account.</Link>
      </div>
    </form>

  )
}
