import { getRandom } from '../../lib/util';
export const revalidate = 0;
const OtherPage = () => {
  return <div>Other page random: {getRandom()}</div>;
};
export default OtherPage;
