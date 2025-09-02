import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const{id}=useParams();
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const sol=async()=>{
           const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
           const data=await response.json();
           setLoading(false);
           setUser(data);
        }
       sol();
    },[id])
  return (
    <div>
    {loading?(<div>Loading...</div>):
    (<div>
        <h1>User Details</h1>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
    </div>)}

    </div>
  )
}

export default UserDetails

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const UserDetails = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!user) return <div>User not found</div>;

//   return (
//     <div>
//       <h2>User Details</h2>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Username:</strong> {user.username}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Website:</strong> {user.website}</p>
//     </div>
//   );
// };

// export default UserDetails;
