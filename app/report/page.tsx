'use client';

import { ReportTable } from '@/components/ReportTable';

export default function ReportPage() {
  return (
    <main>
      <header className="border-b mb-4 p-4 border-gray-400">
        <h1 className="text-3xl font-semibold mb-4">
          Relatório de Transações por Risco
        </h1>
        <p className="text-sm">
          Consulte a porcentagem de transações por risco.
        </p>
      </header>
      <ReportTable />
    </main>
  );
}
