import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const navigate = useNavigate()

  const DropdownContent = ({ variant, color }) => (
    <Dropdown>
      <DropdownTrigger>
        <Button color={color} variant={variant} className="capitalize h-12">
          <User name={name} description={jobTitle} className="" />
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

  useEffect(() => {
    console.log(localStorage.getItem('userInfo'));

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    console.log(userInfo)

    setName(userInfo.name);
    setJobTitle(userInfo.jobTitle);

    console.log(name);
    console.log(jobTitle);
  })

  const handleLogOut = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
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
