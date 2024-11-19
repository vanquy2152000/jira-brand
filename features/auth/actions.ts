"use server"

import { cookies } from "next/headers"
import { Account, Client } from "node-appwrite"
import { AUTH_COOKIE } from "./constants"

export const getCurrent = async () => {
    try {
        const client = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
            .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)

        const sessionCookie = cookies().get(AUTH_COOKIE)

        if (!sessionCookie) {
            console.log('No session cookie found')
            return null
        }

        // Set the session in the client
        client.setSession(sessionCookie.value)

        const account = new Account(client)

        const user = await account.get()

        return user
    } catch {
        return null
    }
}