import type { ITransaction } from "~/routes/home/types/transaction";
import { calculateEqualToEur } from "~/utils/calculateEqualToEur";

export const SummaryTable = ({ transactions }: { transactions: ITransaction[] }) => {
  const calculateSummary = (currency: string): ISummaryData => {
    const currencyTransactions = transactions.filter(
      (t) => t.currency === currency
    );

    const completedWithdrawals = currencyTransactions
      .filter((t) => t.type === "withdrawal" && t.status === "completed")
      .reduce((sum, t) => sum + t.amount, 0);

    const completedDeposits = currencyTransactions
      .filter((t) => t.type === "deposit" && t.status === "completed")
      .reduce((sum, t) => sum + t.amount, 0);

    const pendingWithdrawals = currencyTransactions
      .filter((t) => t.type === "withdrawal" && t.status === "pending")
      .reduce((sum, t) => sum + t.amount, 0);

    const pendingDeposits = currencyTransactions
      .filter((t) => t.type === "deposit" && t.status === "pending")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      currency,
      completedWithdrawals,
      completedDeposits,
      pendingWithdrawals,
      pendingDeposits,
      totalBalance: completedDeposits - completedWithdrawals,
    };
  };

  const currencies = ['CHF', 'BTC', 'USD'];
  const summaryData = currencies.map(calculateSummary);

  return (
    <div className="mt-8">
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Currency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Completed Withdrawals
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Completed Deposits
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pending Withdrawals
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pending Deposits
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Balance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Balance EUR Equiv
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {summaryData.map((row) => (
              <tr key={row.currency} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.currency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.completedWithdrawals.toLocaleString(undefined, {
                    minimumFractionDigits: row.currency === "BTC" ? 8 : 2,
                    maximumFractionDigits: row.currency === "BTC" ? 8 : 2,
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.completedDeposits.toLocaleString(undefined, {
                    minimumFractionDigits: row.currency === "BTC" ? 8 : 2,
                    maximumFractionDigits: row.currency === "BTC" ? 8 : 2,
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.pendingWithdrawals.toLocaleString(undefined, {
                    minimumFractionDigits: row.currency === "BTC" ? 8 : 2,
                    maximumFractionDigits: row.currency === "BTC" ? 8 : 2,
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.pendingDeposits.toLocaleString(undefined, {
                    minimumFractionDigits: row.currency === "BTC" ? 8 : 2,
                    maximumFractionDigits: row.currency === "BTC" ? 8 : 2,
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.totalBalance.toLocaleString(undefined, {
                    minimumFractionDigits: row.currency === "BTC" ? 8 : 2,
                    maximumFractionDigits: row.currency === "BTC" ? 8 : 2,
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {(calculateEqualToEur(row.currency, row.totalBalance) ?? 0).toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: row.currency === "BTC" ? 8 : 2,
                      maximumFractionDigits: row.currency === "BTC" ? 8 : 2,
                    }
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};