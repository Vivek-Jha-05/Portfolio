const FloatingInput = (props: any) => {
    return <div>
        <div className="relative">
            {props.id !== "message" ?
                <input
                    type="text"
                    id={props.id}
                    value={props.value}
                    onChange={(e) => props.handleChange(props.id, e.target.value)}
                    className={`block px-2.5 pb-2.5 pt-4 w-full hover:shadow-[0_0_5px_0_#64FFDA70] text-xl text-white bg-transparent rounded-xl border border-textColor appearance-none focus:outline-none ${props.error ? "border-red-500" : ""} focus:ring-0 focus:border-primaryColor peer sm-mx:text-lg sm-mx:pb-1 sm-mx:pt-2 xs-mx:text-base`}
                    placeholder=" " /> :

                <textarea
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    onChange={(e) => props.handleChange(props.id, e.target.value)}
                    rows={4}
                    className="block px-2.5 pb-2.5 hover:shadow-[0_0_5px_0_#64FFDA70] pt-4 w-full text-xl text-white bg-transparent rounded-xl border border-textColor appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer sm-mx:text-lg xs-mx:text-base"
                    placeholder=" "
                ></textarea>

            }
            <label htmlFor={props.id} className={`absolute  text-xl xs-mx:text-base sm-mx:text-lg text-textColor duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-1 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${props.id !== "message" ? "peer-placeholder-shown:top-1/2" : "peer-placeholder-shown:top-6"} peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}>{props.name}</label>
        </div>
        {props.error && <div className="text-red-500 ml-1 mt-1">{props.error}</div>}
    </div>
}

export default FloatingInput;