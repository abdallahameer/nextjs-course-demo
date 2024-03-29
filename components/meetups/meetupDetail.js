import classes from "./meetupDetail.module.css"

export default function MeetupDetail({ image, address, title, description }) {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
