
import React, {useState} from "react"
import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

const data=["Tab 1", "Tab 2", "Tab 3"]
export  function App() {
    const [state, setState]=useState(data[0])
    const stateChange = (item)=>{
        setState(()=>item)
    }
  return <div>
              <ul>
                  {
                      data.map((item)=>(
                          <li onClick={()=>stateChange(item)} key={item}>{item}</li>
                      ))
                  }
              </ul>
          <p>This is the content for {state}.</p>
    </div>
}


export default App
