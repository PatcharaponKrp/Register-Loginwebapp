import React, { useState, useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import HeaderBar from "./HeaderBar";
import { CssBaseline } from "@mui/material";
const Homepage = () => {
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        setLoading(true);
        try {
          const userRef = collection(db, "users");
          const q = query(userRef, where("email", "==", user.email));
          const querySnapshot = await getDocs(q);
          console.log("Query result:", querySnapshot);
          querySnapshot.forEach((doc) => {
            setUserData(doc.data());
            console.log("User data fetched:", doc.data());
            setFetched(true);
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("No user logged in");
      }
    };

    fetchUserData();
  }, [user]);
  return (
    <>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <HeaderBar />
          <div className="content_body">
            <div className="content_header">
              <h1>account information</h1>
            </div>

            <div className="content_text">
              {loading ? (
                <div className="content_text">Loading user data...</div>
              ) : user ? (
                <div className="content_text">
                  {fetched && (
                    <>
                      <p>
                        Name : {userData.fname} {userData.lname}
                      </p>
                      <p>ID Card : {userData.idcardno}</p>
                      <p>Phonenumber : {userData.phoneno}</p>
                      <p>Gender : {userData.gender}</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="content_text">
                  <h3>Please log in to view this page.</h3>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Homepage;
