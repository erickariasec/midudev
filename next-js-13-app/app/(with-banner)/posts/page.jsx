import { Suspense } from "react";
import { ListOfPosts } from "./LIstOfPosts";

export default function PostsPage({ params }) {
  return (
    <section>
      <Suspense fallback={<p>LOADING POSTS...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  );
}
