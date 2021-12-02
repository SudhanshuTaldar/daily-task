
// import { Button,RedButton, BlueButton, YellowButton } from './Components/Button'
// import { AppContainer } from './Components/AppContainer';
// import 

// function App() {
//   return (
//     // <h4> hello somethingnpm i styled-components</h4>
//     // <Button> Click Me </Button>
//     <>
//    <AppContainer> 
//   <Button backgroundColor="pink"> submit</Button>
//     <RedButton> Click </RedButton>
//     <BlueButton> Click </BlueButton>
//     <YellowButton> Click </YellowButton>
//     </AppContainer>

//     </>
//   );
// }

// export default App;


import './App.css';
// query params
import Emotion from "./Components/Enotion"

import {
BrowserRouter as Router,
Link,
useLocation
} from "react-router-dom";


function App() {
return (
<Router>
<QueryParamsDemo/>
<Emotion> </Emotion>
</Router>
);
}
function useQuery()
{
return new URLSearchParams(useLocation().search);
}
function QueryParamsDemo()
{
let Query = useQuery();
return (
<div>
<div>
<h2>NavBar</h2>
<ul>
<li>
<Link to="/nav?name=Home">Home</Link>
</li>
<li>
<Link to="/nav?name=About">About</Link>
</li>
</ul>
<Child name={Query.get("name")} />
</div>
</div>
)
}
function Child({ name }) {
return (
<div>
{name ? (
<h3>
The <code>name</code> in the query string is &quot;{name}
&quot;
</h3>
) : (
<h3>There is no name in the query string</h3>
)}
</div>
);
}
export default App;