import { Link, NavLink } from "react-router-dom";

function List({ linkTo, children, after, newWindow }) {
  return (
    <li className="transition-colors relative">
      {newWindow ? (
        <NavLink
          to={`${linkTo}`}
          className={
            after === "true"
              ? "hover:text-indigo-500 after:content-[''] after:absolute after:top-[95%]  after:left-0 after:w-[0%] transition-all hover:after:w-[80%] after:h-[3px] after:bg-indigo-500 hover:after:transition-colors hover:after:duration-700"
              : `hover:text-indigo-500 duration-300  `
          }
          target="_blank"
        >
          {children}
        </NavLink>
      ) : (
        <NavLink
          to={`${linkTo}`}
          className={
            after === "true"
              ? "hover:text-indigo-500 after:content-[''] after:absolute after:top-[95%]  after:left-0 after:w-[0%] transition-all hover:after:w-[80%] after:h-[3px] after:bg-indigo-500 hover:after:transition-colors hover:after:duration-700"
              : `hover:text-indigo-500 duration-300  `
          }
        >
          {children}
        </NavLink>
      )}
    </li>
  );
}

export default List;
