export default function HomePage() {
  return (
    <section className="pt-5">
      <div className="flex justify-between items-center p-2 bg-slate-100">
        <h1 className="text-xl font-bold">Pedidos</h1>

        <div>
          <button className="border rounded px-3 py-1 bg-blue-700 text-white">Resumo</button>
          <button className="border rounded px-3 py-1 bg-blue-700 text-white">Todos</button>
          <button className="border rounded px-3 py-1 border-primary">Novo Pedido</button>
        </div>
      </div>
      
      {/* Resumo */}
      <ul className="border rounded mb-10">
        <li className="p-2 border-b font-bold">Pão:</li>
        <li className="p-2 border-b">
          Frances: <span className="font-bold">4</span>
        </li>
        <li className="p-2 border-b">
          Frances: <span className="font-bold">1</span>
        </li>
        <li className="p-2 border-b">
          Frances: <span className="font-bold">3</span>
        </li>
        
        <li className="p-2 border-b font-bold">Acompanhamento:</li>
        <li className="p-2 border-b">
          Mussarela: <span className="font-bold">5</span>
        </li>
        <li className="p-2 border-b">
          Mortadela: <span className="font-bold">6</span>
        </li>
        <li className="p-2 text-center">
          <span className="border p-1 me-1 rounded bg-slate-800 text-white">{" < "}</span>
          <span className="border p-1">02 September</span>
          <span className="border p-1 ms-1 rounded bg-slate-800 text-white">{" > "}</span>          
        </li>
      </ul>

      {/* ALL */}
      {/* <ul className="border rounded">
        <li className="p-2 border-b flex justify-between">
          <h2 className="font-bold">Ludymila Firmino</h2>

          <button className="border rounded px-3 py-1 bg-red-700 text-white">Delete</button>
        </li>
        <li className="p-2 border-b flex justify-between">
          <h2 className="font-bold">Thais Isabela</h2>

          <button className="border rounded px-3 py-1 bg-red-700 text-white">Delete</button>
        </li>
        <li className="p-2 border-b flex justify-between">
          <h2 className="font-bold">Wesley Martins</h2>

          <button className="border rounded px-3 py-1 bg-red-700 text-white">Delete</button>
        </li>
        <li className="p-2 border-b flex justify-between">
          <h2 className="font-bold">Nikola Tesla</h2>

          <button className="border rounded px-3 py-1 bg-red-700 text-white">Delete</button>
        </li>
        <li className="p-2 border-b flex justify-between">
          <h2 className="font-bold">Leandro</h2>

          <button className="border rounded px-3 py-1 bg-red-700 text-white">Delete</button>
        </li>
        <li className="p-2 border-b flex justify-between">
          <h2 className="font-bold">Leonardo</h2>

          <button className="border rounded px-3 py-1 bg-red-700 text-white">Delete</button>
        </li>
        <li className="p-2 text-center">
          <span className="border p-1 me-1 rounded bg-slate-800 text-white">{" < "}</span>
          <span className="border p-1">02 September</span>
          <span className="border p-1 ms-1 rounded bg-slate-800 text-white">{" > "}</span>          
        </li>
      </ul> */}

    </section>
  )
}
