import { UsingSsr } from '@templates/UsingSsr';

export default UsingSsr;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return { props: await res.json() };
  } catch (error: unknown) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
