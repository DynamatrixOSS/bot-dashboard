import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        error: null,
    }),
    actions: {
        async fetchUser() {
            if (!this.user && !this.error) {
                try {
                    await axios.get('/sanctum/csrf-cookie')

                    const response = await axios.get('/api/user')
                    console.log(response)
                    if (response.status === 200) {
                        this.user = response.data
                    } else {
                        console.error(`Failed to fetch user: ${response.status}`)
                        this.error = `Error fetching user: ${response.status}`
                        this.user = null
                        throw new Error(this.error)
                    }
                } catch (error) {
                    if (error.status === 401) {
                        this.user = null
                        console.warn('A user is not logged in on this session.')
                    }
                }
            }

            return this.user
        },
        async updateUserProperty( property, value ) {
            if (this.user && property in this.user) {
                this.user[property] = value
                await axios.put(`/api/users/save/${this.user.id}`, this.user)
            } else {
                console.error(`Property ${property} not found in user object.`)
            }
        },
        async updateUser(data) {
            if (this.user) {
                this.user = data
                return await axios.put(`/api/users/save/${this.user.id}`, this.user)
            } else {
                console.error(`Could not find a user within Pinia store.`)
            }
        },
        async addUser(data) {
            this.user = data
        },
        async logout(){
            this.user = null
        }
    },
    getters: {
        getUser() {
            return this.user
        },
    },
})
