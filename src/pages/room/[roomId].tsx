import { useState } from "react";
import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";

export default function Room() {
  const router = useRouter();
  const roomId = router.query.roomId as string;
  const { data: room, isLoading } = trpc.room.getRoomById.useQuery({
    id: roomId,
  });

  const [input, setInput] = useState(""); // For the input field
  const [youtubeId, setYoutubeId] = useState(room ? room.url : ""); // For the video ID

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!room) {
    return <div>Room not found</div>;
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Regex to parse YouTube link
    let videoId = input.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    setYoutubeId(videoId); // Set the video ID
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-black">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">We</span>Tube
          </h1>

          {/* Form for input field and submit button */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>

          {youtubeId && (
            <iframe
              width="563"
              height="480"
              src={"https://www.youtube.com/embed/" + youtubeId}
              title="WeTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}
