import ReactPlayer from "react-player"

export default function Video({videoUrl}) {
  
    return (
      <ReactPlayer url={videoUrl}
        width={1160}
        height={639} />
    );
  }
   