import { useState } from "react";
import FloatingInput from "./FloatingInput.tsx";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import { validateForm } from "./Validations.tsx";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.tsx";
import toast from "react-hot-toast";

const Contact = (props:any) => {
    const form = {
        name: "",
        email: "",
        phone: "",
        message: "",
    }
    const [formData, setFormData] = useState<{[key: string]: string }>(form);
    const [formError, setFormError] = useState<{[key: string]: string }>(form);

    const handleChange = (id: string, value: string) => {
        setFormData({...formData, [id]: value});
        setFormError({...formError, [id]: validateForm(id, value)});
    }

    const handleSubmit =async()=> {
        let valid = true;
        let newFormError: {[key: string]: string} = {};
        for(let key in formData) {
            const error = validateForm(key, formData[key]);
            if(error.length > 0) {
                newFormError[key] = error;
                valid = false;
            }
        }
        setFormError(newFormError);
        if(valid) {
            setFormData(form);
            await addDoc(collection(db, "portfolio"), formData);
            toast.success("Message sent successfully!", {duration: 3000});
        }else {
            toast.error("Please fill all the fields correctly.", {duration: 3000});
        }
    }

    const btn = useMatches({
        xms: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    })

    return (
        <div className="pl-[96px] pr-[80px] my-10 font-mono md-mx:mx-0 md-mx:px-8 sm-mx:px-4 " id="Contact">
            <h1 className="text-4xl mb-10 font-bold text-center text-white"><span className="text-primaryColor">05.&nbsp;</span>Contact</h1>
            <div data-aos="flip-left" data-aos-duration="800" className="w-[70%] md-mx:w-full !shadow-[0_0_10px_0_#64FFDA50] m-auto border border-primaryColor rounded-3xl p-8 flex flex-col gap-6 sm-mx:p-4">
                <div className="text-3xl text-white flex gap-2 items-center font-semibold sm-mx:text-2xl xs-mx:text-xl">Let's Connect
                    <IconTopologyStar3 size={30} className="text-primaryColor w-10 h-10 sm-mx:w-7 sm-mx:h-7" />
                </div>
                <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} error={formError.name}/>
                <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email}/>
                <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} error={formError.phone}/>
                <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message}/>
                <Button onClick={handleSubmit} className="!text-bgColor !font-bold" variant="filled" size={btn} radius="lg" color="#64FFDA" fullWidth rightSection={<IconArrowRight size={20}/>}>Send</Button>
            </div>
        </div>
    )
}

export default Contact;