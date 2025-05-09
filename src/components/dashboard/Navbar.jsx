
import { Settings, Menu } from "lucide-react"

const Navbar = ({ onMenuClick }) => {
  return (
    <header className= "bg-[#070741] text-white flex justify-between items-center p-4">
        
      <div className="flex items-center">
        <button onClick={onMenuClick} className="mr-4 hidden sm:block">
          <Menu size={24} />
        </button>
      </div>

      <button className="p-2 rounded-full hover:bg-[#0c1a8b] transition-colors">
        <Settings size={20} />
      </button>
    </header>
  )
}

export default Navbar
