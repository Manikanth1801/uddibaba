import React, { Fragment, useState, useEffect } from 'react';
import firebase from '../firebase';

const Content = () =>{
    const [Bookings, setBookings] = useState([]);
    const [Loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Booking");
    console.log(ref)
    function getBookings(){
        setLoading(true);
        ref.onSnapshot((querrySnaphot)=>{
            const items = [];
            querrySnaphot.forEach((doc)=>{
                items.push(doc.data());
            });
            setBookings(items);
            setLoading(false);
        });
    }
    useEffect(() => {
        getBookings();
    }, []);


    if (Loading){
        return(
            <div>
                <h1>
                    Loading .. . .
                </h1>
            </div>
        );
    }
    
    
    return(
        <Fragment >
            <h1>
                Booking
            </h1>
            {Bookings.map((Booking)=>{
                return(                    

                <div key={Booking.Id}>
                    <h2>
                        {Booking.Id}
                    </h2>
                    {Booking.Name}
                </div>
                );
            })}
        </Fragment>
    );
}
export default Content;
