const user = {
    name: "sreelekha",
    address: {
        personal: {
            city: "Hyderabad"
        },
        office: {
            city: "Mumbai",
            area: {
                landmark: "Kurla"
            }
        }
    },

}

let newObj = {};

const recursionFunc = (obj, parent) => {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            recursionFunc(obj[key], parent + "_" + key)
        }
        else {
            newObj[parent + "_" + key] = obj[key]
        }
    }
}

recursionFunc(user, "user")

console.log(newObj)