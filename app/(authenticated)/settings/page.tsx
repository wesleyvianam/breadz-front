export default function SettingsPage() {
  return (
    <section className="pt-5">
      <div className="rounded-t items-center py-2 px-5 bg-slate-100">
        <h1 className="text-xl font-bold">Profile</h1>
      </div>
      
      <form className="border rounded-b mb-10 px-5 py-2">
        <h2 className="text-lg font-semibold pb-3">Update your password</h2>

        <div className="flex flex-col w-72 pb-3">
          <input className="border rounded-full py-1 px-3" type="password" placeholder="Current password" />
        </div>

        <div className="flex flex-col w-72 pb-3">
          <input className="border rounded-full py-1 px-3" type="password" placeholder="New password"/>
        </div>

        <div className="flex flex-col w-72 pb-3">
          <input className="border rounded-full py-1 px-3" type="password" placeholder="Confirm new password"/>
        </div>

        <button className="w-72 text-center py-1 rounded-full text-white bg-blue-700">Update</button>
      </form>

      <div className="rounded-t items-center py-2 px-5 bg-slate-100">
        <h1 className="text-xl font-bold">Snack</h1>
      </div>
      <form className="border rounded-b mb-10 px-5 py-2">
        <div className="flex flex-col w-72 pb-3">
          <label htmlFor="">snack times</label>
          <input className="border rounded-full py-1 px-3" type="date"/>
        </div>

        <div className="flex items-center w-72 pb-3">
          <label htmlFor="" className="pe-5">Your orders is recurrent: </label>
          <input className="border rounded-full py-1 px-3" type="checkbox" placeholder="Current password" />
        </div>

        <button className="w-72 text-center py-1 rounded-full text-white bg-blue-700">Save</button>
      </form>

    </section>
  )
}
