import { Badge, Button, Card, Group, Image, Indicator, Text, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectCard from "./FullProjectCard.tsx";

const ProjectCard = (props:any) => {
  const [opened, { open, close }] = useDisclosure(false);

  const badge = useMatches({
    xms:'sm',
    md:'md',
    lg:'lg'
  })
  const btn = useMatches({
    xs:'xs',
    sm:'sm',
    md:'md'
  })

  return <div className="w-[32%]  md-mx:!w-[80%] lg-mx:w-[46%]" data-aos="fade-up" data-aos-duration="800">
      <Card onClick={open} className="!bg-bgColor hover:!shadow-[0_0_10px_0_#64FFDA80] cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] !border-primaryColor mb-5 !border-2 "  shadow="lg" padding="sm" radius="lg" withBorder>
    <Card.Section className="p-3">
      <Image 
        className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] md-mx:h-[200px] md-mx:w-full xs-mx:h-[150px] xs-mx:w-full !h-auto !w-auto"
        src={props.image}
        alt={props.image}
      />
    </Card.Section>

    <Group justify="space-between" mt="xs" mb="xs">
      <Text className="!text-2xl !font-bold !text-white gap-2 flex items-center sm-mx:!text-xl">{props.title} {props.live === true && <Badge variant="outline" color="red" leftSection={<Indicator color="red" position="middle-start" radius="sm" size={7} processing></Indicator>}>&nbsp;LIVE</Badge>}</Text>
    </Group>

    <Group mb="xs">
      {props.techStack.map((tech:string, index:number) => index < 3 && <Badge key={index} variant="light" size={badge} color="#64FFDA">{tech}</Badge>)}
    </Group>

    <Text className="!text-justify vt23-regular !text-sm xs-mx:!text-xs" lineClamp={5} size="sm" c="dimmed">
      {props.description}
    </Text>

    <Button onClick={open} className="!bg-primaryColor !text-bgColor" fullWidth mt="md" radius="md">
      Show details
    </Button>
    </Card>
    <FullProjectCard opened={opened} close={close} title={props.title} description={props.description} status={props.status} image={props.image} live={props.live} link={props.link} github={props.github} techStack={props.techStack} type={props.type}  />
  </div>
}

export default ProjectCard;