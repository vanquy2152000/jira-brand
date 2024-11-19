import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Sidebar } from "./sidebar"


export const MobileSibar = () => {
    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <Button
                    size="icon"
                    className='lg:hidden'
                    variant="secondary"
                >
                    <MenuIcon className='size-4 text-neutral-500' />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className='p-0'>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}