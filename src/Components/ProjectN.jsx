import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Project = ({ url, image, github, title, text }) => {
  return (
    <article className="rounded-lg shadow-md hover:shadow-3xl duration-300">
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-t-lg h-52"
      />
      <div className="capitalize p-4">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-500 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-slate-400 duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-400 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default Project;
