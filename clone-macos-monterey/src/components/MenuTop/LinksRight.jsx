import DataHoraComponent from "./Date";
import { ContainerRigth } from "./style";
import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";

const LinksRight = () => {
  return (
    <ContainerRigth>
      <ul>
        <li>
          <IoIosWifi size={20} />
        </li>
        <li>
          <IoIosBatteryFull size={20} />
        </li>
        <DataHoraComponent />
      </ul>
    </ContainerRigth>
  );
};

export default LinksRight;
