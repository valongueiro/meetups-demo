import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Gent_Gravensteen_R01.jpg/1920px-Gent_Gravensteen_R01.jpg",
    description: "First Meetup Description",
    address: "Some Address 10, 12345 Some City",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Gent_Gravensteen_R01.jpg/1920px-Gent_Gravensteen_R01.jpg",
    description: "Second Meetup Description",
    address: "Some Address 10, 12345 Another City",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps(context) {
  // Fetch data from an API...
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 60,
  };
}
