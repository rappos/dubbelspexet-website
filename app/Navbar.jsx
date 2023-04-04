import Link from "next/link";

export default function Navbar() {
  const links = [
    ["Hem", "/"],
    ["På gång", "/pa-gang"],
    ["Om", "/om"],
    ["Intresseanmälan", "/intresseanmalan"],
    ["Biljetter", "/biljetter"],
    ["Kontakt", "/kontakt"],
  ];

  return (
    <nav
      className="top-0 w-screen h-16 m-0
                    flex flex-row items-center justify-center
                    bg-teal-600 text-white shadow-lg">
      {links.map((l) => {
        return <NavbarButton title={l[0]} link={l[1]} key={l[0]} />;
      })}
    </nav>
  );
}

const NavbarButton = ({ title, link }) => (
  <div className="mx-2">
    <Link href={link}>{title}</Link>
  </div>
);
