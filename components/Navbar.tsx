import {Button} from '@/components/ui/button'
import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant={"ghost"} className='md:hidden' size={'icon'}>
        <Menu/>
      </Button>
      <div className='w-full flex justify-end '>
      </div>
    </div>
  )
}

export default Navbar
