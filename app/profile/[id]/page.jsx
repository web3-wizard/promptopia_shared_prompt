"use client";

import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const ProfilePage = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");

  const userId = params.id;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();

      setPosts(data);
      setUsername(data[0].creator.username);
    };

    if (userId) {
      fetchPosts();
    }
  }, []);

  return (
    <Profile
      name={username.toUpperCase()}
      desc={`Welcome to ${username}'s personalized profile page. Explore ${username}'s exceptional prompts and be inspired by the power of their imagination.`}
      data={posts}
    />
  );
};

export default ProfilePage;
