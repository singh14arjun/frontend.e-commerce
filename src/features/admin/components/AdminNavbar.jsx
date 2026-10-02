import { BiBell, BiUser } from "react-icons/bi";
import Container from "../../../components/common/Container";
import logo from "../../../assets/images/logo.png";

export default function AdminNavbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-primary">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div>
            <img src={logo} alt="logo" className="w-40 h-10" />
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-primary-light w-fit p-2 rounded-full hover:bg-primary-dark cursor-pointer hover:text-text-light">
              <BiBell />
            </div>
            <div className="flex items-center gap-2">
              <div>
                <p className="font-semibold text-text-primary">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-text-muted">{user?.role}</p>
              </div>
              <BiUser className="bg-primary-light p-1 rounded-full" size={30} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
