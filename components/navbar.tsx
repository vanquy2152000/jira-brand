import { UserButton } from "@/features/auth/components/user-button"


export const Navbar = () => {
    return (
        <div className='pt-4 px-6 flex item justify-between'>
            <div className='flex-col hidden lg:flex'>
                <h1 className='text-2xl font-normal'>
                    Home
                </h1>
                
                <p className='text-muted-foreground'>
                    Monitor all of your projects and tasks
                </p>
            </div>

            <UserButton />
        </div>
    )
}