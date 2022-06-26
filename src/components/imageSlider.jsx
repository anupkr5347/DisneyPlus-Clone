import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Carousel from "carousel";


const ImageSlider = (props)=> {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
    };
    return (
        <Carousel {...settings} >
            <Wrap>
                <a>
                    <img src="/images/image4.PNG" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/imggg.PNG" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/image2.PNG" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/image3.PNG" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/image1.PNG" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/image5.PNG" alt=""/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/image6.PNG" alt=""/>
                </a>
            </Wrap>
            
        </Carousel>
    );
}

const Carousel = styled(Slider)`
    margin-top: 20px;
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;

        }
    }

    ul li button {
        &:before{
            font-size: 15px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list {
        overflow: initial;
    }
    .slick-prev {
    left: -75px;
    }
    .slick-next {
        right: -75px;
    }

`;

const Wrap = styled.div`
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    a{
        box-shadow: rgb(0 0 0/ 69%) 0px 28px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        img{
            width: 100%;
            height:100%
        }
        &:hover{
            padding: 0;
            border: 4px solid white;

        }
    }
`;
export default ImageSlider;