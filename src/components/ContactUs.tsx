import Htitle from '@/shared/Htitle';
import { SelectedPage } from '@/shared/types';
import {motion} from 'framer-motion';
import { useForm } from 'react-hook-form';

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}


export default function ContactUs({setSelectedPage}: Props) {

    const {
        register,
        trigger,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if (!isValid) {
          e.preventDefault();
        }
      };

  return (
    <section id="contact us">
        <motion.div     
            onViewportEnter={()=>setSelectedPage(SelectedPage.Contactus)}
            className="mx-auto w-5/6 py-20 mb-16">
            {/* Header */}
             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            className="md:my-5 md:w-3/5">
                <Htitle><span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE</Htitle>
                <p className="my-4 text-sm">Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis</p>
        </motion.div>
            {/* Form Section */}
            <div className='md:flex justify-between gap-8 mt-10'>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                  }}
                className='basis-3/5 md:mt-0 mt-10'>

                    <form 
                    target='_blank'
                    onSubmit={onSubmit}
                    method='POST'
                    action='https://formsubmit.co/farahani.business@gmail.com'
                    >
                        <input 
                        className='mt-1 w-full rounded-lg px-5 py-3 bg-primary-300 placeholder:text-white' placeholder='NAME'
                        type='text'
                        {...register("name",{
                            required: true,
                            maxLength:100,
                        })}
                        />
                        {errors.name && (
                            <p className="text-primary-500">
                                {errors.name.type === "required" && "Required"}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}
                        <input 
                        className='mt-6 w-full rounded-lg px-5 py-3 bg-primary-300 placeholder:text-white' placeholder='EMAIl'
                         type='email'
                         {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          })}/>
                        {errors.email && (
                                    <p className="text-primary-500">
                                    {errors.email.type === "required" &&
                                        "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                    </p>
                                )}
                        <textarea 
                        className='mt-6 w-full rounded-lg px-5 py-3 bg-primary-300 placeholder:text-white'  placeholder='MESSAGE'
                        rows={4}
                        cols={50}
                        {...register("message",{
                            required: true,
                            maxLength: 2000,
                        })}
                        />
                        {errors.message && (
                            <p className=" text-primary-500">
                            {errors.message.type === "required" &&
                                "This field is required."}
                            {errors.message.type === "maxLength" &&
                                "Max length is 2000 char."}
                            </p>
                         )}
                         <button type='submit' 
                         className='mt-5 rounded-lg bg-secondary-500  hover:text-white py-3 px-20 transition duration-500'
                         >Submit</button>
                    </form>
                </motion.div>
                {/* Image */}
                <motion.div className='relative basis-2/5 mt-16 md:mt-0'
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: false, amount: 0.5 }}
                   transition={{delay:0.2,  duration: 0.5 }}
                   variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
               }}
                >
                    <div className='before:absolute md:before:content-evolvetext md:before:z-[-1] before:right-20 before:-bottom-20'>
                        <img 
                        src={ContactUsPageGraphic}
                         alt={ContactUsPageGraphic}
                         className='w-full'
                         />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

