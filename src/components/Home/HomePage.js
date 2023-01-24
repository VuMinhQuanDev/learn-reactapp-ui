import videoHomePage from '../../assets/video/video-mainheader.mp4'
import '../../assets/scss/homepage.scss';
const HomePage = () => {
    return (
        <div className='homepage-container' >
            <video className='video-header' autoPlay muted loop playsInline>
                <source src={videoHomePage} type='video/mp4'/>
            </video>
            <div className='homepage-content' >
                <div className='title-content_1' >There's a better way to ask</div>
                <div className='title-content_2' >You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</div>
                <div className='title-content_3' >
                    <button>Get started - it's free</button>
                </div>
            </div>
        </div>
    ) 
}
export default HomePage; 