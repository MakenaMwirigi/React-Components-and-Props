function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let minutesEmoji = "";

  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    minutesEmoji = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    minutesEmoji = "🍱".repeat(bentos);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {minutesEmoji} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
