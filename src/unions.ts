type UserRole = "guest" | "admin" | "member";

let userRole: UserRole = "guest";


type User = {
    name: string
    role: "admin" | "guest" | "member"
}

const RandomUser: User = {
    name: "Fuad",
    role: "admin"
}

// 
RandomUser.role = "member";