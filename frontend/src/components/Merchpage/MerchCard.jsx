import React from 'react';
import './merchCard.css';

const Cards = () => {
    const cardData = [
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 1", Details: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididu,nt ut labore et dolore magna aliqua. Ut enim ad minim veniam ", },
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 2", Details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident " },
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 3", Details: "Magna ac placerat vestibulum lectus mauris. Diam volutpat commodo sed egestas egestas. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. " },
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 4", Details: "Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Turpis egestas integer eget aliquet nibh praesent.quis nostrud exercitation ullamco laboris nisi " },
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 5", Details: "Convallis aenean et tortor at risus viverra adipiscing.sunt in culpa qui officia deserunt mollit anim id est laborum ut aliquip ex ea commodo consequat" },
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 6", Details: "Gravida in fermentum et sollicitudin ac orci phasellus egestas. Tempus urna et pharetra pharetra massa massa. Ut porttitor leo a diam sollicitudin. " },
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 7", Details: "Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Sed felis eget velit aliquet sagittis id consectetur purus. Aliquet nec ullamcorper sit amet risus." },
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 8", Details: "In tellus integer feugiat scelerisque. Volutpat odio facilisis mauris sit amet massa vitae. Morbi enim nunc faucibus a pellentesque sit amet. Auctor elit sed vulputate mi sit amet." },
        { image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", Eventname: "Event 9", Details: "Suspendisse interdum consectetur libero id faucibus. Ac ut consequat semper viverra. Rhoncus urna neque viverra justo" },
    ];

    const renderCard = (card, index) => {
        return (
            <div className="col-sm styled-complete-card">
                <div key={index} className='styled-card'>
                    <img src={card.image} className='styled-cardImage' />
                    <div className="styled-card_body">
                        <h5 className="styled-card-title">{card.Eventname}</h5>
                        <p className="styled-card-text">{card.Details}</p>
                    </div>
                    <div className="styled-card_buttons">
                        {/* <button type="button" className=" btn btn-outline cardRegister">Register</button> */}
                        {/* <p>COST HERE</p> */}
                        <div className="cardRegisterNew text-center">Price</div>
                        <button type="button" className='btn btn-outline cardButton'>More Details</button>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="container_card">
            <div className="row">
                {cardData.map(renderCard)}
            </div>
        </div>
    )
}
export default Cards;