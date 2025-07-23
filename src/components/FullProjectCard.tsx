import { Modal, Button, Indicator, Badge, Image, Group, Text, ScrollArea } from '@mantine/core';

const FullProjectCard = (props: any) => {
	return <>
		<Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="70%" opened={props.opened} onClose={props.close} className='!font-mono'>
			<Modal.Overlay />
			<Modal.Content className='!rounded-3xl'>
				<Modal.Header className='!bg-bgColor !text-primaryColor !border-primaryColor !border-2 !rounded-t-3xl !border-b-0'>
					<Modal.Title className='!text-3xl !text-white !font-bold flex items-center gap-3'>{props.title} {props.live === true && <Badge className='flex items-center gap-1' variant="outline" color="red" leftSection={<Indicator color="red" position="middle-start" radius="sm" size={7} processing></Indicator>}>&nbsp;LIVE</Badge>}</Modal.Title>
					<Modal.CloseButton size="md" iconSize="30px" className='!bg-bgColor !text-red-500' />
				</Modal.Header>
				<Modal.Body className='!bg-bgColor !flex !justify-between !gap-4  !text-primaryColor !border-primaryColor !border-2 !rounded-b-3xl !border-t-0 !pt-3'>
					<div className='relative top-15 left-0 p-4 w-[35%]'><Image
						radius="md"
						// h={}
						// w={450}
						fit="cover"
						className="!h-auto !w-auto !rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
						src={props.image}
						alt={props.image}
					/></div>
					<div className='w-[65%]'>
					<Group mt="md" mb="xs">
						{props.techStack.map((tech: string, index: number) => <Badge variant="light" size="xl" color="#64FFDA">{tech}</Badge>)}
					</Group>
					<Text className="!text-justify vt23-regular" size="lg" c="dimmed">
						{props.description}
					</Text>
					<Group justify='space-between' mt="md" mb="md" >
						<a href={props.github} target='_blank' className='w-[48%]'>
							<Button variant='outline' size='lg' color="#64ffda" className="" fullWidth mt="md" radius="md">
								Source Code
							</Button>
						</a>
						<a href={props.link} target='_blank' className='w-[48%]'>
							<Button variant='filled' size='lg' color="#64ffda" className=" !text-bgColor" fullWidth mt="md" radius="md">
								Link
							</Button>
						</a>
					</Group>
					</div>
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>

	</>
}

export default FullProjectCard;