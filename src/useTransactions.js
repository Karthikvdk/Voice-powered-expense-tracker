import { useContext } from "react";
import { expenseCategories, incomeCategories, resetCategories } from "./constants/categories";
import { ExpenseTrackerContext } from "./context/context";

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((transactionsParams) => transactionsParams.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({ transactionsPerType, total, categories });

    transactionsPerType.forEach((tParam) => {
        const category = categories.find((cParam) => cParam.type === tParam.category);

        if (category) category.amount += tParam.amount;
    });

    const filteredCategories = categories.filter((cParams) => cParams.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((cParams) => cParams.amount),
            backgroundColor: filteredCategories.map((cParams) => cParams.color)
        }],
        labels: filteredCategories.map((cParams) => cParams.type)
    }

    return { total, chartData }
}

export default useTransactions;