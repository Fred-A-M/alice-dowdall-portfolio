export default function VideoEmbed({ video }: { video: string }) {
  
  return (
    <div key="video" className="flex justify-center w-full">
        <div className="max-w-[1100px] w-full aspect-video shadow-xl shadow-black/30">
          <iframe
            src={video}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full"
          />
        </div>
    </div>
  );
}