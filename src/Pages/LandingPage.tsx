import { useState } from "react";
import PostCard from "../Components/PostCard/Postcard.tsx";
import Searchbar from "../Components/srcbar/SrcBar";
import {PostInfo}  from "../Data/posts.ts";
import Signup from "../Components/Signup/Signup.tsx";

export function LandingPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPosts = PostInfo.filter((post: { title: string }) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
    <Signup/>
      <Searchbar setSearchTerm={setSearchTerm}></Searchbar>
      {filteredPosts.map((post: { id: number, title: string, content: string }) => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </main>
  );
}