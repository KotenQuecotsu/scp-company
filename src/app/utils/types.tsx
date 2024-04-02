export type Department = {
        name: String | undefined,
        description: String | undefined
}

export type Employee = {
        name: String,
        access_level: String,
        description: String,
        department: Number
}

export type Object = {
        title: String,
        number: Number,
        scp: String,
        description: String,
        author: String,
        employee: Number,
}