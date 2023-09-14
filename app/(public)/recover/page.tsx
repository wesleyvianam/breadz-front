import Link from "next/link";

export default function LoginPage() {
  return (
    <form className="w-72 m-auto">
      <title>Recover - Breadz</title>

      <h1 className="text-3xl mb-3 text-center font-bold">Recover password</h1>
      
      <div className="mb-3">
        <input type="hidden" value={"token"}/>
      </div>

      <div className="mb-3">
        <input type="password" className="border rounded-full py-1 px-4 w-full" placeholder="new password"/>
      </div>

      <div className="mb-3">
        <input type="password" className="border rounded-full py-1 px-4 w-full" placeholder="Confirm your password"/>
      </div>
    
      <button className="bg-primary text-white rounded-full py-1 w-full">Recover</button>

      <div className="text-secondary text-end mt-2">
        <Link className="text-sm" href="/login">{"< "} Back to initial page.</Link>
      </div>
    </form>

  )
}
