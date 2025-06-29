// Address Type
type Address = {
    street: string
    city: string
    country: string
}

// User Type
type User = {
    name: string
    age: number
    isStudent: boolean
    // Nested
    address: Address
}


// User details
let user1: User = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "AnyCity",
        country: "Nigeria"
    }
}