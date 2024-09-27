"use client";


import Link from 'next/link'; 
import Image from "next/image";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const nestedMenuItems = [
  {
    title: "Django",
    srcLink:'/Services/django'
  },
  {
    title: "MEAN Stack",
    srcLink:'/Services/meanStack'
  },
  {
    title: "MERN Stack",
    srcLink:'/Services/mernStack'
  },
  {
    title: "NextJS",
    srcLink:'/Services/nextJS'
  },
  {
    title: "Asp.net with Angular",
    srcLink:'/Services/asp-angular'
  },
  {
    title: "PHP Core",
    srcLink:'/Services/php-core'
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setOpenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSectionService = (id: string) => {
    const section = document.getElementById(id);
    console.log(`Scrolling to section: ${id}`)
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800; 
      let startTime: number | null = null;
  
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutQuad(progress); // Custom easing function
        window.scrollTo(0, startPosition + distance * easing);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
  
      requestAnimationFrame(animation);
    }
  };

  const renderItems = nestedMenuItems.map(({ title,srcLink }, key) => (
    <a href={srcLink} key={key}>
      <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{title}</MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography onClick={() => scrollToSectionService('services-cards')}  as="div" variant="small" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <ListItem

              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:bg-[#0D2B1D] hover:text-white "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden rounded-xl lg:block " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setOpenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              
              <MenuItem  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
             Web Development
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> 
          <Link href="/Services/desktop-app-development">Desktop App Development</Link></MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Artificial Intelligence Services</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Billing Software Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>ERP Software Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>IOS App Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Hybrid App Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Android App Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Embedded Solutions</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>IOT Applications</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>UI / UX Design</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>API Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Cloud Services</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Product Prototype</MenuItem>

        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setOpenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Web App Development
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Artificial Intelligence Services</MenuItem>

          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Desktop App Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Billing Software Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>ERP Software Development</MenuItem>

          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>IOS App Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Hybrid App Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Android App Development</MenuItem>

          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Embedded Solutions</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>IOT Applications</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>UI / UX Design</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>API Development</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Cloud Services</MenuItem>
          <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Product Prototype</MenuItem>

        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavListCourses() {
  const [isCoursesOpen, setIsCoursesOpen] = React.useState(false);

  return (
    <Menu
      open={isCoursesOpen}
      handler={setIsCoursesOpen}
      placement="bottom"
      allowHover={true}
    >
      <MenuHandler>
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} as="div" variant="small" className="font-medium">
          <ListItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}

            className="rounded flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:bg-[#0D2B1D] hover:text-white "
          >
            Courses
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${isCoursesOpen ? "rotate-180" : ""}`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="grid grid-cols-2 gap-1 rounded-xl p-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>ML & AI Course</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Python Programming</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Angular</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>React JS</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>MERN Stack</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >MEAN Stack</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Python Full Stack</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Flutter Development</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>NextJS</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Python Data Science Course</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Software Testing (Manual & Automated)</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Robotics Course</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Embedded Systems</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Java</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> ASP.NET Core MVC</MenuItem>
      </MenuList>
    </Menu>
  );
}


function NavListTraining() {
  const [isTrainingOpen, setIsTrainingOpen] = React.useState(false);

  return (
    <Menu
      open={isTrainingOpen}
      handler={setIsTrainingOpen}
      placement="bottom"
      allowHover={true}
    >
      <MenuHandler>
        <Typography as="div" variant="small" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <ListItem

            className=" rounded flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:bg-[#0D2B1D] hover:text-white " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Training
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${isTrainingOpen ? "rotate-180" : ""}`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Freshers</MenuItem>
        <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Internship</MenuItem>
      </MenuList>
    </Menu>
  );
}

function NavList() {
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duration of scrolling in milliseconds
      let startTime: number | null = null;
  
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutQuad(progress); // Custom easing function
        window.scrollTo(0, startPosition + distance * easing);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
  
      requestAnimationFrame(animation);
    }
  };
  
  
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <Typography as="a" href='/'  variant="small" color="black" className="font-medium" onClick={() => scrollToSection('home')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <ListItem className=" rounded  flex items-center gap-2 py-2 pr-4 transition-all  hover:bg-[#0D2B1D] hover:text-white " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
       Home
        </ListItem>
      </Typography>

      <Typography as="a"  variant="small" color="black" className="font-medium" onClick={() => scrollToSection('about-us')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <ListItem className="rounded flex items-center gap-2 py-2 pr-4 hover:bg-[#0D2B1D] hover:text-white " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          About Us
        </ListItem>
      </Typography>
      <NavListMenu />
      <NavListCourses />
      <NavListTraining />
      <Typography onClick={() => scrollToSection('gallery')} as="a" href="#" variant="small" color="black" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <ListItem className="rounded flex items-center gap-2 py-2 pr-4 hover:bg-[#0D2B1D] hover:text-white " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Gallery
        </ListItem>
      </Typography>

     
      <Typography onClick={() => scrollToSection('contact-us')} as="a" href="#" variant="small" color="black" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <ListItem className=" rounded flex items-center gap-2 py-2 pr-4 hover:bg-[#0D2B1D] hover:text-white " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Contact
        </ListItem>
      </Typography>

      <Typography as="a" href="#" variant="small" color="black" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <ListItem className=" rounded flex items-center gap-2 py-2 pr-4 hover:bg-[#0D2B1D] hover:text-white " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Careers
        </ListItem>
      </Typography>

    </List>
  );
}

export function NavigationbarWithDropdownMultilevelMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      style={{ backgroundColor: "#FAFFF3", borderRadius: "0" }}
      className="w-full mx-auto max-w-screen-3xl px-4 py-2 lg:px-8 sticky top-0 z-50" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <div className="flex items-center justify-between text-black-900">
     
      <div className="flex items-center">
          <Image
            className="dark:invert"
            src={"/logob.png"}
            alt="Cynosylix Technology logo"
            width={50}
            height={38}
            priority
          />
                
          <Typography
            as="a"
            href="https://cynosylix.com/"
            variant="h6"
            className=" text-black ml-2 cursor-pointer py-1.5 text-xs sm:text-sm md:text-base lg:text-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
        CYNOSYLIX TECHNOLOGY
          </Typography>   

        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
