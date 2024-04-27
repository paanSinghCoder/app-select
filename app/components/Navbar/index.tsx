const Navbar = () => {
  return (
    <nav className=" w-full flex items-center justify-between px-8 py-3">
      <div className="mx-auto max-w-6xl w-full flex justify-between items-center">
        <h2 className="font-bold text-2xl text-slate-600 cursor-pointer hover:text-gray-800">axiamatic</h2>
        <span className="underline font-semibold text-gray-300 text-sm cursor-pointer hover:text-gray-500">
          Exit Setup
        </span>
      </div>
    </nav>
  )
}

export default Navbar
