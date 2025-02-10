import type { ITransaction } from "~/routes/home/types/transaction";
import { calculateEqualToEur } from "~/utils/calculateEqualToEur";
import { intlDateTimeFormat } from "~/utils/intlDateTimeFormat";

export const TableItem = ({item}: {item: ITransaction}) => {
    return (
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {intlDateTimeFormat(item.timestamp)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.currency}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {item.amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8,
          })}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {calculateEqualToEur(
            item.currency,
            item.amount
          )?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8,
          })}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              item.type === "deposit"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {item.type.charAt(0).toUpperCase() +
              item.type.slice(1)}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              item.status === "completed"
                ? "bg-blue-100 text-blue-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {item.status.charAt(0).toUpperCase() +
              item.status.slice(1)}
          </span>
        </td>
      </tr>
    );
}