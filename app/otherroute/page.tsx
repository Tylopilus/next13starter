import { getRandom } from '../../lib/util';
export const revalidate = 0;
const OtherPage = async () => {
  return <div>Other page random: {getRandom()}</div>;
};
export default OtherPage;
