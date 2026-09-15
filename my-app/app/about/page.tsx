import Image from "next/image";
import ButtonComponent from "../components/button";

export default function About() {
    return <div>About
        <Image src="https://i.pinimg.com/474x/77/ee/48/77ee484ef632663b5d519ad1b6674846.jpg" alt="About Image" width={500} height={300} />
        <ButtonComponent />
    </div>
}