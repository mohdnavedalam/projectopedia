import projectList from "../Store/data";

const Home = () => {
    return (
        <div className="container p-5 text-white">
            <div className="h3 text-success">Project List</div>
            <div className="row">
                {projectList.map((project, index) => (
                    <div>{project.title}</div>
                ))}
            </div>
        </div>
    );
};

export default Home;