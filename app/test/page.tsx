// export default function MyPage() {

import { getRandom } from '../../lib/util';
export const revalidate = 0;
const MyPage = () => {
  return <div>Test Page Random: {getRandom()}</div>;
};

export default MyPage;
