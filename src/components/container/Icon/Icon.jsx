import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './Icon.css';
const Icon = () => {
    return (
        <>
            <div className='icons'>
                <a href="https://github.com/saurabh317" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/saurabh-sagar-pandey-9b6a5624b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/_saurabhpandey317/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>

        </>
    )
}
export default Icon;