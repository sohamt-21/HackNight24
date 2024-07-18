import { Button } from "../../ui/button";
import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "../../../assets/Logo.png";
import { useUserEmail } from "../../Context/UserEmail";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const AfterSignNav = () => {
  const { user } = useUser();
  const { setUserEmail } = useUserEmail();
  setUserEmail(user.primaryEmailAddress);

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastYRef.current;
    if (Math.abs(diff) > 50) {
      setIsHidden(diff > 0);
      lastYRef.current = y;
    }
  });

  const auth = localStorage.getItem("user");
  console.log(auth);
  if (auth) {
    console.log(auth);
  } else {
    console.log(auth);
  }

  return (
    <motion.nav
      className="navbar-container flex justify-around items-center w-full h-20 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        onFocusCapture={() => setIsHidden(false)}
        whileHover="visible"
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "0%",
          },
        }}
        transition={{ duration: 0.3 }}
        className="nav-list w-fit h-16 z-20 px-8 list-none flex flex-row justify-center items-center fixed rounded-full border border-neutral-700 bg-gray-900 text-white dark:border-slate-200 dark:bg-slate-100 dark:text-black"
      >
        <img src={Logo} alt="" className="h-16" />
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="ghost">Contact</Button>
        <Link
          to="/profile"
          style={{
            listStyle: "none",
            textDecoration: "none",
            color: "whitesmoke",
          }}
        >
          <p>{user.fullName}</p>
        </Link>
        <NavigationMenu className="dark">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-accent hover:text-accent-foreground text-lg font-light">
                Go To Feature
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col max-w-sm gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li>
                    <a
                      href="https://agrico-community.vercel.app"
                      title="Introduction"
                      className="font-thin hover:bg-gray-700"
                    >
                      <p className="font-bold">Community</p>
                      Get the latest news about Government Subsidies and news in
                      Farming
                    </a>
                  </li>
                  <li>
                    <Link
                      to={auth ? "/dashboard" : "/dashform"}
                      className="font-thin hover:bg-gray-700"
                    >
                      <p className="font-bold">Dashboard</p>
                      Get your savings plan and analyze the investment with an
                      interactive dashboard.
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/docs/primitives/typography"
                      title="Typography"
                      className="font-thin hover:bg-gray-700"
                    >
                      <p className="font-bold">Price Alert</p>
                      Get the latest price alert of crops via SMS.
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <SignOutButton id="navbarbutton" />
        {/* <ModeToggle /> */}
      </motion.div>
    </motion.nav>
  );
};

export default AfterSignNav;
