import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails({ image, title, address, description }) {
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  console.log(meetupId);

  // Fetch data from an API...
  return {
    props: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Gent_Gravensteen_R01.jpg/1920px-Gent_Gravensteen_R01.jpg",
      title: "Meetup Title",
      address: "Meetup Address",
      description: "Meetup Description",
    },
  };
}
