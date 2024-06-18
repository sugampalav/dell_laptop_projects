import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-navbar px-4 py-2">
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>

        <Link href={"/TicketPage/new"}>
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">sugam@gmail.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
