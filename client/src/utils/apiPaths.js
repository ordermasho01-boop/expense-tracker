export const BASE_URL = 'https://cuddly-parakeet-x5qpp5rq9jvvf9v5x-8080.app.github.dev'

export const API_PATHS ={
    AUTH: {
        LOGIN: "/api/auth/login",
        REGISTER: "/api/auth/register",
        GET_USER: "/api/auth/getUserInfo",
    },
    DASHBOARD:{
        GET_DATA:'/api/dashboard',
    },
    INCOME: {
        ADD_INCOME: '/api/income/add-income',
        GET_ALL_INCOME: '/api/income',
        DELETE_INCOME:(incomeId)=>`/api/income/${incomeId}`,
    },
    EXPENSE: {
        ADD_EXPENSE: '/api/expense/add-expense',
        GET_ALL_EXPENSE: '/api/expense',
        DELETE_EXPENSE:(expenseId)=>`/api/expence/${expenseId}`,
    },
}