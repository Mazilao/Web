import CarouselHome from './carousel/carouselHome';
import MainHome from './mainHome/MainHome';

function Home(){
    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <CarouselHome />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <MainHome />
                </div>
            </div>
        </div>
    )
}

export default Home;
