export const Header = () => {
    let customCSS = "code";
    const isLoggedIn = true;
    const greeting = isLoggedIn ? <p className="para">Welcome back!</p> : <p className="para">Please log in.</p>;
    const items = ["Item1", "Item2", "Item3"];
  return (
    <>
    <h1 className="head">Heading</h1>
    <p className="para">Paragraph</p>

    {/* Javascript Expression in jsx */}
    <p className={customCSS}>49+23={49+23}</p>

    {/* Jsx with conditional rendering: */}
    {greeting}

    {/* Jsx with List */}
    <ul>
        {items.map((item,index)=>(<li key={index}>{item}</li>))}
    </ul>
    </>
  )
}
