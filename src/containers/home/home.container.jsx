import React from 'react';
import "./home.scss";
import Card from '../../components/card/card';
import AddCity from '../../components/add-city/add-city';

const Home = (props) => {

    const getCurrentDay = () => {
        return new Date().toLocaleDateString("en-IN", { weekday: "long" });
    };

    return (
        <div className="home">
            <div className="home__today">
                <h1>{getCurrentDay()}</h1>
            </div>

            <div className="home__cards">
                {props.cards.map(card => <Card key={card.id} card={card} />)}
                <div className="home__cards-addcity">
                    <AddCity />
                </div>
            </div>

        </div>
    );
};

export default Home;