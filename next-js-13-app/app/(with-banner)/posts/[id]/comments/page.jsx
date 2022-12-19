import Image from "next/image";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // throw new Error("Failed to load comments")
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: "#444", fontSize: "12px" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
            width={50}
            height={50}
          />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
