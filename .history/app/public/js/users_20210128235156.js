// 即時関数でモジュール化
const usersModule = (() => {
    const BASE_URL = "http://localhost:3000/api/v1/users"
    return {
        fetchAllUsers: async() => {
            const res = await fetch(BASE_URL)
            const users = await res.json()

            for (let i = 0; i < users.length; i++) {
                console.log(users);
                const user = users[i]
                console.log(user);
                const body = `<tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.profile}</td>
                                <td>${user.date_of_barth}</td>
                                <td>${user.created_at}</td>
                                <td>${user.updated_at}</td>
                            </tr>`
                document.getElementById("users-list").insertAdjacentHTML("beforeend", body)
            }
        }
    }
})()


