import { cookies, headers } from 'next/headers';
// export default function MyPage() {

import { getRandom } from '../../lib/util';
// export const revalidate = 1;
export default async function Page() {
  const bla = await fetch('https://google.com', { cache: 'no-store' });
  console.log(headers().entries());
  return <div>Test Page Random: {getRandom()}</div>;
}
