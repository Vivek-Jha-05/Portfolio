import { ActionIcon, Modal, ScrollArea, Tooltip } from '@mantine/core';
import { IconArrowBigDownLineFilled } from '@tabler/icons-react';
import { Document, Page } from 'react-pdf';
import { Info } from '../User.tsx';

const ResumeViewer = (props: any) => {
    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" opened={props.opened} onClose={props.close} className='!font-mono'>
        <Modal.Overlay />
        <Modal.Content className='!rounded-3xl'>
            <Modal.Header className='!bg-bgColor !text-primaryColor !border-primaryColor !border-2 !rounded-t-3xl !border-b-0'>
                <Modal.Title className='!text-3xl !text-white !font-bold flex items-center gap-3'>Resume
                    <Tooltip label="Download" position="right" color='#64FFDA' offset={5} className='!text-bgColor'>
                    <ActionIcon className='!text-primaryColor' component='a' href='Vivek_Resume.pdf' download={Info.name} variant="outline" color='#64FFDA'>
                        <IconArrowBigDownLineFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                    </Tooltip>
                </Modal.Title>
                <Modal.CloseButton size="md" iconSize="30px" className='!bg-bgColor !text-red-500' />
            </Modal.Header>
            <Modal.Body className='!bg-bgColor !flex !justify-between !gap-4  !text-primaryColor !border-primaryColor !border-2 !rounded-b-3xl !border-t-0 !pt-3'>
                <Document file="Vivek_Resume.pdf" >
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
}

export default ResumeViewer;