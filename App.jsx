import { LearnComponent } from "./Components/LearnComponent";

import { Header } from "./Components/Header";
import { ChildComponent } from "./Components/Childcomponent";
import { Student } from "./Components/Student";
import { ArraySample } from "./Components/ArraySample";
import { OneOfSample } from "./Components/Oneofsample";
import { MultiTypeComponent } from "./Components/MultiTypeComponent";
import { FunctionSample } from "./Components/FunctionSample";
import "./css/App.css"

function App() {
    const items= [
            {id:1, name:"Item 1"},
            {id:2, name:"Item 2"},
            {id:3, name:"Item 3"},
    ];
    const handleClick = () => {
        alert("Button clicked!");
    };

return (
<>
<>Tutor joes React Tutorial</>
<LearnComponent/>
<Header />
<Student name="Thiya" age={35} isMarried={false}/>
<Student name="Rajan" age={24} isMarried={false}/>
<Student name="Hari" age={30} isMarried={true}/>
<Student name="kali"/>

<ChildComponent>
    <p>This is a para1</p>
    <p>This is a para2</p>
    <p>This is a para3</p>
</ChildComponent>
<ArraySample items={items}/>
<OneOfSample color="green"/>
<MultiTypeComponent value="Hello" />
<MultiTypeComponent value={42} />
<MultiTypeComponent value={true} />
<div>
    <h2>Parent Component</h2>
    <FunctionSample handleClick={handleClick} />
</div>
</>
);
}
export default App;