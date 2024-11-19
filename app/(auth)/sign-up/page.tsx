import React from 'react'

import { getCurrent } from '@/features/auth/actions'
import { SignUpCard } from '@/features/auth/components/sign-up-card'
import { redirect } from 'next/navigation'

// type Props = {}

const PageSignUp = async () => {
    const user = await getCurrent()

    if (user) redirect("/")

    return (
        <SignUpCard />
    )
}

export default PageSignUp