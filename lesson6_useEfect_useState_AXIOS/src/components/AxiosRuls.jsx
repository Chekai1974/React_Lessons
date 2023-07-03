import axios from "axios";

axios.get("fakeapi.com")
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err)
    });


// ______________________
const response = await axios.get("fakeapi.com")
console.log(response);
// ______________________


// ______________________
axios({
    method: "delete",
    url: "fakeapi.com",
    data: {
        id: 1,
        name: "Mark"
    }
})
// ______________________

// ______________________
const newUser = {
    id: 120,
    name: "Mark"
}
axios.post("fakeapi.com", newUser)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.error(err);
    })

