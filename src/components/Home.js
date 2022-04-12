import React, { useEffect } from 'react';
import styled from 'styled-components'
import ImageSlider from './ImageSlider';
import Viewers from './Viewers'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase'
import { setMovies } from '../features/movieSlice'
import { selectUserName } from '../features/userSlice'



const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = []
    let originals = []
    let trending = []





    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                        break;
                    case 'new':
                        // newDisney.push({ id: doc.id, ...doc.data() });
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }]
                        break;
                    case 'original':
                        // originals.push({ id: doc.id, ...doc.data() });
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        break;
                    case 'trending':
                        // trending.push({ id: doc.id, ...doc.data() });
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;
                    default: ;
                }
            })
            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisney,
                    original: originals,
                    trending: trending,

                })
            )
        });
    }, [userName])



    return <div>
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    </div>;
};







const Container = styled.main`
position:relative;
min-height: calc(100vh - 250px);
background-image: url('/images/home-background.png');
overflow:hidden;
display:block;
top: 72px;
padding:0 calc(3.5vw + 5px);

:after{
    content:' ';
    background:url('./images/home-background.png') center center cover no-repeat fixed;
    position:absolute;
    inset:0px;
    opacity:1;
    z-index:-1;
}
`

export default Home;
