"use client";

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import { useRouter } from "next/navigation";
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const router = useRouter();

  const itemRenderer = (item: MenuItem) => (
    <a className="flex align-items-center p-menuitem-link">
        <span className={item.icon} />
        <span className="mx-2">{item.label}</span>
    </a>
);
const items: MenuItem[] = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => router.push("/")
    },
    {
        label: 'Equipo',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Quienes Somos',
                icon: 'pi pi-bolt',
                command: () => router.push("/equipo/aboutUs")
            },
            {
                label: 'Profesionales',
                icon: 'pi pi-server',
                command: () => router.push("/equipo/profesionales")
            }
        ]
    },
    {
      label: 'Propuestas para familias',
      icon: 'pi pi-home',
      command: () => router.push("/familias")
    },
    {
        label: 'Propuestas para profesionales',
        icon: 'pi pi-star',
        command: () => router.push("/profesionales")
    },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          command: () => router.push("/contacto")
      }
];

const start = <img alt="logo" src="/Logo.png" className="mr-2 logo"></img>;
/* const end = (
    <div className="flex align-items-center gap-2">
        <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
    </div>
); */

const pathname = usePathname();
const headerClassName =
pathname === '/home' ? `${styles.header} ${styles.homeHeader}` : `${styles.header}`;


return (
    <div className={headerClassName}>
        <Menubar model={items} start={start} />
    </div>
);
};

export default Navbar;
