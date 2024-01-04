
type Props = {
    children: React.ReactNode;
//   tag: number;
}

export default function Htitle({children}: Props) {

    // const Heading = "h"+tag;
  return (
    <h1 className=" basis3/5 font-montserrat text-3xl font-bold">{children}</h1>
  )
}