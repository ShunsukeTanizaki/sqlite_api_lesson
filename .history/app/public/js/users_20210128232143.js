// 即時関数でモジュール化
const usersModule = (() => {
    const BASE_URL = "http://localhost:3000/api/v1/users"
    return {
        fetchAllUsers: () => {
            const res = await fetch(BASE_URL)
        }
    }
})()


