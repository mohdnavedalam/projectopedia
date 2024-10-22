import ProjectCard from "../app/Components/ProjectCard";
import projectList from "../Store/data";

const Home = () => {
    return (
        <div className="container p-5 text-white">
            <div className="h3 text-success">Projects List</div>
            <div className="row">
                {projectList.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Home;