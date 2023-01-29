import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './Icon.css';
const Icon = () => {
    return (
        <>
            <div className='icons'>
                <a href="https://github.com/saurabh317"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/saurabh-sagar-pandey-9b6a5624b/"><FaLinkedin /></a>
                <a href="https://www.instagram.com/_saurabhpandey317/"><FaInstagram /></a>
            </div>

        </>
    )
}
export default Icon;