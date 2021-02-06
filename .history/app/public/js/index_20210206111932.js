const indexModule = (() => {
    const path = window.location.pathname

        switch (path) {
            case '/':
                //検索ボタンをクリックした時のイベントリスナーを設定
        document.getElementById("search-btn")
        .addEventListener('click', () => {
        return serachModule.serachUsers()
    })
    // UsersモジュールのfetchAllUsersメソッドを呼び出す
    return usersModule.fetchAllUsers()
        }

    
    
})()