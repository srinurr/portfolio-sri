export default App;
export default function App() {
    return (
      <nav className="navbar bg-indigo-600">
          <div className="container flex mx-auto py-10">
              <div className="w-3/12">
              <div className="logo  text-white uppercase font-semibold tracking-widest text-center text-2xl"> 
              Sri
          </div>
           </div>
     <div className="w-6/12">
         <ul className="nav flex justify-center space-x-11 text-lg font-semibold text-white text-opacity-60"> 
         <li className="nav-items">profile</li>
         <li className="nav-items">skills</li>
         <li className="nav-items">projects</li>
         <li className="nav-items">conntact</li>
     </ul>
    </div>
         <div className="w-3/12">
            <div className="button text-center">
                 <a className="text-lg font-semibold
                 text-yellow-300 border rounded-full
                 border-yellow-300 py-2 px-6">Contact</a>
            </div>
        </div>
    </div>
     </nav>
    );
  }