import ReactPlayer from "react-player";
import "./VideoPage.scss";
import { Helmet } from "react-helmet";

export const VideoPage = () => {
  return (
    <>
      <Helmet>
        <title>Videos</title>
        <meta
          name="description"
          content="From mesmerizing underwater footage to stunning travel highlights, visual storytelling at its finest."
        />
      </Helmet>
      <p className="videos-title">videos</p>
      <div className="videos">
        <ReactPlayer
          className="videos__vid"
          url={"https://youtu.be/ngXuZQpUFRw?si=A7n3KSqCytpCIWa5"}
          controls={true}
        />
        <ReactPlayer
          className="videos__vid"
          url={"https://youtu.be/h0_t5AGWs44?si=NpOuIk6Axa0S6W2D"}
          controls={true}
        />

        <ReactPlayer
          className="videos__vid"
          url={"https://youtu.be/szDuSrMvvCY?si=FMPifzaD7hy_9EOm"}
          controls={true}
        />

        <ReactPlayer
          className="videos__vid"
          url={"https://youtu.be/vPFJ1WauS90?si=eOjt46lmOkPCT5J1"}
          controls={true}
        />
        <ReactPlayer
          className="videos__vid"
          url={"https://youtu.be/LIS774-iptA?si=E5Mm9H0ZUqQLO-Ss"}
          controls={true}
        />
        <ReactPlayer className="videos__vid" url={"https://youtu.be/83e0AKPgBxQ"} controls={true} />
        <ReactPlayer
          className="videos__vid"
          url={"https://youtu.be/-QSW__YMuzg?si=xHxaI_KHhVZy0C1D"}
          controls={true}
        />
        <ReactPlayer className="videos__vid" url={"https://youtu.be/BN1a0m5XEpA"} controls={true} />
        <ReactPlayer className="videos__vid" url={"https://youtu.be/IKFkIprY_R8"} controls={true} />
        <ReactPlayer className="videos__vid" url={"https://youtu.be/wNPZjAzwDQE"} controls={true} />
        <ReactPlayer className="videos__vid" url={"https://youtu.be/0lrLXQuhimQ"} controls={true} />
        <ReactPlayer className="videos__vid" url={"https://youtu.be/_AdQ8clfi58"} controls={true} />
        <ReactPlayer className="videos__vid" url={"https://youtu.be/CGcPL9bjsTk"} controls={true} />
        <ReactPlayer className="videos__vid" url={"https://youtu.be/tn5y7_1Fb1o"} controls={true} />
      </div>
    </>
  );
};
