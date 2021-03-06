import Link from "next/link";
import SignOutButton from "../../auth/SignOut";
import { useUser } from "../../../context/useUser";
import { useSidebarState } from "../../../context/useSidebar";
import { HamburgerIconElement } from '../../../icons';

interface P {
  text?: string;
}

interface ColorInput {
  color: string;
}

const Navbar: React.FC<P> = ({ text }) => {
  const { name } = useUser();
  const { sidebarOpen, setSidebarOpen, windowWidth } = useSidebarState();
  const onSubmit = (data: ColorInput) => {
    console.log(data);
  } 

  return (

    <div className="flex justify-center p-2 bg-white mb-2">
      <div className="flex items-center justify-between w-full lg:w-5/6">
        <Link href={name ? '/home' : '/'}>
          <img src={require("../../../public/static/imgs/favicon-32x32.png")} alt="logo" className="cursor-pointer"></img>
        </Link>
          {name && windowWidth >= 768 && <SignOutButton />}
      </div>
      { windowWidth < 768 && <p className="cursor-pointer" onClick={() => { setSidebarOpen(!sidebarOpen) } }>
        { HamburgerIconElement }
      </p> }
    </div>
  );
};

export default Navbar;
