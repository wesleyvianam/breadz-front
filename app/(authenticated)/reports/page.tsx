export default function ReportPage() {
  return (
    <section className="pt-5">
      <div className="flex justify-between items-center p-2 px-5 bg-slate-100">
        <h1 className="text-xl font-bold">Reports</h1>

        <div>
          <button className="border rounded-full px-3 py-1 bg-white">Filter</button>
        </div>
      </div>
      <ul className="border rounded-b mb-10">
        <li className="py-2 px-5">
          <span className="text-gray-600">Nenhum valor encontrado</span>
        </li>
      </ul>
    </section>
  )
}
