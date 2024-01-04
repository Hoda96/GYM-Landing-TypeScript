
type props ={
    title: string,
    description ?: string,
    image: string,
}

const Class = ({title, description, image}: props) => {

const overlayStyle = `p-5 absolute z-10 whitespace-normal h-96 w-[450px] flex flex-col justify-center items-center text-center text-white bg-primary-500 opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative inline-block mx-4 h-96 w-[450px]">
        <div className={overlayStyle}>
            <h3 className="text-2xl mb-2">{title}</h3>
            <p>{description}</p>
        </div>
            <img src={image} alt={title}/>
    </li>
  )
}

export default Class;