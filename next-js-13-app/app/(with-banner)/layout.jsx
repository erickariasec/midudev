export default function PostsLayout({ children }) {
  return (
    <div>
      <marquee style={{ background: "#fff", color: "purple" }}>
        The best Twitch Channel about programming: @midudev
      </marquee>
      {children}
    </div>
  );
}
