import React, {useState,useEffect} from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import database from './firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// add these import ^^


function TinderCards(){
    const [people,setPeople]=useState([
        // {
        //     name:'steve jobs',
        //     url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        // },
        // {
        //     name: 'mark zuckerburg',
        //     url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg'
        // },
    ]);

    //Piece of if else code
useEffect(() => {

    const unsubscribe = database.
    collection('people')
    .onSnapshot((snapshot)=>
        setPeople(snapshot.docs.map(doc=>doc.data())));

        return ()=>
        //cleanup function to clean after listing...
        unsubscribe();
    },
 []);


    // const people=[];
    return(
        <div>
            {/* <h1>Tinder Cards</h1> */}

            <div className="tinderCards__cardContainer">

            {people.map((person)=>(
                <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={['up','down']}
                >
                    <div 
                    style={{backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))};
        </div>
        </div>
        );
};

export default TinderCards;