import styled from "styled-components";
import ImageSlider from "./imageSlider";
import Viewers from "./Viewers";
import Recommends from "./recommends";
import NewDisney from "./newDisney";
import Originals from "./originals";
import Trending from "./trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { doc, getDoc } from "firebase/firestore";
import { collection, setDoc, onSnapshot , query } from "firebase/firestore";

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        const q = query(collection(db,"movies"));
        onSnapshot(q,(snapshot) => {
            snapshot.forEach((doc) => {
                console.log(recommends);
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;

                    case 'new':
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                        break;

                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;

                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;

                }
            });


            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisney,
                    original: originals,
                    trending: trending,
                })
            );
        });
    }, [userName]);

    return <Container>
        <ImageSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
    </Container>
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &:after{

        background: url('/images/Capture.PNG') center center / cover no-repeat fixed;
        
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 0.4;
        z-index: -1;

    
    }
    
`;

export default Home;