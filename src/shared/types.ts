export enum SelectedPage{
    Home ="home",
    Benefits = "benefits",
    OurClasses="ourclasses",
  Contactus ="contactus"
  }

  export interface BenefitType{
    icon: JSX.Element,
    title: string,
    description:string,
    // setSelectedPage ?: (value:SelectedPage)=> void,
  }

  export interface ClassType {
    title: string,
    description ?: string,
    image: string,
  }