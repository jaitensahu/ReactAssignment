import './Header.css'
export default function Header(){
    let lists=["HOME", "ABOUT", "SERVICE", "FAQ","CONTACT"];
    return (
        <header>
            
            <h1>Family Wellness</h1>
            <p>MESSAGE THERAPY</p>
            <div class="NavContainer">
            <nav>
                <li>Home</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>FAQ</li>
                <li>CONTACT</li>
            </nav>
            </div>
        </header>
    )
}