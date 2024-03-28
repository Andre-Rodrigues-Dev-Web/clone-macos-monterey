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
        <li>Mon Jun 22 9:41 AM</li>
      </ul>
    </ContainerRigth>
  );
};

export default LinksRight;
