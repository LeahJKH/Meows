import { useState } from "react";
import PostCard from "../Components/PostCard/Postcard.tsx";
import Searchbar from "../Components/srcbar/SrcBar";
import {PostInfo}  from "../Data/posts.ts";



export function LandingPage() {
  const [searchTerm, setSearchTerm] = useState<string>(""); //this makes so the searchterm will get logged if you enter in words

  const filteredPosts = PostInfo.filter((post: { title: string }) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) //this will remove anything that doesnt include what you searched for
  );

  return (
    <main>

      <Searchbar setSearchTerm={setSearchTerm}></Searchbar>
      {filteredPosts.map( //this goes through all the posts and creates card depending on what searchterm you have
        (post: { id: number; title: string; content: string }) => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        )
      )}
    </main>
  );
}
