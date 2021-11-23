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

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
