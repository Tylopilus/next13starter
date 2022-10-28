export default async function Dadjokes() {
  const joke = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  }).then((res) => res.json());
  return (
    <div>
      <h1>Dad Jokes</h1>
      <p>{joke.joke}</p>
    </div>
  );
}
