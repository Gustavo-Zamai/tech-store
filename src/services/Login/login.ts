export function login(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simulate an API call to authenticate the user
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                resolve('Login successful');
            } else {
                reject('Invalid username or password');
            }
        })
    })
};