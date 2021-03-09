import Axios from "axios"

const apiClient = Axios.create({
    baseURL: "https://vcrko6pb51.execute-api.eu-central-1.amazonaws.com/dev"
})

export default {
    instance: apiClient,

    getDevices() {
        return this.instance.get("/devices")
        .then(response => response.data)

    },

    createDevice(payload) {
        return this.instance.post("/devices", payload)
        .then(response => response.data)
    }

}