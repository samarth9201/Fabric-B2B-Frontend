const API_URL = 'http://localhost:5000/api/users';


const data = {
    email: '',
    password: ''
}

export async function verifyEmail(entry) {
    console.log(entry);
    console.log(JSON.stringify(entry));
    let body = {
        email: entry
    }
    data.email = entry;
    const response = await fetch(`${API_URL}/send`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'

        },
        body: JSON.stringify(body)
    })


    return response.json();

}

export async function verifyOTP(entry) {

    let body = {
        otp: entry.verification,
        email: entry.email
    }
    const response = await fetch(`${API_URL}/verify`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'

        },
        body: JSON.stringify(body)
    })
    console.log(response);
    return response.json();


}
export async function registerUser(password, email) {

    let body = {
        email: email,
        password: password
    }
    console.log(body);
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'

        },
        body: JSON.stringify(body)
    })
    console.log(response);

    return response.json();


}
export async function login(entry) {

    let body = {
        email: entry.email,
        password: entry.password,
        privateKey: entry.pvtKey
    }
    data.email = entry.email;
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'

        },
        body: JSON.stringify(body)
    })

    console.log(response);
    return response.json();

}

export async function transact(amount) {

    let body = {
        amount: amount
    }

    console.log("BODY : ", body);
    const response = await fetch(`${API_URL}/fabric/transact`, {
        method: "POST",
        headers: {
            'content-Type': 'application/json'

        },
        body: JSON.stringify(body)
    })

    console.log(response);
    return response.json();
}