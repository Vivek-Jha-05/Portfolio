const validateForm = (id:string, value:string) => {
    switch(id) {
        case 'name':
            if(value.length === 0) return "Name is required";
            if(value.length < 3) return "Name must be atleast 3 characters long";
            return "";
        case 'email':
            if(value.length === 0) return "E-mail is required";
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid e-mail address";
            return "";
        case 'phone':
            if(value.length === 0) return "Phone number is required";
            if(!/^[0-9]*$/.test(value)) return "Please enter a valid 10-digit phone number";
            if(value.length !== 10) return "Phone number must be 10 digits long";
            return "";
        case 'message':
            if(value.length === 0) return "Message is required";
            return "";    
        default:
            return "";        
    }
}

export {validateForm};