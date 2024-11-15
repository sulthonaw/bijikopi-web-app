import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./logo";

export default function NavbarMain({ selected }) {
  const classSelected = "bg-slate-100 font-semibold";

  const navItems = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/#about-us",
      name: "About Us",
    },
    {
      url: "/#news",
      name: "News",
    },
    {
      url: "/#catalog",
      name: "Catalog",
    },
    {
      url: "/#faqs",
      name: "FAQs",
    },

    {
      url: "/contact-us",
      name: "Contact Us",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white px-4 py-3">
        {/* <Banner /> */}
        <div className="container rounded-2xl">
          <div className="flex items-center justify-between py-3">
            <Link href={"/"}>
              <Logo className={"w-32 text-black"} />
            </Link>
            <ul className="bottom-0 flex gap-4">
              {navItems.map((item, index) => (
                <Link href={item.url} key={index}>
                  <li
                    className={
                      "relative rounded-lg px-4 py-2 text-sm " +
                      (selected == item.name ? classSelected : "text-slate-500 hover:bg-slate-100")
                    }
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Link href={"/auth/sign-up"}>
                <Button variant={"ghost"}>Register</Button>
              </Link>
              <Link href={"/auth/sign-in"}>
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
