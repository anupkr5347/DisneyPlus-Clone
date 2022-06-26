import styled from "styled-components";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName, setUserLoginDetails, selectUserEmail, selectUserPhoto, setSignOutState } from "../features/user/userSlice";



const Header = (props) => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history("/home");
            }
        })
    }, [userName]);


    const handleAuth = () => {
        if(!userName){

            signInWithPopup(auth, provider).then((result) => {
                console.log(result);
                setUser(result.user);
            }).catch((err) => {
                console.log(err.message);
            });
        } 
        else if(userName){
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                history.push("/");
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        })
        );
    }

    return (
        <Nav>
            <Logo src='/images/logo.svg' >

            </Logo>
            {
                !userName ? <Login onClick={handleAuth} >LOGIN</Login> :
                    <>


                        <NavMenu>
                            <a href="/home">
                                <img src='/images/home-icon.svg' />
                                <span>Home</span>
                            </a>
                            <a href="/search">
                                <img src='/images/search-icon.svg' />
                                <span>Search</span>
                            </a>
                            <a href="/watchlist">
                                <img src='/images/watchlist-icon.svg' />
                                <span>Watchlist</span>
                            </a>
                            <a href="/originals">
                                <img src='/images/original-icon.svg' />
                                <span>Originals</span>
                            </a>
                            <a href="/movies">
                                <img src='/images/movie-icon.svg' />
                                <span>Movies</span>
                            </a>
                            <a href="/series">
                                <img src='/images/series-icon.svg' />
                                <span>Series</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown>
                                <span onClick={handleAuth}>
                                    Sign Out
                                </span>
                            </DropDown>
                        </SignOut>

                    </>
            }

        </Nav>

    );
}

const Login = styled.a`
    background-color: black;
    padding: 8px 16px;
    text-tranform: uppercase;
    letter-spacing: 1.5px;
    border: 6px solid gray;
    border-radius: 9px;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover{
        background-color: #808080;
        color: #000;
    }
`;

const UserImg = styled.img`
    height: 100%;

`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb (19,19,19);
    border: 1px solid grey;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 1px;
    width: 100px;
    opacity: 0;
`;
const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:hover {
    ${DropDown} {
      opacity: 1;
      cursor: pointer;
      transition-duration: 1s;
    }
  }
    
`;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: rgb(7, 0, 51);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px;
    letter-spacing: 15px;
    z-index: 3;
`;
const Logo = styled.img`
    padding: 0;
    margin-top: 4px;
    max-height: 60px;
    width: 100px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`;



const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
            height: 24px;
            min-width: 20px;
            width: 25px;
            z-index: auto;
        }
        span {
            color: rgb(249, 249, 249);
            font-size: 18px;
            letter-spacing: 1.92px;
            line-height: 1.12;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
  /* @media (max-width: 768px) {
    display: none;
  } */


`;



export default Header;