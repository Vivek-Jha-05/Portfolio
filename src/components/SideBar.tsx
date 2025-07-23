import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import React from 'react';
// import { IconHexagonLetterV } from '@tabler/icons-react';
import Header, { navLinks } from './Header.tsx';

const SideBar = ({ opened, toggle }: { opened: boolean; toggle: () => void }) => {
  // const [opened, { toggle }] = useDisclosure(false);



  return (

    <>
      {/* <Header /> */}
      <Drawer.Root className=' ' opened={opened} onClose={toggle} position='right' size='50vw' zIndex={99999}>
        <Drawer.Overlay style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}/>
        <Drawer.Content bg="#0A192F">
          <Drawer.Body className='mt-28 flex flex-col gap-5' bg="#0A192F">
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content >
      </Drawer.Root >

      {/* <Burger className='md:!hidden !z-10' color='#64FFDA' size="lg" opened={opened} onClick={toggle} /> */}
    </>
  );
}

export default SideBar;