import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
export default function NewMeetUpPage() {
  const router = useRouter()
  async function addMeetupHandler(information) {
    const response = await fetch("../api/new-meetup", {
      method: "POST",
      body: JSON.stringify(information) ,
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json()

    console.log(response)
    console.log(data)

    router.push("/")
  }

  return <>
  <Head>
        <title>add you own meetups</title>
        <meta
          name="description"
          content="add your own meet up"
        />
      </Head>
  <NewMeetupForm onAddMeetup={addMeetupHandler} />;
  </>
}
