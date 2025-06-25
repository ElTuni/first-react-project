import profilePic from './images/profile-pic.jpg'

export default function Info() {
    return(
        <section className="section-info container">
            <img className="profile-pic" src={profilePic} alt="profile picture" />
            <h1>Tomás Goya</h1>
            <p className="job-descrition">Frontend Developer</p>
            <a className="my-website" href="#">tuni.website</a>
            <div className="button-container">
                <a href="mailto:tomaslucasgoya@gmail.com" className="button-email"><i className="fa fa-envelope"></i> Email</a>
                <a href="https://www.linkedin.com/in/tomas-goya-a70775366/" className="button-linkedin"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </section>
    )
}