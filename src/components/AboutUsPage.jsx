import { BgInternal } from "./Assets";

const EventsPage = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
      }}
    ></div>
  );
};

export default EventsPage;
