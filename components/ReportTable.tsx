'use client';

import { api } from '@/api/api';
import { useEffect, useState } from 'react';

interface Transaction {
  id: number;
  client_id: number;
  amount: number;
  data: string;
  transactionMethod: string;
  installment: number;
  riskLevel: string;
  tax: number;
}

export function ReportTable() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(apiUrl);
  const [transactions, setTransactions] = useState<Transaction[] | []>([]);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [lowRiskTotal, setLowRiskTOtal] = useState(0);
  const [highRiskTotal, setHighRiskTotal] = useState(0);
  const [mediumRiskTOtal, setMediumRiskTotal] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get('transaction');
        setTransactions(response.data);

        setTotalTransactions(transactions.length);

        setLowRiskTOtal(
          transactions.filter(
            (transaction) => (transaction.riskLevel = 'baixo'),
          ).length,
        );
        setMediumRiskTotal(
          transactions.filter(
            (transaction) => (transaction.riskLevel = 'medio'),
          ).length,
        );
        setHighRiskTotal(
          transactions.filter((transaction) => (transaction.riskLevel = 'alto'))
            .length,
        );
      } catch (e) {
        console.error(e);
      }
    };

    fetchTransactions();
  }, []);

  const riskPercentage = (riskLevel: number) => {
    const percentage = (riskLevel * 100) / totalTransactions;

    return percentage;
  };

  return (
    <div>
      {transactions.length > 0 ? (
        <main className="flex flex-row items-center gap-10">
          <div className="shadow-md p-5 rounded-xl">
            Transações de baixo risco:
            {riskPercentage(lowRiskTotal)}%
          </div>
          <div className="shadow-md p-5 rounded-xl">
            Transações de médio risco:
            {riskPercentage(mediumRiskTOtal)}%
          </div>
          <div className="shadow-md p-5 rounded-xl">
            Transações de alto risco:
            {riskPercentage(highRiskTotal)}%
          </div>
        </main>
      ) : (
        <div>Erro ao buscar transações</div>
      )}
    </div>
  );
}
