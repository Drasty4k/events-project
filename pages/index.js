import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import { Fragment } from "react";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Fragment>
      <EventList items={featuredEvents} />
    </Fragment>
  );
}

export default HomePage;
