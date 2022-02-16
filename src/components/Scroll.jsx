import "../styles/ComponentsStyles/Scroll.css"

const Scroll = (props) => {


  return (
        <>
            <div className={"Scrollspace "}>
              <a href={'/#home'} className={`SmallLine ${props.page === 1 ? "active" : ""}`} id={"page1"}><span>Home</span> </a>
              <a href={'/#project'} className={`SmallLine ${props.page === 2 ? "active" : ""}`} id={"page2"}><span>Project</span></a>
              <a href={'/#aboutMe'} className={`SmallLine ${props.page === 3 ? "active" : ""}`} id={"page3"}><span>About Me</span></a>
              <a href={'/#Contact'} className={`SmallLine ${props.page === 4 ? "active" : ""}`} id={"page4"}><span>Contact</span></a>
            </div>
        </>
    );
};

export default Scroll;
