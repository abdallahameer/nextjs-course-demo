import Head from "next/head";
import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export default function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="brows all placess to meet you friends"
        />
      </Head>
      <MeetupList meetups={meetups} />;
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://ammar:123@atlascluster.ke0a8pp.mongodb.net/meetups?retryWrites=true&w=majority&appName=AtlasCluster"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}
