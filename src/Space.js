import React, { useState } from 'react';

// styles
import './components/styles/Space.scss';

// transition
import { CSSTransition } from 'react-transition-group';

// components
import MyInput from './components/UI/input/MyInput.js';
import MyButton from './components/UI/button/MyButton.js';

// images
import menuIcon from './images/Rectangle 26.svg';
import search from './images/search.svg';
import Rooms from './components/Rooms';

function Space() {
    const [showMenu, setShowMenu] = useState(false);
    const [rotateMenuIcon, setRotateMenuIcon] = useState(false);

    const [showModal, setShowModal] = useState(false);


    const [rooms, setRooms] = useState([
        {
            'id': '1',
            'name': 'Room1',
        },
        {
            'id': '2',
            'name': 'Room2',
        },
    ])

    const toggleClass = () => {
        setRotateMenuIcon(!rotateMenuIcon)
    }

    // const showModalWindow = () => {

    // }

    return (
        <main>
            <div className='wrapper'>
                <CSSTransition in={showMenu} timeout={300}
                    classNames={{
                        appear: 'leftside',
                        appearActive: 'left-side-active ',
                        appearDone: 'my-done-appear',
                        enter: 'my-enter',
                        enterActive: 'my-active-enter',
                        enterDone: 'leftside-enter-done',
                        exit: 'my-exit',
                        exitActive: 'my-active-exit',
                        exitDone: 'my-done-exit',
                    }}
                    // classNames="leftside"
                    unmountOnExit>

                    <div className="leftside">
                        <div className="leftside__menu">
                            <div className="search__wrap">
                                <img className="search__img" src={search} alt="Search Icon" />
                                <MyInput style={{ paddingLeft: '35px' }} placeholder="Поиск друзей и комнат" />
                            </div>

                            <Rooms rooms={rooms} />

                            <div className="createRoom__wrap">
                                <MyButton onClick={() => { setShowModal(!showModal) }}>Создать новую комнату</MyButton>
                            </div>
                        </div> </div>

                </CSSTransition>
                <div className={rotateMenuIcon ? "menu__icon active" : "menu__icon"} onClick={() => {
                    setShowMenu(!showMenu); toggleClass();
                }}>
                    <div className="menu__icon__triangle">
                        <img src={menuIcon} alt="Menu Icon" />
                        <div className="menu__icon__lines">
                            <span></span>
                        </div>
                    </div>
                </div>

                {/* modal  */}

                <div className={showModal ? "modal-bg bg-active" : "modal-bg"}>
                    <div className="modal">
                        <div className="modal-container">
                            <h2 className="modal__title">Создать новую комнату</h2>
                            <MyInput style={{ marginBottom: '15px' }} placeholder="Создать новую комнату" />
                            <MyButton>Create</MyButton>
                        </div>
                        <span className="modal__close" onClick={() => { setShowModal(!showModal) }}>X</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Space;