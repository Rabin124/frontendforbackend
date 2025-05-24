function Button(props){
  return(
     <button onClick={props.deleteFunctionHo} className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none cursor-pointer hover:bg-[#4b4799] hover:shadow-form">
          {props.title}
        </button>
  )
}

export default Button;