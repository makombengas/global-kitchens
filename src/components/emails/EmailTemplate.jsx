import React from "react";
import {Body, Container, Tailwind, Button, Text, Head, Img, Heading, Html, Link, Preview} from "@react-email/components";


const Email =()=>{
  return(

    <Html>

      <Head/>
      <Tailwind>
        <Body className="bg-black ">
       <Container className="  grid place-items-center bg-white my-auto mx-auto font-sans px-2 max-w-[765px] ">
        <Img className="my-5 mx-auto w-[200px]  flex-auto" src="/images/food.png" alt=""/>
        <Heading className="text-black text-6xl text-center p-0 my-[30px] mx-0 font-extrabold">GLOBAL KITCHEN</Heading>
         <Text className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0"> 50+ free and open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion.
         Perfect companion for shadcn/ui. </Text>
         <Button href="https://www.notion.so" className="flex justify-center mx-auto  items-center text-black cursor-pointer text-[24px]  text-center px-6 py-2 rounded-full font-bold my-[30px] bg-[#8EC63F] ">Call Us</Button>
       </Container>
        </Body>
      </Tailwind>

    </Html>
  )
}
export default Email