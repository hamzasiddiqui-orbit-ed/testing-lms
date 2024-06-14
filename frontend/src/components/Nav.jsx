import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { FiLogOut } from "react-icons/fi";
import OrbitLogo from "../assets/orbitlogo.png";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const [name, setName] = useState('');
  // const [jobTitle, setJobTitle] = useState('');
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation();

  const DropdownContent = ({ variant, color }) => (
    <Dropdown>
      <DropdownTrigger>
        <Button color={color} variant={variant} className="capitalize h-12">
          <User name={userInfo.name} description={userInfo.jobTitle} className="" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu color={color} variant={variant}>
        {/* <DropdownItem key="new">New file</DropdownItem> */}
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          startContent={<FiLogOut />}
          onClick={handleLogOut}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem('userInfo');
  //   const name = userInfo.name;
  //   const jobTitle = userInfo.jobTitle;

  //   if (name ) {
  //     const parsedUserInfo = JSON.parse(storedUserInfo);
  //     setName(parsedUserInfo.name);
  //     setJobTitle(parsedUserInfo.jobTitle);
  //   }
  // });

  const handleLogOut = async () => {
    // localStorage.removeItem('userInfo');
    // navigate('/');

    try { 
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="absolute top-0 h-18 border-b-2"
      style={{ backgroundColor: "#31314D" }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src={OrbitLogo}
            alt="Orbit-ED"
            style={{ width: "50px" }}
            className="mr-3"
          />
          <p className="font-bold text-3xl">ORBIT-ED</p>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent justify="end">
        <NavbarItem>
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button> */}
          <DropdownContent color="warning" variant="flat" />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
