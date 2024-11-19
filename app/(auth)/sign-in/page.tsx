import React from 'react'
import { redirect } from 'next/navigation'

import { getCurrent } from '@/features/auth/actions'
import { SignInCard } from '@/features/auth/components/sign-in-card'

const PageSignIn = async () => {
    const user = await getCurrent();

    if (user) redirect("/");

    return (
        <div>
            <SignInCard />
        </div>
    )
}

export default PageSignIn