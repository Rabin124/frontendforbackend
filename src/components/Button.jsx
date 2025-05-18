function Button(props){
  return(
     <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
          {props.title}
        </button>
  )
}

export default Button;