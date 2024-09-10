const UserData = [
  {
    name:"JAMES",
    city:"NEW YORK",
    description:"Front End Developer",
    skills: ["UI / UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"],
    online:false,
    profile: "images/1.jpg"
  },
  {
    name:"ROBERT",
    city:"CALIFORNIA",
    description:"Full Stack Web Developer",
    skills: ["v-logging", "Web Development", "HTML", "CSS", "JavaScript", "React", "Angular"],
    online:false,
    profile: "images/2.jpg"
  },
  {
    name:"NANCY",
    city:"SAN FRANCISCO",
    description:"Senior Software Developer",
    skills: ["C", "C++", "Java Programming", "Python", "C#.Net", "MySQL", "MongoDB"],
    online:true,
    profile: "images/3.jpg",
  },
];

import PropTypes from "prop-types";
const userData = [
];
function User(props){
    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"} >
          {props.online ? "ONLINE" : "OFFLINE"}</span>
        <img src={props.profile} alt="person 1" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
        <button className="primary">Message</button>
        <button className="outline">Following</button>
        </div>
        <div className="skills">
        <h4>Skills</h4>
        <ul>{props.skills.map((skill,index) => (
              <li key={index}>{skill}</li>
            ))}
        </ul>
        </div>
    </div>
}
export const UserCard = () => {
  return (
  <>
  {UserData.map((user, index) =>(
      <User key={index}
      name={user.name}
      city={user.city}
      description={user.description}
      online={user.online}
      profile={user.profile}
      skills={user.skills} />
    ))}
    </>
  );
};

{
       /* <User name="James" city="New York"
        description="Front-End Developer"
        skills={["UI / UX", "Front End Development",
        "HTML", "CSS", "JavaScript", "React", "Node"]}
        online={true} profile="images/2.jpg" />; */
};

User.prototypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};