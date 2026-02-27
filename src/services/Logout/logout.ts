export function logout(): Promise<any> {
    return new Promise((resolve) => {
        // Simulate an API call to log out the user
        setTimeout(() => {
            resolve('Logout successful');
        })
    })

}