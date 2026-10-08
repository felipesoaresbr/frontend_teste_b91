import Link from 'next/link';

const wrapperCls =
  'bg-black text-white p-2 transition-all cursor-pointer hover:opacity-90 rounded-lg justify-center items-center flex w-40';

export default function Home() {
  return (
    <nav className="flex flex-row items-center gap-5">
      <span className={wrapperCls}>
        <Link href={'report'}>Relatórios</Link>
      </span>
      <span className={wrapperCls}>
        <Link href={'transaction/new'}>Nova Transação</Link>
      </span>
    </nav>
  );
}
