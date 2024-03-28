import { Link } from "react-router-dom";
import { ContainerLeft } from "./style";
import { FaApple } from "react-icons/fa";


const LinksLeft = () => {
  return (
    <ContainerLeft>
      <ul>
        <li>
          <Link to="">
            <FaApple size={20} />
          </Link>
        </li>
        <li>
          <Link to="">Finder</Link>
        </li>
        <li>
          <Link to="">File</Link>
        </li>
        <li>
          <Link to="">Edit</Link>
        </li>
        <li>
          <Link to="">View</Link>
        </li>
      </ul>
    </ContainerLeft>
  );
};

export default LinksLeft;
