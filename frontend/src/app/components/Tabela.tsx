import { Despesa } from "../model/Despesa";

export default async function Tabela() {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${urlBase}/despesas`);
    const despesas = await response.json();
  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr className="text-center border-b border-neutral-500 text-gray-300">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Descrição</th>
            <th className="border border-gray-300 px-4 py-2">Data</th>
            <th className="border border-gray-300 px-4 py-2">Valor</th>
            <th className="border border-gray-300 px-4 py-2">Pago</th>
            <th className="border border-gray-300 px-4 py-2">Ações</th>
        </tr>
        </thead>
        <tbody>
        {despesas.map((despesa: Despesa) => (
            <tr key={despesa.id} className="text-center border-b border-neutral-500 text-gray-300">
                <td className="border border-gray-300 px-4 py-2">{despesa.id}</td>
                <td className="border border-gray-300 px-4 py-2">{despesa.descricao}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(despesa.data).toLocaleDateString()}</td>
                <td className="border border-gray-300 px-4 py-2">R$ {despesa.valor}</td>
                <td className="border border-gray-300 px-4 py-2">{despesa.pago ? "Sim" : "Não"}</td>
                <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Editar</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Excluir</button>
                </td>
            </tr>
        ))}
        </tbody>    
    </table>
  );
}