export default function CategoriesPage() {
  return (
    <section className="pt-5">
      <div className="flex justify-between rounded-t items-center py-2 px-5 bg-slate-100">
        <h1 className="text-xl font-bold">Snacks</h1>

        <button className="border rounded-full px-3 py-1 bg-white">Adicionar</button>
      </div>
      
      <ul className="border rounded-b mb-10">
        <li className="py-2 px-5 border-b flex justify-between">
          <h2>Francês</h2>
          <div className="flex">
            <button className="border rounded-full px-3 bg-blue-700 text-white">Edit</button>
            <button className="border rounded-full px-3 bg-red-700 text-white">Delete</button>
          </div>
        </li>
        
        <li className="py-2 px-5 border-b flex justify-between">
          <h2>Mussarela</h2>
          <div className="flex">
            <button className="border rounded-full px-3 bg-blue-700 text-white">Edit</button>
            <button className="border rounded-full px-3 bg-red-700 text-white">Delete</button>
          </div>
        </li>
      </ul>

    </section>
  )
}
